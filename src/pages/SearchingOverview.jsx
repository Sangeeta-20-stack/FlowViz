// src/pages/SearchingOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SearchingOverview = () => {
  // Add diagram URLs to each algorithm
const algorithms = [
  {
    name: "Linear Search",
    desc: "Checks each element in the list sequentially until the target is found.",
    time: "O(n), Best: O(1)",
    space: "O(1)",
    notes: "Simple but inefficient for large datasets.",
    diagram: "https://sushrutkuchik.wordpress.com/wp-content/uploads/2020/05/linear_search.gif?w=438",
  },
  {
    name: "Binary Search",
    desc: "Divides a sorted array into halves to find the target element efficiently.",
    time: "O(log n), Best: O(1)",
    space: "O(1)",
    notes: "Requires the array to be sorted.",
    diagram: "https://miro.medium.com/0*Cw4uBeNwbETaYM05.gif",
  },
  {
    name: "Jump Search",
    desc: "Checks elements at fixed intervals and then performs linear search within the block.",
    time: "O(√n)",
    space: "O(1)",
    notes: "Good for sorted arrays, reduces number of comparisons.",
    diagram: "https://stackabuse.s3.amazonaws.com/media/jump-search-in-java-1.gif",
  },
  {
    name: "Interpolation Search",
    desc: "Estimates the position of the target based on the value distribution.",
    time: "O(log log n), Worst: O(n)",
    space: "O(1)",
    notes: "Efficient for uniformly distributed sorted data.",
    diagram: "https://iq.opengenus.org/content/images/2021/11/ipsrch.svg",
  },
  {
    name: "Exponential Search",
    desc: "Finds a range where the element may exist, then applies binary search.",
    time: "O(log n)",
    space: "O(1)",
    notes: "Works efficiently on unbounded or large sorted arrays.",
    diagram: "https://www.baeldung.com/wp-content/uploads/sites/4/2022/06/exponential_search_example.jpg",
  },
  {
    name: "Ternary Search",
    desc: "Divides a sorted array into three parts and recursively searches in the appropriate segment.",
    time: "O(log₃ n)",
    space: "O(1)",
    notes: "Less common than binary search but similar concept.",
    diagram: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYVnQLrsgNpkVhCKaoNIfauQCslJnKWTiMqHw7A0zo6w7LoOykW4al8wBfWM7He8t7o4JcQhkDKrtp4YvlwZh7CcMfqY2ARoBKoyPAqu151N8m63rGEy29_-0QZn2YoVCYbMEk9xIegK-u/s1600/Ternary+search.png",
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
            Guide to <span className="text-blue-600">Searching Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Searching algorithms help locate specific elements within data structures efficiently.
            Different strategies are suited for sorted or unsorted datasets, improving computational efficiency.
          </p>
        </motion.div>

  {/* What is Searching? */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
>
  <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
    <Cpu size={26} /> What is Searching?
  </h2>

  <p className="text-[#333333] text-xl mb-3">
    Searching is the process of finding a target element within a data structure like an array or list. 
    Efficient searching is essential for fast data retrieval in applications, databases, and algorithms.
  </p>

  <p className="text-[#333333] text-xl mb-3">
    Common types include <strong>Linear Search</strong> for unsorted data and <strong>Binary Search</strong> for sorted data. Advanced variants like Jump, Interpolation, and Exponential searches optimize performance in different scenarios.
  </p>

  <p className="text-[#333333] text-xl">
    Applications range from database queries and text search to pathfinding in graphs and real-time systems.
  </p>
</motion.div>


        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Linear search is simple but inefficient for large datasets.</li>
            <li>Binary and other advanced searches require sorted arrays.</li>
            <li>Jump, Interpolation, and Exponential searches optimize comparisons.</li>
            <li>Choice of algorithm depends on data size, ordering, and distribution.</li>
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
                    <th className="px-6 py-3 border">Best Case</th>
                    <th className="px-6 py-3 border">Average Case</th>
                    <th className="px-6 py-3 border">Worst Case</th>
                    <th className="px-6 py-3 border">Space</th>
                  </tr>
                </thead>
                <tbody className="text-center text-lg">
                  <tr>
                    <td className="border px-4 py-3">Linear Search</td>
                    <td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(1)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-3">Binary Search</td>
                    <td>O(1)</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Jump Search</td>
                    <td>O(1)</td><td>O(√n)</td><td>O(√n)</td><td>O(1)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-3">Interpolation Search</td>
                    <td>O(1)</td><td>O(log log n)</td><td>O(n)</td><td>O(1)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Exponential Search</td>
                    <td>O(1)</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-3">Ternary Search</td>
                    <td>O(1)</td><td>O(log₃ n)</td><td>O(log₃ n)</td><td>O(1)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-20 text-center">
          <p className="text-[#555555] text-xl">
            ✨ Understand searching techniques and choose the right strategy for efficient data retrieval.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default SearchingOverview;
