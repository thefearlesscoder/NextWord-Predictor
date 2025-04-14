import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Chrome } from "lucide-react";
import { Client } from "@gradio/client";

const TryItOutPage = () => {
  const [text, setText] = useState("");
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const predictNextWord = async () => {
    if (!text.trim()) {
      setError("Please enter some text first");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Connect to your Hugging Face Space
      const client = await Client.connect("vivekanandpdy732/nextword");
      
      // Make prediction using the /predict i am using it after seeing API documentation
      const result = await client.predict("/predict", {
        text: text,
      });
      
      setPrediction(result.data);
      setLoading(false);
    } catch (err) {
      console.error("Prediction error:", err);
      setError("Failed to get prediction. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 text-white px-4 py-10">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">🔮 Try Our Next Word Predictor</h1>
        <p className="text-xl opacity-80">
          Type a sentence and let our model predict what's next!
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
        >
          {/* Input Box */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing here..."
            className="w-full h-32 p-4 text-lg text-black rounded-md outline-none resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-md hover:shadow-lg transition"
            onClick={predictNextWord}
            disabled={loading}
          >
            {loading ? "Predicting..." : "Predict Next Word"}
          </motion.button>

          {/* Error message */}
          {error && (
            <p className="mt-3 text-red-300 text-sm">{error}</p>
          )}

          {/* Prediction result */}
          {prediction && (
            <div className="mt-6 p-4 bg-white/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Prediction:</h3>
              <p className="text-xl">{prediction}</p>
            </div>
          )}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-white/20 bg-white/10 backdrop-blur-sm mt-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-3">
          <a
            href="https://github.com/thefearlesscoder/NextWord-Predictor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>

          <a
            href="https://chrome.google.com/webstore/detail/your-extension-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            <Chrome className="w-5 h-5" />
            Add to Chrome Extension
          </a>
        </div>

        <p className="text-sm opacity-70">© 2025 Made with 💙 by Your Team</p>
      </footer>
    </div>
  );
};

export default TryItOutPage;