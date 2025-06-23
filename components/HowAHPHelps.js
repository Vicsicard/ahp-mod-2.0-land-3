import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';

// Placeholder for Lottie animations - in production, replace with actual JSON files
const placeholderAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 512,
  h: 512,
  nm: "Placeholder",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [100], h: 0 }, { t: 30, s: [50], h: 0 }, { t: 60, s: [100], h: 0 }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [256, 256, 0] },
        s: { a: 1, k: [{ t: 0, s: [100, 100, 100], h: 0 }, { t: 30, s: [80, 80, 100], h: 0 }, { t: 60, s: [100, 100, 100], h: 0 }] }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [200, 200] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.54, 0.36, 0.96, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 10 },
              lc: 2,
              lj: 1,
              ml: 4,
              bm: 0,
              d: [{ n: "d", nm: "dash", v: { a: 0, k: 200 } }, { n: "g", nm: "gap", v: { a: 0, k: 0 } }]
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 1, k: [{ t: 0, s: [0], h: 0 }, { t: 60, s: [360], h: 0 }] },
              o: { a: 0, k: 100 },
              sk: { a: 0, k: 0 },
              sa: { a: 0, k: 0 }
            }
          ],
          nm: "Circle",
          bm: 0
        }
      ]
    }
  ]
};

const features = [
  {
    id: 1,
    title: "AI Visibility Score",
    description: "Get a clear score showing how visible your content is to AI systems, with detailed breakdowns by page and section.",
    icon: "score",
    color: "from-primary to-primary-dark"
  },
  {
    id: 2,
    title: "Content Structure Analysis",
    description: "Detailed analysis of your content structure, semantic markup, and how AI systems interpret your information hierarchy.",
    icon: "analysis",
    color: "from-electric-blue to-primary"
  },
  {
    id: 3,
    title: "Optimization Recommendations",
    description: "Actionable recommendations to improve your content's AI visibility, from structural changes to semantic enhancements.",
    icon: "recommendations",
    color: "from-cyber-green to-electric-blue"
  }
];

const HowAHPHelps = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-cyberpunk-grid bg-[size:20px_20px] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-radial-glow opacity-20" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-electric-blue">
            How AHP Helps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-first approach ensures your content is optimized for both human readers and AI systems.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="relative group"
            >
              <div className="h-full p-8 rounded-xl border border-opacity-20 bg-white shadow-lg hover:shadow-neon transition-all duration-500 relative overflow-hidden group">
                {/* Background glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                {/* Lottie animation */}
                <div className="h-48 mb-6 flex items-center justify-center">
                  <Lottie 
                    animationData={placeholderAnimation} 
                    loop={true}
                    style={{ width: 150, height: 150 }}
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                {/* Animated indicator */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-primary/5 to-electric-blue/5 p-8 rounded-2xl border border-primary/10 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary opacity-10 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-electric-blue opacity-10 blur-3xl rounded-full" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-electric-blue">
                Patent-Pending Technology
              </h3>
              <p className="text-gray-600 mb-6">
                AHP Mod 2.0 uses proprietary algorithms to analyze how AI systems interpret and process your content, providing insights no other tool can offer.
              </p>
              <ul className="space-y-3">
                {[
                  "AI-specific content structure analysis",
                  "Semantic relevance scoring",
                  "Entity recognition evaluation",
                  "Context mapping and relationship analysis"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-electric-blue flex items-center justify-center text-white text-xs mr-3 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Decorative elements */}
                <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-xl -m-3 -rotate-3" />
                <div className="absolute inset-0 border-2 border-dashed border-electric-blue/30 rounded-xl -m-3 rotate-3" />
                
                {/* Content */}
                <div className="bg-white p-6 rounded-xl shadow-lg relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-500">AHP Mod 2.0</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">PATENT PENDING</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">AI Visibility Score</span>
                        <span className="text-sm font-bold text-primary">87%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary to-electric-blue h-2 rounded-full" style={{ width: '87%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Semantic Clarity</span>
                        <span className="text-sm font-bold text-primary">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary to-electric-blue h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Entity Recognition</span>
                        <span className="text-sm font-bold text-primary">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary to-electric-blue h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowAHPHelps;
