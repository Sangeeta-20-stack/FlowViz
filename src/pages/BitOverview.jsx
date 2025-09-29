// src/pages/BitOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BitOverview = () => {
  const algorithms = [
    {
      name: "Check Bit",
      desc: "Checks if a specific bit in a number is set (1) or not (0).",
      time: "O(1)",
      space: "O(1)",
      notes: "Used in bit masking, flags, and optimization problems.",
    },
    {
      name: "Set Bit",
      desc: "Sets a specific bit to 1 without changing other bits.",
      time: "O(1)",
      space: "O(1)",
      notes: "Useful to turn on feature flags or specific options.",
    },
    {
      name: "Clear Bit",
      desc: "Clears a specific bit to 0 without affecting other bits.",
      time: "O(1)",
      space: "O(1)",
      notes: "Used for resetting flags or bits efficiently.",
    },
    {
      name: "Toggle Bit",
      desc: "Flips the value of a specific bit (0→1 or 1→0).",
      time: "O(1)",
      space: "O(1)",
      notes: "Helps in switching states or binary operations.",
    },
    {
      name: "Count Set Bits",
      desc: "Counts the number of 1s in the binary representation of a number.",
      time: "O(k) where k = number of set bits",
      space: "O(1)",
      notes: "Also called Hamming weight; useful in cryptography and optimization.",
    },
    {
      name: "Single Number XOR",
      desc: "Finds the single element that appears once in an array where others appear twice using XOR.",
      time: "O(n)",
      space: "O(1)",
      notes: "Uses XOR properties; common interview problem.",
    },
    {
      name: "Power of Two Check",
      desc: "Checks whether a number is a power of 2 using bitwise AND.",
      time: "O(1)",
      space: "O(1)",
      notes: "Efficient method using n & (n-1).",
    },
    {
      name: "Generate Subsets (Bitmasking)",
      desc: "Generates all subsets of a set using binary representation.",
      time: "O(n * 2^n)",
      space: "O(1)",
      notes: "Bitmasking simplifies combinatorial subset generation.",
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
            Guide to <span className="text-blue-600">Bit Manipulation Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Bit Manipulation algorithms allow efficient operations on individual bits of numbers.
            They are widely used in optimization, coding interviews, and performance-critical applications.
          </p>
        </motion.div>

        {/* What is Bit Manipulation? */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> What is Bit Manipulation?
          </h2>

          <p className="text-[#333333] text-xl mb-3">
            Bit Manipulation involves performing operations directly on the binary representation of numbers.
            It enables highly efficient algorithms for checking, setting, toggling, and counting bits.
          </p>

          <p className="text-[#333333] text-xl mb-3">
            Common operations include <strong>check, set, clear, toggle bits</strong>, counting set bits, 
            using XOR for finding unique numbers, and generating subsets using bitmasking.
          </p>

          <p className="text-[#333333] text-xl">
            Applications include cryptography, graphics, combinatorial problems, embedded systems, and competitive programming.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Bitwise operations are O(1) and extremely efficient.</li>
            <li>Bitmasking can represent subsets or states compactly.</li>
            <li>XOR can detect unique elements or swap numbers without extra memory.</li>
            <li>Bit manipulation is widely used in competitive programming and low-level optimization.</li>
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
                  </tr>
                </thead>
                <tbody className="text-center text-lg">
                  {algorithms.map((algo, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="border px-4 py-3">{algo.name}</td>
                      <td>{algo.time}</td>
                      <td>{algo.space}</td>
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
            ✨ Mastering bit manipulation enables high-performance solutions and elegant algorithm design.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default BitOverview;
