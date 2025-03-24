from flask import Flask, request, jsonify
import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the model and tokenizer
model = tf.keras.models.load_model("RNN and LSTM/my_model.h5")
with open("RNN and LSTM/tokenizer.pickle", "rb") as handle:
    tokenizer = pickle.load(handle)

max_sequence_len = 50  # Adjust based on your training

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    seed_text = data.get("text", "")
    next_words = data.get("next_words", 5)

    if not seed_text:
        return jsonify({"error": "No input text provided"}), 400

    try:
        for _ in range(next_words):
            token_list = tokenizer.texts_to_sequences([seed_text])[0]
            token_list = pad_sequences(
                [token_list], maxlen=max_sequence_len - 1, padding="pre"
            )
            predicted = tf.argmax(model.predict(token_list), axis=-1).numpy()[0]
            output_word = ""
            for word, index in tokenizer.word_index.items():
                if index == predicted:
                    output_word = word
                    break
            seed_text += " " + output_word

        return jsonify({"prediction": seed_text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)