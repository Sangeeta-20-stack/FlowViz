// src/pages/GraphVisualization.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { graphCodes } from "../data/codes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Algorithms
const algorithms = [
  { key: "bfs", label: "Breadth-First Search" },
  { key: "dfs", label: "Depth-First Search" },
  { key: "dijkstra", label: "Dijkstra's Algorithm" },
  { key: "prim", label: "Prim's Algorithm" },
  { key: "kruskal", label: "Kruskal's Algorithm" },
  { key: "bellmanFord", label: "Bellman-Ford Algorithm" },
  { key: "floydWarshall", label: "Floyd-Warshall Algorithm" },
  { key: "topologicalSort", label: "Topological Sort" },
  { key: "cycleDetection", label: "Cycle Detection" },
  { key: "stronglyConnectedComponents", label: "Strongly Connected Components" },
  { key: "networkFlow", label: "Network Flow (Ford-Fulkerson)" },
];

const langs = ["java", "python", "cpp", "javascript"];
const nodeColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"];

const sampleGraph = {
  nodes: Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: 100 + (i % 5) * 120,
    y: 100 + Math.floor(i / 5) * 150
  })),
  edges: [
    [0, 1], [0, 2], [1, 3], [2, 4],
    [3, 5], [4, 5], [5, 6], [6, 7],
    [6, 8], [7, 9], [8, 9]
  ]
};

const GraphVisualization = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("bfs");
  const [selectedLang, setSelectedLang] = useState("java");
  const [visited, setVisited] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [highlightEdge, setHighlightEdge] = useState(null);
  const [pathEdges, setPathEdges] = useState([]);
  const [traversalPath, setTraversalPath] = useState([]); // <-- stores visited order
  const [isRunning, setIsRunning] = useState(false);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const resetGraph = () => {
    setVisited([]);
    setHighlightEdge(null);
    setCurrentNode(null);
    setPathEdges([]);
    setTraversalPath([]);
    setIsRunning(false);
  };

  // BFS Animation
  const bfs = async () => {
    setIsRunning(true);
    const queue = [0];
    const vis = [];
    const edges = sampleGraph.edges;
    const path = [];
    const traversal = [];

    while (queue.length > 0) {
      const node = queue.shift();
      setCurrentNode(node);

      if (!vis.includes(node)) {
        vis.push(node);
        traversal.push(node);
        setTraversalPath([...traversal]); // <-- update path
        setVisited([...vis]);
        await sleep(500);

        edges.forEach(([u, v]) => {
          if (u === node || v === node) setHighlightEdge([u, v]);
        });
        await sleep(500);
        setHighlightEdge(null);

        const neighbors = edges
          .filter(([u, v]) => u === node || v === node)
          .map(([u, v]) => (u === node ? v : u))
          .filter(n => !vis.includes(n) && !queue.includes(n));

        neighbors.forEach(n => path.push([node, n]));
        setPathEdges([...path]);

        queue.push(...neighbors);
      }
    }
    setCurrentNode(null);
    setIsRunning(false);
  };

  // DFS Animation
  const dfs = async () => {
    setIsRunning(true);
    const stack = [0];
    const vis = [];
    const edges = sampleGraph.edges;
    const path = [];
    const traversal = [];

    while (stack.length > 0) {
      const node = stack.pop();
      setCurrentNode(node);

      if (!vis.includes(node)) {
        vis.push(node);
        traversal.push(node);
        setTraversalPath([...traversal]); // <-- update path
        setVisited([...vis]);
        await sleep(500);

        edges.forEach(([u, v]) => {
          if (u === node || v === node) setHighlightEdge([u, v]);
        });
        await sleep(500);
        setHighlightEdge(null);

        const neighbors = edges
          .filter(([u, v]) => u === node || v === node)
          .map(([u, v]) => (u === node ? v : u))
          .filter(n => !vis.includes(n) && !stack.includes(n));

        neighbors.forEach(n => path.push([node, n]));
        setPathEdges([...path]);

        stack.push(...neighbors.reverse());
      }
    }
    setCurrentNode(null);
    setIsRunning(false);
  };

  const searchFunctions = { bfs, dfs };

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold">Graph Algorithms <span className="text-blue-600">Visualizer</span></h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Visualize graph traversal algorithms with animated nodes, edges, and traversal path.
          </p>
        </div>

        {/* Algorithm Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {algorithms.map(algo => (
            <button
              key={algo.key}
              onClick={() => setSelectedAlgo(algo.key)}
              className={`px-6 py-2 rounded-full font-semibold transition shadow ${selectedAlgo === algo.key ? "bg-blue-600 text-white" : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"}`}
            >
              {algo.label}
            </button>
          ))}
        </div>

        {/* Language Buttons */}
        <div className="flex justify-center gap-3 mb-6">
          {langs.map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-5 py-2 rounded-full font-semibold transition shadow ${selectedLang === lang ? "bg-gray-800 text-white" : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"}`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <pre className="bg-[#1E1E1E] text-green-400 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
              {graphCodes[selectedAlgo][selectedLang]}
            </pre>
          </div>
        </div>

        {/* Graph Visualizer */}
        <div className="relative w-full h-[500px] border border-gray-200 rounded-2xl bg-white shadow-md flex justify-center items-center">
          {sampleGraph.edges.map(([u, v], idx) => {
            const nodeU = sampleGraph.nodes.find(n => n.id === u);
            const nodeV = sampleGraph.nodes.find(n => n.id === v);

            const isPathEdge = pathEdges.some(([a, b]) =>
              (a === u && b === v) || (a === v && b === u)
            );

            const highlight = highlightEdge && ((highlightEdge[0] === u && highlightEdge[1] === v) || (highlightEdge[0] === v && highlightEdge[1] === u));

            const length = Math.sqrt(Math.pow(nodeU.x - nodeV.x, 2) + Math.pow(nodeU.y - nodeV.y, 2));
            const angle = Math.atan2(nodeV.y - nodeU.y, nodeV.x - nodeU.x) * (180 / Math.PI);

            return (
              <motion.div
                key={idx}
                className="absolute border-t-2 origin-left"
                style={{
                  width: length,
                  top: nodeU.y + 25,
                  left: nodeU.x + 25,
                  rotate: `${angle}deg`,
                  borderColor: isPathEdge ? "#F59E0B" : highlight ? "#EF4444" : "#A3A3A3",
                }}
                animate={{ opacity: highlight || isPathEdge ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              />
            );
          })}

          {sampleGraph.nodes.map((node, idx) => {
            const visitedColor = visited.includes(node.id) ? "#EF4444" : nodeColors[idx % nodeColors.length];
            const isCurrent = currentNode === node.id;

            return (
              <motion.div
                key={node.id}
                className="rounded-full flex items-center justify-center text-white font-bold shadow-md absolute"
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: isCurrent ? "#FACC15" : visitedColor,
                  top: node.y,
                  left: node.x,
                }}
                animate={{ scale: isCurrent ? 1.4 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {node.id}
              </motion.div>
            );
          })}
        </div>

        {/* Traversal Path */}
        <div className="mt-6 text-center">
          <h2 className="font-semibold text-lg mb-2">Traversal Path:</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {traversalPath.map((node, idx) => (
              <span key={idx} className="px-3 py-1 bg-yellow-400 text-black rounded-full shadow-md">{node}</span>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={resetGraph} disabled={isRunning} className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 shadow">Reset</button>
          <button onClick={() => searchFunctions[selectedAlgo]()} disabled={isRunning} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 shadow">Run</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GraphVisualization;