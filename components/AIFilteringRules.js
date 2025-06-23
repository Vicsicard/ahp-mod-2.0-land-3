import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const filteringRules = [
  {
    id: 1,
    title: "Relevance Filtering",
    description: "AI systems filter out content that doesn't precisely match the query intent, even if it contains the right keywords.",
    icon: "🎯",
    color: "from-primary to-primary-dark"
  },
  {
    id: 2,
    title: "Semantic Understanding",
    description: "Modern AI looks beyond keywords to understand the meaning and context of your content.",
    icon: "🧠",
    color: "from-electric-blue to-primary"
  },
  {
    id: 3,
    title: "Structure Preference",
    description: "AI favors well-structured content with clear headings, lists, and semantic HTML over visual-first designs.",
    icon: "📋",
    color: "from-cyber-green to-electric-blue"
  },
  {
    id: 4,
    title: "Clarity Scoring",
    description: "Ambiguous or vague content gets filtered out in favor of clear, direct information that answers user queries.",
    icon: "🔍",
    color: "from-neon-purple to-primary"
  },
  {
    id: 5,
    title: "Entity Recognition",
    description: "AI systems identify and extract named entities, concepts, and relationships from your content.",
    icon: "🔗",
    color: "from-primary to-electric-blue"
  },
  {
    id: 6,
    title: "Factual Verification",
    description: "Content that appears factually incorrect or misleading may be filtered out or downranked.",
    icon: "✓",
    color: "from-electric-blue to-cyber-green"
  }
];

const AIFilteringRules = () => {
  const [activeRule, setActiveRule] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid bg-[size:20px_20px] opacity-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-radial-glow opacity-20 blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-electric-blue">
            What You're Up Against
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI systems apply sophisticated filtering rules that determine whether your content appears in results.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteringRules.map((rule) => (
            <motion.div
              key={rule.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="relative"
              onMouseEnter={() => setActiveRule(rule.id)}
              onMouseLeave={() => setActiveRule(null)}
            >
              <div className={`h-full p-6 rounded-xl border border-opacity-20 bg-white shadow-lg transition-all duration-300 ${activeRule === rule.id ? 'shadow-neon' : ''} relative overflow-hidden group`}>
                {/* Background glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${rule.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                {/* Icon with animated background */}
                <div className="mb-4 relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${rule.color} opacity-20 blur-sm rounded-full`} />
                  <div className="w-12 h-12 flex items-center justify-center text-2xl bg-white rounded-full shadow-md relative">
                    {rule.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{rule.title}</h3>
                <p className="text-gray-600">{rule.description}</p>
                
                {/* Animated indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${rule.color} transition-all duration-300 ${activeRule === rule.id ? 'w-full' : 'w-0'}`} />
              </div>
              
              {/* Animated connection lines (visible on hover) */}
              {activeRule === rule.id && (
                <div className="absolute -inset-4 border border-dashed border-primary/30 rounded-xl -z-10 opacity-0 animate-fadeIn" />
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Most websites aren't built to pass these filters. Is yours?
          </p>
          
          <a 
            href="mailto:info@aihandshake.org" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-lg hover:shadow-neon transition-all duration-300"
          >
            Check Your Site
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFilteringRules;
