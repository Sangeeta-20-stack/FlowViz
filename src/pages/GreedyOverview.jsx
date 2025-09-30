// src/pages/GreedyOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GreedyOverview = () => {
  const algorithms = [
  {
    name: "Activity Selection",
    desc: "Selects the maximum number of activities that don't overlap by always choosing the next activity that finishes earliest.",
    time: "O(n log n) due to sorting",
    space: "O(1)",
    notes: "Classic example of greedy strategy for interval scheduling.",
    diagram: "https://www.interviewbit.com/blog/wp-content/uploads/2021/10/Image-1-8.png",
  },
  {
    name: "Fractional Knapsack",
    desc: "Maximizes the value of items in a knapsack when fractions of items are allowed by picking the highest value/weight ratio first.",
    time: "O(n log n) due to sorting",
    space: "O(1)",
    notes: "Greedy works here; full knapsack (0/1) requires DP.",
    diagram: "https://miro.medium.com/v2/resize:fit:1400/1*pUTbOW0WiQGr5HChOgXMwQ.gif",
  },
  {
    name: "Coin Change (Greedy)",
    desc: "Finds minimum coins for a value using the largest denomination first (works for canonical coin systems).",
    time: "O(n)",
    space: "O(1)",
    notes: "Greedy may fail for non-standard coin systems.",
    diagram: "https://miro.medium.com/1*A3jpMtpolzw1w10mKhZjxA.png",
  },
  {
    name: "Job Sequencing",
    desc: "Schedules jobs with deadlines and profits to maximize total profit by picking highest profit jobs first.",
    time: "O(n log n) due to sorting",
    space: "O(n)",
    notes: "Greedy approach uses profit-based ordering with a schedule array.",
    diagram: "https://miro.medium.com/1*8-BFChf3zGLfVkOuxTLOeQ.gif",
  },
  {
    name: "Huffman Coding",
    desc: "Builds an optimal prefix-free binary code for symbols by repeatedly combining the two least frequent symbols.",
    time: "O(n log n)",
    space: "O(n)",
    notes: "Greedy approach for data compression and encoding.",
    diagram: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Huffman_algorithm.gif",
  },
  {
    name: "Kruskal's Minimum Spanning Tree",
    desc: "Constructs MST by always choosing the edge with the smallest weight that doesn't form a cycle.",
    time: "O(E log E)",
    space: "O(V + E)",
    notes: "Greedy works because MST has optimal substructure and edge selection is safe.",
    diagram: "https://sahebg.github.io/images/Algo/kruskal.gif",
  },
  {
    name: "Prim's Minimum Spanning Tree",
    desc: "Starts from a node and grows MST by always adding the minimum weight edge connecting tree to a new vertex.",
    time: "O(E log V) with heap",
    space: "O(V + E)",
    notes: "Greedy approach similar to Dijkstra for MST construction.",
    diagram: "https://miro.medium.com/1*mX-VBfyuFfSeDjFuDTpKVA.gif",
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
            Guide to <span className="text-blue-600">Greedy Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Greedy algorithms build up a solution piece by piece, always choosing the next piece with the most immediate benefit.
            They are widely used in optimization problems, scheduling, and network algorithms.
          </p>
        </motion.div>

        {/* What is Greedy? */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> What are Greedy Algorithms?
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Greedy algorithms solve problems by choosing the locally optimal solution at each step, hoping to find the global optimum.
            They are simple, fast, and often effective, but may fail for problems without the greedy-choice property.
          </p>
          <p className="text-[#333333] text-xl">
            Common greedy problems include interval scheduling, coin change (canonical), knapsack (fractional), Huffman coding, and MST algorithms.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Greedy algorithms make a sequence of choices, each locally optimal, to reach a solution.</li>
            <li>They are efficient in time and space, often O(n log n) due to sorting or priority queues.</li>
            <li>Greedy algorithms require the problem to have the greedy-choice property and optimal substructure.</li>
            <li>Useful in optimization, scheduling, coding, and graph problems.</li>
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
            ✨ Master greedy algorithms to optimize solutions for complex problems efficiently with minimal steps.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default GreedyOverview;
