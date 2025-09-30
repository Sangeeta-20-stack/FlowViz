// src/pages/SearchingVisualizer.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { searchingCodes } from "../data/codes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";

const algorithms = [
  { key: "linear", label: "Linear Search" },
  { key: "binary", label: "Binary Search" },
  { key: "jump", label: "Jump Search" },
  { key: "interpolation", label: "Interpolation Search" },
  { key: "exponential", label: "Exponential Search" },
  { key: "ternary", label: "Ternary Search" },
];

const langs = ["java", "python", "cpp", "javascript"];
const blockColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SearchingVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("linear");
  const [selectedLang, setSelectedLang] = useState("java");
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [comparisons, setComparisons] = useState(0);
  const [highlight, setHighlight] = useState({ current: -1, left: -1, right: -1, mid: -1, prev: -1 });

  const generateArray = () => {
    const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 90) + 10);
    setArray(arr);
    setComparisons(0);
    setHighlight({ current: -1, left: -1, right: -1, mid: -1, prev: -1 });
    setTarget(null);
  };

  useEffect(() => generateArray(), []);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // ------------------------ SEARCH FUNCTIONS ------------------------
  const linearSearch = async () => {
    if (target === null) return;
    setIsSearching(true);
    let comp = 0;
    for (let i = 0; i < array.length; i++) {
      comp++;
      setHighlight({ current: i });
      setComparisons(comp);
      await sleep(300);
      if (array[i] === target) break;
    }
    setIsSearching(false);
  };

  const binarySearch = async () => {
    if (target === null) return;
    setIsSearching(true);
    let arr = [...array].sort((a, b) => a - b);
    setArray(arr);
    let left = 0, right = arr.length - 1, comp = 0;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      comp++;
      setHighlight({ left, right, mid });
      setComparisons(comp);
      await sleep(300);
      if (arr[mid] === target) break;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    setIsSearching(false);
  };

  const jumpSearch = async () => {
    if (target === null) return;
    setIsSearching(true);
    let n = array.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;
    let comp = 0;

    while (array[Math.min(step, n) - 1] < target) {
      prev = step;
      step += Math.floor(Math.sqrt(n));
      comp++;
      setHighlight({ current: Math.min(step, n) - 1, prev });
      setComparisons(comp);
      await sleep(300);
      if (prev >= n) { setIsSearching(false); return; }
    }
    for (let i = prev; i < Math.min(step, n); i++) {
      comp++;
      setHighlight({ current: i });
      setComparisons(comp);
      await sleep(300);
      if (array[i] === target) break;
    }
    setIsSearching(false);
  };

  const interpolationSearch = async () => {
    if (target === null) return;
    setIsSearching(true);
    let arr = [...array].sort((a, b) => a - b);
    setArray(arr);
    let low = 0, high = arr.length - 1, comp = 0;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
      let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
      comp++;
      setHighlight({ current: pos, left: low, right: high });
      setComparisons(comp);
      await sleep(300);
      if (arr[pos] === target) break;
      if (arr[pos] < target) low = pos + 1;
      else high = pos - 1;
    }
    setIsSearching(false);
  };

  const exponentialSearch = async () => {
    if (target === null) return;
    setIsSearching(true);
    let arr = [...array].sort((a, b) => a - b);
    setArray(arr);

    if (arr[0] === target) { setHighlight({ current: 0 }); setIsSearching(false); return; }

    let i = 1, comp = 1;
    setComparisons(comp);
    setHighlight({ current: 0 });
    await sleep(300);

    while (i < arr.length && arr[i] <= target) {
      comp++;
      setComparisons(comp);
      setHighlight({ current: i });
      await sleep(300);
      i *= 2;
    }

    let left = Math.floor(i / 2), right = Math.min(i, arr.length - 1);
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      comp++;
      setComparisons(comp);
      setHighlight({ current: mid, left, right });
      await sleep(300);
      if (arr[mid] === target) break;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    setIsSearching(false);
  };

  const ternarySearch = async () => {
    if (target === null) return;
    setIsSearching(true);
    let arr = [...array].sort((a, b) => a - b);
    setArray(arr);

    let l = 0, r = arr.length - 1, comp = 0;

    const search = async (l, r) => {
      if (r >= l) {
        let mid1 = l + Math.floor((r - l) / 3);
        let mid2 = r - Math.floor((r - l) / 3);
        comp++;
        setComparisons(comp);
        setHighlight({ current: mid1 });
        await sleep(300);
        if (arr[mid1] === target) return mid1;
        setHighlight({ current: mid2 });
        await sleep(300);
        if (arr[mid2] === target) return mid2;
        if (target < arr[mid1]) return search(l, mid1 - 1);
        else if (target > arr[mid2]) return search(mid1 + 1, mid2 - 1);
        else return search(mid1 + 1, mid2 - 1);
      }
      return -1;
    };
    await search(l, r);
    setIsSearching(false);
  };

  const searchFunctions = {
    linear: linearSearch,
    binary: binarySearch,
    jump: jumpSearch,
    interpolation: interpolationSearch,
    exponential: exponentialSearch,
    ternary: ternarySearch,
  };
  // -------------------------------------------------------------------

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Searching Algorithms <span className="text-blue-600">Visualizer</span>
          </h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Visualize how search algorithms work step by step. Select an algorithm and programming language to see its code and live demo.
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

        {/* Target Input */}
        <motion.div className="flex justify-center gap-3 mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
          <input
            type="number"
            placeholder="Enter target value"
            className="px-4 py-2 border rounded-lg w-40 text-center"
            value={target ?? ""}
            onChange={(e) => setTarget(Number(e.target.value))}
            disabled={isSearching}
          />
        </motion.div>

        {/* Code Display */}
        <motion.div className="mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <pre className="bg-[#1E1E1E] text-green-400 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
              {searchingCodes[selectedAlgo][selectedLang]}
            </pre>
          </div>
        </motion.div>

        {/* Visualizer */}
        <motion.div className="mb-16" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-[#1A1A1A]">Live Demo</span>
              <span className="text-sm text-gray-500">
                {algorithms.find(a => a.key === selectedAlgo)?.label} · {array.length} elements
              </span>
            </div>

            {/* ✅ Use Search component */}
            <Search array={array} highlight={highlight} blockColors={blockColors} />

            <div className="flex justify-between items-center mt-4 text-sm font-medium">
              <span className="text-green-600">Comparisons: {comparisons}</span>
              <span className="text-red-500">Target: {target ?? "-"}</span>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={generateArray}
                disabled={isSearching}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 shadow"
              >
                Generate
              </button>
              <button
                onClick={() => searchFunctions[selectedAlgo]()}
                disabled={isSearching || target === null}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 shadow"
              >
                Search
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div className="text-center" initial="hidden" animate="visible" variants={fadeInUp}>
          <p className="text-[#555555] text-xl">
            ✨ Learn searching visually and understand every comparison step.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default SearchingVisualizer;
