// src/components/Greedy.jsx
import React from "react";
import { motion } from "framer-motion";

const blockColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"];

const Greedy = ({ algorithm, inputData, highlightStep }) => {
  if (!inputData) return <p className="text-gray-500 text-center py-10">No data to visualize</p>;

  const { current = -1, visited = [] } = highlightStep || {};

  // -------------------- Fractional Knapsack --------------------
  if (algorithm === "fractionalKnapsack") {
    const items = inputData.items || [
      { value: 60, weight: 10 },
      { value: 100, weight: 20 },
      { value: 120, weight: 30 },
    ];
    const capacity = inputData.capacity || 50;

    return (
      <div>
        <p className="text-center mb-2 text-gray-700 font-semibold">
          Knapsack Capacity: {capacity}
        </p>
        <div className="flex gap-2 justify-center items-end h-64 bg-gray-50 rounded-xl p-6 overflow-x-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              animate={{
                backgroundColor: idx === current ? "#EF4444" : blockColors[idx % blockColors.length],
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-t-xl shadow-md flex items-end justify-center"
              style={{ width: "40px", height: `${item.value}px` }}
            >
              <span className="text-xs text-white font-bold">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // -------------------- Activity Selection --------------------
  if (algorithm === "activitySelection") {
    const activities = inputData.activities || [
      { start: 1, end: 3 },
      { start: 2, end: 5 },
      { start: 4, end: 7 },
      { start: 6, end: 9 },
    ];

    return (
      <div className="flex gap-2 justify-center items-end h-64 bg-gray-50 rounded-xl p-6 overflow-x-auto">
        {activities.map((act, idx) => (
          <motion.div
            key={idx}
            animate={{
              backgroundColor: idx === current ? "#EF4444" : blockColors[idx % blockColors.length],
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-t-xl shadow-md flex flex-col justify-end items-center"
            style={{ width: "32px", height: `${act.end * 10}px` }}
          >
            <span className="text-xs text-white font-bold">{act.start}-{act.end}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  // -------------------- Job Sequencing --------------------
  if (algorithm === "jobSequencing") {
    const jobs = inputData.jobs || [
      { id: "A", profit: 100, deadline: 2 },
      { id: "B", profit: 19, deadline: 1 },
      { id: "C", profit: 27, deadline: 2 },
    ];

    return (
      <div className="flex gap-2 justify-center items-end h-64 bg-gray-50 rounded-xl p-6 overflow-x-auto">
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            animate={{
              backgroundColor: idx === current ? "#EF4444" : blockColors[idx % blockColors.length],
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-t-xl shadow-md flex items-end justify-center"
            style={{ width: "32px", height: `${job.profit}px` }}
          >
            <span className="text-xs text-white font-bold">{job.id}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  // -------------------- Coin Change (Greedy) --------------------
  if (algorithm === "coinChangeGreedy") {
    const coins = inputData.coins || [25, 10, 5, 1];
    const amount = inputData.amount || 63;

    return (
      <div className="flex gap-2 justify-center items-end h-64 bg-gray-50 rounded-xl p-6 overflow-x-auto">
        {coins.map((coin, idx) => (
          <motion.div
            key={idx}
            animate={{
              backgroundColor: idx === current ? "#EF4444" : blockColors[idx % blockColors.length],
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-t-xl shadow-md flex items-end justify-center"
            style={{ width: "32px", height: `${coin * 2}px` }}
          >
            <span className="text-xs text-white font-bold">{coin}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  // -------------------- Kruskal's MST --------------------
  if (algorithm === "kruskal") {
    const edges = inputData.edges || [
      { u: 0, v: 1, w: 10 },
      { u: 0, v: 2, w: 6 },
      { u: 1, v: 2, w: 5 },
    ];

    return (
      <div className="flex gap-2 justify-center items-end h-64 bg-gray-50 rounded-xl p-6 overflow-x-auto">
        {edges.map((edge, idx) => (
          <motion.div
            key={idx}
            animate={{
              backgroundColor: idx === current ? "#EF4444" : blockColors[idx % blockColors.length],
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-t-xl shadow-md flex flex-col justify-end items-center"
            style={{ width: "32px", height: `${edge.w * 2}px` }}
          >
            <span className="text-xs text-white font-bold">{edge.u}-{edge.v}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  // -------------------- Prim's MST --------------------
  if (algorithm === "prim") {
    const nodes = inputData.nodes || [0, 1, 2, 3];
    const edges = inputData.edges || [
      { from: 0, to: 1, weight: 2 },
      { from: 1, to: 2, weight: 3 },
      { from: 0, to: 3, weight: 6 },
    ];

    return (
      <div className="flex gap-2 justify-center items-end h-64 bg-gray-50 rounded-xl p-6 overflow-x-auto">
        {edges.map((edge, idx) => (
          <motion.div
            key={idx}
            animate={{
              backgroundColor: idx === current ? "#EF4444" : blockColors[idx % blockColors.length],
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-t-xl shadow-md flex flex-col justify-end items-center"
            style={{ width: "32px", height: `${edge.weight * 10}px` }}
          >
            <span className="text-xs text-white font-bold">{edge.from}-{edge.to}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  // -------------------- Huffman Coding --------------------
  if (algorithm === "huffman") {
    const freqs = inputData.freqs || [5, 9, 12, 13, 16, 45];

    return (
      <div className="flex gap-2 justify-center items-end h-64 bg-gray-50 rounded-xl p-6 overflow-x-auto">
        {freqs.map((freq, idx) => (
          <motion.div
            key={idx}
            animate={{
              backgroundColor: idx === current ? "#EF4444" : blockColors[idx % blockColors.length],
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-t-xl shadow-md flex items-end justify-center"
            style={{ width: "32px", height: `${freq * 2}px` }}
          >
            <span className="text-xs text-white font-bold">{freq}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  return <p className="text-gray-500 text-center py-10">Visualization not available yet</p>;
};

export default Greedy;
