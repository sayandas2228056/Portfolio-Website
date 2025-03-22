import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGraduationCap, FaCode, FaTrophy, FaCertificate } from "react-icons/fa";

const Resume = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="resume" className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A summary of my educational background, technical skills, achievements, and professional certifications.
          </p>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <a
            href="https://drive.google.com/file/d/1emeaaclKgYB7wfCMnrq6Ce8bMd2wVfir/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-lg rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 transform hover:-translate-y-1"
          >
            <span>Download Resume</span>
            <FaDownload className="group-hover:animate-bounce" />
          </a>
        </motion.div>

        {/* Resume Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 shadow-xl shadow-violet-900/10 hover:shadow-violet-500/20 transition-all duration-300 h-full">
              <div className="bg-gradient-to-r from-violet-900/80 to-indigo-900/80 py-4 px-6 flex items-center gap-3">
                <FaGraduationCap className="text-2xl text-violet-300" />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="relative pl-6 border-l-2 border-violet-500">
                  <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-white">B.Tech in Computer Science</h4>
                  <p className="text-violet-300">KIIT University | 2022-2026</p>
                  <p className="text-gray-300 mt-1">CGPA: 7.76</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-violet-500">
                  <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-white">Senior Secondary (12th)</h4>
                  <p className="text-violet-300">DAV Public School, Hehal</p>
                  <p className="text-gray-300 mt-1">Percentage: 76.8%</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-violet-500">
                  <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-white">Secondary (10th)</h4>
                  <p className="text-violet-300">ST. Paul's School, Rampurhat</p>
                  <p className="text-gray-300 mt-1">Percentage: 86.6%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 shadow-xl shadow-violet-900/10 hover:shadow-violet-500/20 transition-all duration-300 h-full">
              <div className="bg-gradient-to-r from-violet-900/80 to-indigo-900/80 py-4 px-6 flex items-center gap-3">
                <FaCode className="text-2xl text-violet-300" />
                <h3 className="text-xl font-bold text-white">Technical Skills</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-violet-300 mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {["C", "C++", "Java", "Python", "JavaScript", "Kotlin"].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-violet-300 mb-2">Web Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "Tailwind"].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-violet-300 mb-2">Cloud Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {["AWS EC2", "S3", "Lambda", "IAM", "RDS", "API Gateway"].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-violet-300 mb-2">Tools & Others</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "VS Code", "DSA", "OS", "DBMS"].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 shadow-xl shadow-violet-900/10 hover:shadow-violet-500/20 transition-all duration-300 h-full">
              <div className="bg-gradient-to-r from-violet-900/80 to-indigo-900/80 py-4 px-6 flex items-center gap-3">
                <FaTrophy className="text-2xl text-violet-300" />
                <h3 className="text-xl font-bold text-white">Achievements</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div className="text-violet-400 text-lg font-bold">✅</div>
                  <div>
                    <h4 className="font-semibold text-white">250+ LeetCode Problems</h4>
                    <a href="https://leetcode.com/u/SayanDas2228056/" target="_blank" rel="noopener noreferrer" className="text-violet-400 text-sm hover:underline inline-flex items-center gap-1">
                      View Profile <span className="text-xs">↗</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div className="text-violet-400 text-lg font-bold">📌</div>
                  <div>
                    <h4 className="font-semibold text-white">180+ DSA Problems</h4>
                    <a href="https://takeuforward.org/profile/sayandas24" target="_blank" rel="noopener noreferrer" className="text-violet-400 text-sm hover:underline inline-flex items-center gap-1">
                      View Profile <span className="text-xs">↗</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div className="text-violet-400 text-lg font-bold">🏆</div>
                  <div>
                    <h4 className="font-semibold text-white">Runner-up in OMEGA-4 Hackathon</h4>
                    <p className="text-gray-300 text-sm">Recognized for innovative solution development</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div className="text-violet-400 text-lg font-bold">🥇</div>
                  <div>
                    <h4 className="font-semibold text-white">1st Position at Spiral Slide Event</h4>
                    <p className="text-gray-300 text-sm">KIIT-Fest 7.0</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 shadow-xl shadow-violet-900/10 hover:shadow-violet-500/20 transition-all duration-300 h-full">
              <div className="bg-gradient-to-r from-violet-900/80 to-indigo-900/80 py-4 px-6 flex items-center gap-3">
                <FaCertificate className="text-2xl text-violet-300" />
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  {
                    name: "AWS Cloud Virtual Internship",
                    issuer: "Amazon Web Services",
                    url: "https://www.linkedin.com/in/sayan-das-b99810213/details/certifications/",
                    icon: "📌"
                  },
                  {
                    name: "ReactJS Certification",
                    issuer: "Meta",
                    url: "https://coursera.org/share/503763e1cc9b45377a13e1ffb9f9c467",
                    icon: "🛠"
                  },
                  {
                    name: "Problem Solving Basics",
                    issuer: "HackerRank",
                    url: "https://www.hackerrank.com/certificates/d2c6c335f852",
                    icon: "🔢"
                  },
                  {
                    name: "Version Control",
                    issuer: "Meta",
                    url: "https://coursera.org/share/4a27172bd11c28d95975593bb6a4222e",
                    icon: "🔀"
                  },
                  {
                    name: "Java Basics",
                    issuer: "HackerRank",
                    url: "https://www.hackerrank.com/certificates/f155291563c3",
                    icon: "☕"
                  }
                ].map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors">
                    <div className="text-violet-400 text-lg font-bold">{cert.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{cert.name}</h4>
                      <p className="text-gray-300 text-sm">{cert.issuer}</p>
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-violet-400 text-sm hover:underline inline-flex items-center gap-1">
                        View Certificate <span className="text-xs">↗</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;