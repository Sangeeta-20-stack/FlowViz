// src/pages/ArrayOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ArrayOverview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const arrayOperations = [
    {
      name: "Access",
      desc: "Retrieve an element at a specific index in constant time. Arrays allow direct access.",
      code: `// Java
int val = arr[index];

// Python
val = arr[index]`,
    },
    {
      name: "Insertion",
      desc: "Insert element at a specific index. May require shifting subsequent elements.",
      code: `// Java
for(int i=n; i>index; i--){
    arr[i] = arr[i-1];
}
arr[index] = value;

// Python
arr.insert(index, value)`,
    },
    {
      name: "Deletion",
      desc: "Remove element at a specific index, shifting subsequent elements.",
      code: `// Java
for(int i=index; i<n-1; i++){
    arr[i] = arr[i+1];
}
n--;

// Python
arr.pop(index)`,
    },
    {
      name: "Traversal",
      desc: "Visit each element in the array sequentially.",
      code: `// Java
for(int i=0; i<n; i++) System.out.println(arr[i]);

// Python
for val in arr:
    print(val)`,
    },
    {
      name: "Search",
      desc: "Find an element using linear or binary search if sorted.",
      code: `// Java
for(int i=0;i<n;i++){
    if(arr[i]==key) return i;
}

// Python
for i, val in enumerate(arr):
    if val == key:
        return i`,
    },
  ];

  const applications = [
    "Storing data sequentially in memory.",
    "Used in hash tables as underlying storage.",
    "Dynamic arrays are foundation of lists in Python, ArrayList in Java.",
    "Matrix representation in 2D arrays.",
    "Implementing other data structures like Stack, Queue, Heap.",
    "Efficient indexing and random access of elements.",
  ];

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 py-20 bg-[#FFFFFF] text-[#1A1A1A]">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Complete Guide to <span className="text-blue-600">Array</span> Data Structure
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            An <strong>array</strong> is a <strong>linear data structure</strong> storing elements at contiguous memory locations. Arrays support <strong>index-based access</strong>.
          </p>
        </motion.div>

        {/* Array Overview */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> Array Overview
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Arrays are <strong>linear and contiguous</strong> memory structures. They can be <strong>fixed-size (static)</strong> or <strong>dynamic</strong>.
          </p>
          <p className="text-[#333333] text-xl mb-2">
            Key concept: <strong>Index-based Access</strong> allows retrieving any element in <strong>O(1)</strong> time.
          </p>
          <p className="text-[#333333] text-xl mt-2">
            Common types:
          </p>
          <ul className="list-disc list-inside text-[#333333]">
            <li>One-dimensional arrays</li>
            <li>Two-dimensional arrays / matrices</li>
            <li>Dynamic arrays (e.g., ArrayList in Java, list in Python)</li>
          </ul>
        </motion.div>

        {/* Array Operations with video */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Array Operations
          </h2>
          <p className="text-[#333333] text-lg mb-4">
            Common operations include accessing, inserting, deleting, traversing, and searching elements.
          </p>

          <div className="w-full h-96 rounded-xl overflow-hidden mb-8 border border-gray-300 shadow-sm flex items-center justify-center bg-gray-100">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lIXV_hHdokg?si=kqXWQXbtpK28UKJy"
              title="Array Operations Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            />
          </div>

          {/* Key Takeaways */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm"
>
  <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
    <Sparkles size={26} /> Key Takeaways
  </h2>
  <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
    <li>Arrays store elements in contiguous memory locations.</li>
    <li>Index-based access allows O(1) retrieval of elements.</li>
    <li>Insertion and deletion may require shifting elements.</li>
    <li>Dynamic arrays support automatic resizing.</li>
    <li>Arrays form the foundation for other data structures like Stack, Queue, and Heap.</li>
    <li>Ideal for situations requiring fast access and sequential storage.</li>
  </ul>
</motion.div>


          <div className="grid gap-10 md:grid-cols-2">
            {arrayOperations.map((op, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">{op.name}</h3>
                <p className="text-[#555555] mb-3 text-lg">{op.desc}</p>
                <pre className="bg-gray-100 p-3 rounded-lg overflow-auto text-sm text-[#111111]">
                  {op.code}
                </pre>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Explanation */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700 flex items-center gap-2 border-b-2 border-gray-300 pb-2">
            <Layers size={26} /> Detailed Explanation & Access Concept
          </h2>

          <p className="text-[#333333] text-lg mb-3">
            Arrays provide <strong>direct access</strong> via indices. Insertion or deletion may require shifting elements. They are ideal for fixed-size collections or when fast access is required.
          </p>

          <h3 className="text-xl font-semibold mt-3 mb-2 text-blue-600">Why Arrays?</h3>
          <ul className="list-disc list-inside space-y-2 text-[#333333] text-lg">
            <li><strong>Fast Access:</strong> Elements can be accessed directly using indices.</li>
            <li><strong>Memory-efficient:</strong> Contiguous memory allocation improves cache performance.</li>
            <li><strong>Foundation for other DS:</strong> Stacks, Queues, Heaps, and Hash Tables often rely on arrays.</li>
          </ul>
        </motion.div>

            {/* Applications */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl mt-12 shadow-sm">
            <h2 className="text-3xl font-semibold mb-3 text-yellow-600 flex items-center gap-2 border-b-2 border-yellow-200 pb-2">
                <Info size={26} /> Applications of Arrays
            </h2>
            <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
                {applications.map((app, idx) => (
                <li key={idx}>{app}</li>
                ))}
            </ul>
            </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default ArrayOverview;
