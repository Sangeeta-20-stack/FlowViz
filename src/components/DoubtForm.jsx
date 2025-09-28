// src/components/DoubtForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const DoubtForm = () => {
  const [email, setEmail] = useState("");
  const [doubt, setDoubt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, doubt });
    alert("Doubt submitted!");
    setEmail("");
    setDoubt("");
  };

  // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 px-8 flex flex-col items-center">
      {/* Tagline */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-2 text-[#1A1A1A]"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        Stuck on an Algorithm?
      </motion.h2>

      {/* Subtagline */}
      <motion.p
        className="text-[#555555] text-center mb-8 max-w-2xl"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        Ask your question, share your inputs or errors & get help fast. We'll guide you step by step.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Email Field */}
        <motion.div
          className="flex items-center gap-2 bg-[#F5F5F5] border border-[#CCCCCC] rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#4B4B4B] transition shadow-sm hover:shadow-md cursor-pointer"
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
        >
          <Mail className="text-[#4B4B4B]" />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none text-[#1A1A1A] bg-transparent"
          />
        </motion.div>

        {/* Doubt Field */}
        <motion.div
          className="flex items-start gap-2 bg-[#F5F5F5] border border-[#CCCCCC] rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#4B4B4B] transition shadow-sm hover:shadow-md cursor-pointer"
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
        >
          <MessageCircle className="text-[#4B4B4B] mt-1" />
          <textarea
            placeholder="Your Doubt (max 400 characters)"
            value={doubt}
            required
            maxLength={400}
            onChange={(e) => setDoubt(e.target.value)}
            className="w-full h-32 resize-none outline-none text-[#1A1A1A] bg-transparent"
          ></textarea>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="bg-[#4B4B4B] hover:bg-[#333333] text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.25)" }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </section>
  );
};

export default DoubtForm;
