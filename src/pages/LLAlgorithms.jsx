// src/pages/LLAlgorithms.jsx
import React, { useState } from "react";
import { linkedListAlgorithms } from "../data/codes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const algorithms = [
  { key: "insertAtHead", label: "Insertion at Head" },
  { key: "insertAtTail", label: "Insertion at Tail" },
  { key: "insertAtPosition", label: "Insertion at Given Position" },
  { key: "deleteHead", label: "Deletion at Head" },
  { key: "deleteTail", label: "Deletion at Tail" },
  { key: "deleteAtPosition", label: "Deletion at Given Position" },
  { key: "search", label: "Search for an Element" },
  { key: "reverseIterative", label: "Reverse Linked List (Iterative)" },
  { key: "reverseRecursive", label: "Reverse Linked List (Recursive)" },
  { key: "detectCycle", label: "Detect Cycle (Floyd’s)" },
  { key: "removeDuplicatesSorted", label: "Remove Duplicates" },
  { key: "findMiddle", label: "Find Middle Node" },
  { key: "nthFromEnd", label: "Find Nth Node from End" },
  { key: "mergeSorted", label: "Merge Two Sorted Lists" },
  { key: "isPalindrome", label: "Check if Palindrome" },
  { key: "dllInsertHead", label: "Doubly Linked List Insert Head" },
  { key: "dllInsertTail", label: "Doubly Linked List Insert Tail" },
  { key: "dllDelete", label: "Doubly Linked List Delete" },
  { key: "cllInsert", label: "Circular Linked List Insert" },
  { key: "cllDelete", label: "Circular Linked List Delete" },
  { key: "stackPush", label: "Stack Push (Linked List)" },
  { key: "stackPop", label: "Stack Pop (Linked List)" },
  { key: "queueEnqueue", label: "Queue Enqueue (Linked List)" },
  { key: "queueDequeue", label: "Queue Dequeue (Linked List)" },
  { key: "xorInsertHead", label: "XOR Linked List Insert Head" },
];

const langs = ["java", "python", "cpp", "javascript"];

const LLAlgorithms = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("insertHead");
  const [selectedLang, setSelectedLang] = useState("java");

  const codeSource = { ...linkedListAlgorithms };

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Linked List <span className="text-blue-600">Visualizer</span>
          </h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Browse classic linked list problems and algorithms. Select an algorithm and language to view the code.
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

export default LLAlgorithms;
