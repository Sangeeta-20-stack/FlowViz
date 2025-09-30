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
    diagram: "https://stevenschmatz.github.io/assets/Fibonacci.gif",
  },
  {
    name: "0/1 Knapsack Problem",
    desc: "Maximizes value in a knapsack without exceeding weight capacity using DP table.",
    time: "O(n*W)",
    space: "O(n*W)",
    notes: "Classic example of DP for optimization problems.",
    diagram: "https://astikanand.github.io/techblogs/dynamic-programming-patterns/assets/knapsack_tabulation.gif",
  },
  {
    name: "Longest Common Subsequence (LCS)",
    desc: "Finds the longest subsequence common to two sequences using DP table.",
    time: "O(m*n)",
    space: "O(m*n)",
    notes: "Useful in text comparison, diff tools, bioinformatics.",
    diagram: "https://astikanand.github.io/techblogs/dynamic-programming-patterns/assets/longest_common_substring_tabulation.gif",
  },
  {
    name: "Matrix Chain Multiplication",
    desc: "Determines the optimal parenthesization of matrices to minimize multiplications.",
    time: "O(n^3)",
    space: "O(n^2)",
    notes: "DP reduces exponential recursion to polynomial time.",
    diagram: "https://avikdas.com/assets/images/2019-04-25-dynamic-programming-deep-dive-chain-matrix-multiplication/multiple-split-points.gif",
  },
  {
    name: "Coin Change Problem",
    desc: "Finds minimum coins to make a value or number of ways to make change using DP.",
    time: "O(n*amount)",
    space: "O(amount)",
    notes: "Important for combinatorial optimization problems.",
    diagram: "data:image/png;base64,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",
  },
  {
    name: "Edit Distance",
    desc: "Finds the minimum number of operations (insert, delete, replace) to convert one string into another using DP.",
    time: "O(m*n)",
    space: "O(m*n)",
    notes: "Essential for string manipulation, spell checkers, and bioinformatics sequence alignment.",
    diagram: "https://labuladong.online/algo/images/editDistance/replace.gif",
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
