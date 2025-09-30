// src/pages/SortingVisualizer.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sortingCodes } from "../data/codes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sort from "../components/Sort"; 

const algorithms = [
  { key: "bubble", label: "Bubble Sort" },
  { key: "selection", label: "Selection Sort" },
  { key: "insertion", label: "Insertion Sort" },
  { key: "merge", label: "Merge Sort" },
  { key: "quick", label: "Quick Sort" },
  { key: "heap", label: "Heap Sort" },
  { key: "counting", label: "Counting Sort" },
  { key: "bucket", label: "Bucket Sort" },
  { key: "shell", label: "Shell Sort" },
  { key: "tim", label: "Tim Sort" },
  { key: "intro", label: "Intro Sort" },
];

const langs = ["java", "python", "cpp", "javascript"];

const barColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SortingVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("bubble");
  const [selectedLang, setSelectedLang] = useState("java");
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [pass, setPass] = useState(0);

  const generateArray = () => {
    const arr = Array.from({ length: 12 }, () => Math.floor(Math.random() * 80) + 20);
    setArray(arr);
    setComparisons(0);
    setSwaps(0);
    setPass(0);
  };

  useEffect(() => generateArray(), []);

  // ------------------------ SORTING FUNCTIONS ------------------------
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let comp = 0, swp = 0;
    for (let i = 0; i < arr.length; i++) {
      setPass(i + 1);
      for (let j = 0; j < arr.length - i - 1; j++) {
        comp++;
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swp++;
          setArray([...arr]);
          setComparisons(comp);
          setSwaps(swp);
          await sleep(150);
        }
      }
    }
    setIsSorting(false);
  };

  const selectionSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let comp = 0, swp = 0;
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        comp++;
        if (arr[j] < arr[minIdx]) minIdx = j;
        setComparisons(comp);
        await sleep(100);
      }
      if (i !== minIdx) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        swp++;
        setArray([...arr]);
        setSwaps(swp);
        await sleep(150);
      }
      setPass(i + 1);
    }
    setIsSorting(false);
  };

  const insertionSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let comp = 0, swp = 0;
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        comp++;
        arr[j + 1] = arr[j];
        swp++;
        setArray([...arr]);
        setComparisons(comp);
        setSwaps(swp);
        j--;
        await sleep(150);
      }
      arr[j + 1] = key;
      setPass(i);
    }
    setIsSorting(false);
  };

  const mergeSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let comp = 0, swp = 0;

    const merge = async (l, m, r) => {
      const n1 = m - l + 1;
      const n2 = r - m;
      let L = arr.slice(l, m + 1);
      let R = arr.slice(m + 1, r + 1);
      let i = 0, j = 0, k = l;
      while (i < n1 && j < n2) {
        comp++;
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
        swp++;
        setArray([...arr]);
        setComparisons(comp);
        setSwaps(swp);
        await sleep(150);
      }
      while (i < n1) arr[k++] = L[i++];
      while (j < n2) arr[k++] = R[j++];
      setArray([...arr]);
    };

    const mergeSortRecursive = async (l, r) => {
      if (l < r) {
        const m = Math.floor((l + r) / 2);
        await mergeSortRecursive(l, m);
        await mergeSortRecursive(m + 1, r);
        await merge(l, m, r);
        setPass(r - l + 1);
      }
    };

    await mergeSortRecursive(0, arr.length - 1);
    setIsSorting(false);
  };

  const quickSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let comp = 0, swp = 0;

    const partition = async (low, high) => {
      let pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        comp++;
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          swp++;
          setArray([...arr]);
          setSwaps(swp);
          await sleep(150);
        }
        setComparisons(comp);
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      swp++;
      setArray([...arr]);
      setSwaps(swp);
      await sleep(150);
      return i + 1;
    };

    const quickSortRecursive = async (low, high) => {
      if (low < high) {
        const pi = await partition(low, high);
        await quickSortRecursive(low, pi - 1);
        await quickSortRecursive(pi + 1, high);
        setPass(high - low + 1);
      }
    };

    await quickSortRecursive(0, arr.length - 1);
    setIsSorting(false);
  };

  const heapSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let n = arr.length;
    let comp = 0, swp = 0;

    const heapify = async (n, i) => {
      let largest = i;
      let l = 2 * i + 1;
      let r = 2 * i + 2;

      if (l < n && arr[l] > arr[largest]) largest = l;
      if (r < n && arr[r] > arr[largest]) largest = r;

      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        swp++;
        setArray([...arr]);
        setSwaps(swp);
        await heapify(n, largest);
      }
    };

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) await heapify(n, i);

    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      swp++;
      setArray([...arr]);
      setSwaps(swp);
      await heapify(i, 0);
      setPass(n - i);
    }

    setIsSorting(false);
  };
  const timSort = async () => {
  setIsSorting(true);
  let arr = [...array];
  let comp = 0, swp = 0;
  const RUN = 4; // small run size for demo
  const n = arr.length;

  // Insertion sort on small runs
  const insertionSortRun = async (left, right) => {
    for (let i = left + 1; i <= right; i++) {
      let temp = arr[i];
      let j = i - 1;
      while (j >= left && arr[j] > temp) {
        comp++;
        arr[j + 1] = arr[j];
        j--;
        swp++;
        setArray([...arr]);
        setComparisons(comp);
        setSwaps(swp);
        await new Promise(r => setTimeout(r, 100));
      }
      arr[j + 1] = temp;
      setArray([...arr]);
      await new Promise(r => setTimeout(r, 100));
    }
  };

  // Merge function
  const merge = async (l, m, r) => {
    let left = arr.slice(l, m + 1);
    let right = arr.slice(m + 1, r + 1);
    let i = 0, j = 0, k = l;
    while (i < left.length && j < right.length) {
      comp++;
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
        swp++;
      }
      setArray([...arr]);
      setComparisons(comp);
      setSwaps(swp);
      await new Promise(r => setTimeout(r, 100));
    }
    while (i < left.length) arr[k++] = left[i++];
    while (j < right.length) arr[k++] = right[j++];
    setArray([...arr]);
    await new Promise(r => setTimeout(r, 100));
  };

  // Step 1: sort small runs
  for (let i = 0; i < n; i += RUN) {
    await insertionSortRun(i, Math.min(i + RUN - 1, n - 1));
  }

  // Step 2: merge runs
  for (let size = RUN; size < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = Math.min(left + size - 1, n - 1);
      const right = Math.min(left + 2 * size - 1, n - 1);
      if (mid < right) await merge(left, mid, right);
      setPass(size);
    }
  }

  setIsSorting(false);
};


const introSort = async () => {
  setIsSorting(true);
  let arr = [...array];
  let comp = 0, swp = 0;

  const insertionSort = async (l, r) => {
    for (let i = l + 1; i <= r; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= l && arr[j] > key) {
        comp++;
        arr[j + 1] = arr[j];
        j--;
        swp++;
        setArray([...arr]);
        setComparisons(comp);
        setSwaps(swp);
        await new Promise(r => setTimeout(r, 100));
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await new Promise(r => setTimeout(r, 100));
    }
  };

  const heapify = async (n, i) => {
    let largest = i, l = 2 * i + 1, r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      swp++;
      setArray([...arr]);
      setSwaps(swp);
      await heapify(n, largest);
    }
  };

  const heapSort = async (n) => {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) await heapify(n, i);
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      swp++;
      setArray([...arr]);
      setSwaps(swp);
      await heapify(i, 0);
    }
  };

  const quickIntro = async (l, r, depthLimit) => {
    if (r - l <= 10) {
      await insertionSort(l, r);
      return;
    }
    if (depthLimit === 0) {
      await heapSort(r - l + 1);
      return;
    }
    const pivot = arr[r];
    let i = l;
    for (let j = l; j < r; j++) {
      comp++;
      if (arr[j] <= pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swp++;
        i++;
        setArray([...arr]);
        setComparisons(comp);
        setSwaps(swp);
        await new Promise(r => setTimeout(r, 100));
      }
    }
    [arr[i], arr[r]] = [arr[r], arr[i]];
    swp++;
    setArray([...arr]);
    setSwaps(swp);
    await quickIntro(l, i - 1, depthLimit - 1);
    await quickIntro(i + 1, r, depthLimit - 1);
  };

  await quickIntro(0, arr.length - 1, 2 * Math.floor(Math.log2(arr.length)));
  setIsSorting(false);
};
const bucketSort = async () => {
  setIsSorting(true);
  let arr = [...array];
  let comp = 0, swp = 0;
  const n = arr.length;
  const buckets = Array.from({ length: n }, () => []);

  const maxVal = Math.max(...arr);

  // Distribute into buckets
  for (let i = 0; i < n; i++) {
    const idx = Math.floor((arr[i] / (maxVal + 1)) * n);
    buckets[idx].push(arr[i]);
    comp++;
    setComparisons(comp);
    await new Promise(r => setTimeout(r, 50));
  }

  // Sort individual buckets and merge
  let idx = 0;
  for (let b = 0; b < n; b++) {
    buckets[b].sort((a, b) => a - b); // simple JS sort for small bucket
    for (let val of buckets[b]) {
      arr[idx++] = val;
      swp++;
      setArray([...arr]);
      setSwaps(swp);
      await new Promise(r => setTimeout(r, 100));
    }
  }

  setIsSorting(false);
};
const shellSort = async () => {
  setIsSorting(true);
  let arr = [...array];
  let comp = 0, swp = 0;
  const n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        comp++;
        arr[j] = arr[j - gap];
        j -= gap;
        swp++;
        setArray([...arr]);
        setComparisons(comp);
        setSwaps(swp);
        await new Promise(r => setTimeout(r, 100));
      }
      arr[j] = temp;
      setArray([...arr]);
      await new Promise(r => setTimeout(r, 100));
    }
    setPass(n - gap); // just to show progress
  }

  setIsSorting(false);
};
const countingSort = async () => {
  setIsSorting(true);
  let arr = [...array];
  let comp = 0, swp = 0;
  const n = arr.length;
  const maxVal = Math.max(...arr);
  const count = Array(maxVal + 1).fill(0);

  // Count occurrences
  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
    comp++;
    setComparisons(comp);
    await new Promise(r => setTimeout(r, 50));
  }

  // Rebuild array
  let idx = 0;
  for (let i = 0; i <= maxVal; i++) {
    while (count[i] > 0) {
      arr[idx++] = i;
      swp++;
      count[i]--;
      setArray([...arr]);
      setSwaps(swp);
      await new Promise(r => setTimeout(r, 100));
    }
  }

  setIsSorting(false);
};


  
  

  const sortFunctions = {
    bubble: bubbleSort,
    selection: selectionSort,
    insertion: insertionSort,
    merge: mergeSort,
    quick: quickSort,
    heap: heapSort,
    counting: countingSort,
    bucket: bucketSort,
    shell: shellSort,
    tim: timSort,
    intro: introSort,
  };
  // -------------------------------------------------------------------

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Sorting Algorithms <span className="text-blue-600">Visualizer</span>
          </h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Explore and visualize sorting algorithms step by step. Select an algorithm and programming language to see its code and live demo.
          </p>
        </motion.div>

        {/* Algorithm Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
          {algorithms.map(algo => (
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
        </motion.div>

        {/* Language Buttons */}
        <motion.div className="flex justify-center gap-3 mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          {langs.map(lang => (
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
        </motion.div>

        {/* Code Display */}
        <motion.div className="mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <pre className="bg-[#1E1E1E] text-green-400 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
              {sortingCodes[selectedAlgo][selectedLang]}
            </pre>
          </div>
        </motion.div>

        {/* Visualizer */}
        <motion.div className="mb-16" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-[#1A1A1A]">Live Demo</span>
              <span className="text-sm text-gray-500">
                {algorithms.find(a => a.key === selectedAlgo)?.label} · {array.length} bars
              </span>
            </div>

            {/* ✅ replaced inline bars with Sort component */}
            <Sort array={array} />

            <div className="flex justify-between items-center mt-4 text-sm font-medium">
              <span className="text-gray-600">Pass {pass}</span>
              <span className="text-green-600">Comparisons: {comparisons}</span>
              <span className="text-red-500">Swaps: {swaps}</span>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={generateArray}
                disabled={isSorting}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 shadow"
              >
                Generate
              </button>
              <button
                onClick={() => sortFunctions[selectedAlgo]()}
                disabled={isSorting}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 shadow"
              >
                Sort
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div className="text-center" initial="hidden" animate="visible" variants={fadeInUp}>
          <p className="text-[#555555] text-xl">✨ Learn sorting visually and understand every comparison and swap.</p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default SortingVisualizer;