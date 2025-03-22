import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, FaServer, FaCloud, FaDatabase, FaTools, FaLaptopCode,
  FaDownload, FaGraduationCap, FaTrophy, FaCertificate, FaUser, 
  FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaLinkedin, FaGithub
} from "react-icons/fa";
import profile from "../Pics/SayanImg.jpg";


const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Skills data with proficiency levels
  const skillsData = {
    languages: [
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C++", level: 75 },
      { name: "TypeScript", level: 85 },
      { name: "Kotlin", level: 70 }
    ],
    frontend: [
      { name: "React", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Redux", level: 80 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Framer Motion", level: 75 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "JWT", level: 80 },
      { name: "Authentication", level: 85 }
    ],
    databases: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Redis", level: 70 },
      { name: "Mongoose", level: 80 }
    ],
    cloud: [
      { name: "AWS EC2", level: 85 },
      { name: "AWS S3", level: 80 },
      { name: "AWS Lambda", level: 75 },
      { name: "AWS RDS", level: 70 },
      { name: "AWS IAM", level: 75 },
      { name: "Firebase", level: 85 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
    ]
  };

  return (
    <section className="text-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-bold text-violet-500 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-violet-500 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Personal Snapshot Section - NEW */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-black bg-opacity-40 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-0">
            {/* Left column - Photo */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-violet-900/40 to-indigo-900/40 p-8 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-violet-500">
                {/* Replaced the placeholder icon with the actual image */}
                <img src={profile} alt="Sayan Das" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            {/* Center column - Quick bio */}
            <motion.div variants={itemVariants} className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-2">Sayan Das</h3>
              <p className="text-violet-400 text-lg mb-4">Computer Science Engineer</p>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-violet-400" /> KIIT University, Bhubaneswar
                </p>
                <p className="flex items-center gap-2">
                  <FaBriefcase className="text-violet-400" /> Full-Stack Developer
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-violet-400" /> sayandas010124@gmail.com
                </p>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="https://linkedin.com/in/sayan-das-b99810213" target="_blank" rel="noopener noreferrer" className="bg-violet-600 p-2 rounded-full hover:bg-violet-500 transition-colors">
                  <FaLinkedin className="text-white" />
                </a>
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="bg-violet-600 p-2 rounded-full hover:bg-violet-500 transition-colors">
                  <FaGithub className="text-white" />
                </a>
                {/* Add more social links as needed */}
              </div>
            </motion.div>
            
            {/* Right column - Key stats */}
            <motion.div variants={itemVariants} className="bg-gradient-to-bl from-violet-900/40 to-indigo-900/40 p-8">
              <h4 className="text-xl font-semibold text-violet-400 mb-4">At a Glance</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Experience</span>
                  <span className="text-white font-medium">1+ Years</span>
                </div>
                <div className="h-px bg-gray-700 my-2"></div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Projects</span>
                  <span className="text-white font-medium">10+</span>
                </div>
                <div className="h-px bg-gray-700 my-2"></div>
                <div className="flex justify-between">
                  <span className="text-gray-300">DSA Problems</span>
                  <span className="text-white font-medium">180+</span>
                </div>
                <div className="h-px bg-gray-700 my-2"></div>
                <div className="flex justify-between">
                  <span className="text-gray-300">LeetCode</span>
                  <span className="text-white font-medium">280+</span>
                </div>
              </div>
              {/* Resume Download Button */}
              <div className="mt-6">
                <a
                  href="https://drive.google.com/file/d/1emeaaclKgYB7wfCMnrq6Ce8bMd2wVfir/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 transform hover:-translate-y-1 w-full justify-center"
                >
                  <span>Download Resume</span>
                  <FaDownload className="group-hover:animate-bounce" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Profile Section - REORGANIZED */}
        <motion.div 
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-violet-400 border-l-4 border-violet-500 pl-4">
              Professional Profile
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm <span className="text-white font-semibold">Sayan Das</span>, a dedicated 
              <span className="text-white font-semibold"> Computer Science Engineer</span> with expertise in 
              full-stack development and a passion for creating innovative technology solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing my B.Tech in Computer Science & Engineering at 
              <span className="text-white font-semibold"> KIIT University</span>, I specialize in 
              building scalable web applications, cloud infrastructure, and efficient API solutions.
            </p>
            
            <div className="mt-6 bg-black bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h4 className="text-xl font-semibold text-violet-400 mb-3 flex items-center gap-2">
                <FaGraduationCap /> Education
              </h4>
              <div className="ml-4 border-l-2 border-violet-500 pl-4">
                <p className="text-white font-medium">B.Tech in Computer Science & Engineering</p>
                <p className="text-gray-400">KIIT University, Bhubaneswar, Odisha</p>
                <p className="text-gray-400">2022 - 2026</p>
                <p className="text-white font-medium mt-3">Senior Secondary Examination (CBSE Boards)</p>
                <p className="text-gray-400">DAV Public School, Hehal, Ranchi, Jharkhand</p>
                <p className="text-gray-400">2020-2022</p>
                <p className="text-white font-medium mt-3">Secondary Examination (ICSE Boards)</p>
                <p className="text-gray-400">ST Paul's School, Rampurhat, West Bengal</p>
                <p className="text-gray-400">2007-2020</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-violet-400 border-l-4 border-violet-500 pl-4">
              My Vision
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I aim to leverage cutting-edge technologies to develop solutions that address real-world challenges. My goal is to contribute to high-impact projects that push the boundaries of what's possible in web development and cloud computing.
            </p>
            
            <div className="mt-6 bg-black bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h4 className="text-xl font-semibold text-violet-400 mb-3">Professional Goals</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">▹</span>
                  Master advanced full-stack development methodologies
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">▹</span>
                  Explore AI integration in web applications
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">▹</span>
                  Develop expertise in cloud-native architectures
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">▹</span>
                  Contribute to open-source projects in web technologies
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Modified Technical Skills Section without Tabs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-4"
        >
          <h3 className="text-2xl font-semibold text-violet-400 mb-8 border-l-4 border-violet-500 pl-4">
            Technical Expertise
          </h3>
          
          {/* Skills layout without tabs */}
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <motion.div key={category} variants={itemVariants} className="space-y-4">
                  <h4 className="flex items-center text-xl font-semibold text-violet-400 mb-4">
                    {category === 'languages' && <FaCode className="mr-2" />}
                    {category === 'frontend' && <FaLaptopCode className="mr-2" />}
                    {category === 'backend' && <FaServer className="mr-2" />}
                    {category === 'databases' && <FaDatabase className="mr-2" />}
                    {category === 'cloud' && <FaCloud className="mr-2" />}
                    {category === 'tools' && <FaTools className="mr-2" />}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  
                  {skills.map((skill, index) => (
                    <div key={index} className="mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 * index }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What I Do Section - NEW CARD STYLE */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8"
        >
          <h3 className="text-2xl font-semibold text-violet-400 mb-8 border-l-4 border-violet-500 pl-4">
            Professional Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Full-Stack Development",
                description: "End-to-end web application development with modern frontend frameworks and scalable backend solutions.",
                icon: <FaLaptopCode className="text-3xl text-violet-400" />
              },
              {
                title: "Cloud Architecture",
                description: "Design and implementation of cloud-based infrastructures using AWS services for optimal performance and scalability.",
                icon: <FaCloud className="text-3xl text-violet-400" />
              },
              {
                title: "API Development",
                description: "Creation of robust RESTful APIs that enable secure and efficient data exchange between services.",
                icon: <FaServer className="text-3xl text-violet-400" />
              },
              {
                title: "Database Design",
                description: "Structured database architecture that supports efficient data operations and maintains data integrity.",
                icon: <FaDatabase className="text-3xl text-violet-400" />
              },
              {
                title: "Technical Consultation",
                description: "Expert guidance on technology stack selection and implementation strategies for web projects.",
                icon: <FaTools className="text-3xl text-violet-400" />
              },
              {
                title: "Code Optimization",
                description: "Performance enhancement of existing applications through algorithmic improvements and code refactoring.",
                icon: <FaCode className="text-3xl text-violet-400" />
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
                <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-800 group-hover:border-violet-500 rounded-xl p-6 transition-all duration-300">
                  <div className="bg-gray-800/50 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-violet-600/20 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-violet-400 mb-3">{service.title}</h4>
                  <p className="text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume Details Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="pt-8"
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4">Resume Highlights</h2>
            <div className="w-20 h-1 bg-violet-600 mx-auto mb-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        {/* Call to Action - ENHANCED */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 flex flex-col items-center"
        >
          <div className="max-w-2xl text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Bring Your Ideas to Life?</h3>
            <p className="text-gray-300">Let's discuss how we can work together to create innovative technology solutions for your projects.</p>
          </div>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-violet-600 rounded-full shadow-2xl"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-violet-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative flex items-center">
              Let's Collaborate 
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;