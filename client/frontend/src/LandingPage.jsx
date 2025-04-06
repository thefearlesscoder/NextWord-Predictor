import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleTryItOut = () => {
    navigate("/predict");
  }; 

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Predict the Next Word with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Our model leverages cutting-edge NLP to anticipate your next word. Try it out and see the future of language AI.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-10 bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full shadow-lg flex items-center gap-2"
          onClick={handleTryItOut} 
        >
          <Sparkles className="w-5 h-5" /> Try It Out
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl shadow-xl bg-gray-100">
            <h3 className="text-xl font-bold mb-2">Context Aware</h3>
            <p>Understands sentence structure to predict the most meaningful next word.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-xl bg-gray-100">
            <h3 className="text-xl font-bold mb-2">Fast & Efficient</h3>
            <p>Instant predictions using optimized transformer models.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-xl bg-gray-100">
            <h3 className="text-xl font-bold mb-2">Built for Developers</h3>
            <p>Easy integration into any app or website with clean API support.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-sm py-6 border-t border-white/20">
        Made with ❤️ by Vishal &mdash; 2025
      </footer>
    </div>
  );
};

export default LandingPage;
