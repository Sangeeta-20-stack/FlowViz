// src/pages/StringOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StringOverview = () => {
  const algorithms = [
    {
      name: "Naive String Search",
      desc: "Checks every substring of the text to find a match with the pattern.",
      time: "O((N-M+1) * M)",
      space: "O(1)",
      notes: "Simple but inefficient for large texts; used as a baseline."
    },
    {
      name: "KMP (Knuth-Morris-Pratt)",
      desc: "Uses a precomputed LPS array to avoid rechecking characters after a mismatch.",
      time: "O(N+M)",
      space: "O(M)",
      notes: "Efficient pattern matching algorithm for large texts."
    },
    {
      name: "Rabin-Karp",
      desc: "Uses hashing to compare the pattern with substrings of text quickly.",
      time: "O(NM) worst, O(N+M) average",
      space: "O(1)",
      notes: "Good for multiple pattern searches; susceptible to hash collisions."
    },
    {
      name: "Z Algorithm",
      desc: "Precomputes Z-array to match pattern in linear time.",
      time: "O(N+M)",
      space: "O(N+M)",
      notes: "Efficient linear-time pattern search; often used in string processing."
    },
    {
      name: "Boyer-Moore",
      desc: "Matches pattern from right to left and uses bad character/good suffix heuristics.",
      time: "O(N/M) average, O(N*M) worst",
      space: "O(Alphabet Size + M)",
      notes: "Extremely efficient for large patterns and texts; widely used in practice."
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
          Guide to <span className="text-blue-600">String Algorithms</span>
        </h1>
        <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
          String algorithms are used to search, match, and manipulate patterns in strings efficiently.
          They are widely applied in text processing, search engines, and computational biology.
        </p>
      </motion.div>

      {/* What are String Algorithms? */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
      >
        <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
          <Cpu size={26} /> What are String Algorithms?
        </h2>
        <p className="text-[#333333] text-xl mb-3">
          String algorithms help in finding patterns, searching substrings, and performing efficient string manipulations.
        </p>
        <p className="text-[#333333] text-xl">
          Common algorithms include Naive search, KMP, Rabin-Karp, Z Algorithm, and Boyer-Moore.
        </p>
      </motion.div>

      {/* Key Takeaways */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
        <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
          <Sparkles size={26} /> Key Takeaways
        </h2>
        <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
          <li>Naive approach is simple but inefficient for large texts.</li>
          <li>KMP avoids redundant comparisons using LPS array.</li>
          <li>Rabin-Karp uses hashing for efficient multi-pattern matching.</li>
          <li>Z Algorithm preprocesses the string for linear-time searches.</li>
          <li>Boyer-Moore uses heuristics for fast practical performance.</li>
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
          ✨ Master string algorithms to efficiently search, match, and manipulate patterns in text and data.
        </p>
      </motion.div>
    </section>
    <Footer />
  </>
);

};

export default StringOverview;
