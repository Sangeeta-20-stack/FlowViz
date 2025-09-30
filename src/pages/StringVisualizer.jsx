// src/pages/StringVisualizer.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { stringCodes } from "../data/codes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const algorithms = [
  { key: "naive", label: "Naive Search" },
  { key: "kmp", label: "KMP" },
  { key: "rabinKarp", label: "Rabin-Karp" },
  { key: "zAlgorithm", label: "Z Algorithm" },
  { key: "boyerMoore", label: "Boyer-Moore" },
];

const langs = ["java", "python", "cpp", "javascript"];
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const blockColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#14B8A6"];

// GIF links for each string algorithm
const gifLinks = {
  naive: "https://miro.medium.com/v2/resize:fit:1170/1*vJOfJQZSxia9KBVUaF7nvA.gif",
  kmp: "https://scaler-topics-articles-md.s3.us-west-2.amazonaws.com/kmp-algorithm-lps-table.gif",
  rabinKarp: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAasAAAB2CAMAAABBGEwaAAABtlBMVEX////Z6tP/8sz/9c6cnZz5+fnW1taen6Gur7Dd1LvR4MzKxLGnqqXKycr/9s7c7tawta6ho6Hm5ub368iQkpissKqXlZjQ3svJ1sW4tKqpp6HCva68uKu1sqjy5sXm3MC3vrQAAAD/7b3BwcHY0Ln/98i9urP//dT/9sXhuI62hkebrqP02qhsWjnI1by7u7vO0M7Kn3F7kpPlxY9lWVBva1mIl5PYw5NsVkhCRT22lnOMp6G5jWG+p4JWUD9LP0RoY1Www6+DZFPNrntbSj6pppm8nGpzYliNcVBubmj/6bN8cGJXMAgAAB7x9db14LbJvaJDRV4mHjLg06t+WSVmi5EADEMyAAAAKEA1WmZ8Ti+PYUJke4N6jn/10JFSZ3wdO1xjLh5URy1hcIJbYn2UZCqbvbUNGUG+g11tKQBEEB65y6+CVkh6QSpWJzQMR1siWm0+XlyghW9bGDk3GVUoAEGaZjAzRT8fOEq5roGHn6o7JAUAAEVnJxBADSkvGhIlHwDHlV1KdYVpOjNBAABtTChUAACJcFSAYTRwYGceJCyYy808TVeuz8OXimFwprFALCkNSE9XqNylAAAIVklEQVR4nO2cDXcTxxWGkUZFlizPemsky9+SjFjHEibEGGMw/ohdl5hg1MhOaqMAJQmQ0IaStiS4TVNIU9ImDu0/7tpoZu7iO5CFRbHD+5zDOdK7V1e7+2hmv5wcOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA5+AVoES/u6lgiyZLYL7mtPGSfXNj+fG7tkzv44q6G3cMpjgFLnk2ycWqg15IP8HlvNPlhtydUPpSz1CfbLX36QtWncpY+iV++uKuO3rhgkH2WvN+VbN7Tw+aiv5+vH+hjy/2c72PJu3rb+dwN5mpjvEOW+kSKzQddPu9KDrF5/BCfD0bjqivO4Lvi835XsLnvisvjviu2fqCPLZcDfH3cd8vFvis+d/lcHrLUJ1Js7rvi65NDbO674vv8HF31wtV+cSXg6se5EmY3EVfC8zypllBX/gL9gYAr0ifgSpKXxFWgj5kDt7/X019mXAnpmQ8EXEnzkroK9D/E5wFXpE/AFe1vXNHVCbqifSJ2JY+/YbZJuxLjJyYm5k42lxBXcvLU1En1YdlzxHz29BmzksSVnD5DnBhXZ2dmTR/tSi7NTUycmFedtKvy6Z28WUVdyTfzZt8TVwuLU7/S/YmrpcXZgq4nrkZ+PaZfU1elN9P6NXF1bm5i7q20WkBcLZ83n43aVentCyt6u824ulg7/Zva4ea3yiPKlRh/Z76+uqZyM67E8tvvmt8ZcVV677emv3YlR9cP1zfeUH3MuKrXLjVqQ7tc+fnq+7Uhtc+MK3G5eMXT+1K7EgtXx+q/U78emVO5nL6SmnxPWekyTsR48YHuMxjIG6a/cTU5ea1SG1QLjCu5UFzT2x6xK7HwwfSmnuvI8cp77UM9F5lxJT+6LkWpXeXE1fEGGUDGlTzeOKdz42rkRkp6pT7tqs/MgTc32TnQG62YfWZcyUvzp/LqDXH1cbcUVeVEjytx8ZMVIevalRlX5dVbp2LqDXE18vtbs926v3ElSkdj7Bz4h9qn+rcZtauPrl++rZpTV8J3pV5TV/52CrWAuPI25sfv6JUk42p1a/yPesdqV8t3VkY+e19NUvScXd7cNPuAnFuI0YqZi7QrUf10ZVRP4saV/JO/9/QR1Liq/tkjR1DjSlT/0nVJTfnElajOrtzVvzV6blE6qmdA4kpUb3d9q+sjdrVc/HyxqH6YP8bVlj+ucirXrsRyceraBT3ja1eiWvz8WjFtxo/62i9WyrV7t1/c1UJx5q9/UytqXJW/TPvjqrJ7XP3dH1eThV3jStwvznx1W/Unrpb8/Kru/0xX3s0LM/9Y1+MzUlfy/prnLayrI/szXYmFG6nBuw92Ha/k9Kbn3b+i9rJ2JUdPet5SQ73Trry7D1IXl7Sr7PO6Kn+d98qr19U5h5kDl9aHLm6cedJVvHy3MVT/pzp36UoqJ6XFvCc/3mr2Ma7Kn3R7I98UVP9nuRLVazGv/C91thOtq9JDf5xU55pfG3T1gdl/+twiLs7OzjTUMdW4Kn2bFqJ6Qk2C2lXpfN7P32rm5Dyw9NnUzJ0x1Ye6mm7jXd2vmPO9Xj2nTaz4h/OGPlcw53unpxZP7j4PFKWHU4sV3Ue5Eq/929s+tD7pSlz2V90/U9ZuiauHMb2axtW4/3MVS5svxdXO3G3m9T7LdRe9vpJmATlebV9V6OMYPbcQtD85Z5dSmHMXeo+JXqfRa2GSkzlQ0iXUlSyT9STn7J4wF3xkDgz0IXNgsD+9FqZX7+Z4FezzM7xvYb8feIS/f/Cq3reg27TnXOEe055z1QZXT3EV5x64bD+/YnPb86sjoZ9fRZFLy/MrGXf551Tq+ZV8sp5/fuX3t+T88ytpeX4lI3E1nGhn6XUteZLPM72W+pC5Gy7vSw7w9QlLn1yW75PoseT9ofL2nK0+kmf4bSyWuM21LghXH7JNW4YuyD5/HzcTzfqEzZMRjKsDlr+vsf3djfXvccL2Cdcm9PqE7hN2fSLKAQAAAAAAAAAAAABoJQeHO1iGbfmxkPV7LD/G57bNstV3WOst+XAE926PJTIGl7ykOSGRCJQFcq5R0tYnyYT+xxK7m7u7+5M+Lrc2lv4+OTe4fqbP03Lue5+Wq4W9Jo/kmUg6xuB0Ziy5y8WxWDbL552dDl/fyddnLPWZApun3QJbbsudnKU+kWfzbpfPbfWxnKVPJM+F+X3vFDJ83umy+8zJZvl9bHHlWFz5eVhXfL0l913x9ZZ9n7a5Sub5Pjk+T79MV50/kavw4ypUbnPljxM298cVXx/S1UsdV3C1w35z5fiYnLoyL+GqSatcjW2ZbTKuxua3cVRuXDljZr3gqkmLXDkbV8n4Ua6c2tTMf+bWGFexo+vms3D1mNa4cuqzi9+pLyLjynFqHzomN67q33+tByJcNWmRqx8eTT5gXMW2XenXxpVz7tE9Uw9Xj2mRqy/Xfnh3S891z3LlrPy3cf4dXd8DVzu0xJUz+b9K5egjztU91tW97yuVbzZ1PVzt0BpXpzb9I9MX6h11dZZ1tfGd49RvqBxz4GNaMwfe2r4BON+8Cxi4Fk7nOVeF7VJ1d22v3WOKzFVmT7oKblPgvgW55iXnFnQJxlWTn8JVwXb//dW6x5SGq33jan+Mq5D3bsOfB/J5OFeOxYkT8pmIY3HlWMaV47tiV9Py/MqJ5JnIsNud5ui05FmXjdPZbMi8k88ztrwQ4+Jut8CW2/J0zlKf4PO8m+fzBJ9352z1UTzDzyVAhNh2ZxT/b+KDrx9ked2Sd4SsD513RLM+YXPr+jT/7erDl9u/F/+xHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwKvD/wG8TOayGg0aQgAAAABJRU5ErkJggg==",
  zAlgorithm: "https://scaler.com/topics/images/pseudocode-for-z-algorithm.gif",
  boyerMoore: "https://koenig-media.raywenderlich.com/uploads/2017/06/boyerMooreRecursiveMatch.gif",
};

const StringVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("naive");
  const [selectedLang, setSelectedLang] = useState("java");
  const [array, setArray] = useState([]);

  const generateArray = () => {
    const arr = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10) + 1);
    setArray(arr);
  };

  return (
    <>
      <Navbar />
      <section className="px-8 md:px-20 pt-32 pb-16 bg-[#FFFFFF] text-[#1A1A1A]">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            String <span className="text-blue-600">Visualizer</span>
          </h1>
          <p className="mt-4 text-xl text-[#555555] max-w-3xl mx-auto">
            Visualize how string algorithms search and match patterns step by step. Select an algorithm and programming language to see its code and demo.
          </p>
        </motion.div>

        {/* Algorithm Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
          {algorithms.map((algo) => (
            <button
              key={algo.key}
              onClick={() => setSelectedAlgo(algo.key)}
              className={`px-6 py-2 rounded-full font-semibold transition shadow ${
                selectedAlgo === algo.key ? "bg-blue-600 text-white" : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {algo.label}
            </button>
          ))}
        </motion.div>

        {/* Language Buttons */}
        <motion.div className="flex justify-center gap-3 mb-6" initial="hidden" animate="visible" variants={fadeInUp}>
          {langs.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-5 py-2 rounded-full font-semibold transition shadow ${
                selectedLang === lang ? "bg-blue-600 text-white" : "bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Code Display */}
        <motion.div className="mb-12" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
            <pre className="bg-[#1E1E1E] text-green-400 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
              {stringCodes[selectedAlgo]?.[selectedLang] || "// Code not available"}
            </pre>
          </div>
        </motion.div>

        {/* GIF Visualizer */}
        <motion.div className="mb-16" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-4xl mx-auto flex justify-center">
            <img
              src={gifLinks[selectedAlgo]}
              alt={selectedAlgo}
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        </motion.div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={generateArray}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 shadow"
          >
            Generate
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default StringVisualizer;
