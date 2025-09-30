// src/pages/StackVisualizer.jsx
import React, { useState } from "react";
import { stackCodes} from "../data/codes"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const algorithms = [
  { key: "stackArray", label: "Stack using Array" },
  { key: "stackLinkedList", label: "Stack using Linked List" },
  { key: "twoStacksArray", label: "Two Stacks in One Array" },
  { key: "celebrityProblem", label: "Celebrity Problem" },
  { key: "evaluatePostfix", label: "Evaluate Postfix" },
  { key: "infixToPostfix", label: "Infix → Postfix" },
  { key: "minStack", label: "Min Stack" },
  { key: "sortStackRecursion", label: "Sort Stack (Recursion)" },
  { key: "reverseStack", label: "Reverse Stack" },
{ key: "stackUsingQueues", label: "Stack using Queue" },
  { key: "queueUsingStacks", label: "Queue using Stack" },
  { key: "balancedParentheses", label: "Balanced Parantheses" },
  { key: "nextGreaterElement", label: "Next Greater Element (NGE)" },
  { key: "nextSmallerElement", label: "Next Smaller Element (NSE)" },
  { key: "stockSpan", label: "Stock Span Problem" },

  { key: "reverseStack", label: "Reverse a Stack" },
];

const langs = ["java", "python", "cpp", "javascript"];

const StackVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("stackArray");
  const [selectedLang, setSelectedLang] = useState("java");

  const codeSource = { ...stackCodes };

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Stack <span className="text-blue-600">Visualizer</span>
          </h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Browse classic stack problems and algorithms. Select an algorithm and language to view the code.
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

export default StackVisualizer;
