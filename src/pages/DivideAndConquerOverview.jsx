// src/pages/DivideAndConquerOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DivideAndConquerOverview = () => {
  const algorithms = [
    {
      name: "Merge Sort",
      desc: "Splits the array into halves, recursively sorts them, and merges the sorted halves.",
      time: "O(n log n)",
      space: "O(n)",
      notes: "Stable sort, good for large datasets and linked lists.",
    },
    {
      name: "Quick Sort",
      desc: "Uses a pivot to partition the array into two halves and recursively sorts them.",
      time: "O(n log n), Worst: O(n²)",
      space: "O(log n)",
      notes: "Very efficient in practice; performance depends on pivot selection.",
    },
    {
      name: "Binary Search",
      desc: "Searches for an element in a sorted array by repeatedly dividing the search interval in half.",
      time: "O(log n)",
      space: "O(1)",
      notes: "Requires a sorted array; extremely efficient for large datasets.",
    },
    {
      name: "Fast Fourier Transform (FFT)",
      desc: "Computes the Discrete Fourier Transform efficiently using divide-and-conquer.",
      time: "O(n log n)",
      space: "O(n)",
      notes: "Widely used in signal processing, image processing, and polynomial multiplication.",
    },
    {
      name: "Closest Pair of Points",
      desc: "Finds the pair of points with minimum distance using divide-and-conquer.",
      time: "O(n log n)",
      space: "O(n)",
      notes: "Faster than brute-force O(n²) method; uses recursive splitting and strip checking.",
    },
    {
      name: "Karatsuba Multiplication",
      desc: "Multiplies large numbers by splitting them into halves and recursively combining products.",
      time: "O(n^log2 3) ≈ O(n^1.585)",
      space: "O(n)",
      notes: "Faster than standard O(n²) multiplication for very large numbers.",
    },
    {
      name: "Strassen's Matrix Multiplication",
      desc: "Multiplies matrices by dividing them into submatrices and reducing the number of multiplications recursively.",
      time: "O(n^2.807)",
      space: "O(n²)",
      notes: "More efficient than naive O(n³) multiplication for large matrices.",
    },
    {
      name: "Maximum Subarray (Kadane's via Divide & Conquer)",
      desc: "Finds the contiguous subarray with the maximum sum by dividing the array and combining results.",
      time: "O(n log n)",
      space: "O(log n)",
      notes: "Divide-and-conquer approach; linear O(n) solution exists using Kadane's algorithm.",
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
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Guide to <span className="text-blue-600">Divide & Conquer Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Divide-and-conquer algorithms break a problem into smaller subproblems, solve them recursively, 
            and combine the results to solve the original problem efficiently.
          </p>
        </motion.div>

        {/* What is Divide & Conquer? */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> What is Divide & Conquer?
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Divide & Conquer is an algorithmic paradigm that breaks a problem into smaller subproblems, 
            solves each subproblem independently, and combines their solutions to solve the original problem.
          </p>
          <p className="text-[#333333] text-xl">
            It is widely used in sorting, searching, numerical algorithms, and computational geometry.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Divide & Conquer solves problems by dividing them into smaller, manageable subproblems.</li>
            <li>Combining solutions of subproblems efficiently leads to overall optimized performance.</li>
            <li>Algorithms like Merge Sort, Quick Sort, Binary Search, FFT, Closest Pair, Karatsuba, Strassen, and Maximum Subarray are classic examples.</li>
            <li>Time complexity usually improves over naive approaches by using recursion strategically.</li>
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
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-8"
            >
              <h2 className="text-3xl font-semibold mb-3 text-[#1A1A1A]">{algo.name}</h2>
              <p className="text-[#555555] mb-5 text-lg">{algo.desc}</p>

              <div className="flex flex-col gap-3 text-lg">
                <span className="flex items-center gap-2">
                  <Clock size={20} className="text-blue-500" /> <strong>Time Complexity:</strong> {algo.time}
                </span>
                <span className="flex items-center gap-2">
                  <Layers size={20} className="text-green-500" /> <strong>Space Complexity:</strong> {algo.space}
                </span>
                <span className="flex items-center gap-2">
                  <Info size={20} className="text-orange-500" /> <strong>Notes:</strong> {algo.notes}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Complexity Analysis Table */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-20">
          <h2 className="text-3xl font-semibold mb-4 text-cyan-600 flex items-center gap-2 border-b-2 border-cyan-200 pb-2">
            <BarChart size={26} /> Complexity Analysis
          </h2>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-2xl shadow-md p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-cyan-100 text-cyan-800 font-semibold text-lg">
                  <tr>
                    <th className="px-6 py-3 border">Algorithm</th>
                    <th className="px-6 py-3 border">Time Complexity</th>
                    <th className="px-6 py-3 border">Space Complexity</th>
                    <th className="px-6 py-3 border">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-center text-lg">
                  {algorithms.map((algo, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "" : "bg-gray-50"}>
                      <td className="border px-4 py-3">{algo.name}</td>
                      <td>{algo.time}</td>
                      <td>{algo.space}</td>
                      <td>{algo.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-20 text-center">
          <p className="text-[#555555] text-xl">
            ✨ Master divide & conquer to solve complex problems efficiently by breaking them into smaller subproblems.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default DivideAndConquerOverview;
