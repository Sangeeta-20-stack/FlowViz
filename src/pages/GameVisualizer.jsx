// src/pages/GameVisualizer.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { gameCodes } from "../data/codes"; // make sure these algorithms exist here
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const algorithms = [
  { key: "aStar", label: "A* Search" },
  { key: "bfs", label: "Breadth-First Search" },
  { key: "dfs", label: "Depth-First Search" },
  { key: "minimax", label: "Minimax" },
  { key: "alphaBeta", label: "Alpha-Beta Pruning" },
  { key: "monteCarlo", label: "Monte Carlo Tree Search" },
  { key: "bestFirst", label: "Best-First Search" },
  { key: "hillClimbing", label: "Hill Climbing" },
];

const langs = ["java", "python", "cpp", "javascript"];
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const GameVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("aStar");
  const [selectedLang, setSelectedLang] = useState("java");

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Game Search <span className="text-blue-600">Visualizer</span>
          </h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Explore and visualize game search and pathfinding algorithms. Select an algorithm and language to see the code.
          </p>
        </motion.div>

        {/* Algorithm Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
          {algorithms.map(algo => (
            <button
              key={algo.key}
              onClick={() => setSelectedAlgo(algo.key)}
              className={`px-6 py-2 rounded-full font-semibold transition shadow ${
                selectedAlgo === algo.key ? "bg-blue-600 text-white" : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {algo.label}
            </button>
          ))}
        </motion.div>

        {/* Language Buttons */}
        <motion.div className="flex justify-center gap-3 mb-6" initial="hidden" animate="visible" variants={fadeInUp}>
          {langs.map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-5 py-2 rounded-full font-semibold transition shadow ${
                selectedLang === lang ? "bg-gray-800 text-white" : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Code Display */}
        <motion.div className="mb-16" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <pre className="bg-[#1E1E1E] text-green-400 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
              {gameCodes[selectedAlgo][selectedLang]}
            </pre>
          </div>
        </motion.div>

     
      </section>
      <Footer />
    </>
  );
};

export default GameVisualizer;
