// src/pages/BNBOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BNBOverview = () => {
  const algorithms = [
    {
      name: "0/1 Knapsack Problem",
      desc: "Selects a subset of items to maximize value without exceeding capacity. Branch & Bound prunes subsets that cannot exceed current best value.",
      time: "Exponential O(2^n) worst-case, B&B reduces explored nodes",
      space: "O(n) queue/recursion stack",
      notes: "Widely used in resource allocation problems; optimal solution guaranteed if bounds are correct.",
    },
    {
      name: "Maximum Subarray (optional B&B demo)",
      desc: "Finds the contiguous subarray with the maximum sum. B&B can prune subarrays that cannot exceed the current max.",
      time: "O(n^2) naive, O(n) Kadane, B&B demo may show pruning subarrays",
      space: "O(1) to O(n) depending on implementation",
      notes: "Mainly for teaching B&B pruning concepts; Kadane's algorithm is more efficient in practice.",
    },
    {
      name: "Subset Sum Problem",
      desc: "Finds subsets of numbers that sum to a target value. Branch & Bound prunes subsets exceeding the target sum.",
      time: "O(2^n) worst-case, B&B reduces explored subsets",
      space: "O(n) recursion/queue",
      notes: "Classic NP-complete problem; used in cryptography and combinatorial optimization.",
    },
    {
      name: "Traveling Salesman Problem (TSP)",
      desc: "Finds the shortest route visiting all cities exactly once. B&B prunes paths exceeding current best tour length.",
      time: "O(n!) brute-force, B&B reduces number of paths explored",
      space: "O(n) recursion + bookkeeping",
      notes: "Used in logistics, routing, and operations research; guarantees optimal if bounds are correct.",
    },
    {
      name: "Job Scheduling Problem",
      desc: "Assigns jobs to resources to minimize completion time or maximize profit. Branch & Bound prunes schedules that cannot improve current best.",
      time: "Exponential O(n!), B&B prunes infeasible schedules",
      space: "O(n) recursion stack",
      notes: "Common in manufacturing and task allocation; B&B helps avoid exploring unnecessary permutations.",
    },
    {
      name: "Graph Coloring Problem",
      desc: "Assigns colors to vertices so no adjacent vertices share the same color, minimizing total colors. B&B prunes invalid partial colorings.",
      time: "O(k^n) worst-case, B&B reduces infeasible colorings",
      space: "O(n) recursion stack",
      notes: "Useful in register allocation, scheduling, and map coloring.",
    },
    {
      name: "Assignment Problem",
      desc: "Optimally assigns tasks to agents to minimize cost or maximize efficiency. B&B prunes assignments exceeding current best cost.",
      time: "O(n!) brute-force, B&B reduces explored permutations",
      space: "O(n) recursion/stack",
      notes: "Common in operations research and workforce optimization.",
    },
    {
      name: "Hamiltonian Path/Circuit",
      desc: "Finds a path or cycle visiting each vertex exactly once. B&B prunes paths violating Hamiltonian constraints or exceeding current best.",
      time: "O(n!) brute-force, B&B prunes invalid paths",
      space: "O(n) recursion stack",
      notes: "Used in routing, scheduling, and genome sequencing; guarantees optimal path if bounds are correct.",
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
            Guide to <span className="text-blue-600">Branch & Bound Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Branch & Bound is a problem-solving paradigm for combinatorial optimization problems. 
            It systematically explores candidate solutions, pruning those that cannot lead to optimal results.
          </p>
        </motion.div>

        {/* What is Branch & Bound? */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> What is Branch & Bound?
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Branch & Bound is a technique for solving combinatorial and optimization problems. 
            It explores the solution space as a tree and uses bounds to prune branches that cannot lead to better solutions.
          </p>
          <p className="text-[#333333] text-xl">
            Applications include Knapsack, TSP, Job Scheduling, Graph Coloring, Assignment, Subset Sum, and Hamiltonian Path problems.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Branch & Bound solves combinatorial optimization problems efficiently by pruning non-promising branches.</li>
            <li>Guarantees optimal solutions if bounds are computed correctly.</li>
            <li>Time complexity can still be exponential in the worst case, but practical performance is significantly improved.</li>
            <li>Widely used in Knapsack, TSP, Assignment, Subset Sum, and Hamiltonian Path problems.</li>
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
            ✨ Master Branch & Bound to solve combinatorial optimization problems efficiently by pruning non-promising solutions.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default BNBOverview;
