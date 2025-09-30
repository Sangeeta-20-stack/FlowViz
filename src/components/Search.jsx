// src/components/Search.jsx
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Search = ({ array, highlight }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 700;
    const height = 100;
    const barWidth = width / array.length;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible");

    // Bind data
    const blocks = svg.selectAll("g").data(array);

    // ENTER + UPDATE
    const enterBlocks = blocks.enter()
      .append("g");

    // Append rects
    enterBlocks.append("rect")
      .attr("width", barWidth - 10)
      .attr("height", 50)
      .attr("x", (d, i) => i * barWidth)
      .attr("y", 20)
      .attr("rx", 6)
      .attr("fill", "#888");

    // Append text
    enterBlocks.append("text")
      .attr("x", (d, i) => i * barWidth + (barWidth - 10) / 2)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", "#fff")
      .text(d => d);

    // UPDATE
    blocks.select("rect")
      .transition()
      .duration(300)
      .attr("fill", (d, i) => {
        if (i === highlight.current) return "#EF4444";       // current pointer
        if (i === highlight.mid) return "#F59E0B";          // mid pointer
        if (i === highlight.left) return "#3B82F6";         // left pointer
        if (i === highlight.right) return "#10B981";        // right pointer
        if (i === highlight.prev) return "#A3A3A3";         // prev pointer
        return "#888";                                      // default
      });

    blocks.select("text")
      .text(d => d);

    blocks.exit().remove();

  }, [array, highlight]);

  return <svg ref={svgRef}></svg>;
};

export default Search;
