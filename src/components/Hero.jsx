import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { Sparkles, Play, BookOpen, Cpu, ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Hero = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [pass, setPass] = useState(0);

  const svgRef = useRef();

  const generateArray = () => {
    const arr = Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 80) + 20
    );
    setArray(arr);
    setComparisons(0);
    setSwaps(0);
    setPass(0);
  };

  const bubbleSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let comp = 0,
      swp = 0;

    for (let i = 0; i < arr.length; i++) {
      setPass(i + 1);
      for (let j = 0; j < arr.length - i - 1; j++) {
        comp++;
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swp++;
          setArray([...arr]);
          setComparisons(comp);
          setSwaps(swp);
          await new Promise((resolve) => setTimeout(resolve, 200));
        }
      }
    }
    setIsSorting(false);
  };

  useEffect(() => {
    generateArray();
  }, []);

  useEffect(() => {
    if (!svgRef.current || array.length === 0) return;

    const svg = d3.select(svgRef.current);
    const width = 400;
    const height = 250;

    const xScale = d3
      .scaleBand()
      .domain(d3.range(array.length))
      .range([0, width])
      .padding(0.2);

    const yScale = d3.scaleLinear().domain([0, d3.max(array)]).range([0, height]);

    const colorScale = d3
      .scaleOrdinal()
      .domain(d3.range(array.length))
      .range(["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"]);

    svg
      .selectAll("rect")
      .data(array)
      .join("rect")
      .attr("x", (_, i) => xScale(i))
      .attr("width", xScale.bandwidth())
      .attr("rx", 6)
      .attr("ry", 6)
      .transition()
      .duration(300)
      .attr("y", (d) => height - yScale(d))
      .attr("height", (d) => yScale(d))
      .attr("fill", (_, i) => colorScale(i));
  }, [array]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-16 pt-32 pb-16 bg-[#FFFFFF] text-[#1A1A1A]">
      {/* Left Side */}
      <motion.div
        className="md:w-1/2 flex flex-col gap-6 md:pr-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.button
          className="inline-flex items-center gap-2 bg-[#4B4B4B] text-white px-3 py-1.5 rounded-full font-semibold hover:bg-[#333333] transition w-max shadow"
          whileHover={{ scale: 1.05 }}
        >
          Interactive Algorithm Library <Sparkles size={18} />
        </motion.button>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Algorithms, Simplified Through Visualization
        </motion.h1>

        <motion.p
          className="text-[#555555] text-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Watch every step unfold with clarity and intuition
        </motion.p>

        <motion.div className="flex flex-wrap gap-4 mt-4">
          {[
            { icon: <Cpu size={20} />, text: "Visualize Algorithms in Action" },
            { icon: <BookOpen size={20} />, text: "Learn the Logic Behind Each Step" },
            { icon: <ArrowRightCircle size={20} />, text: "Experiment and Explore Freely" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2 bg-[#F5F5F5] text-[#1A1A1A] px-4 py-2 rounded-full shadow-sm hover:shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {item.icon} {item.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div className="flex gap-4 mt-6">
          <Link to="/ds-overview" className="w-max">
            <motion.button
              className="flex items-center gap-2 bg-[#4B4B4B] text-white px-6 py-3 rounded-lg hover:bg-[#333333] transition font-semibold shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Play size={20} /> Start Learning
            </motion.button>
          </Link>

          <Link to="/searching-overview" className="w-max">
            <motion.button
              className="flex items-center gap-2 border border-[#4B4B4B] text-[#1A1A1A] px-6 py-3 rounded-lg hover:bg-[#F5F5F5] transition font-semibold shadow"
              whileHover={{ scale: 1.05 }}
            >
              Explore Algorithms
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Side - D3 Bars */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="bg-white p-6 rounded-3xl shadow-lg w-full max-w-md border border-gray-100">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <span className="flex items-center gap-2 font-semibold text-[#1A1A1A]">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> Live Demo
            </span>
            <span className="text-sm text-gray-500">
              Bubble Sort · <span className="font-semibold">{array.length}</span> bars
            </span>
          </div>

          <svg
            ref={svgRef}
            width={400}
            height={250}
            className="rounded-xl bg-gradient-to-t from-gray-50 to-transparent border border-red-500"
          />

          {/* Stats */}
          <div className="flex justify-between items-center mt-4 text-sm font-medium">
            <span className="text-gray-600">Pass {pass}</span>
            <span className="text-green-600">Comparisons: {comparisons}</span>
            <span className="text-red-500">Swaps: {swaps}</span>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              onClick={generateArray}
              disabled={isSorting}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 shadow"
              whileHover={{ scale: 1.05 }}
            >
              Generate
            </motion.button>
            <motion.button
              onClick={bubbleSort}
              disabled={isSorting}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 shadow"
              whileHover={{ scale: 1.05 }}
            >
              Sort
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
