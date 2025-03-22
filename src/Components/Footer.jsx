import React from "react";
import { 
  Heart, 
  Code, 
  Github, 
  Linkedin, 
  Wind, 
  Frame, 
  Bot, 
  Sparkles
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-white py-12 border-t border-gray-800 mt-16 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6">
        {/* Top section with personal info and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
              Sayan Das
            </h3>
            <p className="text-gray-400 mt-1 font-light">Full-Stack Developer & Designer</p>
          </div>
          
          {/* Social links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/sayandas2228056/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 bg-opacity-50 flex items-center justify-center hover:bg-violet-600 hover:bg-opacity-30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="text-gray-300 w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sayan-das-b99810213/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 bg-opacity-50 flex items-center justify-center hover:bg-violet-600 hover:bg-opacity-30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-gray-300 w-5 h-5" />
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-300 mb-2">
              &copy; {currentYear} All Rights Reserved
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="mx-1 text-red-500 w-4 h-4 animate-pulse" />
              <span>in India</span>
            </div>
          </div>
        </div>
        
        {/* Tech stack section */}
        <div className="py-6 border-t border-b border-gray-800 backdrop-blur-sm bg-black bg-opacity-10 rounded-xl px-6">
          <p className="text-sm uppercase tracking-wider text-violet-400 font-semibold mb-6 text-center">
            Powered by Modern Technologies
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {[
              { 
                icon: <Sparkles className="w-6 h-6 text-blue-400" />, 
                name: "React", 
                description: "UI Library"
              },
              { 
                icon: <Wind className="w-6 h-6 text-teal-400" />, 
                name: "Tailwind CSS", 
                description: "Styling"
              },
              { 
                icon: <Frame className="w-6 h-6 text-purple-400" />, 
                name: "Framer Motion", 
                description: "Animations"
              },
              { 
                icon: <Code className="w-6 h-6 text-green-400" />, 
                name: "React Icons", 
                description: "Icon Library"
              },
              { 
                icon: <Bot className="w-6 h-6 text-gray-300" />, 
                name: "ChatGPT", 
                description: "AI Assistant"
              },
              { 
                icon: <Bot className="w-6 h-6 text-indigo-400" />, 
                name: "Claude", 
                description: "AI Assistant"
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center group p-3 rounded-lg hover:bg-gray-800 hover:bg-opacity-30 transition-all duration-300"
              >
                <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  {tech.description}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            Last updated: March 2025
          </p>
          
          <div className="flex flex-col sm:flex-row items-center text-xs text-gray-500">
            <a href="#" className="hover:text-violet-400 transition-colors mx-2 mb-2 sm:mb-0">Terms of Service</a>
            <span className="hidden sm:inline mx-2">•</span>
            <a href="#" className="hover:text-violet-400 transition-colors mx-2 mb-2 sm:mb-0">Privacy Policy</a>
            <span className="hidden sm:inline mx-2">•</span>
            <a href="#contact" className="hover:text-violet-400 transition-colors mx-2">Contact</a>
          </div>
        </div>
        
        {/* Signature */}
        <div className="mt-6 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 bg-opacity-20 backdrop-blur-sm">
            <p className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-indigo-300 font-medium">
              Designed & Developed by Sayan Das
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;