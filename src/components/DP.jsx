// src/components/DP.jsx
import React from "react";
import { motion } from "framer-motion";

const blockColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"];

const DP = ({ algorithm, inputData, highlightStep }) => {
  if (!inputData) return <p className="text-gray-500 text-center py-10">No data to visualize</p>;
     const { current = -1, currentRow = -1, currentCol = -1, visited = [] } = highlightStep || {};
  // -------------------- Fibonacci / 1D DP --------------------
  if (algorithm === "fibonacci") {
    // Sample: first 10 Fibonacci numbers (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
    const array = inputData.array || [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
     const finalAnswer = array[array.length - 1];
     return (
      <div>
        <p className="text-center mb-2 text-gray-700 font-semibold">
          Fibonacci sequence up to n = {array.length - 1} → Final Answer: {finalAnswer}
        </p>
        <div className="flex items-end justify-center h-64 gap-2 bg-gray-50 rounded-xl p-6 overflow-x-auto">
          {array.map((val, idx) => (
            <motion.div
              key={idx}
              animate={{
                backgroundColor: idx === current ? "#EF4444" : blockColors[idx % blockColors.length],
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-t-xl shadow-md flex items-end justify-center"
              style={{ width: "32px", height: `${val * 2 + 20}px` }} // scaled for visualization
            >
              <span className="text-xs text-white font-bold">{val}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }


  // -------------------- 0/1 Knapsack / 2D DP --------------------
if (algorithm === "knapsack01") {
  // Sample: weights, values, capacity
  const weights = inputData.weights || [1, 3, 4, 5];
  const values = inputData.values || [10, 40, 50, 70];
  const capacity = inputData.capacity || 7;

  // Table showing computed max values
  const table = inputData.table || [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 10, 10, 10, 10, 10, 10, 10],
    [0, 10, 10, 40, 50, 50, 50, 50],
    [0, 10, 10, 40, 50, 50, 90, 100],
    [0, 10, 10, 40, 50, 70, 90, 110],
  ];

  // Compute final answer only if animation finished
  const finalAnswer =
    highlightStep.currentRow === undefined && highlightStep.currentCol === undefined
      ? table[weights.length][capacity]
      : null;

  return (
    <div className="overflow-auto max-h-[400px]">
      {finalAnswer && (
        <p className="text-center mb-2 text-gray-700 font-semibold">
          Knapsack Capacity: {capacity}, Weights: [{weights.join(", ")}], Values: [{values.join(", ")}] → Final Answer: {finalAnswer}
        </p>
      )}
      <table className="border-collapse border border-gray-300 mx-auto">
        <tbody>
          {table.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((val, cIdx) => (
                <motion.td
                  key={cIdx}
                  animate={{
                    backgroundColor:
                      highlightStep.currentRow === rIdx && highlightStep.currentCol === cIdx
                        ? "#EF4444"
                        : highlightStep.visited?.[rIdx]?.[cIdx]
                        ? "#10B981"
                        : "#3B82F6",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="border border-gray-300 px-4 py-2 text-center text-white min-w-[32px]"
                >
                  {val !== null && val !== undefined ? val : "-"}
                </motion.td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 // -------------------- Longest Common Subsequence / 2D DP --------------------
  if (algorithm === "longestCommonSubsequence") {
    const str1 = inputData.str1 || "AGGTAB";
    const str2 = inputData.str2 || "GXTXAYB";

    // Sample LCS DP table (can be computed dynamically or use sample)
    const table =
      inputData.table ||
      [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 2, 2, 2, 2],
        [0, 1, 1, 1, 2, 2, 2, 2],
        [0, 1, 1, 1, 2, 2, 3, 3],
        [0, 1, 1, 1, 2, 2, 3, 3],
    ];

    const finalAnswer = table[str1.length][str2.length];

    return (
      <div className="overflow-auto max-h-[400px]">
        {finalAnswer && (
          <p className="text-center mb-2 text-gray-700 font-semibold">
            LCS of "{str1}" and "{str2}" → Length: {finalAnswer}
          </p>
        )}

        <table className="border-collapse border border-gray-300 mx-auto">
          <thead>
            <tr>
              <th className="border px-2 py-1"></th>
              {[...str2].map((ch, idx) => (
                <th key={idx} className="border px-2 py-1 text-sm font-medium text-gray-700">{ch}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.map((row, rIdx) => (
              <tr key={rIdx}>
                {rIdx === 0 ? <td className="border px-2 py-1 font-medium text-gray-700"></td> : <td className="border px-2 py-1 font-medium text-gray-700">{str1[rIdx - 1]}</td>}
                {row.map((val, cIdx) => (
                  <motion.td
                    key={cIdx}
                    animate={{
                      backgroundColor:
                        highlightStep.currentRow === rIdx && highlightStep.currentCol === cIdx
                          ? "#EF4444"
                          : highlightStep.visited?.[rIdx]?.[cIdx]
                          ? "#10B981"
                          : "#3B82F6",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="border border-gray-300 px-4 py-2 text-center text-white min-w-[32px]"
                  >
                    {val}
                  </motion.td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
// -------------------- Coin Change / 1D DP --------------------
if (algorithm === "coinChange") {
  const coins = inputData.coins || [1, 2, 5]; // sample coin denominations
  const amount = inputData.amount || 11; // target amount
  const dp = inputData.dp || Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  const { current = -1 } = highlightStep || {};

  return (
    <div>
      <p className="text-center mb-2 text-gray-700 font-semibold">
        Coin Change: Coins = [{coins.join(", ")}], Amount = {amount} → Minimum Coins = {dp[amount] === Infinity ? "-" : dp[amount]}
      </p>
      <div className="flex items-end justify-center h-64 gap-2 bg-gray-50 rounded-xl p-6 overflow-x-auto">
        {dp.map((val, idx) => (
          <motion.div
            key={idx}
            animate={{
              backgroundColor: idx === current ? "#EF4444" : blockColors[idx % blockColors.length],
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-t-xl shadow-md flex items-end justify-center"
            style={{ width: "32px", height: `${(val === Infinity ? 0 : val) * 20 + 20}px` }}
          >
            <span className="text-xs text-white font-bold">{val === Infinity ? "-" : val}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
 // -------------------- Edit Distance / 2D DP --------------------
  if (algorithm === "editDistance") {
    const str1 = inputData.str1 || "kitten";
    const str2 = inputData.str2 || "sitting";
    const dp = inputData.table || Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));

    return (
      <div className="overflow-auto max-h-[400px]">
        <table className="border-collapse border border-gray-300 mx-auto">
          <tbody>
            {dp.map((row, rIdx) => (
              <tr key={rIdx}>
                {row.map((val, cIdx) => (
                  <motion.td
                    key={cIdx}
                    animate={{
                      backgroundColor:
                        currentRow === rIdx && currentCol === cIdx
                          ? "#EF4444"
                          : visited?.[rIdx]?.[cIdx]
                          ? "#10B981"
                          : "#3B82F6",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="border border-gray-300 px-4 py-2 text-center text-white min-w-[32px]"
                  >
                    {val}
                  </motion.td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // -------------------- Matrix Chain Multiplication / 2D DP --------------------
  if (algorithm === "matrixChainMultiplication") {
    const dp = inputData.table || [[0, 0], [0, 0]];
    return (
      <div className="overflow-auto max-h-[400px]">
        <table className="border-collapse border border-gray-300 mx-auto">
          <tbody>
            {dp.map((row, rIdx) => (
              <tr key={rIdx}>
                {row.map((val, cIdx) => (
                  <motion.td
                    key={cIdx}
                    animate={{
                      backgroundColor:
                        currentRow === rIdx && currentCol === cIdx
                          ? "#EF4444"
                          : visited?.[rIdx]?.[cIdx]
                          ? "#10B981"
                          : "#3B82F6",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="border border-gray-300 px-4 py-2 text-center text-white min-w-[32px]"
                  >
                    {val}
                  </motion.td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  

  return <p className="text-gray-500 text-center py-10">Visualization not available yet</p>;
};

export default DP;
