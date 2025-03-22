import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  ExternalLink,
  Copy,
  Check
} from "lucide-react";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = React.useState(null);
  
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(type);
    
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2000);
  };

  return (
    <section className="py-16 px-4 text-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat. 
            I'm always open to new ideas and connections!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="backdrop-blur-md bg-black bg-opacity-30 rounded-xl p-8 border border-gray-700 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-violet-300">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-violet-600 bg-opacity-20 p-3 rounded-lg mr-4">
                  <Phone className="text-violet-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                  <a 
                    href="tel:+918918577218" 
                    className="text-lg font-medium text-gray-200 hover:text-violet-300 transition-colors flex items-center"
                  >
                    +91 8918577218
                    <ExternalLink className="ml-2 w-4 h-4 opacity-70" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-violet-600 bg-opacity-20 p-3 rounded-lg mr-4">
                  <Mail className="text-violet-400 w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between group">
                      <a 
                        href="mailto:sayandas010124@gmail.com" 
                        className="text-lg font-medium text-gray-200 hover:text-violet-300 transition-colors flex items-center"
                      >
                        sayandas010124@gmail.com
                        <ExternalLink className="ml-2 w-4 h-4 opacity-70" />
                      </a>
                      <button 
                        onClick={() => copyToClipboard("sayandas010124@gmail.com", "primary")}
                        className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 hover:bg-gray-700 rounded-md"
                        aria-label="Copy email"
                      >
                        {copiedEmail === "primary" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="flex items-center justify-between group">
                      <a 
                        href="mailto:offcsayantubecode@gmail.com" 
                        className="text-lg font-medium text-gray-200 hover:text-violet-300 transition-colors flex items-center"
                      >
                        offcsayantubecode@gmail.com
                        <ExternalLink className="ml-2 w-4 h-4 opacity-70" />
                      </a>
                      <button 
                        onClick={() => copyToClipboard("offcsayantubecode@gmail.com", "secondary")}
                        className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 hover:bg-gray-700 rounded-md"
                        aria-label="Copy email"
                      >
                        {copiedEmail === "secondary" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-violet-600 bg-opacity-20 p-3 rounded-lg mr-4">
                  <MapPin className="text-violet-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                  <p className="text-lg font-medium text-gray-200">KIIT University, Bhubaneshwar-751024, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-sm text-gray-400 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/918918577218" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all"
                >
                  <MessageCircle className="text-green-400 w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/__sdx__007/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-600 bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all"
                >
                  <Instagram className="text-pink-400 w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/offcsayantubecode" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all"
                >
                  <Facebook className="text-blue-400 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Direct Gmail Contact */}
          <div className="backdrop-blur-md bg-black bg-opacity-30 rounded-xl p-8 border border-gray-700 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-violet-300">Email Me Directly</h3>
            
            <div className="space-y-8">
              {/* First Gmail Card */}
              <div className="bg-gray-900 bg-opacity-40 rounded-xl overflow-hidden border border-gray-700 group hover:border-violet-500 transition-colors shadow-md">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-violet-600 bg-opacity-20 flex items-center justify-center mr-4">
                      <Mail className="text-violet-400 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200">Primary Email</h4>
                      <p className="text-sm text-gray-400">sayandas010124@gmail.com</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Reach out for professional inquiries, project collaborations, or any questions 
                    about my work and services.
                  </p>
                </div>
                
                <div className="border-t border-gray-700 p-4 bg-gray-800 bg-opacity-40">
                  <div className="flex gap-3">
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sayandas010124@gmail.com&su=Hello+from+your+website" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center bg-gradient-to-r from-violet-500 to-indigo-500 text-white py-3 px-4 rounded-lg hover:from-violet-600 hover:to-indigo-600 transition-all"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span>Open Gmail</span>
                    </a>
                    <button 
                      onClick={() => copyToClipboard("sayandas010124@gmail.com", "primary-card")}
                      className="bg-gray-700 hover:bg-gray-600 text-gray-200 py-2 px-4 rounded-lg transition-colors"
                    >
                      {copiedEmail === "primary-card" ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Second Gmail Card */}
              <div className="bg-gray-900 bg-opacity-40 rounded-xl overflow-hidden border border-gray-700 group hover:border-violet-500 transition-colors shadow-md">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 bg-opacity-20 flex items-center justify-center mr-4">
                      <Mail className="text-indigo-400 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200">Secondary Email</h4>
                      <p className="text-sm text-gray-400">offcsayantubecode@gmail.com</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Contact for general inquiries, personal collaborations, or informal discussions 
                    about potential opportunities.
                  </p>
                </div>
                
                <div className="border-t border-gray-700 p-4 bg-gray-800 bg-opacity-40">
                  <div className="flex gap-3">
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=offcsayantubecode@gmail.com&su=Hello+from+your+website" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span>Open Gmail</span>
                    </a>
                    <button 
                      onClick={() => copyToClipboard("offcsayantubecode@gmail.com", "secondary-card")}
                      className="bg-gray-700 hover:bg-gray-600 text-gray-200 py-2 px-4 rounded-lg transition-colors"
                    >
                      {copiedEmail === "secondary-card" ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 border border-dashed border-gray-600 rounded-lg bg-gray-800 bg-opacity-30 backdrop-blur-sm">
              <h4 className="text-sm font-medium text-violet-300 mb-2">Quick Tip</h4>
              <p className="text-sm text-gray-400">
                Click the "Open Gmail" button to start composing an email directly in your Gmail account.
                You can also click on the copy button to easily copy the email address to your clipboard.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 italic">✨ Thank you for visiting! Looking forward to connecting with you. ✨</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;