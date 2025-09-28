// src/components/Navbar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isAlgoOpen, setIsAlgoOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [isSearchingOpen, setIsSearchingOpen] = useState(false);
  const [isGraphOpen, setIsGraphOpen] = useState(false);
  const [isDPOpen, setIsDPOpen] = useState(false);
  const [isGreedyOpen, setIsGreedyOpen] = useState(false);
  const [isBacktrackingOpen, setIsBacktrackingOpen] = useState(false);
  const [isDSOpen, setIsDSOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Algorithms", href: "#", dropdown: true },
    { name: "Data Structures", href: "#", dropdown: true },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const linkHover = {
    scale: 1.1,
    color: "#4DA6FF",
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <motion.nav
      className="bg-[#FFFFFF] text-[#1A1A1A] px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50 border-b border-[#E0E0E0]"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <motion.div
          className="text-3xl font-extrabold bg-gradient-to-r from-[#4DA6FF] to-[#00CFFF] bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(77,166,255,0.7)" }}
        >
          FlowViz
        </motion.div>

        {/* Links */}
        <ul className="hidden md:flex space-x-4 items-center">
          {navLinks.map((link) => {
            if (link.name === "Algorithms") {
              return (
                <li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsAlgoOpen(true)}
                  onMouseLeave={() => setIsAlgoOpen(false)}
                >
                  <motion.button
                    className="flex items-center gap-1 font-semibold px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#F5F5F5]"
                    whileHover={linkHover}
                  >
                    {link.name} <ChevronDown size={16} />
                  </motion.button>

                  {/* First-level Dropdown */}
                  <motion.ul
                    className="absolute top-12 left-0 bg-[#F5F5F5] text-[#1A1A1A] rounded-lg shadow-lg w-48 py-2 border border-[#E0E0E0]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isAlgoOpen ? 1 : 0,
                      y: isAlgoOpen ? 0 : -10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Sorting */}
                    <li
                      className="relative px-4 py-2 font-semibold hover:bg-[#E0E0E0] rounded-md cursor-pointer flex justify-between items-center"
                      onMouseEnter={() => setIsSortingOpen(true)}
                      onMouseLeave={() => setIsSortingOpen(false)}
                    >
                      Sorting <ChevronRight size={16} />
                      <motion.ul
                        className="absolute top-0 left-full bg-[#F5F5F5] w-44 rounded-lg shadow-lg py-2 border border-[#E0E0E0]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isSortingOpen ? 1 : 0,
                          x: isSortingOpen ? 0 : -10,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {["Overview", "Sorting Algorithms"].map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="px-4 py-2 font-semibold hover:bg-[#E0E0E0] hover:text-[#4DA6FF] rounded-md cursor-pointer transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </li>

                    {/* Searching */}
                    <li
                      className="relative px-4 py-2 font-semibold hover:bg-[#E0E0E0] rounded-md cursor-pointer flex justify-between items-center"
                      onMouseEnter={() => setIsSearchingOpen(true)}
                      onMouseLeave={() => setIsSearchingOpen(false)}
                    >
                      Searching <ChevronRight size={16} />
                      <motion.ul
                        className="absolute top-0 left-full bg-[#F5F5F5] w-44 rounded-lg shadow-lg py-2 border border-[#E0E0E0]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isSearchingOpen ? 1 : 0,
                          x: isSearchingOpen ? 0 : -10,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {["Overview", "Searching Algorithms"].map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="px-4 py-2 font-semibold hover:bg-[#E0E0E0] hover:text-[#4DA6FF] rounded-md cursor-pointer transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </li>

                    {/* Graphs */}
                    <li
                      className="relative px-4 py-2 font-semibold hover:bg-[#E0E0E0] rounded-md cursor-pointer flex justify-between items-center"
                      onMouseEnter={() => setIsGraphOpen(true)}
                      onMouseLeave={() => setIsGraphOpen(false)}
                    >
                      Graphs <ChevronRight size={16} />
                      <motion.ul
                        className="absolute top-0 left-full bg-[#F5F5F5] w-44 rounded-lg shadow-lg py-2 border border-[#E0E0E0]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isGraphOpen ? 1 : 0,
                          x: isGraphOpen ? 0 : -10,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {["Overview","Graph Algorithms"].map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="px-4 py-2 font-semibold hover:bg-[#E0E0E0] hover:text-[#4DA6FF] rounded-md cursor-pointer transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </li>

                    {/* Dynamic Programming */}
                    <li
                      className="relative px-4 py-2 font-semibold hover:bg-[#E0E0E0] rounded-md cursor-pointer flex justify-between items-center"
                      onMouseEnter={() => setIsDPOpen(true)}
                      onMouseLeave={() => setIsDPOpen(false)}
                    >
                      Dynamic Programming <ChevronRight size={16} />
                      <motion.ul
                        className="absolute top-0 left-full bg-[#F5F5F5] w-44 rounded-lg shadow-lg py-2 border border-[#E0E0E0]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isDPOpen ? 1 : 0,
                          x: isDPOpen ? 0 : -10,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {["Overview","DP Algorithms"].map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="px-4 py-2 font-semibold hover:bg-[#E0E0E0] hover:text-[#4DA6FF] rounded-md cursor-pointer transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </li>

                    {/* Greedy */}
                    <li
                      className="relative px-4 py-2 font-semibold hover:bg-[#E0E0E0] rounded-md cursor-pointer flex justify-between items-center"
                      onMouseEnter={() => setIsGreedyOpen(true)}
                      onMouseLeave={() => setIsGreedyOpen(false)}
                    >
                      Greedy <ChevronRight size={16} />
                      <motion.ul
                        className="absolute top-0 left-full bg-[#F5F5F5] w-44 rounded-lg shadow-lg py-2 border border-[#E0E0E0]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isGreedyOpen ? 1 : 0,
                          x: isGreedyOpen ? 0 : -10,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {["Overview","Greedy Algorithms"].map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="px-4 py-2 font-semibold hover:bg-[#E0E0E0] hover:text-[#4DA6FF] rounded-md cursor-pointer transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </li>

                    {/* Backtracking */}
                    <li
                      className="relative px-4 py-2 font-semibold hover:bg-[#E0E0E0] rounded-md cursor-pointer flex justify-between items-center"
                      onMouseEnter={() => setIsBacktrackingOpen(true)}
                      onMouseLeave={() => setIsBacktrackingOpen(false)}
                    >
                      Backtracking <ChevronRight size={16} />
                      <motion.ul
                        className="absolute top-0 left-full bg-[#F5F5F5] w-44 rounded-lg shadow-lg py-2 border border-[#E0E0E0]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isBacktrackingOpen ? 1 : 0,
                          x: isBacktrackingOpen ? 0 : -10,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {["Overview","Backtracking Algorithms"].map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="px-4 py-2 font-semibold hover:bg-[#E0E0E0] hover:text-[#4DA6FF] rounded-md cursor-pointer transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </li>
                  </motion.ul>
                </li>
              );
            } else if (link.name === "Data Structures") {
              return (
                <li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsDSOpen(true)}
                  onMouseLeave={() => setIsDSOpen(false)}
                >
                  <motion.button
                    className="flex items-center gap-1 font-semibold px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#F5F5F5]"
                    whileHover={linkHover}
                  >
                    {link.name} <ChevronDown size={16} />
                  </motion.button>

                  <motion.ul
                    className="absolute top-12 left-0 bg-[#F5F5F5] text-[#1A1A1A] rounded-lg shadow-lg w-44 py-2 border border-[#E0E0E0]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isDSOpen ? 1 : 0,
                      y: isDSOpen ? 0 : -10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {["Overview","Data Structures"].map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="px-4 py-2 font-semibold hover:bg-[#E0E0E0] hover:text-[#4DA6FF] rounded-md cursor-pointer transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </li>
              );
            } else {
              return (
                <motion.li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="px-4 py-2 font-semibold rounded-full transition-colors duration-300 hover:bg-[#F5F5F5]"
                    whileHover={linkHover}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              );
            }
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
