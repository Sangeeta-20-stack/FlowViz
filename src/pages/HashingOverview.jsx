// src/pages/HashingOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HashingOverview = () => {
  const algorithms = [
    {
      name: "Hash Table (Chaining)",
      desc: "Uses linked lists at each index to handle collisions. Multiple elements can occupy the same bucket.",
      time: "O(1), Worst: O(n)",
      space: "O(n + m) (n = elements, m = table size)",
      notes: "Good for dynamic data with many collisions.",
    },
    {
      name: "Hash Table (Open Addressing)",
      desc: "All elements stored directly in the hash table. Collisions resolved using probing (linear, quadratic, double hashing).",
      time: "O(1), Worst: O(n)",
      space: "O(m) (table size)",
      notes: "Requires careful load factor management to avoid clustering.",
    },
    {
      name: "Rolling Hash / Rabin-Karp",
      desc: "Hashes a string to detect patterns efficiently, commonly used in string matching algorithms.",
      time: "O(n + m) for string matching",
      space: "O(1)",
      notes: "Useful in plagiarism detection, substring search.",
    },
    {
      name: "Set / Map Operations",
      desc: "Built-in hash-based structures to store unique elements or key-value pairs.",
      time: "O(1), Worst: O(n)",
      space: "O(n)",
      notes: "Efficient for fast insert, delete, and search operations.",
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
            Guide to <span className="text-blue-600">Hashing Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Hashing algorithms allow fast data access and efficient storage by mapping keys to indices.
            Different strategies handle collisions and optimize search, insert, and delete operations.
          </p>
        </motion.div>

        {/* What is Hashing? */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> What is Hashing?
          </h2>

          <p className="text-[#333333] text-xl mb-3">
            Hashing is the process of converting data (keys) into a fixed-size value (hash) that determines the index in a table.
            It enables fast data retrieval, storage, and management in various applications.
          </p>

          <p className="text-[#333333] text-xl mb-3">
            Collisions occur when multiple keys map to the same index. Common collision resolution strategies include
            <strong> chaining</strong> and <strong>open addressing</strong>.
          </p>

          <p className="text-[#333333] text-xl">
            Hashing is widely used in databases, caches, sets, maps, and string matching algorithms like Rabin-Karp.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Hashing allows O(1) average-time access to data.</li>
            <li>Collision handling is crucial for performance.</li>
            <li>Rolling hashes enable efficient string pattern matching.</li>
            <li>Hash-based sets/maps provide fast insert, delete, and lookup operations.</li>
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
                    <th className="px-6 py-3 border">Best Case</th>
                    <th className="px-6 py-3 border">Average Case</th>
                    <th className="px-6 py-3 border">Worst Case</th>
                    <th className="px-6 py-3 border">Space</th>
                  </tr>
                </thead>
                <tbody className="text-center text-lg">
                  <tr>
                    <td className="border px-4 py-3">Hash Table (Chaining)</td>
                    <td>O(1)</td><td>O(1)</td><td>O(n)</td><td>O(n + m)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-3">Hash Table (Open Addressing)</td>
                    <td>O(1)</td><td>O(1)</td><td>O(n)</td><td>O(m)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Rolling Hash / Rabin-Karp</td>
                    <td>O(n + m)</td><td>O(n × m)</td><td>-</td><td>O(1)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-3">Set / Map Operations</td>
                    <td>O(1)</td><td>O(1)</td><td>O(n)</td><td>O(n)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-20 text-center">
          <p className="text-[#555555] text-xl">
            ✨ Understanding hashing techniques helps design efficient data structures and optimize searches.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default HashingOverview;
