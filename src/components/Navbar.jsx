import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Home, Code, Database, Info, Mail } from "lucide-react";

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isAlgoOpen, setIsAlgoOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={16} /> },
    { name: "Algorithms", dropdown: true, icon: <Code size={16} /> },
    { name: "Data Structures", href: "/data-structures", icon: <Database size={16} /> },
    { name: "About Us", href: "/about", icon: <Info size={16} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={16} /> },
  ];

  const algorithms = [
    { title: "Sorting", links: [
        { name: "Overview", href: "/sorting-overview" }, 
        { name: "Sorting Visualizer", href: "/sorting-visualizer" }
      ] 
    },
    { title: "Searching", links: [
        { name: "Overview", href: "/searching-overview" }, 
        { name: "Searching Algorithms", href: "/searching-visualizer" }
      ] 
    },
    { title: "Graphs", links: [
        { name: "Overview", href: "/graph-overview" }, 
        { name: "Graph Algorithms", href: "/graph-visualizer" }
      ] 
    },
    { title: "Dynamic Programming", links: [
        { name: "Overview", href: "/dp-overview" }, 
        { name: "DP Algorithms", href: "/dp-algorithms" }
      ] 
    },
    { title: "Greedy", links: [
        { name: "Overview", href: "/greedy-overview" }, 
        { name: "Greedy Algorithms", href: "/greedy-algorithms" }
      ] 
    },
    { title: "Backtracking", links: [
        { name: "Overview", href: "/backtracking-overview" }, 
        { name: "Backtracking Algorithms", href: "/backtracking-algorithms" }
      ] 
    },
  ];

  return (
    <nav className="bg-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50 border-b border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-3xl font-extrabold bg-gradient-to-r from-[#4DA6FF] to-[#00CFFF] bg-clip-text text-transparent cursor-pointer">
          FlowViz
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-4 items-center">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsAlgoOpen(true)}
                  onMouseLeave={() => setIsAlgoOpen(false)}
                >
                  <button className="flex items-center gap-1 font-semibold px-4 py-2 rounded-full hover:bg-[#F5F5F5]">
                    {link.name} <ChevronDown size={16} />
                  </button>

                  {/* Algorithms dropdown */}
                  <motion.ul
                    className="absolute top-12 left-0 bg-[#F5F5F5] rounded-lg shadow-lg w-64 py-2 border border-[#E0E0E0]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isAlgoOpen ? 1 : 0, y: isAlgoOpen ? 0 : -10, transition: { duration: 0.2 } }}
                  >
                    {algorithms.map((algo, idx) => (
                      <li key={idx} className="px-4 py-2">
                        <p className="font-semibold">{algo.title}</p>
                        <ul className="pl-4 mt-1">
                          {algo.links.map((subLink, subIdx) => (
                            <li key={subIdx} className="py-1">
                              <Link
                                to={subLink.href}
                                className="text-sm hover:text-[#4DA6FF] hover:underline"
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </motion.ul>
                </li>
              );
            } else {
              return (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="px-4 py-2 font-semibold rounded-full flex items-center gap-2 hover:bg-[#F5F5F5]"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
