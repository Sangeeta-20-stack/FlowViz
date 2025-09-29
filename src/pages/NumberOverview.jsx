// src/pages/NumberOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NumberOverview = () => {
  const algorithms = [
    {
      name: "Sieve of Eratosthenes",
      desc: "Find all prime numbers up to a given number N efficiently.",
      time: "O(N log log N)",
      space: "O(N)",
      notes: "Classic algorithm to generate primes quickly."
    },
    {
      name: "Euclidean GCD",
      desc: "Computes the greatest common divisor (GCD) of two numbers.",
      time: "O(log min(a,b))",
      space: "O(1)",
      notes: "Fundamental number theory operation used in many algorithms."
    },
    {
      name: "Extended GCD",
      desc: "Finds integers x and y such that ax + by = gcd(a,b).",
      time: "O(log min(a,b))",
      space: "O(1)",
      notes: "Useful for solving linear Diophantine equations and modular inverses."
    },
    {
      name: "Modular Exponentiation",
      desc: "Efficiently computes (a^b) mod m without overflow.",
      time: "O(log b)",
      space: "O(1)",
      notes: "Used in cryptography, modular arithmetic, and number theory."
    },
    {
      name: "Modular Inverse",
      desc: "Computes x such that (a*x) ≡ 1 (mod m), assuming a and m are coprime.",
      time: "O(log m)",
      space: "O(1)",
      notes: "Crucial in modular division and solving congruences."
    },
    {
      name: "Euler’s Totient Function",
      desc: "Counts integers up to N that are coprime with N.",
      time: "O(sqrt(N)) or O(log N) with precomputation",
      space: "O(1)",
      notes: "Important for number theory and cryptographic algorithms."
    },
    {
      name: "Chinese Remainder Theorem",
      desc: "Solves systems of simultaneous congruences with pairwise coprime moduli.",
      time: "O(k log N)",
      space: "O(k)",
      notes: "Helps combine modular equations into a single congruence."
    },
    {
      name: "Pollard’s Rho Factorization",
      desc: "Efficient probabilistic algorithm to factorize large integers.",
      time: "O(N^0.25) expected",
      space: "O(1)",
      notes: "Useful for integer factorization and cryptography."
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
            Guide to <span className="text-blue-600">Number Theory Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Number theory algorithms provide efficient solutions for problems involving primes, divisibility, modular arithmetic, and integer factorization.
          </p>
        </motion.div>

        {/* What is Number Theory? */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> What is Number Theory?
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Number theory studies properties and relationships of integers. Algorithms from number theory efficiently solve problems related to primes, GCDs, modular arithmetic, and combinatorial properties of numbers.
          </p>
          <p className="text-[#333333] text-xl">
            They are widely applied in cryptography, coding theory, competitive programming, and mathematical problem solving.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Number theory algorithms solve problems with integers efficiently.</li>
            <li>Modular arithmetic and GCD computations are foundational.</li>
            <li>Prime generation and factorization are key for cryptography.</li>
            <li>Understanding these algorithms helps in combinatorics, algebra, and coding challenges.</li>
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
            ✨ Master number theory algorithms to solve integer-based problems efficiently and apply them in cryptography and competitive programming.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default NumberOverview;
