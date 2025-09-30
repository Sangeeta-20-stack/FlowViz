// src/pages/HeapAlgorithms.jsx
import React, { useState } from "react";
import { heapCodes } from "../data/codes"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const algorithms = [
  { key: "insertHeap", label: "Insert into Heap (Min/Max Heap)" },
  { key: "deleteHeap", label: "Delete from Heap (Remove Root)" },
  { key: "heapify", label: "Heapify (Up / Down)" },
  { key: "buildHeap", label: "Build Heap from Array" },
  { key: "peekHeap", label: "Peek / Get Top Element" },
];

const langs = ["java", "python"];

const HeapAlgorithms = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("insertHeap");
  const [selectedLang, setSelectedLang] = useState("java");

  const codeSource = { ...heapCodes };

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Heap <span className="text-blue-600">Algorithms</span>
          </h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Explore common Heap operations. Select an operation and language to view the code.
          </p>
        </div>

        {/* Algorithm Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {algorithms.map((algo) => (
            <button
              key={algo.key}
              onClick={() => setSelectedAlgo(algo.key)}
              className={`px-6 py-2 rounded-full font-semibold transition shadow ${
                selectedAlgo === algo.key
                  ? "bg-blue-600 text-white"
                  : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {algo.label}
            </button>
          ))}
        </div>

        {/* Language Buttons */}
        <div className="flex justify-center gap-3 mb-6">
          {langs.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-5 py-2 rounded-full font-semibold transition shadow ${
                selectedLang === lang
                  ? "bg-gray-800 text-white"
                  : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <pre className="bg-[#1E1E1E] text-green-400 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
              {codeSource[selectedAlgo]?.[selectedLang] || "// Code not available in this language"}
            </pre>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HeapAlgorithms;
