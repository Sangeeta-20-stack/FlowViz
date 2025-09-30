// src/pages/NumberVisualizer.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { numberAlgorithms } from "../data/codes"; // make sure this exists
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const algorithms = [
  { key: "sieve", label: "Sieve of Eratosthenes" },
  { key: "gcd", label: "Euclidean GCD" },
  { key: "extendedGCD", label: "Extended GCD" },
  { key: "modularExp", label: "Modular Exponentiation" },
  { key: "modInverse", label: "Modular Inverse" },
  { key: "totient", label: "Euler's Totient Function" },
  { key: "crt", label: "Chinese Remainder Theorem" },
  { key: "pollardsRho", label: "Pollard's Rho Factorization" },
];


const langs = ["java", "python", "cpp", "javascript"];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const blockColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"];

const NumberVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("sieve");
  const [selectedLang, setSelectedLang] = useState("java");
  const [array, setArray] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [highlight, setHighlight] = useState({ current: -1 });

  const generateArray = () => {
    const arr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 20) + 1);
    setArray(arr);
    setHighlight({ current: -1 });
  };

  useEffect(() => generateArray(), []);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Placeholder Number Theory simulations
  const runNumberDemo = async () => {
    setIsRunning(true);
    alert(`${selectedAlgo} demo coming soon!`);
    setIsRunning(false);
  };

  const numberFunctions = algorithms.reduce((acc, algo) => {
    acc[algo.key] = runNumberDemo;
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Number Theory <span className="text-blue-600">Visualizer</span>
          </h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Visualize common number theory algorithms. Select an algorithm and programming language to view its code and demo.
          </p>
        </motion.div>

        {/* Algorithm Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
          {algorithms.map((algo) => (
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
              {numberAlgorithms[selectedAlgo][selectedLang]}
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
                  style={{ width: "24px", marginBottom: "4px", height: `${value * 10}px` }}
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
                onClick={() => numberFunctions[selectedAlgo]()}
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

export default NumberVisualizer;
