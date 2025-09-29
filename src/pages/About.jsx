import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* About Us Content */}
      <main className="flex-grow pt-24">
        <AboutUs />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
