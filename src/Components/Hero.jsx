import React from "react";
import { motion } from "framer-motion";
import MyImage from "../Pics/SayanImg.jpg";

const Hero = () => {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between min-h-screen text-white px-6 md:px-20 pt-20 md:pt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-gray-300 text-2xl">Hello,</h2>
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide">I'm Sayan Das</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-violet-400">
            Aspiring Computer Engineer | Full Stack Web Developer
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate coder with intermediate proficiency in
            <span className="text-white font-semibold"> Java, C++, and C</span>, backed by a strong foundation in
            <span className="text-white font-semibold"> problem-solving</span>.
            My enthusiasm extends to
            <span className="text-white font-semibold"> Data Structures & Algorithms (DSA)</span>,
            <span className="text-white font-semibold"> Web Development</span>,
            <span className="text-white font-semibold"> App Development</span>,
            <span className="text-white font-semibold"> Cloud Computing</span>, and
            <span className="text-white font-semibold"> Cybersecurity</span>.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-violet-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/30 transform hover:-translate-y-1 hover:text-white"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-transparent border-2 border-violet-500 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20 transform hover:-translate-y-1"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center order-1 md:order-2 mb-12 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full blur opacity-70 animate-pulse"></div>
          <img
            src={MyImage}
            alt="Sayan Das"
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-violet-500/50 shadow-2xl shadow-violet-500/20 transition-all duration-500 hover:scale-105"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
