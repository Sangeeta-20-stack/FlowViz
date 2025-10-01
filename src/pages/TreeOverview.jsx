// src/pages/TreeOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TreeOverview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const treeTypes = [
    {
      type: "Binary Tree",
      desc: "Each node has at most two children, referred to as left and right child.",
    },
    {
      type: "Binary Search Tree (BST)",
      desc: "A binary tree where left child nodes are smaller and right child nodes are greater than the parent node.",
    },
    {
      type: "AVL Tree",
      desc: "A self-balancing BST where the heights of left and right subtrees differ by at most 1.",
    },
    {
      type: "N-ary Tree",
      desc: "Each node can have up to N children. Commonly used to represent hierarchical data.",
    },
    {
      type: "Segment Tree",
      desc: "Used for range query problems. Each node represents an interval or segment of the array.",
    },
  ];

  const treeOperations = [
    {
      name: "Insertion",
      desc: "Add a node to the tree while maintaining tree properties (e.g., BST property).",
      code: `// Java
void insert(Node root, int value) { /* BST insertion logic */ }

// Python
def insert(root, value):
    # BST insertion logic
    pass`,
    },
    {
      name: "Deletion",
      desc: "Remove a node from the tree while maintaining tree properties.",
      code: `// Java
void delete(Node root, int value) { /* BST deletion logic */ }

// Python
def delete(root, value):
    # BST deletion logic
    pass`,
    },
    {
      name: "Traversal",
      desc: "Visit nodes in a specific order: Preorder, Inorder, Postorder, Level-order (BFS).",
      code: `// Java
void inorder(Node root) { /* Inorder traversal */ }

// Python
def inorder(root):
    # Inorder traversal
    pass`,
    },
    {
      name: "Searching",
      desc: "Find a value in the tree, usually using BST property for efficiency.",
      code: `// Java
boolean search(Node root, int value) { /* BST search */ }

// Python
def search(root, value):
    # BST search
    pass`,
    },
    {
      name: "Height / Depth",
      desc: "Calculate the height (longest path from root to leaf) of the tree.",
      code: `// Java
int height(Node root) { /* height calculation */ }

// Python
def height(root):
    # height calculation
    pass`,
    },
  ];

  const applications = [
    "Hierarchical data representation (folders, org charts).",
    "Binary Search Tree: efficient searching, insertion, deletion.",
    "Expression trees in compilers and calculators.",
    "Segment trees and Fenwick trees for range queries.",
    "Decision trees in AI/ML.",
    "Networking routing and shortest path algorithms.",
  ];

  return (
    <>
      <Navbar />
      <section className="px-4 sm:px-8 md:px-16 lg:px-20 py-16 sm:py-20 bg-[#FFFFFF] text-[#1A1A1A]">

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Complete Guide to <span className="text-blue-600">Tree</span> Data Structure
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            A <strong>tree</strong> is a hierarchical data structure consisting of nodes, with one node designated as the root. Each node can have child nodes.
          </p>
        </motion.div>

        {/* Tree Overview & Types */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
            <Cpu size={26} /> Tree Overview
          </h2>
          <p className="text-[#333333] text-xl mb-4">
            Trees are widely used in computer science to represent hierarchical relationships. Nodes store data, and edges represent connections between parent and child nodes.
          </p>

          <h3 className="text-2xl font-semibold mb-2 text-blue-600">Types of Trees:</h3>
          <ul className="list-disc list-inside space-y-2 text-[#333333] text-lg">
            {treeTypes.map((t, idx) => (
              <li key={idx}>
                <strong>{t.type}:</strong> {t.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tree Operations */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Tree Operations
          </h2>
          <p className="text-[#333333] text-lg mb-4">
    Below are the main operations performed on a stack. The video demonstrates Push, Pop, Peek, isEmpty, isFull, and Display in action.
  </p>

 <div className="w-full h-96 rounded-xl overflow-hidden mb-8 border border-gray-300 shadow-sm flex items-center justify-center bg-gray-100">
  <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/RASniJbiWaE?si=_wWog6rmtYtiXb1P"
  title="Stack Operations Video"
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
    <li>Trees are <strong>hierarchical data structures</strong> with a root node and child nodes.</li>
    <li>Core operations include <strong>traversal</strong> (inorder, preorder, postorder), <strong>insertion</strong>, <strong>deletion</strong>, and <strong>searching</strong>.</li>
    <li>Binary Trees, Binary Search Trees (BST), AVL Trees, and Heaps are common variants for different use cases.</li>
    <li>Trees are ideal for <strong>hierarchical data representation</strong>, like file systems, organization charts, and XML/JSON parsing.</li>
    <li>Used extensively in implementing search algorithms, priority queues, and graph adjacency representations.</li>
  </ul>
</motion.div>

         <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2">

            {treeOperations.map((op, idx) => (
              <motion.div key={idx} variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: idx * 0.1 }} className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-6">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">{op.name}</h3>
                <p className="text-[#555555] mb-3 text-lg">{op.desc}</p>
                <pre className="bg-gray-100 p-3 rounded-lg overflow-auto text-sm text-[#111111]">
                  {op.code}
                </pre>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl mt-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-yellow-600 flex items-center gap-2 border-b-2 border-yellow-200 pb-2">
            <Info size={26} /> Applications of Tree
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

export default TreeOverview;
