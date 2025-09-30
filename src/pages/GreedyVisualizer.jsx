// src/pages/GreedyVisualizer.jsx
import React, { useState } from "react";
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

const gifLinks = {
  fractionalKnapsack: "https://miro.medium.com/v2/resize:fit:1400/1*pUTbOW0WiQGr5HChOgXMwQ.gif",
  activitySelection: "https://iq.opengenus.org/content/images/2019/03/Example1.png",
  jobSequencing: "https://miro.medium.com/1*8-BFChf3zGLfVkOuxTLOeQ.gif",
  coinChangeGreedy: "data:image/png;base64,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",
  kruskalMST: "https://thealgoristsblob.blob.core.windows.net/thealgoristsimages/kruskals-algorithm-anim-1.gif",
  primMST: "https://www.baeldung.com/wp-content/uploads/sites/5/2023/12/prims-1.gif",
  huffmanCoding: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSQNjsH02v93GbeMR5iROgK2SStHCmfoVi_Y3St0fl0IkQJghg72n5gKI58ljrOKegdjoxP_ucPqdkcWce8ipnNRNxKGIf1gviNRunvW1WZFWzD-SfAokddq7Pr5TmrsAySAV9fh3rxZU/s1600/ch013-f013.jpg"
};

const GreedyVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("fractionalKnapsack");
  const [selectedLang, setSelectedLang] = useState("java");

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
            See how greedy algorithms make locally optimal choices step by step. Select an algorithm and programming language to view its code and demo.
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
              {greedyCodes[selectedAlgo]?.[selectedLang] || "// Code not available"}
            </pre>
          </div>
        </motion.div>

        {/* GIF Visualizer */}
        <motion.div className="mb-16" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto flex justify-center">
            <img
              src={gifLinks[selectedAlgo]}
              alt={selectedAlgo}
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default GreedyVisualizer;
