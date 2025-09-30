// src/pages/DPVisualizer.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { dpCodes } from "../data/codes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const algorithms = [
  { key: "fibonacci", label: "Fibonacci" },
  { key: "knapsack01", label: "0/1 Knapsack" },
  { key: "longestCommonSubsequence", label: "Longest Common Subsequence" },
  { key: "coinChange", label: "Coin Change" },
  { key: "editDistance", label: "Edit Distance" },
  { key: "matrixChainMultiplication", label: "Matrix Chain Multiplication" }
];

const langs = ["java", "python", "cpp", "javascript"];
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const blockColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"];

const DPVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("fibonacci");
  const [selectedLang, setSelectedLang] = useState("java");
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [highlight, setHighlight] = useState({ current: -1 });

  // Generate demo array (for algorithms like Fibonacci, Knapsack)
  const generateArray = () => {
    const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);
    setArray(arr);
    setTarget(null);
    setHighlight({ current: -1 });
  };

  useEffect(() => generateArray(), []);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // ------------------------ DP SIMULATIONS ------------------------
  const runFibonacci = async () => {
    setIsRunning(true);
    const n = array.length;
    const dp = Array(n).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i < n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
      setHighlight({ current: i });
      setArray([...dp]);
      await sleep(300);
    }
    setIsRunning(false);
  };

  const dpFunctions = {
    fibonacci: runFibonacci,
    knapsack01: async () => alert("Knapsack visualization coming soon!"),
    longestCommonSubsequence: async () => alert("LCS visualization coming soon!"),
    coinChange: async () => alert("Coin Change visualization coming soon!"),
    editDistance: async () => alert("Edit Distance visualization coming soon!"),
  };
  // -----------------------------------------------------------------

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Dynamic Programming <span className="text-blue-600">Visualizer</span>
          </h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Visualize how dynamic programming algorithms compute solutions step by step. Select an algorithm and programming language to see its code and demo.
          </p>
        </motion.div>

        {/* Algorithm Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
          {algorithms.map(algo => (
            <button
              key={algo.key}
              onClick={() => setSelectedAlgo(algo.key)}
              className={`px-6 py-2 rounded-full font-semibold transition shadow ${selectedAlgo === algo.key ? "bg-blue-600 text-white" : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"}`}
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
              className={`px-5 py-2 rounded-full font-semibold transition shadow ${selectedLang === lang ? "bg-gray-800 text-white" : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"}`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Code Display */}
        <motion.div className="mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <pre className="bg-[#1E1E1E] text-green-400 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
              {dpCodes[selectedAlgo][selectedLang]}
            </pre>
          </div>
        </motion.div>

        {/* Visualizer */}
        <motion.div className="mb-16" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-[#1A1A1A]">Live Demo</span>
            </div>

            <div className="flex items-end justify-center h-96 gap-2 bg-gray-50 rounded-xl p-6 overflow-hidden">
              {array.map((value, idx) => (
                <motion.div
                  key={idx}
                  animate={{ backgroundColor: idx === highlight.current ? "#EF4444" : blockColors[idx % blockColors.length] }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="rounded-t-xl shadow-md"
                  style={{ width: "24px", marginBottom: "4px", height: `${value * 20}px` }}
                >
                  <span className="text-xs text-center block pt-1">{value}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={generateArray}
                disabled={isRunning}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 shadow"
              >
                Generate
              </button>
              <button
                onClick={() => dpFunctions[selectedAlgo]()}
                disabled={isRunning}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 shadow"
              >
                Run
              </button>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default DPVisualizer;
