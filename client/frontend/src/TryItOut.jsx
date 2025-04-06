import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Chrome } from "lucide-react";

const TryItOutPage = () => {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white flex flex-col">
      {/* Header */}
      <header className="text-center py-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🔮 Try Our Next Word Predictor
        </motion.h1>
        <p className="mt-4 text-lg opacity-90">
          Type a sentence and let our model predict what's next!
        </p>
      </header>

      {/* Input Box */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <motion.div
          className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
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
            onClick={() => alert("Prediction would happen here")}
          >
            Predict Next Word
          </motion.button>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-white/20 bg-white/10 backdrop-blur-sm">
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
