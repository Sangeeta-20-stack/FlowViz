import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Eye, BookOpen, Cpu } from "lucide-react";

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const BrandName = () => (
    <motion.span
      className="font-extrabold bg-gradient-to-r from-[#4DA6FF] to-[#00CFFF] bg-clip-text text-transparent cursor-pointer"
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 12px rgba(0, 207, 255, 0.7)",
      }}
    >
      FlowViz
    </motion.span>
  );

  const features = [
    {
      icon: <Cpu size={28} className="text-blue-500" />,
      title: "Algorithm Visualizations",
      desc: "Step-by-step animations for Sorting, Searching, Graphs, Recursion, and more.",
    },
    {
      icon: <BookOpen size={28} className="text-green-500" />,
      title: "Interactive Learning",
      desc: "Control playback, pause execution, and dive into each step with clarity.",
    },
    {
      icon: <Users size={28} className="text-purple-500" />,
      title: "Built for Students",
      desc: "Designed with learners in mind, from coding beginners to interview prep.",
    },
  ];

  return (
    <section className="px-8 md:px-16 py-20 bg-[#FFFFFF] text-[#1A1A1A]">
      {/* Intro */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About <BrandName />
        </motion.h2>
        <p className="text-lg text-[#555555]">
          <BrandName /> is an interactive algorithm visualizer designed to make
          learning Data Structures and Algorithms{" "}
          <strong>simple, visual, and intuitive</strong>. Instead of just
          reading code, learners can see logic come alive with step-by-step
          animations.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
        <motion.div
          className="bg-[#F5F5F5] p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Target size={32} className="text-red-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-[#555555]">
            To make algorithm learning accessible, engaging, and practical for
            everyone—whether you’re a beginner or prepping for interviews.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#F5F5F5] p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Eye size={32} className="text-indigo-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p className="text-[#555555]">
            To be the go-to platform for mastering algorithms through
            visualization, interactivity, and community-driven learning.
          </p>
        </motion.div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          What Makes <BrandName /> Unique?
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
            >
              <div className="mb-4">{f.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
              <p className="text-[#555555]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <motion.div
        className="max-w-3xl mx-auto text-center mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-[#555555] mb-6">
          <BrandName /> is built with ❤️ by students and open-source
          contributors. Together, we aim to simplify algorithms for everyone.
        </p>
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-[#4DA6FF] to-[#00CFFF] text-white rounded-lg font-semibold shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Community
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutUs;
