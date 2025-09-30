// src/pages/HashingVisualizer.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hashingAlgorithms } from "../data/codes"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const algorithms = [
  { key: "hashTableChaining", label: "Hash Table (Chaining)" },
  { key: "hashTableOpenAddressing", label: "Hash Table (Open Addressing)" },
  { key: "rollingHash", label: "Rolling Hash / Rabin-Karp" },
  { key: "setMapOps", label: "Set / Map Operations" },
];

const langs = ["java", "python", "cpp", "javascript"];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const blockColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"];

// GIF links for hashing algorithms


const HashingVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("hashTableChaining");
  const [selectedLang, setSelectedLang] = useState("java");
  const [array, setArray] = useState([]);

  const generateArray = () => {
    const arr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 20) + 1);
    setArray(arr);
  };

  useEffect(() => generateArray(), []);

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Hashing <span className="text-blue-600">Visualizer</span>
          </h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Visualize common hashing algorithms in data structures. Select an algorithm and programming language to view its code and demo.
          </p>
        </motion.div>

        {/* Algorithm Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
          {algorithms.map((algo) => (
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
          {langs.map((lang) => (
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
              {hashingAlgorithms[selectedAlgo]?.[selectedLang] || "// Code not available"}
            </pre>
          </div>
        </motion.div>

       

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={generateArray}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 shadow"
          >
            Generate
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HashingVisualizer;
