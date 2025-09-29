// src/pages/GraphVisualization.jsx
import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import { graphCodes } from "../data/codes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const sampleGraph = {
  nodes: [
    { id: 0, x: 100, y: 100 },
    { id: 1, x: 250, y: 100 },
    { id: 2, x: 400, y: 100 },
    { id: 3, x: 100, y: 250 },
    { id: 4, x: 250, y: 250 },
    { id: 5, x: 400, y: 250 },
    { id: 6, x: 100, y: 400 },
    { id: 7, x: 250, y: 400 },
    { id: 8, x: 400, y: 400 },
  ],
  edges: [
    { from: 0, to: 1, weight: 4 },
    { from: 0, to: 3, weight: 8 },
    { from: 1, to: 2, weight: 7 },
    { from: 1, to: 4, weight: 2 },
    { from: 2, to: 5, weight: 9 },
    { from: 3, to: 4, weight: 7 },
    { from: 3, to: 6, weight: 14 },
    { from: 4, to: 5, weight: 10 },
    { from: 4, to: 7, weight: 4 },
    { from: 5, to: 8, weight: 2 },
    { from: 6, to: 7, weight: 9 },
    { from: 7, to: 8, weight: 11 },
  ]
};

const GraphVisualization = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("bfs");
  const [selectedLang, setSelectedLang] = useState("java");
  const [isRunning, setIsRunning] = useState(false);
  const svgRef = useRef();

  useEffect(() => {
    drawGraph();
  }, []);

  const sleep = (ms) => new Promise(res => setTimeout(res, ms));

  const drawGraph = () => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg.append("g");

    // Draw edges (undirected, no arrows)
    g.selectAll("line")
      .data(sampleGraph.edges)
      .enter()
      .append("line")
      .attr("x1", d => sampleGraph.nodes[d.from].x + 25)
      .attr("y1", d => sampleGraph.nodes[d.from].y + 25)
      .attr("x2", d => sampleGraph.nodes[d.to].x + 25)
      .attr("y2", d => sampleGraph.nodes[d.to].y + 25)
      .attr("stroke", "#A3A3A3")
      .attr("stroke-width", 2)
      .attr("class", "edge");

    // Draw nodes
    g.selectAll("circle")
      .data(sampleGraph.nodes)
      .enter()
      .append("circle")
      .attr("cx", d => d.x + 25)
      .attr("cy", d => d.y + 25)
      .attr("r", 25)
      .attr("fill", "#3B82F6")
      .attr("stroke", "#1E40AF")
      .attr("stroke-width", 2)
      .attr("class", "node");

    // Labels
    g.selectAll("text")
      .data(sampleGraph.nodes)
      .enter()
      .append("text")
      .attr("x", d => d.x + 25)
      .attr("y", d => d.y + 30)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .text(d => d.id);
  };

  // BFS Algorithm
  const bfs = async () => {
    setIsRunning(true);
    const queue = [0];
    const visited = new Set();
    const traversal = [];

    while (queue.length > 0) {
      const node = queue.shift();
      if (!visited.has(node)) {
        visited.add(node);
        traversal.push(node);

        // Animate node highlight
        d3.select(svgRef.current)
          .selectAll("circle")
          .filter(d => d.id === node)
          .transition()
          .duration(500)
          .attr("fill", "#EF4444")
          .attr("r", 30);

        // Animate edges to neighbors
        const neighbors = sampleGraph.edges
          .filter(e => e.from === node || e.to === node)
          .map(e => (e.from === node ? e.to : e.from));

        for (let n of neighbors) {
          if (!visited.has(n) && !queue.includes(n)) {
            d3.select(svgRef.current)
              .selectAll("line")
              .filter(e => (e.from === node && e.to === n) || (e.to === node && e.from === n))
              .transition()
              .duration(500)
              .attr("stroke", "#F59E0B")
              .attr("stroke-width", 4);

            queue.push(n);
          }
        }
        await sleep(500);
      }
    }

    // Display traversal path after completion as 0 → 1 → 3 → ...
    const pathDiv = d3.select("#traversal-path");
    pathDiv.selectAll("*").remove();
    pathDiv.append("span")
      .text(traversal.join(" → "))
      .attr("class", "px-3 py-1 bg-yellow-400 text-black rounded-full shadow-md");

    setIsRunning(false);
  };

  // DFS Algorithm
const dfs = async () => {
  setIsRunning(true);
  const visited = new Set();
  const traversal = [];

  const dfsVisit = async (node) => {
    if (visited.has(node)) return;
    visited.add(node);
    traversal.push(node);

    // Animate node
    d3.select(svgRef.current)
      .selectAll("circle")
      .filter(d => d.id === node)
      .transition()
      .duration(500)
      .attr("fill", "#EF4444")
      .attr("r", 30);

    // Animate edges to neighbors
    const neighbors = sampleGraph.edges
      .filter(e => e.from === node || e.to === node)
      .map(e => (e.from === node ? e.to : e.from));

    for (let n of neighbors) {
      if (!visited.has(n)) {
        d3.select(svgRef.current)
          .selectAll("line")
          .filter(e => (e.from === node && e.to === n) || (e.to === node && e.from === n))
          .transition()
          .duration(500)
          .attr("stroke", "#F59E0B")
          .attr("stroke-width", 4);

        await sleep(500);
        await dfsVisit(n);
      }
    }
  };

  await dfsVisit(0);

  // Display traversal path
  const pathDiv = d3.select("#traversal-path");
  pathDiv.selectAll("*").remove();
  pathDiv.append("span")
    .text(traversal.join(" → "))
    .attr("class", "px-3 py-1 bg-yellow-400 text-black rounded-full shadow-md");

  setIsRunning(false);
};

// Dijkstra's Algorithm
const dijkstra = async () => {
  setIsRunning(true);
  const dist = Array(sampleGraph.nodes.length).fill(Infinity);
  const visited = new Set();
  const prev = Array(sampleGraph.nodes.length).fill(null);
  const traversal = [];

  dist[0] = 0;

  while (visited.size < sampleGraph.nodes.length) {
    // Pick node with smallest distance
    let node = -1;
    let minDist = Infinity;
    for (let i = 0; i < dist.length; i++) {
      if (!visited.has(i) && dist[i] < minDist) {
        minDist = dist[i];
        node = i;
      }
    }
    if (node === -1) break; // disconnected

    visited.add(node);
    traversal.push(node);

    // Animate node
    d3.select(svgRef.current)
      .selectAll("circle")
      .filter(d => d.id === node)
      .transition()
      .duration(500)
      .attr("fill", "#EF4444")
      .attr("r", 30);

    // Update neighbors
    const neighbors = sampleGraph.edges
      .filter(e => e.from === node || e.to === node)
      .map(e => ({
        id: e.from === node ? e.to : e.from,
        weight: e.weight || 1
      }));

    for (let { id: n, weight } of neighbors) {
      if (!visited.has(n) && dist[node] + weight < dist[n]) {
        dist[n] = dist[node] + weight;
        prev[n] = node;

        d3.select(svgRef.current)
          .selectAll("line")
          .filter(e => (e.from === node && e.to === n) || (e.to === node && e.from === n))
          .transition()
          .duration(500)
          .attr("stroke", "#F59E0B")
          .attr("stroke-width", 4);
      }
    }
    await sleep(500);
  }

  // Show traversal path
  const pathDiv = d3.select("#traversal-path");
  pathDiv.selectAll("*").remove();
  pathDiv.append("span")
    .text(traversal.join(" → "))
    .attr("class", "px-3 py-1 bg-yellow-400 text-black rounded-full shadow-md");

  setIsRunning(false);
};

// Prim's Algorithm (Minimum Spanning Tree)
const prim = async () => {
  setIsRunning(true);
  const visited = new Set([0]);
  const edgesInMST = [];
  const traversal = [0];

  while (visited.size < sampleGraph.nodes.length) {
    // Find min edge from visited to unvisited
    let minEdge = null;
    for (let e of sampleGraph.edges) {
      if ((visited.has(e.from) && !visited.has(e.to)) || (visited.has(e.to) && !visited.has(e.from))) {
        if (!minEdge || (e.weight || 1) < (minEdge.weight || 1)) {
          minEdge = e;
        }
      }
    }
    if (!minEdge) break;

    const nextNode = visited.has(minEdge.from) ? minEdge.to : minEdge.from;
    visited.add(nextNode);
    traversal.push(nextNode);
    edgesInMST.push(minEdge);

    // Animate node
    d3.select(svgRef.current)
      .selectAll("circle")
      .filter(d => d.id === nextNode)
      .transition()
      .duration(500)
      .attr("fill", "#EF4444")
      .attr("r", 30);

    // Animate edge
    d3.select(svgRef.current)
      .selectAll("line")
      .filter(e => (e.from === minEdge.from && e.to === minEdge.to) || (e.to === minEdge.from && e.from === minEdge.to))
      .transition()
      .duration(500)
      .attr("stroke", "#F59E0B")
      .attr("stroke-width", 4);

    await sleep(500);
  }

  // Display traversal path
  const pathDiv = d3.select("#traversal-path");
  pathDiv.selectAll("*").remove();
  pathDiv.append("span")
    .text(traversal.join(" → "))
    .attr("class", "px-3 py-1 bg-yellow-400 text-black rounded-full shadow-md");

  setIsRunning(false);
};

  const algoFunctions = {
    bfs,
    dfs,
    dijkstra,
    prim
    // dfs, dijkstra, prim, etc. can be implemented similarly
  };

  const resetGraph = () => {
    drawGraph();
    d3.select("#traversal-path").selectAll("*").remove();
    setIsRunning(false);
  };



  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#F9FAFB] text-[#1A1A1A]">
        <h1 className="text-5xl font-bold text-center mb-8">
          Graph Algorithms <span className="text-blue-600">Visualizer</span>
        </h1>

        {/* Algorithm Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {algorithms.map(algo => (
            <button
              key={algo.key}
              onClick={() => setSelectedAlgo(algo.key)}
              className={`px-5 py-2 rounded-full shadow ${selectedAlgo === algo.key ? "bg-blue-600 text-white" : "bg-white border"}`}
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
              className={`px-5 py-2 rounded-full shadow ${selectedLang === lang ? "bg-gray-800 text-white" : "bg-white border"}`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="bg-white border rounded-xl shadow-md p-6 mb-8 max-w-4xl mx-auto">
          <pre className="bg-[#1E1E1E] text-green-400 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
            {graphCodes[selectedAlgo][selectedLang]}
          </pre>
        </div>

        {/* Graph Area */}
        <div className="flex justify-center mb-6">
          <svg ref={svgRef} width="800" height="500" className="border rounded-xl shadow bg-white"></svg>
        </div>

        {/* Traversal Path */}
        <div id="traversal-path" className="flex justify-center mb-6 text-lg font-semibold"></div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={resetGraph}
            disabled={isRunning}
            className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 shadow"
          >
            Reset
          </button>
          <button
            onClick={() => algoFunctions[selectedAlgo]()}
            disabled={isRunning}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 shadow"
          >
            Run
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GraphVisualization;
