// src/pages/GraphOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Info, Clock, Sparkles, BarChart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GraphOverview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
          code: `// Java
bfs(graph, startNode);

// Python
from collections import deque
def bfs(graph, start):
    visited = set()
    queue = deque([start])
    while queue:
        node = queue.popleft()
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                queue.append(neighbor)`,
        },
        {
          name: "DFS (Depth-First Search)",
          desc: "Explores as deep as possible before backtracking using a stack or recursion.",
          time: "O(V + E)",
          space: "O(V)",
          notes: "Useful for topological sorting and cycle detection.",
          code: `// Java
dfs(graph, startNode);

// Python
def dfs(graph, node, visited=set()):
    visited.add(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)`,
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
          code: `// Java
dijkstra(graph, source);

// Python
import heapq
def dijkstra(graph, start):
    heap = [(0, start)]
    dist = {start: 0}
    while heap:
        d, node = heapq.heappop(heap)
        for neighbor, weight in graph[node]:
            if neighbor not in dist or d + weight < dist[neighbor]:
                dist[neighbor] = d + weight
                heapq.heappush(heap, (dist[neighbor], neighbor))`,
        },
        {
          name: "Bellman-Ford Algorithm",
          desc: "Finds shortest paths and detects negative cycles in graphs with negative edges.",
          time: "O(V * E)",
          space: "O(V)",
          notes: "Handles negative weights.",
          code: `// Java
bellmanFord(graph, source);

// Python
def bellman_ford(graph, start):
    dist = {v: float('inf') for v in graph}
    dist[start] = 0
    for _ in range(len(graph) - 1):
        for u in graph:
            for v, w in graph[u]:
                if dist[u] + w < dist[v]:
                    dist[v] = dist[u] + w`,
        },
        {
          name: "Floyd-Warshall Algorithm",
          desc: "Finds shortest paths between all pairs of nodes.",
          time: "O(V^3)",
          space: "O(V^2)",
          notes: "Good for dense graphs and small V.",
          code: `// Java
floydWarshall(graph);

// Python
def floyd_warshall(graph):
    dist = {u:{v:float('inf') for v in graph} for u in graph}
    for u in graph:
        dist[u][u] = 0
        for v, w in graph[u]:
            dist[u][v] = w
    for k in graph:
        for i in graph:
            for j in graph:
                dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j])`,
        },
      ],
    },
    {
      category: "Minimum Spanning Tree (MST) Algorithms",
      algorithms: [
        {
          name: "Prim's Algorithm",
          desc: "Grows MST by adding minimum weight edges one at a time.",
          time: "O(V^2) or O(E log V) with heap",
          space: "O(V)",
          notes: "Starts from any node.",
          code: `// Java
primMST(graph);

// Python
import heapq
def primMST(graph):
    visited = set()
    heap = [(0, 0)]
    while heap:
        w, u = heapq.heappop(heap)
        if u not in visited:
            visited.add(u)
            for v, weight in graph[u]:
                if v not in visited:
                    heapq.heappush(heap, (weight, v))`,
        },
        {
          name: "Kruskal's Algorithm",
          desc: "Adds edges in increasing order of weight avoiding cycles.",
          time: "O(E log E)",
          space: "O(V)",
          notes: "Uses Union-Find to detect cycles.",
          code: `// Java
kruskalMST(graph);

// Python
def kruskalMST(edges, n):
    parent = [i for i in range(n)]
    def find(u):
        while parent[u] != u:
            parent[u] = parent[parent[u]]
            u = parent[u]
        return u
    edges.sort(key=lambda x: x[2])
    mst = []
    for u,v,w in edges:
        if find(u) != find(v):
            mst.append((u,v,w))
            parent[find(u)] = find(v)`,
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
          notes: "Used in task scheduling and dependencies.",
          code: `// Java
topoSort(graph);

// Python
def topoSort(graph):
    visited, stack = set(), []
    def dfs(u):
        visited.add(u)
        for v in graph[u]:
            if v not in visited:
                dfs(v)
        stack.append(u)
    for node in graph:
        if node not in visited:
            dfs(node)
    return stack[::-1]`,
        },
        {
          name: "Cycle Detection",
          desc: "Detects cycles in directed or undirected graphs.",
          time: "O(V + E)",
          space: "O(V)",
          notes: "Important for DAG validation.",
          code: `// Java
detectCycle(graph);

// Python
def detectCycle(graph):
    visited, recStack = set(), set()
    def dfs(u):
        visited.add(u)
        recStack.add(u)
        for v in graph[u]:
            if v not in visited:
                if dfs(v): return True
            elif v in recStack:
                return True
        recStack.remove(u)
        return False
    for node in graph:
        if node not in visited:
            if dfs(node): return True
    return False`,
        },
        {
          name: "Strongly Connected Components (SCC)",
          desc: "Finds maximal sets of nodes that reach each other in a directed graph.",
          time: "O(V + E)",
          space: "O(V)",
          notes: "Kosaraju's or Tarjan's algorithm.",
          code: `// Java
kosarajuSCC(graph);

// Python
def kosarajuSCC(graph):
    visited, stack = set(), []
    def dfs(u):
        visited.add(u)
        for v in graph[u]:
            if v not in visited:
                dfs(v)
        stack.append(u)
    for node in graph: dfs(node)
    transposed = transposeGraph(graph)
    visited.clear()
    scc = []
    while stack:
        node = stack.pop()
        if node not in visited:
            comp = []
            dfsUtil(transposed, node, visited, comp)
            scc.append(comp)
    return scc`,
        },
        {
          name: "Network Flow (Ford-Fulkerson)",
          desc: "Computes maximum flow in a network.",
          time: "O(E * max_flow)",
          space: "O(V + E)",
          notes: "Used in matching, routing, network optimization.",
          code: `// Java
fordFulkerson(graph, source, sink);

// Python
def fordFulkerson(graph, s, t):
    parent = {}
    max_flow = 0
    def bfs():
        visited = set()
        queue = [s]
        visited.add(s)
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if v not in visited and capacity > 0:
                    visited.add(v)
                    parent[v] = u
                    queue.append(v)
        return t in visited
    while bfs():
        path_flow = float('inf')
        v = t
        while v != s:
            u = parent[v]
            path_flow = min(path_flow, graph[u][v])
            v = u
        v = t
        while v != s:
            u = parent[v]
            graph[u][v] -= path_flow
            graph[v][u] += path_flow
            v = u
        max_flow += path_flow
    return max_flow`,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 py-20 bg-[#FFFFFF] text-[#1A1A1A]">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Complete <span className="text-blue-600">Graph Data Structures & Algorithms Guide</span>
          </h1>
          <p className="mt-6 text-xl text-[#555555] max-w-3xl mx-auto">
            Explore graph theory concepts, algorithms, complexity analysis, and practical code implementations.
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
            A <strong>graph</strong> is a data structure consisting of nodes (<strong>vertices</strong>) connected by edges. Graphs model networks, relationships, dependencies, and pathways.
          </p>
          <h3 className="text-2xl font-semibold mb-2 text-[#1A1A1A]">Components of a Graph:</h3>
          <ul className="list-disc list-inside space-y-2 text-[#333333] text-xl">
            <li><strong>Vertices (Nodes):</strong> Points in the graph.</li>
            <li><strong>Edges (Links):</strong> Connections between vertices.</li>
            <li><strong>Weight:</strong> Optional value representing cost, distance, or capacity.</li>
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

        {/* Video Placeholder */}
        <div className="w-full h-96 rounded-xl overflow-hidden mb-12 border border-gray-300 shadow-sm flex items-center justify-center bg-gray-100">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/T9aXcLi2UmY?si=Qw2JpbDpoUuCrDhW"
            title="Graph Algorithms Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          />
        </div>

        {/* Key Takeaways */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-12 shadow-sm">
          <h2 className="text-3xl font-semibold mb-3 text-green-600 flex items-center gap-2 border-b-2 border-green-200 pb-2">
            <Sparkles size={26} /> Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
            <li>Graphs model networks, dependencies, and relationships.</li>
            <li>Traversal algorithms (BFS/DFS) explore nodes efficiently.</li>
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
                  <div className="flex flex-col gap-3 text-lg mb-4">
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

                  {/* Code Snippet */}
                  <pre className="bg-gray-100 p-3 rounded-lg overflow-auto text-sm text-[#111111]">{algo.code}</pre>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          
        ))}
        {/* Detailed Explanation */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-xl mb-12 shadow-sm"
>
  <h2 className="text-3xl font-semibold mb-4 text-gray-700 flex items-center gap-2 border-b-2 border-gray-300 pb-2">
    <Layers size={26} /> Detailed Explanation & Key Concepts
  </h2>

  <p className="text-[#333333] text-lg mb-3">
    Graphs are versatile data structures that represent relationships between entities (nodes) through connections (edges). They can be <strong>directed</strong> or <strong>undirected</strong>, <strong>weighted</strong> or <strong>unweighted</strong>, and can model complex networks in the real world.
  </p>

  <h3 className="text-xl font-semibold mt-3 mb-2 text-blue-600">Why Graphs?</h3>
  <ul className="list-disc list-inside space-y-2 text-[#333333] text-lg">
    <li><strong>Model Relationships:</strong> Perfect for representing social networks, dependency graphs, transportation routes, and computer networks.</li>
    <li><strong>Algorithmic Applications:</strong> Many algorithms like BFS, DFS, Dijkstra, and Kruskal are designed specifically for graph traversal, shortest paths, and spanning trees.</li>
    <li><strong>Flexibility:</strong> Can handle sparse or dense connections, directed/undirected edges, and weighted/unweighted networks.</li>
    <li><strong>Foundation for Advanced Problems:</strong> Used in network flow problems, recommendation systems, cycle detection, and topological sorting.</li>
    <li><strong>Optimization:</strong> Supports solving real-world optimization problems like shortest path, minimum spanning tree, and max-flow.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-600">Key Concepts to Remember</h3>
  <ul className="list-disc list-inside space-y-2 text-[#333333] text-lg">
    <li><strong>Vertices & Edges:</strong> Nodes represent entities; edges represent relationships.</li>
    <li><strong>Weighted Graphs:</strong> Edge weights can represent cost, distance, or capacity.</li>
    <li><strong>Directed vs Undirected:</strong> Direction matters in some applications (e.g., dependency graphs).</li>
    <li><strong>Connectivity:</strong> Determines reachability and graph components.</li>
    <li><strong>Traversal Techniques:</strong> BFS and DFS are the foundation for solving many graph problems.</li>
  </ul>
</motion.div>

        {/* Applications of Graphs */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl mt-12 shadow-sm"
>
  <h2 className="text-3xl font-semibold mb-3 text-yellow-600 flex items-center gap-2 border-b-2 border-yellow-200 pb-2">
    <Info size={26} /> Applications of Graphs
  </h2>
  <ul className="list-disc list-inside space-y-3 text-[#333333] text-xl">
    <li>Modeling social networks (Facebook, LinkedIn connections).</li>
    <li>Routing and navigation systems (Google Maps, GPS networks).</li>
    <li>Dependency resolution (task scheduling, package managers).</li>
    <li>Network design and optimization (telecommunication, internet networks).</li>
    <li>Finding shortest paths and optimal routes (Dijkstra, Bellman-Ford).</li>
    <li>Recommendation systems (friend suggestions, item recommendations).</li>
    <li>Flow networks for resource allocation (Ford-Fulkerson, max flow problems).</li>
    <li>Analyzing connectivity and clusters (SCC, community detection).</li>
  </ul>
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
