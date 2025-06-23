import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const AnimatedCTA = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const secondaryButtonRef = useRef(null);
  
  // GSAP animation for the glow effect
  useEffect(() => {
    if (!containerRef.current) return;
    
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true
    });
    
    // Animate the background glow
    tl.to('.cta-bg-glow', {
      opacity: 0.7,
      duration: 3,
      ease: 'sine.inOut'
    });
    
    // Button hover effect
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, {
          scale: 1.05,
          boxShadow: '0 0 25px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4)',
          duration: 0.3
        });
      });
      
      buttonRef.current.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          boxShadow: '0 0 15px rgba(139, 92, 246, 0.5), 0 0 30px rgba(139, 92, 246, 0.3)',
          duration: 0.3
        });
      });
    }
    
    // Secondary button hover effect
    if (secondaryButtonRef.current) {
      secondaryButtonRef.current.addEventListener('mouseenter', () => {
        gsap.to(secondaryButtonRef.current, {
          scale: 1.05,
          boxShadow: '0 0 15px rgba(15, 23, 42, 0.4)',
          duration: 0.3
        });
      });
      
      secondaryButtonRef.current.addEventListener('mouseleave', () => {
        gsap.to(secondaryButtonRef.current, {
          scale: 1,
          boxShadow: '0 0 5px rgba(15, 23, 42, 0.2)',
          duration: 0.3
        });
      });
    }
    
    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <section 
      ref={containerRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space to-primary-dark overflow-hidden">
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-cyberpunk-grid bg-[size:30px_30px] opacity-20"></div>
        
        {/* Animated glow */}
        <div className="cta-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-96 rounded-full bg-primary opacity-30 blur-[100px]"></div>
        
        {/* Particle dots */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Is Your Website <span className="text-cyber-green">AI-Ready</span>?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
            Get a free scan and see how clearly AI understands your message.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              ref={buttonRef}
              href="mailto:info@aihandshake.org" 
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-electric-blue text-white text-lg font-bold shadow-neon transition-all duration-300"
              aria-label="Run a free visibility scan"
            >
              {/* Button glow effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-electric-blue opacity-0 group-hover:opacity-50"></span>
              
              {/* Button text with icon */}
              <span className="flex items-center">
                <span>Run Visibility Scan</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              
              {/* Animated border */}
              <span className="absolute inset-0 border border-white/30 rounded-lg"></span>
            </a>
            
            <a 
              ref={secondaryButtonRef}
              href="mailto:info@aihandshake.org" 
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg bg-dark-bg/70 backdrop-blur-sm text-white text-lg font-bold shadow-lg transition-all duration-300 border border-white/10"
              aria-label="See a sample report"
            >
              <span>See Sample Report</span>
            </a>
          </div>
        </motion.div>
        
        {/* Floating badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full flex items-center"
          >
            <span className="w-2 h-2 bg-cyber-green rounded-full mr-2"></span>
            <span className="text-sm font-medium">Patent Pending</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full flex items-center"
          >
            <span className="w-2 h-2 bg-electric-blue rounded-full mr-2"></span>
            <span className="text-sm font-medium">Built for the AI-First Web</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full flex items-center"
          >
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            <span className="text-sm font-medium">By Victor Sicard</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCTA;
