import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverEffect = { scale: 1.1, boxShadow: "0px 5px 20px rgba(0,0,0,0.2)" };

  return (
    <motion.footer
      className="bg-[#1A1A1A] text-white px-8 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <motion.div className="flex flex-col gap-2" variants={fadeInUp} whileHover={hoverEffect}>
          <Link to="/">
            <motion.div
              className="text-3xl font-extrabold bg-gradient-to-r from-[#4DA6FF] to-[#00CFFF] bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(77,166,255,0.7)" }}
            >
              FlowViz
            </motion.div>
          </Link>
          <p className="text-white/80">Understand. Visualize. Master algorithms.</p>
        </motion.div>

        {/* Navigation */}
        <motion.div className="flex flex-col gap-2" variants={fadeInUp}>
          <h2 className="font-semibold text-lg mb-2">Navigation</h2>
          <Link to="/" className="hover:text-[#F5F5F5] transition">
            Home
          </Link>
          <Link to="/sorting-overview" className="hover:text-[#F5F5F5] transition">
            Algorithms
          </Link>
          <Link to="/ds-overview" className="hover:text-[#F5F5F5] transition">
            Data Structures
          </Link>
          <Link to="/about" className="hover:text-[#F5F5F5] transition">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-[#F5F5F5] transition">
            Contact
          </Link>
        </motion.div>

        {/* Stay Updated / Newsletter */}
        <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
          <h2 className="font-semibold text-lg mb-2">Stay Updated</h2>
          <div className="flex gap-2">
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-l-lg outline-none text-[#1A1A1A] bg-[#F5F5F5]"
              whileFocus={{ scale: 1.02, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
            />
            <motion.button
              className="bg-[#4B4B4B] hover:bg-[#333333] px-4 py-2 rounded-r-lg text-white font-semibold transition shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 20px rgba(0,0,0,0.25)" }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <motion.a
              href="https://github.com/Sangeeta-20-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F5F5] transition"
              whileHover={{ scale: 1.2 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="www.linkedin.com/in/sangeeta-kundu-785b4a349"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F5F5] transition"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F5F5] transition"
              whileHover={{ scale: 1.2 }}
            >
              <Twitter size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <motion.div
        className="mt-8 text-center text-white/60 text-sm"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        &copy; {new Date().getFullYear()} FlowViz. All rights reserved. Made with ❤️ by Sangeeta Kundu
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
