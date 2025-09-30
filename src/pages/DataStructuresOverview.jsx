import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Layers,
  Info,
  Clock,
  Sparkles,
  BarChart,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DataStructuresOverview = () => {
  const structures = [
    {
      name: "Array",
      desc: "An array is a collection of elements stored in contiguous memory. It allows fast random access by index but fixed size makes insertion/deletion costly.",
      time: "Access O(1), Search O(n), Insert/Delete O(n)",
      space: "O(n)",
      notes: "Best for fixed-size collections where quick access is important.",
      diagram: "https://media.geeksforgeeks.org/wp-content/uploads/20220721080308/array.png",
    },
    {
      name: "Linked List",
      desc: "A linked list is a linear collection of nodes where each node contains data and a pointer to the next node. Dynamic size allows efficient insertions/deletions.",
      time: "Access O(n), Insert/Delete O(1) at head",
      space: "O(n)",
      notes: "Ideal for dynamic data where elements are frequently added/removed.",
      diagram: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg",
    },
    {
      name: "Stack",
      desc: "Stack is a linear structure that follows LIFO (Last In First Out). Operations happen only at the top of the stack.",
      time: "Push O(1), Pop O(1), Search O(n)",
      space: "O(n)",
      notes: "Used in recursion, undo operations, expression evaluation, and parsing.",
      diagram: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/300px-Data_stack.svg.png",
    },
    {
      name: "Queue",
      desc: "Queue is a linear structure following FIFO (First In First Out). Insertions at rear and deletions at front.",
      time: "Enqueue O(1), Dequeue O(1), Search O(n)",
      space: "O(n)",
      notes: "Used in scheduling, BFS traversal, and buffering.",
      diagram:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213111946/fifo-property-in-Queue.png",
    },
    {
      name: "Tree",
      desc: "A hierarchical structure consisting of nodes with a root node and child nodes forming parent-child relationships.",
      time: "Search/Insert/Delete O(log n) for balanced, O(n) for skewed trees",
      space: "O(n)",
      notes: "Binary Trees, Binary Search Trees, AVL Trees, and Heaps are common examples.",
      diagram: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_tree.svg",
    },
    {
      name: "Graph",
      desc: "Graphs are sets of vertices connected by edges. Can be directed/undirected, weighted/unweighted. Useful in modeling networks and relationships.",
      time: "Depends on representation: Adjacency List O(V+E), Matrix O(V²)",
      space: "O(V+E) or O(V²)",
      notes: "Used in networking, social media, pathfinding, and circuit design.",
      diagram: "https://miro.medium.com/1*5vB6OhUOTs-fmaDrO-KCKQ.jpeg",
    },
    {
      name: "Hash Table",
      desc: "Stores key-value pairs and allows fast average O(1) lookup, insertion, and deletion using hash functions.",
      time: "Search/Insert/Delete O(1) avg, O(n) worst-case",
      space: "O(n)",
      notes: "Efficient for lookups; collision handling is necessary.",
      diagram: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221220111537/ComponentsofHashing.png",
    },
    {
      name: "Heap",
      desc: "A heap is a specialized tree-based structure satisfying the heap property. Max-heap or min-heap stores highest or lowest at the root.",
      time: "Insert/Delete O(log n), Access top O(1)",
      space: "O(n)",
      notes: "Used in priority queues, heapsort, and scheduling algorithms.",
      diagram: "https://youcademy.org/binary-heap-data-structure/min-max-heap.png",
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
            Guide to <span className="text-blue-600">Data Structures</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            A data structure is a specialized format to organize, process, retrieve, and store data efficiently. Choosing the right data structure is crucial for optimizing performance of algorithms and applications.
          </p>
        </motion.div>

        {/* What are Data Structures? */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> What are Data Structures?
          </h2>
          <p className="text-[#333333] text-xl mb-3">
            Data structures are containers that organize and store data so that operations like access, insertion, deletion, and traversal can be performed efficiently.
          </p>
          <p className="text-[#333333] text-xl">
            Examples include <strong>Arrays</strong>, <strong>Linked Lists</strong>, <strong>Stacks</strong>, <strong>Queues</strong>, <strong>Trees</strong>, <strong>Graphs</strong>, <strong>Hash Tables</strong>, and <strong>Heaps</strong>.
          </p>
        </motion.div>

        {/* Classification */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Classification of Data Structures
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li><strong>Linear Data Structures:</strong> Array, Linked List, Stack, Queue</li>
            <li><strong>Non-Linear Data Structures:</strong> Tree, Graph, Heap, Trie</li>
            <li><strong>Hash-Based Data Structures:</strong> Hash Tables</li>
            <li><strong>Abstract Data Types:</strong> Sets, Maps, Priority Queues</li>
          </ul>
        </motion.div>

        {/* Structure Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {structures.map((ds, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#1A1A1A]">{ds.name}</h2>
              <p className="text-[#555555] mb-3 text-lg">{ds.desc}</p>

              <div className="bg-gray-50 border p-3 rounded mb-3 text-center font-mono text-sm">
                <img src={ds.diagram} alt={`${ds.name} Diagram`} className="mx-auto w-full h-auto rounded" />
              </div>

              <div className="flex flex-col gap-2 text-lg">
                <span className="flex items-center gap-2">
                  <Clock size={18} className="text-blue-500" /> <strong>Time Complexity:</strong> {ds.time}
                </span>
                <span className="flex items-center gap-2">
                  <Layers size={18} className="text-green-500" /> <strong>Space Complexity:</strong> {ds.space}
                </span>
                <span className="flex items-center gap-2">
                  <Info size={18} className="text-orange-500" /> <strong>Notes:</strong> {ds.notes}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Complexity Table */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-16">
          <h2 className="text-3xl font-semibold mb-4 text-cyan-600 flex items-center gap-2 border-b-2 border-cyan-200 pb-2">
            <BarChart size={26} /> Complexity Analysis
          </h2>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-2xl shadow-md p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-cyan-100 text-cyan-800 font-semibold text-lg">
                  <tr>
                    <th className="px-4 py-2 border">Data Structure</th>
                    <th className="px-4 py-2 border">Time Complexity</th>
                    <th className="px-4 py-2 border">Space Complexity</th>
                    <th className="px-4 py-2 border">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-center text-lg">
                  {structures.map((ds, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "" : "bg-gray-50"}>
                      <td className="border px-4 py-2">{ds.name}</td>
                      <td>{ds.time}</td>
                      <td>{ds.space}</td>
                      <td>{ds.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-12 text-center">
          <p className="text-[#555555] text-xl">
            ✨ Understanding data structures is essential for writing efficient code and mastering algorithms.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default DataStructuresOverview;
