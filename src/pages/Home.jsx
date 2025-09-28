// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DoubtForm from "../components/DoubtForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Doubt Submission Form */}
      <DoubtForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
