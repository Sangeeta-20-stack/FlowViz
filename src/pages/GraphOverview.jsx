// src/pages/GraphOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GraphOverview = () => {
  const graphAlgos = [
    {
      category: "Traversal Algorithms",
      algorithms: [
        {
          name: "BFS (Breadth-First Search)",
          desc: "Explores the graph level by level using a queue.",
          time: "O(V + E)",
          space: "O(V)",
          notes: "Finds shortest path in unweighted graphs.",
        },
        {
          name: "DFS (Depth-First Search)",
          desc: "Explores as deep as possible before backtracking using a stack or recursion.",
          time: "O(V + E)",
          space: "O(V)",
          notes: "Useful for topological sorting and cycle detection.",
        },
      ],
    },
    {
      category: "Shortest Path Algorithms",
      algorithms: [
        {
          name: "Dijkstra's Algorithm",
          desc: "Finds shortest paths from source to all nodes in a weighted graph with non-negative edges.",
          time: "O(V^2) or O(E + V log V) with heap",
          space: "O(V)",
          notes: "Does not work with negative weight edges.",
        },
        {
          name: "Bellman-Ford Algorithm",
          desc: "Finds shortest paths and detects negative cycles in graphs with negative edges.",
          time: "O(V * E)",
          space: "O(V)",
          notes: "Slower than Dijkstra but handles negative weights.",
        },
        {
          name: "Floyd-Warshall Algorithm",
          desc: "Finds shortest paths between all pairs of nodes.",
          time: "O(V^3)",
          space: "O(V^2)",
          notes: "Good for dense graphs and small V.",
        },
      ],
    },
    {
      category: "Minimum Spanning Tree (MST) Algorithms",
      algorithms: [
        {
          name: "Prim's Algorithm",
          desc: "Grows the MST by adding minimum weight edges one at a time.",
          time: "O(V^2) or O(E log V) with heap",
          space: "O(V)",
          notes: "Starts from any node and gradually spans all nodes.",
        },
        {
          name: "Kruskal's Algorithm",
          desc: "Adds edges in increasing order of weight, avoiding cycles.",
          time: "O(E log E)",
          space: "O(V)",
          notes: "Uses Union-Find to detect cycles.",
        },
      ],
    },
    {
      category: "Other Graph Algorithms",
      algorithms: [
        {
          name: "Topological Sorting",
          desc: "Linear ordering of nodes in a DAG such that for every edge u→v, u comes before v.",
          time: "O(V + E)",
          space: "O(V)",
          notes: "Used in task scheduling and prerequisites resolution.",
        },
        {
          name: "Cycle Detection",
          desc: "Detects cycles in directed or undirected graphs.",
          time: "O(V + E)",
          space: "O(V)",
          notes: "Important for validating DAGs or dependencies.",
        },
        {
          name: "Strongly Connected Components (SCC)",
          desc: "Finds maximal sets of nodes in a directed graph that reach each other.",
          time: "O(V + E)",
          space: "O(V)",
          notes: "Kosaraju's or Tarjan's algorithm are common methods.",
        },
        {
          name: "Network Flow (Ford-Fulkerson)",
          desc: "Computes maximum flow in a network.",
          time: "O(E * max_flow)",
          space: "O(V + E)",
          notes: "Used in matching, routing, and network optimization.",
        },
      ],
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
            Guide to <span className="text-blue-600">Graph Algorithms</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Graph algorithms are designed to solve problems related to graphs—networks of nodes connected by edges. 
            They are used for traversal, shortest paths, network flows, minimum spanning trees, and more.
          </p>
        </motion.div>

 {/* What is Graph? */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-12 shadow-sm"
>
  <h2 className="text-3xl font-semibold mb-3 text-blue-600 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
    <Cpu size={26} /> What is Graph?
  </h2>
  <p className="text-[#333333] text-xl mb-4">
    A <strong>graph</strong> is a data structure consisting of nodes (called <strong>vertices</strong>) connected by edges. Graphs are used to model networks, relationships, dependencies, and pathways in various applications such as routing, social networks, and recommendation systems.
  </p>

  <h3 className="text-2xl font-semibold mb-2 text-[#1A1A1A]">Components of a Graph:</h3>
  <ul className="list-disc list-inside space-y-2 text-[#333333] text-xl">
    <li><strong>Vertices (Nodes):</strong> The fundamental units or points in a graph.</li>
    <li><strong>Edges (Links):</strong> Connections between vertices. Can be directed or undirected.</li>
    <li><strong>Weight:</strong> Optional value associated with an edge, representing cost, distance, or capacity.</li>
    <li><strong>Degree:</strong> Number of edges connected to a vertex.</li>
    <li><strong>Types of Graphs:</strong> 
      <ul className="list-disc list-inside ml-6">
        <li>Directed / Undirected</li>
        <li>Weighted / Unweighted</li>
        <li>Simple / Multigraph</li>
        <li>Connected / Disconnected</li>
      </ul>
    </li>
  </ul>
</motion.div>



        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Graphs model networks, dependencies, and relationships.</li>
            <li>Traversal algorithms (BFS/DFS) explore nodes and edges efficiently.</li>
            <li>Shortest path algorithms optimize distances in weighted graphs.</li>
            <li>MST algorithms find minimum cost connections between all nodes.</li>
            <li>Graph choice depends on problem type: traversal, optimization, or flow.</li>
          </ul>
        </motion.div>

        {/* Algorithm Categories */}
        {graphAlgos.map((category, idx) => (
          <motion.div key={idx} variants={fadeInUp} initial="hidden" animate="visible" className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600 border-b-2 border-blue-200 pb-2">{category.category}</h2>
            <div className="grid gap-10 md:grid-cols-2">
              {category.algorithms.map((algo, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-8"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-[#1A1A1A]">{algo.name}</h3>
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
          </motion.div>
        ))}

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
          <tr>
            <td className="border px-4 py-3">BFS</td>
            <td>O(V + E)</td>
            <td>O(V)</td>
            <td>Level-wise traversal, finds shortest path in unweighted graphs</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-3">DFS</td>
            <td>O(V + E)</td>
            <td>O(V)</td>
            <td>Depth-wise traversal, useful for cycle detection & topological sorting</td>
          </tr>
          <tr>
            <td className="border px-4 py-3">Dijkstra</td>
            <td>O(V^2) or O(E + V log V) with heap</td>
            <td>O(V)</td>
            <td>Shortest path for non-negative weighted graphs</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-3">Bellman-Ford</td>
            <td>O(V * E)</td>
            <td>O(V)</td>
            <td>Handles negative weights, detects negative cycles</td>
          </tr>
          <tr>
            <td className="border px-4 py-3">Floyd-Warshall</td>
            <td>O(V^3)</td>
            <td>O(V^2)</td>
            <td>All-pairs shortest paths, best for dense graphs</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-3">Prim</td>
            <td>O(V^2) or O(E log V) with heap</td>
            <td>O(V)</td>
            <td>Minimum spanning tree using node expansion</td>
          </tr>
          <tr>
            <td className="border px-4 py-3">Kruskal</td>
            <td>O(E log E)</td>
            <td>O(V)</td>
            <td>Minimum spanning tree using edge selection</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-3">Topological Sorting</td>
            <td>O(V + E)</td>
            <td>O(V)</td>
            <td>Linear ordering of nodes in a DAG</td>
          </tr>
          <tr>
            <td className="border px-4 py-3">Cycle Detection</td>
            <td>O(V + E)</td>
            <td>O(V)</td>
            <td>Detects cycles in directed/undirected graphs</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-3">SCC (Kosaraju/Tarjan)</td>
            <td>O(V + E)</td>
            <td>O(V)</td>
            <td>Finds strongly connected components in directed graphs</td>
          </tr>
          <tr>
            <td className="border px-4 py-3">Ford-Fulkerson (Network Flow)</td>
            <td>O(E * max_flow)</td>
            <td>O(V + E)</td>
            <td>Computes maximum flow in a network</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</motion.div>


        {/* Footer Note */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mt-20 text-center">
          <p className="text-[#555555] text-xl">
            ✨ Understand graph algorithms and choose the right strategy for efficient graph-based problem solving.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default GraphOverview;
