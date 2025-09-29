// src/pages/GameOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GameOverview = () => {
  const algorithms = [
    {
      name: "A* Search",
      desc: "Heuristic-based pathfinding algorithm combining cost so far and estimated cost to goal.",
      time: "O(b^d)",
      space: "O(b^d)",
      notes: "Optimal if heuristic is admissible; widely used in pathfinding."
    },
    {
      name: "Breadth-First Search (BFS)",
      desc: "Explores all nodes at current depth before going deeper.",
      time: "O(b^d)",
      space: "O(b^d)",
      notes: "Finds shortest path in unweighted graphs."
    },
    {
      name: "Depth-First Search (DFS)",
      desc: "Explores a branch fully before backtracking.",
      time: "O(b^d)",
      space: "O(d)",
      notes: "May not find shortest path; used in game trees and puzzles."
    },
    {
      name: "Minimax",
      desc: "Adversarial search algorithm for two-player zero-sum games.",
      time: "O(b^d)",
      space: "O(d)",
      notes: "Assumes both players play optimally."
    },
    {
      name: "Alpha-Beta Pruning",
      desc: "Optimized Minimax that prunes branches that cannot affect the outcome.",
      time: "O(b^(d/2))",
      space: "O(d)",
      notes: "Reduces nodes evaluated compared to standard Minimax."
    },
    {
      name: "Monte Carlo Tree Search (MCTS)",
      desc: "Uses random simulations to estimate the value of moves in complex games.",
      time: "Depends on simulations",
      space: "Depends on tree size",
      notes: "Used in Go, Chess, and complex strategy games."
    },
    {
      name: "Best-First Search",
      desc: "Greedy search that expands the most promising node according to a heuristic.",
      time: "O(b^m)",
      space: "O(b^m)",
      notes: "Heuristic-driven; may not guarantee optimal solution."
    },
    {
      name: "Hill Climbing",
      desc: "Iterative search moving in the direction of increasing heuristic value.",
      time: "O(b^m)",
      space: "O(b)",
      notes: "May get stuck in local maxima; simple optimization strategy."
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
            Guide to <span className="text-blue-600">Game Search Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            These algorithms systematically explore possible moves or paths in games to find optimal or near-optimal strategies.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Game search algorithms explore states to find optimal or feasible solutions.</li>
            <li>Heuristic-driven algorithms (A*, Best-First, Hill Climbing) guide the search efficiently.</li>
            <li>Adversarial algorithms (Minimax, Alpha-Beta) are essential for two-player games.</li>
            <li>Monte Carlo Tree Search handles complex games with large branching factors.</li>
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
            ✨ Understanding these algorithms is crucial for designing intelligent game-playing agents.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default GameOverview;
