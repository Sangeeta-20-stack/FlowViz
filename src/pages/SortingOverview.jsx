// src/pages/SortingOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SortingOverview = () => {
  const algorithms = [
    {
      name: "Bubble Sort",
      desc: "A simple comparison-based algorithm that repeatedly swaps adjacent elements if they are in the wrong order.",
      time: "O(n²)",
      space: "O(1)",
      notes: "Not efficient for large datasets, mainly used for educational purposes.",
      diagram: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif",
    },
    {
      name: "Selection Sort",
      desc: "Divides the list into a sorted and unsorted region, repeatedly selecting the smallest element from the unsorted region.",
      time: "O(n²)",
      space: "O(1)",
      notes: "Performs fewer swaps than bubble sort, but still inefficient on large lists.",
      diagram: "https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif",
    },
    {
      name: "Insertion Sort",
      desc: "Builds the final sorted array one item at a time, inserting elements into their correct position.",
      time: "O(n²), Best: O(n)",
      space: "O(1)",
      notes: "Efficient for small datasets and nearly sorted arrays.",
      diagram: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif",
    },
    {
      name: "Merge Sort",
      desc: "A divide-and-conquer algorithm that splits the list into halves, recursively sorts, and merges them.",
      time: "O(n log n)",
      space: "O(n)",
      notes: "Stable sorting algorithm, preferred for linked lists and large datasets.",
      diagram: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif",
    },
    {
      name: "Quick Sort",
      desc: "Divides and conquers using a pivot element to partition the array into two halves.",
      time: "O(n log n), Worst: O(n²)",
      space: "O(log n)",
      notes: "Faster in practice but performance depends on pivot selection.",
      diagram: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif",
    },
    {
      name: "Heap Sort",
      desc: "Uses a binary heap to repeatedly extract the maximum element and rebuild the heap.",
      time: "O(n log n)",
      space: "O(1)",
      notes: "In-place sorting, but not stable.",
      diagram: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Heap_sort_example.gif",
    },
    {
      name: "Counting Sort",
      desc: "Counts occurrences of elements and calculates positions.",
      time: "O(n + k)",
      space: "O(k)",
      notes: "Efficient for small integer ranges, not comparison-based.",
      diagram: "https://upload.wikimedia.org/wikipedia/commons/d/d6/CountingSort.gif",
    },
    {
      name: "Radix Sort",
      desc: "Sorts numbers digit by digit using counting sort as subroutine.",
      time: "O(d*(n+k))",
      space: "O(n+k)",
      notes: "Non-comparison based, good for fixed-length integers.",
      diagram: "https://www.codingeek.com/wp-content/uploads/2017/02/radix.png",
    },
    {
      name: "Bucket Sort",
      desc: "Distributes elements into buckets, sorts each bucket, and merges.",
      time: "O(n+k)",
      space: "O(n+k)",
      notes: "Efficient for uniformly distributed data.",
     diagram: "https://files.codingninjas.in/article_images/bucket-sort-1-1676540582.webp",
     // diagram: "https://makeagif.com/gif/bucket-sort-UqfTv7",
    },
    {
      name: "Shell Sort",
      desc: "Generalization of insertion sort with decreasing gaps.",
      time: "O(n log² n)",
      space: "O(1)",
      notes: "Improves over insertion sort for larger datasets.",
      diagram: "data:image/png;base64,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",
    },
    {
      name: "Tim Sort",
      desc: "Hybrid of merge sort and insertion sort, adaptive.",
      time: "O(n log n)",
      space: "O(n)",
      notes: "Used in Python and Java standard libraries.",
      diagram: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/One-one_merging_timsort.svg/330px-One-one_merging_timsort.svg.png",
    },
    {
      name: "Intro Sort",
      desc: "Hybrid of quicksort, heapsort, and insertion sort.",
      time: "O(n log n)",
      space: "O(log n)",
      notes: "Switches strategy to avoid worst-case scenarios.",
      diagram: "https://figures.semanticscholar.org/f8c0d4748149f0af14fb0373760a85bae189267d/4-Figure1-1.png",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };


  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 py-20 bg-[#FFFFFF] text-[#1A1A1A]">
        {/* ✅ Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Guide to <span className="text-blue-600">Sorting Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Sorting algorithms arrange elements into a specific order (ascending or descending). 
            They are fundamental in computer science, enabling efficient searching, optimization, 
            and data organization.
          </p>
        </motion.div>

        {/* ✅ What is Sorting? */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
>
  <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
    <Cpu size={26} /> What is Sorting?
  </h2>
  <p className="text-[#333333] text-xl mb-3">
    Sorting is the process of arranging elements in a list or array according to a specific order, 
    usually ascending or descending. It is a fundamental operation in computer science and is widely 
    used to organize data for efficient processing.
  </p>
  <p className="text-[#333333] text-xl">
    Efficient sorting is essential because it:
  </p>
  <ul className="list-disc list-inside text-[#333333] text-xl mt-2 space-y-1">
    <li>Optimizes search operations by arranging data systematically.</li>
    <li>Makes data easier to visualize and interpret.</li>
    <li>Forms the basis for many algorithmic solutions and problem-solving strategies.</li>
  </ul>
</motion.div>


        {/* ✅ Key Takeaways */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Sorting improves efficiency in searching and data organization.</li>
            <li>Different algorithms suit different data sizes and conditions.</li>
            <li>Some algorithms are stable (preserve equal elements’ order), others are not.</li>
            <li>Divide-and-conquer methods (Merge, Quick) are faster than simple methods (Bubble, Selection).</li>
          </ul>
        </motion.div>

        {/* Algorithm Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {algorithms.map((algo, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">{algo.name}</h2>
              <img src={algo.diagram} alt={`${algo.name} diagram`} className="w-full h-48 object-contain mb-4 rounded-lg border" />
              <p className="text-[#555555] mb-3 text-lg">{algo.desc}</p>
              <div className="flex flex-col gap-2 text-lg">
                <span className="flex items-center gap-2">
                  <Clock size={18} className="text-blue-500" /> <strong>Time Complexity:</strong> {algo.time}
                </span>
                <span className="flex items-center gap-2">
                  <Layers size={18} className="text-green-500" /> <strong>Space Complexity:</strong> {algo.space}
                </span>
                <span className="flex items-center gap-2">
                  <Info size={18} className="text-orange-500" /> <strong>Notes:</strong> {algo.notes}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
       {/* ✅ Complexity Analysis Table */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="mt-20"
>
  <h2 className="text-3xl font-semibold mb-4 text-cyan-600 flex items-center gap-2 border-b-2 border-cyan-200 pb-2">
    <BarChart size={26} /> Complexity Analysis
  </h2>

  {/* ✅ Rounded Rectangle Box */}
  <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-2xl shadow-md p-6">
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-cyan-100 text-cyan-800 font-semibold text-lg">
          <tr>
            <th className="px-6 py-3 border">Algorithm</th>
            <th className="px-6 py-3 border">Best Case</th>
            <th className="px-6 py-3 border">Average Case</th>
            <th className="px-6 py-3 border">Worst Case</th>
            <th className="px-6 py-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="text-center text-lg">
          <tr>
            <td className="border px-4 py-3">Bubble Sort</td>
            <td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-3">Selection Sort</td>
            <td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td>
          </tr>
          <tr>
            <td className="border px-4 py-3">Insertion Sort</td>
            <td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-3">Merge Sort</td>
            <td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td>
          </tr>
          <tr>
            <td className="border px-4 py-3">Quick Sort</td>
            <td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>O(log n)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-3">Heap Sort</td>
            <td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</motion.div>


        {/* ✅ Footer Note */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-20 text-center"
        >
          <p className="text-[#555555] text-xl">
            ✨ Master sorting by visualizing step-by-step processes and comparing their efficiencies.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default SortingOverview;
