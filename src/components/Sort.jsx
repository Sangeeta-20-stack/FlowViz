import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Sort = ({ array = [], barColors = [] }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!array.length) return;

    // fallback colors if not passed
    const colors =
      barColors.length > 0
        ? barColors
        : ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"];

    const width = 600;
    const height = 320;
    const barWidth = width / array.length;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Scale for bar height
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(array)])
      .range([0, height]);

    // Bind data
    const bars = svg.selectAll("rect").data(array);

    // Enter + Update
    bars
      .join("rect")
      .attr("x", (_, i) => i * barWidth + 5)
      .attr("width", barWidth - 10)
      .attr("rx", 6) // rounded top
      .attr("fill", (_, i) => colors[i % colors.length])
      .transition()
      .duration(300)
      .ease(d3.easeCubicOut)
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => height - yScale(d));
  }, [array, barColors]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="340"
      style={{ background: "#F9FAFB", borderRadius: "12px" }}
    />
  );
};

export default Sort;
