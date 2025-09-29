// src/pages/GreedyVisualizer.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { greedyCodes } from "../data/codes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const algorithms = [
  { key: "fractionalKnapsack", label: "Fractional Knapsack" },
  { key: "activitySelection", label: "Activity Selection" },
  { key: "jobSequencing", label: "Job Sequencing" },
  { key: "coinChangeGreedy", label: "Coin Change (Greedy)" },
  { key: "kruskalMST", label: "Kruskal's MST" },
  { key: "primMST", label: "Prim's MST" },
  { key: "huffmanCoding", label: "Huffman Coding" }
];

const langs = ["java", "python", "cpp", "javascript"];
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const blockColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"];

const GreedyVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("fractionalKnapsack");
  const [selectedLang, setSelectedLang] = useState("java");
  const [items, setItems] = useState([]);
  const [capacity, setCapacity] = useState(50);
  const [isRunning, setIsRunning] = useState(false);
  const [highlight, setHighlight] = useState({ current: -1 });

  // Generate demo items (value, weight)
  const generateItems = () => {
    const arr = Array.from({ length: 6 }, () => ({
      value: Math.floor(Math.random() * 20) + 5,
      weight: Math.floor(Math.random() * 15) + 1,
    }));
    setItems(arr);
    setHighlight({ current: -1 });
  };

  useEffect(() => generateItems(), []);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // ------------------------ GREEDY SIMULATIONS ------------------------
  const runFractionalKnapsack = async () => {
    setIsRunning(true);
    const n = items.length;
    const arr = [...items];
    // sort by value/weight ratio descending
    arr.sort((a, b) => b.value / b.weight - a.value / a.weight);
    let cap = capacity;
    const filled = [];
    for (let i = 0; i < n; i++) {
      setHighlight({ current: i });
      await sleep(500);
      if (arr[i].weight <= cap) {
        filled.push(arr[i]);
        cap -= arr[i].weight;
      } else {
        filled.push({ ...arr[i], weight: cap }); // fraction
        cap = 0;
      }
      setItems([...arr]);
      if (cap === 0) break;
    }
    setIsRunning(false);
  };

  const greedyFunctions = {
    fractionalKnapsack: runFractionalKnapsack,
    activitySelection: async () => alert("Activity Selection visualization coming soon!"),
    jobSequencing: async () => alert("Job Sequencing visualization coming soon!"),
    coinChangeGreedy: async () => alert("Coin Change (Greedy) visualization coming soon!"),
    kruskalMST: async () => alert("Kruskal's MST visualization coming soon!"),
    primMST: async () => alert("Prim's MST visualization coming soon!"),
    huffmanCoding: async () => alert("Huffman Coding visualization coming soon!"),
  };
  // -----------------------------------------------------------------

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Greedy Algorithms <span className="text-blue-600">Visualizer</span>
          </h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Visualize how greedy algorithms make locally optimal choices step by step. Select an algorithm and programming language to see its code and demo.
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
              {greedyCodes[selectedAlgo][selectedLang]}
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
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  animate={{ backgroundColor: idx === highlight.current ? "#EF4444" : blockColors[idx % blockColors.length] }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="rounded-t-xl shadow-md flex flex-col items-center justify-end"
                  style={{ width: "40px", height: `${(item.value / item.weight) * 20}px` }}
                >
                  <span className="text-xs text-center block pt-1">{item.value}/{item.weight}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={generateItems}
                disabled={isRunning}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 shadow"
              >
                Generate
              </button>
              <button
                onClick={() => greedyFunctions[selectedAlgo]()}
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

export default GreedyVisualizer;
