import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Home, Code, Database, Info, Mail } from "lucide-react";

const Navbar = () => {
  const [isAlgoOpen, setIsAlgoOpen] = useState(false);
  const [isDSOpen, setIsDSOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={16} /> },
    { name: "Algorithms", dropdown: true, icon: <Code size={16} /> },
    { name: "Data Structures", dropdown: true, icon: <Database size={16} /> },
    { name: "About Us", href: "/about", icon: <Info size={16} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={16} /> },
  ];

  const algorithms = [
    { title: "Sorting", links: [{ name: "Overview", href: "/sorting-overview" }, { name: "Algorithms", href: "/sorting-visualizer" }] },
    { title: "Searching", links: [{ name: "Overview", href: "/searching-overview" }, { name: "Algorithms", href: "/searching-visualizer" }] },
  
    { title: "Dynamic Programming", links: [{ name: "Overview", href: "/dp-overview" }, { name: "Algorithms", href: "/dp-visualizer" }] },
    { title: "Greedy", links: [{ name: "Overview", href: "/greedy-overview" }, { name: "Algorithms", href: "/greedy-visualizer" }] },
    { title: "Backtracking", links: [{ name: "Overview", href: "/backtracking-overview" }, { name: "Algorithms", href: "/backtracking-visualizer" }] },
    { title: "String", links: [{ name: "Overview", href: "/string-overview" }, { name: "Algorithms", href: "/string-visualizer" }] },
    { title: "Divide & Conquer", links: [{ name: "Overview", href: "/dac-overview" }, { name: "Algorithms", href: "/dac-visualizer" }] },
    { title: "Branch & Bound", links: [{ name: "Overview", href: "/bnb-overview" }, { name: "Algorithms", href: "/bnb-visualizer" }] },
    { title: "Hashing", links: [{ name: "Overview", href: "/hashing-overview" }, { name: "Algorithms", href: "/hashing-visualizer" }] },
    { title: "Bit Manipulation", links: [{ name: "Overview", href: "/bit-overview" }, { name: "Algorithms", href: "/bit-visualizer" }] },
    { title: "Number Theory", links: [{ name: "Overview", href: "/number-overview" }, { name: "Algorithms", href: "/number-visualizer" }] },
    { title: "Game Search", links: [{ name: "Overview", href: "/game-overview" }, { name: "Algorithms", href: "/game-visualizer" }] },
  ];

 const dataStructures = [
  {
    category: "Overview",
    links: [
      { name: "Data Structures Overview", href: "/ds-overview" }
    ],
  },
  {
    category: "Linear",
    links: [
      {
        name: "Stack",
        href: "/stack",
        sublinks: [
          { name: "Overview", href: "/stack-overview" },
          { name: "Algorithms", href: "/stack-visualizer" }
        ]
      },
      {
        name: "Queue",
        href: "/queue",
        sublinks: [
          { name: "Overview", href: "/queue-overview" },
          { name: "Algorithms", href: "/queue-algorithms" }
        ]
      },
      {
        name: "Linked List",
        href: "/linkedlist",
        sublinks: [
          { name: "Overview", href: "/ll-overview" },
          { name: "Algorithms", href: "/ll-algorithms" }
        ]
      },
      {
        name: "Array",
        href: "/array",
        sublinks: [
          { name: "Overview", href: "/array-overview" },
          { name: "Algorithms", href: "/array-algorithms" }
        ]
      }
    ],
  },
  {
    category: "Non-Linear",
    links: [
      {
        name: "Tree",
        href: "/tree",
        sublinks: [
          { name: "Overview", href: "/tree-overview" },
          { name: "Algorithms", href: "/tree-algorithms" }
        ]
      },
      {
        name: "Graph",
        href: "/graph",
        sublinks: [
          { name: "Overview", href: "/graph-overview" },
          { name: "Algorithms", href: "/graph-visualizer" }
        ]
      },
      {
        name: "Heap",
        href: "/heap",
        sublinks: [
          { name: "Overview", href: "/heap-overview" },
          { name: "Algorithms", href: "/heap-algorithms" }
        ]
      }
    ]
  }
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
     if (link.name === "Algorithms") {
  return (
    <li
      key={link.name}
      className="relative"
      onMouseEnter={() => setIsAlgoOpen(true)}
      onMouseLeave={() => setIsAlgoOpen(false)}
    >
      <button className="flex items-center gap-1 font-semibold px-3 py-1.5 rounded-full hover:bg-[#F5F5F5]">
        {link.icon} {link.name} <ChevronDown size={16} />
      </button>

      {/* Algorithms dropdown */}
      <motion.div
        className="absolute top-10 left-0 bg-[#F5F5F5] rounded-lg shadow-lg w-[32rem] py-2 border border-[#E0E0E0] grid grid-cols-4 gap-x-2 gap-y-1 px-3"
        initial={{ opacity: 0, y: -5 }}
        animate={{
          opacity: isAlgoOpen ? 1 : 0,
          y: isAlgoOpen ? 0 : -5,
          pointerEvents: isAlgoOpen ? "auto" : "none",
          transition: { duration: 0.15 },
        }}
      >
        {algorithms.map((algo, idx) => (
          <div key={idx} className="flex flex-col">
            <p className="font-bold mb-1 text-sm">{algo.title}</p>
            <ul className="pl-1 space-y-0.5">
              {algo.links.map((subLink, subIdx) => (
                <li key={subIdx} className="py-0.5">
                  <Link
                    to={subLink.href}
                    className="text-sm hover:text-[#4DA6FF] hover:underline"
                  >
                    {subLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </li>
  );
}



            if (link.name === "Data Structures") {
  return (
    <li
  key={link.name}
  className="relative"
  onMouseEnter={() => setIsDSOpen(true)}
  onMouseLeave={() => setIsDSOpen(false)}
>
  <button className="flex items-center gap-1 font-semibold px-4 py-2 rounded-full hover:bg-[#F5F5F5]">
    {link.icon} {link.name} <ChevronDown size={16} />
  </button>

  {/* Data Structures dropdown */}
<motion.div
  className="absolute top-12 left-0 bg-white rounded-xl shadow-lg w-[32rem] py-4 border border-[#E0E0E0] grid grid-cols-3 gap-6 px-6"
  initial={{ opacity: 0, y: -10 }}
  animate={{
    opacity: isDSOpen ? 1 : 0,
    y: isDSOpen ? 0 : -10,
    pointerEvents: isDSOpen ? "auto" : "none",
    transition: { duration: 0.2 },
  }}
>
  {dataStructures.map((category, catIdx) => (
    <div key={catIdx}>
      <p className="font-bold mb-2 text-lg border-b border-gray-200 pb-1">{category.category}</p>
      <ul className="space-y-2">
        {category.links.map((link, linkIdx) => (
          <li key={linkIdx}>
            <Link
              to={link.href}
              className="text-sm font-medium hover:text-[#4DA6FF] hover:underline"
            >
              {link.name}
            </Link>

            {/* Sublinks */}
            {link.sublinks && (
              <ul className="pl-4 mt-1 space-y-1">
                {link.sublinks.map((sublink, subIdx) => (
                  <li key={subIdx}>
                    <Link
                      to={sublink.href}
                      className="text-xs font-normal hover:text-[#4DA6FF] hover:underline"
                    >
                      {sublink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  ))}
</motion.div>

</li>

      );
    }

              

            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="px-4 py-2 font-semibold rounded-full flex items-center gap-2 hover:bg-[#F5F5F5]"
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
