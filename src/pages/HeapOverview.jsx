// src/pages/HeapOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HeapOverview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const heapOperations = [
    {
      name: "Insertion",
      desc: "Insert an element and maintain the heap property by performing 'heapify-up'.",
      code: `// Java
heap.add(val);
heapifyUp(heap.size() - 1);

// Python
heapq.heappush(heap, val)`,
    },
    {
      name: "Deletion",
      desc: "Remove the root element and maintain heap property by performing 'heapify-down'.",
      code: `// Java
heap.remove();
heapifyDown(0);

// Python
heapq.heappop(heap)`,
    },
    {
      name: "Peek",
      desc: "Retrieve the root element (max in max-heap, min in min-heap) without removing it.",
      code: `// Java
int root = heap.get(0);

// Python
root = heap[0]`,
    },
    {
      name: "Heapify",
      desc: "Convert an array into a valid heap structure.",
      code: `// Java
buildHeap(arr);

// Python
heapq.heapify(arr)`,
    },
    {
      name: "Traversal",
      desc: "Visit all nodes (commonly level-order).",
      code: `// Java
for(int i=0; i<heap.size(); i++) System.out.println(heap.get(i));

// Python
for val in heap:
    print(val)`,
    },
  ];

  const applications = [
    "Implementing Priority Queues.",
    "Heap Sort algorithm.",
    "Graph algorithms like Dijkstra & Prim.",
    "Efficiently finding k largest/smallest elements.",
    "Scheduling problems and event simulation.",
  ];

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 py-20 bg-[#FFFFFF] text-[#1A1A1A]">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Complete Guide to <span className="text-blue-600">Heap</span> Data Structure
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            A <strong>heap</strong> is a special tree-based data structure satisfying the <strong>heap property</strong>. Heaps are commonly used to implement priority queues.
          </p>
        </motion.div>

        {/* Heap Overview */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> Heap Overview
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            A heap is a <strong>complete binary tree</strong> where the value of each node is either greater than or equal to (max-heap) or less than or equal to (min-heap) its children.
          </p>
          <p className="text-[#333333] text-xl mb-2">
            Key concept: <strong>Heap Property</strong> ensures efficient insertion, deletion, and retrieval of the top element.
          </p>
          <ul className="list-disc list-inside text-[#333333]">
            <li>Max-Heap: Parent greater or equal to  children</li>
            <li>Min-Heap: Parent less or equal to  children</li>
            <li>Complete Binary Tree structure</li>
          </ul>
        </motion.div>

        {/* Heap Operations */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Heap Operations
          </h2>
          <p className="text-[#333333] text-lg mb-4">
            Operations include insertion, deletion, peeking, heapify, and traversal.
          </p>
          {/* Video Placeholder */}
        <div className="w-full h-96 rounded-xl overflow-hidden mb-12 border border-gray-300 shadow-sm flex items-center justify-center bg-gray-100">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/AFPzC2RJOMk?si=-p_dcrz6hhk6SYhD"
            title="Heap Algorithms Tutorial"
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
    <li>Heaps are complete binary trees used to implement priority queues efficiently.</li>
    <li>Max-Heap maintains the largest element at the root, while Min-Heap maintains the smallest.</li>
    <li>Insertion and deletion in a heap are performed in <strong>O(log n)</strong> time.</li>
    <li>Heaps are foundational for Heap Sort and efficient priority-based algorithms.</li>
    <li>Used in scheduling, graph algorithms (like Dijkstra), and memory management.</li>
  </ul>
</motion.div>


          <div className="grid gap-10 md:grid-cols-2">
            {heapOperations.map((op, idx) => (
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
            <Layers size={26} /> Detailed Explanation & Concepts
          </h2>
          <p className="text-[#333333] text-lg mb-3">
            Heaps allow <strong>efficient priority management</strong>. Insertion and deletion maintain heap property via 'heapify' operations. Complete binary tree structure ensures height is minimized, giving O(log n) complexity.
          </p>

          <h3 className="text-xl font-semibold mt-3 mb-2 text-blue-600">Why Heaps?</h3>
          <ul className="list-disc list-inside space-y-2 text-[#333333] text-lg">
            <li><strong>Efficient Access:</strong> Root node always contains highest/lowest priority element.</li>
            <li><strong>Priority Queue Implementation:</strong> Widely used in scheduling, graph algorithms, and event simulation.</li>
            <li><strong>Foundation for Heap Sort:</strong> Sorting algorithm with O(n log n) complexity.</li>
          </ul>
        </motion.div>

        {/* Applications */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl mt-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-yellow-600 flex items-center gap-2 border-b-2 border-yellow-200 pb-2">
            <Info size={26} /> Applications of Heaps
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

export default HeapOverview;
