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
      <section className="px-4 sm:px-6 md:px-16 lg:px-20">
        <Hero />
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 md:px-16 lg:px-20 mt-16">
        <Features />
      </section>

      {/* Doubt Submission Form */}
      <section className="px-4 sm:px-6 md:px-16 lg:px-20 mt-16">
        <DoubtForm />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
