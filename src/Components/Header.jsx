import React, { useState, useEffect } from "react";
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  Code
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = ["home", "about", "projects", "expertise", "contact"];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      let currentSection = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  const socialLinks = [
    { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/sayan-das-b99810213" },
    { icon: <Github size={18} />, url: "https://github.com/sayandas2228056" },
    { icon: <Code size={18} />, url: "https://leetcode.com/u/SayanDas2228056/", name: "LeetCode" },
    { icon: <Instagram size={18} />, url: "https://www.instagram.com/__sdx__007/" },
    { icon: <Facebook size={18} />, url: "https://www.facebook.com/offcsayantubecode" }
  ];

  return (
    <header 
      className={`flex justify-between items-center px-6 md:px-10 py-4 fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/25 backdrop-blur-lg shadow-lg shadow-violet-900/10" : "bg-transparent"
      }`}
    >
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-2xl font-bold tracking-wider text-white">
          <span className="text-violet-400">Sayan</span>Das
        </h1>
      </motion.div>

      <nav className="hidden md:flex items-center gap-8">
        <motion.div className="flex gap-8" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {sections.map((item, index) => (
            <motion.div key={item} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
              <button onClick={() => scrollToSection(item)}
                className={`relative font-medium text-sm uppercase tracking-wider px-2 py-1 transition-colors ${
                  activeSection === item ? "text-violet-400" : "text-gray-300 hover:text-white"
                }`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <motion.div layoutId="activeIndicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-500" />
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <a href="https://drive.google.com/file/d/1emeaaclKgYB7wfCMnrq6Ce8bMd2wVfir/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-1">
            Resume
          </a>
        </motion.div>
      </nav>

      <div className="flex items-center">
        <motion.div className="hidden md:flex gap-5 mr-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {socialLinks.map((social, index) => (
            <motion.a key={index} href={social.url} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 text-violet-400 focus:outline-none transition-colors hover:bg-gray-700/70">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed top-20 right-0 left-0 mx-4 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-800 overflow-hidden z-50"
            initial={{ opacity: 0, height: 0, y: -20 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <div className="flex flex-col py-4">
              {sections.map((item, index) => (
                <motion.button key={item} onClick={() => scrollToSection(item)}
                  className={`py-3 px-6 text-left transition-colors ${
                    activeSection === item ? "text-violet-400 bg-gray-800/50" : "text-gray-300"
                  }`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}

              <div className="mx-6 my-4 border-t border-gray-700"></div>

              <div className="flex justify-center gap-6 py-3">
                {socialLinks.map((social, index) => (
                  <motion.a key={index} href={social.url} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-violet-400 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
