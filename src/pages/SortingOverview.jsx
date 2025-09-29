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
    },
    {
      name: "Selection Sort",
      desc: "Divides the list into a sorted and unsorted region, repeatedly selecting the smallest element from the unsorted region.",
      time: "O(n²)",
      space: "O(1)",
      notes: "Performs fewer swaps than bubble sort, but still inefficient on large lists.",
    },
    {
      name: "Insertion Sort",
      desc: "Builds the final sorted array one item at a time, inserting elements into their correct position.",
      time: "O(n²), Best: O(n)",
      space: "O(1)",
      notes: "Efficient for small datasets and nearly sorted arrays.",
    },
    {
      name: "Merge Sort",
      desc: "A divide-and-conquer algorithm that splits the list into halves, recursively sorts, and merges them.",
      time: "O(n log n)",
      space: "O(n)",
      notes: "Stable sorting algorithm, preferred for linked lists and large datasets.",
    },
    {
      name: "Quick Sort",
      desc: "Divides and conquers using a pivot element to partition the array into two halves.",
      time: "O(n log n), Worst: O(n²)",
      space: "O(log n)",
      notes: "Faster in practice but performance depends on pivot selection.",
    },
    {
      name: "Heap Sort",
      desc: "Uses a binary heap to repeatedly extract the maximum element and rebuild the heap.",
      time: "O(n log n)",
      space: "O(1)",
      notes: "In-place sorting, but not stable.",
    },
     {
      name: "Counting Sort",
      desc: "Counts occurrences of elements and calculates positions.",
      time: "O(n + k)",
      space: "O(k)",
      notes: "Efficient for small integer ranges, not comparison-based.",
    },
    {
      name: "Radix Sort",
      desc: "Sorts numbers digit by digit using counting sort as subroutine.",
      time: "O(d*(n+k))",
      space: "O(n+k)",
      notes: "Non-comparison based, good for fixed-length integers.",
    },
    {
      name: "Bucket Sort",
      desc: "Distributes elements into buckets, sorts each bucket, and merges.",
      time: "O(n+k)",
      space: "O(n+k)",
      notes: "Efficient for uniformly distributed data.",
    },
    {
      name: "Shell Sort",
      desc: "Generalization of insertion sort with decreasing gaps.",
      time: "O(n log² n)",
      space: "O(1)",
      notes: "Improves over insertion sort for larger datasets.",
    },
    {
      name: "Tim Sort",
      desc: "Hybrid of merge sort and insertion sort, adaptive.",
      time: "O(n log n)",
      space: "O(n)",
      notes: "Used in Python and Java standard libraries.",
    },
    {
      name: "Intro Sort",
      desc: "Hybrid of quicksort, heapsort, and insertion sort.",
      time: "O(n log n)",
      space: "O(log n)",
      notes: "Switches strategy to avoid worst-case scenarios.",
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

        {/* ✅ Algorithm Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {algorithms.map((algo, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-8"
            >
              <h2 className="text-3xl font-semibold mb-3 text-[#1A1A1A]">
                {algo.name}
              </h2>
              <p className="text-[#555555] mb-5 text-lg">{algo.desc}</p>

              {/* Time & Space */}
              <div className="flex flex-col gap-3 text-lg">
                <span className="flex items-center gap-2">
                  <Clock size={20} className="text-blue-500" /> 
                  <strong>Time Complexity:</strong> {algo.time}
                </span>
                <span className="flex items-center gap-2">
                  <Layers size={20} className="text-green-500" /> 
                  <strong>Space Complexity:</strong> {algo.space}
                </span>
                <span className="flex items-center gap-2">
                  <Info size={20} className="text-orange-500" /> 
                  <strong>Notes:</strong> {algo.notes}
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
