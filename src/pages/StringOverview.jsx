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
    notes: "Simple but inefficient for large texts; used as a baseline.",
    diagram: "https://miro.medium.com/v2/resize:fit:1170/1*vJOfJQZSxia9KBVUaF7nvA.gif"
  },
  {
    name: "KMP (Knuth-Morris-Pratt)",
    desc: "Uses a precomputed LPS array to avoid rechecking characters after a mismatch.",
    time: "O(N+M)",
    space: "O(M)",
    notes: "Efficient pattern matching algorithm for large texts.",
    diagram: "https://scaler-topics-articles-md.s3.us-west-2.amazonaws.com/kmp-algorithm-lps-table.gif"
  },
  {
    name: "Rabin-Karp",
    desc: "Uses hashing to compare the pattern with substrings of text quickly.",
    time: "O(NM) worst, O(N+M) average",
    space: "O(1)",
    notes: "Good for multiple pattern searches; susceptible to hash collisions.",
    diagram: "data:image/png;base64,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"
  },
  {
    name: "Z Algorithm",
    desc: "Precomputes Z-array to match pattern in linear time.",
    time: "O(N+M)",
    space: "O(N+M)",
    notes: "Efficient linear-time pattern search; often used in string processing.",
    diagram: "https://scaler.com/topics/images/pseudocode-for-z-algorithm.gif"
  },
  {
    name: "Boyer-Moore",
    desc: "Matches pattern from right to left and uses bad character/good suffix heuristics.",
    time: "O(N/M) average, O(N*M) worst",
    space: "O(Alphabet Size + M)",
    notes: "Extremely efficient for large patterns and texts; widely used in practice.",
    diagram: "https://koenig-media.raywenderlich.com/uploads/2017/06/boyerMooreRecursiveMatch.gif"
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
          ✨ Master string algorithms to efficiently search, match, and manipulate patterns in text and data.
        </p>
      </motion.div>
    </section>
    <Footer />
  </>
);

};

export default StringOverview;
