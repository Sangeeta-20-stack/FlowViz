// src/pages/DPVisualizer.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { dpCodes } from "../data/codes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DP from "../components/DP";

const algorithms = [
  { key: "fibonacci", label: "Fibonacci" },
  { key: "knapsack01", label: "0/1 Knapsack" },
  { key: "longestCommonSubsequence", label: "Longest Common Subsequence" },
  { key: "coinChange", label: "Coin Change" },
  { key: "editDistance", label: "Edit Distance" },
  { key: "matrixChainMultiplication", label: "Matrix Chain Multiplication" },
];

const langs = ["java", "python", "cpp", "javascript"];
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DPVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("fibonacci");
  const [selectedLang, setSelectedLang] = useState("java");
  const [inputData, setInputData] = useState(null);
  const [highlightStep, setHighlightStep] = useState({});
  const [isRunning, setIsRunning] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // -------------------- DP ALGO SIMULATIONS --------------------
  const runFibonacci = async () => {
    setIsRunning(true);
    const n = 10;
    const dp = Array(n).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    setInputData({ array: [...dp] });

    for (let i = 2; i < n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
      setHighlightStep({ current: i });
      setInputData({ array: [...dp] });
      await sleep(500);
    }
    setIsRunning(false);
  };

  const runKnapsack01 = async () => {
    setIsRunning(true);
    const values = [60, 100, 120];
    const weights = [10, 20, 30];
    const W = 50;
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

    setInputData({ table: dp.map((row) => [...row]) });

    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= W; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
        } else {
          dp[i][w] = dp[i - 1][w];
        }
        setHighlightStep({ currentRow: i, currentCol: w });
        setInputData({ table: dp.map((row) => [...row]) });
        await sleep(50);
      }
    }
    setIsRunning(false);
  };

  const dpFunctions = {
    fibonacci: runFibonacci,
    knapsack01: runKnapsack01,
    longestCommonSubsequence: async () => {
    setIsRunning(true);

    const str1 = "AGGTAB";
    const str2 = "GXTXAYB";
    const m = str1.length;
    const n = str2.length;

    // Initialize DP table
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    setInputData({ table: dp.map((row) => [...row]) });

    // Fill DP table
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }

        // Highlight current cell
        setHighlightStep({ currentRow: i, currentCol: j, visited: dp.map((row) => row.map(() => true)) });
        setInputData({ table: dp.map((row) => [...row]) });

        await sleep(200); // animation speed
      }
    }

    setIsRunning(false);
  },
  coinChange : async () => {
  setIsRunning(true);
  const coins = [1, 2, 5];
  const amount = 11;
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  setInputData({ coins, amount, dp: [...dp] });

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
    setHighlightStep({ current: i });
    setInputData({ coins, amount, dp: [...dp] });
    await sleep(500);
  }

  setIsRunning(false);
},

    // -------------------- Edit Distance --------------------
  editDistance: async () => {
    setIsRunning(true);
    const str1 = "kitten";
    const str2 = "sitting";
    const m = str1.length;
    const n = str2.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    setInputData({ table: dp.map(row => [...row]), str1, str2 });

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
        setHighlightStep({ currentRow: i, currentCol: j, visited: dp.map(row => row.map(() => true)) });
        setInputData({ table: dp.map(row => [...row]), str1, str2 });
        await sleep(200);
      }
    }
    setIsRunning(false);
  },

  // -------------------- Matrix Chain Multiplication --------------------
  matrixChainMultiplication: async () => {
    setIsRunning(true);
    const dims = [40, 20, 30, 10, 30]; // sample dimensions
    const n = dims.length - 1;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    setInputData({ table: dp.map(row => [...row]), dims });

    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        dp[i][j] = Infinity;
        for (let k = i; k < j; k++) {
          const cost = dp[i][k] + dp[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1];
          if (cost < dp[i][j]) dp[i][j] = cost;
        }
        setHighlightStep({ currentRow: i, currentCol: j, visited: dp.map(row => row.map(() => true)) });
        setInputData({ table: dp.map(row => [...row]), dims });
        await sleep(300);
      }
    }
    setIsRunning(false);
  },

};
  // ----------------------------------------------------------------

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
            Visualize DP algorithms step by step with arrays or tables. Select an algorithm and language to see its code and live demo.
          </p>
        </motion.div>

        {/* Algorithm Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
          {algorithms.map((algo) => (
            <button
              key={algo.key}
              onClick={() => {
                setSelectedAlgo(algo.key);
                setInputData(null);
                setHighlightStep({});
              }}
              className={`px-6 py-2 rounded-full font-semibold transition shadow ${
                selectedAlgo === algo.key
                  ? "bg-blue-600 text-white"
                  : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {algo.label}
            </button>
          ))}
        </motion.div>

        {/* Language Buttons */}
        <motion.div className="flex justify-center gap-3 mb-6" initial="hidden" animate="visible" variants={fadeInUp}>
          {langs.map((lang) => (
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
        <motion.div className="mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <pre className="bg-[#1E1E1E] text-green-400 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
              {dpCodes[selectedAlgo]?.[selectedLang] || "// Code not available"}
            </pre>
          </div>
        </motion.div>

        {/* DP Visualizer */}
        <motion.div className="mb-16" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-[#1A1A1A]">Live Demo</span>
            </div>

            <DP algorithm={selectedAlgo} inputData={inputData} highlightStep={highlightStep} />

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => {
                  setInputData(null);
                  setHighlightStep({});
                }}
                disabled={isRunning}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 shadow"
              >
                Reset
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
