import React from 'react';
import { motion } from 'framer-motion';
import TypewriterEffect from 'typewriter-effect';
import ParticleBackground from './ParticleBackground';

const AnimatedHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-deep-space text-white py-20">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-nebula opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-electric-blue opacity-10 blur-3xl animate-pulse" />
      
      {/* Cyberpunk grid overlay */}
      <div 
        className="absolute inset-0 bg-cyberpunk-grid bg-[size:50px_50px] opacity-20"
        style={{ backgroundPosition: 'center' }}
      />
      
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-primary-light to-primary-dark animate-shimmer bg-[length:200%_auto] border border-primary/30 shadow-neon">
            Introducing AHP Mod 2.0
          </span>
        </motion.div>
        
        {/* Main headline with typewriter */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-electric-blue to-cyber-green"
        >
          <TypewriterEffect
            options={{
              strings: ['AI-First Visibility Starts Here'],
              autoStart: true,
              loop: false,
              cursor: '_',
              wrapperClassName: 'typewriter-wrapper',
              cursorClassName: 'typewriter-cursor',
            }}
          />
        </motion.h1>
        
        {/* Subheadline with staggered animation */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl md:text-2xl mb-10 text-gray-text max-w-3xl mx-auto"
        >
          Optimize your website for AI retrieval — not just human eyes.
        </motion.p>
        
        {/* CTA button with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <a 
            href="mailto:info@aihandshake.org" 
            className="relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg group bg-gradient-to-br from-primary to-primary-dark text-white text-lg font-bold shadow-neon-strong transition-all duration-300 hover:shadow-neon hover:scale-105"
            aria-label="Run a free visibility scan"
          >
            {/* Button background animation */}
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            
            {/* Button text */}
            <span className="relative">Run Visibility Scan</span>
            
            {/* Arrow icon */}
            <svg 
              className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
        
        {/* Floating arrow indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 3,
            y: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        >
          <svg className="w-6 h-6 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
