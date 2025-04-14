import gradio as gr
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Load your model (make sure the path is correct)
model = load_model('my_model')

# Load your tokenizer (same way you loaded it in your notebook)
# For example, you can pickle the tokenizer if it's not loaded directly from a .json file
import pickle
with open('tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

max_sequence_len = 100  # Set the appropriate value

# Define the output function (same as in your notebook)
def output(text):
    seed_text = text
    next_words = 5
    for _ in range(next_words):
        token_list = tokenizer.texts_to_sequences([seed_text])[0]
        token_list = pad_sequences(
            [token_list], maxlen=max_sequence_len - 1, padding="pre"
        )
        predicted = np.argmax(model.predict(token_list), axis=-1)
        output_word = ""
        for word, index in tokenizer.word_index.items():
            if index == predicted:
                output_word = word
                break
        seed_text += " " + output_word
    return seed_text

# Set up Gradio interface
interface = gr.Interface(fn=output, inputs="text", outputs="text")

# Launch Gradio interface
interface.launch()
