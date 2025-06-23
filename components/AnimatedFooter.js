import React from 'react';
import { motion } from 'framer-motion';

const AnimatedFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-16 bg-deep-space text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid bg-[size:20px_20px] opacity-10" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-electric-blue to-cyber-green" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-electric-blue opacity-10 blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-electric-blue">
                AHP Mod 2.0
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Optimizing websites for the AI-first web. Our patent-pending technology ensures your content is visible to both humans and machines.
              </p>
              
              {/* Social links */}
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'github', 'email'].map((social) => (
                  <a 
                    key={social}
                    href={social === 'email' ? 'mailto:info@aihandshake.org' : '#'}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                    aria-label={`Follow us on ${social}`}
                  >
                    <span className="text-lg">{
                      social === 'twitter' ? '𝕏' :
                      social === 'linkedin' ? 'in' :
                      social === 'github' ? 'GH' :
                      '✉'
                    }</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Features', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">✉</span>
                <a href="mailto:info@aihandshake.org" className="text-gray-400 hover:text-white transition-colors duration-300">
                  info@aihandshake.org
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">🌐</span>
                <span className="text-gray-400">aihandshake.org</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-500 mb-4 md:mb-0"
            >
              © {currentYear} AHP Mod 2.0. All rights reserved. Patent pending.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-6"
            >
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
