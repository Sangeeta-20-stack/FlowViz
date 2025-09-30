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
    diagram: "https://www.tutorialspoint.com/assets/questions/media/1269191-1746416519.jpg"
  },
  {
    name: "Maximum Subarray (optional B&B demo)",
    desc: "Finds the contiguous subarray with the maximum sum. B&B can prune subarrays that cannot exceed the current max.",
    time: "O(n^2) naive, O(n) Kadane, B&B demo may show pruning subarrays",
    space: "O(1) to O(n) depending on implementation",
    notes: "Mainly for teaching B&B pruning concepts; Kadane's algorithm is more efficient in practice.",
    diagram: "https://ars.els-cdn.com/content/image/1-s2.0-S0925231222014035-gr2.jpg"
  },
  
  {
    name: "Traveling Salesman Problem (TSP)",
    desc: "Finds the shortest route visiting all cities exactly once. B&B prunes paths exceeding current best tour length.",
    time: "O(n!) brute-force, B&B reduces number of paths explored",
    space: "O(n) recursion + bookkeeping",
    notes: "Used in logistics, routing, and operations research; guarantees optimal if bounds are correct.",
    diagram: "https://res.cloudinary.com/codecrucks/images/c_scale,w_366,h_501,dpr_2/f_webp,q_auto/v1635074562/tsp-using-bb-example-19/tsp-using-bb-example-19.png?_i=AA"
  },
  {
    name: "Job Scheduling Problem",
    desc: "Assigns jobs to resources to minimize completion time or maximize profit. Branch & Bound prunes schedules that cannot improve current best.",
    time: "Exponential O(n!), B&B prunes infeasible schedules",
    space: "O(n) recursion stack",
    notes: "Common in manufacturing and task allocation; B&B helps avoid exploring unnecessary permutations.",
    diagram: "data:image/png;base64,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"
  },
  {
    name: "Graph Coloring Problem",
    desc: "Assigns colors to vertices so no adjacent vertices share the same color, minimizing total colors. B&B prunes invalid partial colorings.",
    time: "O(k^n) worst-case, B&B reduces infeasible colorings",
    space: "O(n) recursion stack",
    notes: "Useful in register allocation, scheduling, and map coloring.",
    diagram: "https://opensourc.es/assets/blog/2020-11-29-constraint-solver-coloring-cliques/images/simple_coloring.gif"
  },
  {
    name: "Assignment Problem",
    desc: "Optimally assigns tasks to agents to minimize cost or maximize efficiency. B&B prunes assignments exceeding current best cost.",
    time: "O(n!) brute-force, B&B reduces explored permutations",
    space: "O(n) recursion/stack",
    notes: "Common in operations research and workforce optimization.",
    diagram: "data:image/png;base64,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"
  },
  {
    name: "Hamiltonian Path/Circuit",
    desc: "Finds a path or cycle visiting each vertex exactly once. B&B prunes paths violating Hamiltonian constraints or exceeding current best.",
    time: "O(n!) brute-force, B&B prunes invalid paths",
    space: "O(n) recursion stack",
    notes: "Used in routing, scheduling, and genome sequencing; guarantees optimal path if bounds are correct.",
    diagram: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJL-qT7ExbOGSWYruEBoU4Hb7f8ray47fjQ&s"
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
            ✨ Master Branch & Bound to solve combinatorial optimization problems efficiently by pruning non-promising solutions.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default BNBOverview;
