// src/components/Features.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, BookOpen, ArrowRightCircle, Zap } from "lucide-react";

const features = [
  {
    icon: <Cpu size={24} />,
    title: "Visualize Algorithms",
    description: "Step-by-step visualization of popular algorithms for intuitive learning.",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Hands-on Practice",
    description: "Practice algorithms and data structures with interactive exercises.",
  },
  {
    icon: <ArrowRightCircle size={24} />,
    title: "Guided Learning",
    description: "Structured paths to help you master concepts efficiently.",
  },
  {
    icon: <Zap size={24} />,
    title: "Real-time Feedback",
    description: "Immediate feedback on your practice problems to accelerate learning.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
  hover: { scale: 1.05, y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" },
};

const Features = () => {
  return (
    <section className="bg-[#FFFFFF] text-[#1A1A1A] py-24 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">Our Features</h2>
        <p className="text-[#555555] text-center mb-12 max-w-2xl">
          Explore the tools and features that make learning algorithms engaging and effective.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#F5F5F5] rounded-3xl p-6 flex flex-col items-center text-center cursor-pointer shadow-md transition"
            >
              <div className="bg-[#4B4B4B] text-white p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#555555]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
