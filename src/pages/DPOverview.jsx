// src/pages/DPOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DPOverview = () => {
  const algorithms = [
    {
      name: "Fibonacci Sequence (DP)",
      desc: "Uses dynamic programming to compute Fibonacci numbers efficiently by storing previous results.",
      time: "O(n)",
      space: "O(n) / O(1) with optimization",
      notes: "Avoids redundant recursive calls by tabulation or memoization.",
    },
    {
      name: "0/1 Knapsack Problem",
      desc: "Maximizes value in a knapsack without exceeding weight capacity using DP table.",
      time: "O(n*W)",
      space: "O(n*W)",
      notes: "Classic example of DP for optimization problems.",
    },
    {
      name: "Longest Common Subsequence (LCS)",
      desc: "Finds the longest subsequence common to two sequences using DP table.",
      time: "O(m*n)",
      space: "O(m*n)",
      notes: "Useful in text comparison, diff tools, bioinformatics.",
    },
    {
      name: "Matrix Chain Multiplication",
      desc: "Determines the optimal parenthesization of matrices to minimize multiplications.",
      time: "O(n^3)",
      space: "O(n^2)",
      notes: "DP reduces exponential recursion to polynomial time.",
    },
    {
      name: "Coin Change Problem",
      desc: "Finds minimum coins to make a value or number of ways to make change using DP.",
      time: "O(n*amount)",
      space: "O(amount)",
      notes: "Important for combinatorial optimization problems.",
    },
    {
  name: "Edit Distance",
  desc: "Finds the minimum number of operations (insert, delete, replace) to convert one string into another using DP.",
  time: "O(m*n)",
  space: "O(m*n)",
  notes: "Essential for string manipulation, spell checkers, and bioinformatics sequence alignment.",
}

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
            Guide to <span className="text-blue-600">Dynamic Programming</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Dynamic programming (DP) is a method for solving complex problems by breaking them into simpler subproblems.
            It is widely used in optimization problems, combinatorial problems, and sequence analysis.
          </p>
        </motion.div>

        {/* What is DP? */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> What is Dynamic Programming?
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Dynamic programming is an algorithmic technique that solves problems by combining the solutions of overlapping subproblems.
            Instead of recomputing the same results, DP stores them in a table for efficient retrieval.
          </p>
          <p className="text-[#333333] text-xl">
            DP problems typically involve optimization (max/min) or counting the number of ways to solve a problem. Common patterns include memoization and tabulation.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>DP solves problems by storing subproblem solutions to avoid recomputation.</li>
            <li>Most DP problems can be solved with memoization (top-down) or tabulation (bottom-up).</li>
            <li>It is widely used in optimization, sequence analysis, and combinatorial problems.</li>
            <li>Understanding overlapping subproblems and optimal substructure is key to designing DP solutions.</li>
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

              {/* Time & Space */}
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
            ✨ Master dynamic programming to optimize solutions for complex problems efficiently.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default DPOverview;
