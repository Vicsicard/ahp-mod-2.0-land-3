import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const roadmapData = [
  {
    version: "2.0",
    title: "Scoring + Reporting",
    description: "Our current release focuses on visibility scoring and detailed reporting to help you understand how AI systems view your content.",
    icon: "📊",
    color: "from-primary to-primary-dark",
    status: "current"
  },
  {
    version: "3.0",
    title: "Live agents that package .md content",
    description: "Coming soon: Automated agents that transform your existing content into AI-optimized markdown packages for maximum visibility.",
    icon: "🤖",
    color: "from-electric-blue to-primary",
    status: "upcoming"
  },
  {
    version: "3.1",
    title: "Forecasting retrieval behavior & AI interaction logs",
    description: "On the horizon: Predictive analytics for AI retrieval patterns and detailed logs of how AI systems interact with your content.",
    icon: "🔮",
    color: "from-cyber-green to-electric-blue",
    status: "future"
  }
];

const RoadmapTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid bg-[size:20px_20px] opacity-10" />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyber-green"
        >
          AHP Is Just Getting Started
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-electric-blue to-cyber-green opacity-30 hidden md:block" />
          
          {/* Timeline items */}
          <div className="space-y-24">
            {roadmapData.map((item, index) => (
              <motion.div
                key={item.version}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-electric-blue shadow-neon z-10" />
                
                {/* Content card with parallax effect */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div 
                    className={`p-6 rounded-xl border border-opacity-20 bg-white shadow-lg hover:shadow-neon transition-all duration-500 relative overflow-hidden group`}
                    style={{ borderColor: index === 0 ? '#8b5cf6' : index === 1 ? '#0af' : '#00ffa3' }}
                  >
                    {/* Background glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    
                    {/* Version badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                        Version {item.version}
                      </span>
                      
                      {item.status === "current" && (
                        <span className="flex items-center text-xs font-semibold text-primary">
                          <span className="w-2 h-2 bg-primary rounded-full mr-1 animate-pulse"></span>
                          CURRENT
                        </span>
                      )}
                      
                      {item.status === "upcoming" && (
                        <span className="text-xs font-semibold text-electric-blue">COMING SOON</span>
                      )}
                      
                      {item.status === "future" && (
                        <span className="text-xs font-semibold text-cyber-green">PLANNED</span>
                      )}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-4xl mb-4">{item.icon}</div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Empty space for timeline alignment */}
                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;
