// src/pages/ContactUs.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// URLs for logos (replace with your own if needed)
const githubLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
const linkedinLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg";
const twitterLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

// src/pages/ContactUs.jsx
const socialLinks = [
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    url: "https://github.com/Sangeeta-20-stack",
    desc: "Check out our repositories and projects.",
  },
  {
    name: "LinkedIn",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    url: "https://www.linkedin.com/in/sangeeta-kundu-785b4a349",
    desc: "Connect with us professionally.",
  },
  {
    name: "Twitter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
    url: "https://twitter.com/username", // replace if needed
    desc: "Follow us for updates and news.",
  },
];


  return (
    <>
      <Navbar />
      <motion.section
        className="px-8 md:px-16 py-24 bg-[#FFFFFF] text-[#1A1A1A] min-h-[80vh]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Get in Touch with{" "}
            <span className="bg-gradient-to-r from-[#4DA6FF] to-[#00CFFF] bg-clip-text text-transparent font-extrabold">
              FlowViz
            </span>
          </motion.h2>
          <p className="text-lg text-[#555555]">
            Have questions, feedback, or suggestions? We’d love to hear from you. Fill out the form below and we’ll get back to you soon.
          </p>
        </div>

        {/* Contact Form */}
        <motion.form
          className="bg-[#F5F5F5] p-8 rounded-2xl shadow-lg max-w-2xl mx-auto flex flex-col gap-6 mb-12"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <User size={20} className="text-[#4DA6FF]" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] text-[#1A1A1A]"
            />
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-[#4DA6FF]" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] text-[#1A1A1A]"
            />
          </div>
          <div className="flex items-start gap-3">
            <MessageCircle size={20} className="text-[#4DA6FF] mt-2" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] text-[#1A1A1A]"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-[#4B4B4B] hover:bg-[#333333] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 20px rgba(0,0,0,0.25)" }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Cards */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 bg-[#F5F5F5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <img src={social.logo} alt={social.name} className="w-12 h-12 object-contain" />
              <h4 className="font-semibold text-lg">{social.name}</h4>
              <p className="text-[#555555] text-center text-sm">{social.desc}</p>
            </motion.a>
          ))}
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default ContactUs;
