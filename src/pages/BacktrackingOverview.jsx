// src/pages/BacktrackingOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BacktrackingOverview = () => {
  const algorithms = [
    {
      name: "N-Queens",
      desc: "Place N queens on an N×N chessboard so that no two queens attack each other.",
      time: "O(N!)",
      space: "O(N²)",
      notes: "Classic combinatorial problem demonstrating recursive backtracking."
    },
    {
      name: "Sudoku Solver",
      desc: "Fills empty cells of a Sudoku grid following rules using trial-and-error.",
      time: "O(9^(N²))",
      space: "O(N²)",
      notes: "Backtracking explores all possibilities until a solution is found."
    },
    {
      name: "Rat in a Maze",
      desc: "Find paths from start to finish in a maze using valid moves.",
      time: "O(2^(N×M))",
      space: "O(N×M)",
      notes: "All possible paths are explored recursively until goal is reached."
    },
    {
      name: "Subset Sum",
      desc: "Finds subsets of a set whose sum equals a target value.",
      time: "O(2^N)",
      space: "O(N)",
      notes: "Backtracking explores all subset combinations recursively."
    },
    {
      name: "Permutations",
      desc: "Generates all possible orderings of a list of numbers or characters.",
      time: "O(N!)",
      space: "O(N)",
      notes: "Recursive swapping/backtracking produces all permutations."
    },
    {
      name: "Word Search",
      desc: "Finds a given word in a 2D grid of letters.",
      time: "O(N×M×4^L)",
      space: "O(L)",
      notes: "Backtracking explores all directions from each cell."
    },
    {
      name: "Knight's Tour",
      desc: "Moves a knight on a chessboard visiting every square exactly once.",
      time: "O(8^(N²))",
      space: "O(N²)",
      notes: "Backtracking tries all valid knight moves recursively."
    },
    {
      name: "Graph Coloring",
      desc: "Assigns colors to graph vertices so no adjacent vertices share the same color.",
      time: "O(M^N)",
      space: "O(N)",
      notes: "Explores all coloring combinations using backtracking."
    },
    {
      name: "Hamiltonian Path",
      desc: "Finds a path visiting every vertex exactly once in a graph.",
      time: "O(N!)",
      space: "O(N)",
      notes: "Backtracking tries all vertex orders recursively."
    },
    {
      name: "Palindrome Partitioning",
      desc: "Partitions a string into all possible palindrome partitions.",
      time: "O(2^N × N)",
      space: "O(N)",
      notes: "Backtracking explores all substring combinations recursively."
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
            Guide to <span className="text-blue-600">Backtracking Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Backtracking algorithms solve constraint satisfaction problems by exploring all possible configurations recursively and undoing choices when necessary.
            They are widely used in puzzles, combinatorial problems, and search problems.
          </p>
        </motion.div>

        {/* What is Backtracking? */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> What is Backtracking?
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Backtracking is a recursive algorithmic technique for solving problems incrementally, trying partial solutions and abandoning them if they fail to satisfy constraints.
          </p>
          <p className="text-[#333333] text-xl">
            Common backtracking problems include N-Queens, Sudoku solving, maze pathfinding, Hamiltonian paths, and subset sums.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Backtracking explores all possible solutions recursively and abandons invalid paths.</li>
            <li>It is commonly used for puzzles, combinatorial problems, and constraint satisfaction problems.</li>
            <li>Efficiency comes from pruning paths early that violate constraints.</li>
            <li>Understanding recursion and constraints is key to designing backtracking solutions.</li>
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
            ✨ Master backtracking to solve complex problems efficiently by exploring all possibilities intelligently.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default BacktrackingOverview;