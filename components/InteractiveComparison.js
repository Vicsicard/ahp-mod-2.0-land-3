import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactParallaxTilt from 'react-parallax-tilt';

const comparisonData = [
  {
    human: {
      title: "Visual design, storytelling",
      description: "Traditional websites focus on visual appeal and narrative flow to engage human visitors."
    },
    machine: {
      title: "Structure, schema, semantic clarity",
      description: "AI-optimized sites prioritize clear structure and semantic markup for efficient data extraction."
    }
  },
  {
    human: {
      title: "Images, motion, carousels",
      description: "Human-centric sites rely heavily on visual media that AI systems struggle to interpret."
    },
    machine: {
      title: "Markdown-style layout, bullet points",
      description: "AI systems prefer clean, structured content with clear hierarchies and minimal decoration."
    }
  },
  {
    human: {
      title: "Optimized for attention",
      description: "Traditional sites compete for human attention with flashy elements and engagement tactics."
    },
    machine: {
      title: "Optimized for retrieval",
      description: "AI-ready sites focus on making content easily extractable, processable, and summarizable."
    }
  }
];

const InteractiveComparison = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <section className="section py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid bg-[size:30px_30px] opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-radial-glow opacity-30" />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-electric-blue"
        >
          The Rules Have Changed
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <motion.div 
            className="flex-1 text-center md:text-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-primary">Human Web</h3>
            <p className="text-gray-600">Designed for human eyes and engagement</p>
          </motion.div>
          
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-primary-light to-transparent mx-auto"></div>
          
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-electric-blue">Machine Web</h3>
            <p className="text-gray-600">Optimized for AI retrieval and processing</p>
          </motion.div>
        </div>

        {/* Interactive comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Human Web Card */}
          <ReactParallaxTilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="12px"
            scale={hoveredSide === 'human' ? 1.03 : 1}
          >
            <motion.div 
              className={`h-full p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-300 ${hoveredSide === 'human' ? 'shadow-neon' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredSide('human')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-primary">Human Web</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                  TRADITIONAL
                </span>
              </div>
              
              <h4 className="text-xl font-bold mb-4">{comparisonData[activeIndex].human.title}</h4>
              <p className="text-gray-600">{comparisonData[activeIndex].human.description}</p>
              
              <div className="mt-8 flex justify-center">
                <img 
                  src="https://via.placeholder.com/300x200?text=Human+Web+Example" 
                  alt="Human web example" 
                  className="rounded-lg shadow-md w-full max-w-xs object-cover"
                />
              </div>
            </motion.div>
          </ReactParallaxTilt>
          
          {/* Machine Web Card */}
          <ReactParallaxTilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="12px"
            scale={hoveredSide === 'machine' ? 1.03 : 1}
          >
            <motion.div 
              className={`h-full p-6 rounded-xl border border-electric-blue/30 bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-300 ${hoveredSide === 'machine' ? 'shadow-neon' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseEnter={() => setHoveredSide('machine')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-electric-blue">Machine Web</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue">
                  AI-OPTIMIZED
                </span>
              </div>
              
              <h4 className="text-xl font-bold mb-4">{comparisonData[activeIndex].machine.title}</h4>
              <p className="text-gray-600">{comparisonData[activeIndex].machine.description}</p>
              
              <div className="mt-8 flex justify-center">
                <img 
                  src="https://via.placeholder.com/300x200?text=Machine+Web+Example" 
                  alt="Machine web example" 
                  className="rounded-lg shadow-md w-full max-w-xs object-cover"
                />
              </div>
            </motion.div>
          </ReactParallaxTilt>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center gap-3">
          {comparisonData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View comparison item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveComparison;
