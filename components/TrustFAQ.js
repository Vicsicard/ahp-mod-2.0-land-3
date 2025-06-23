import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "How does AHP Mod 2.0 differ from traditional SEO?",
    answer: "Traditional SEO focuses on optimizing for human-operated search engines. AHP Mod 2.0 specifically targets AI retrieval systems, which use different algorithms and prioritize different aspects of your content. While some overlap exists, AI optimization requires specific strategies beyond traditional SEO."
  },
  {
    question: "Will optimizing for AI hurt my human user experience?",
    answer: "Not at all. Our recommendations enhance clarity and structure, which benefits both AI systems and human readers. We focus on semantic improvements and content organization that make information more accessible to everyone."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients see improved AI visibility within 2-4 weeks of implementing our recommendations. The full impact typically manifests within 1-3 months as AI systems recrawl and reprocess your optimized content."
  },
  {
    question: "Do you guarantee improved AI visibility?",
    answer: "While we can't guarantee specific outcomes due to the proprietary nature of AI systems, our clients consistently report significant improvements in AI visibility and retrieval rates after implementing our recommendations."
  },
  {
    question: "What makes AHP different from other AI optimization tools?",
    answer: "AHP uses patent-pending technology specifically designed to analyze how AI systems interpret and process web content. Unlike general SEO tools that focus on keywords and backlinks, we provide AI-specific insights and recommendations based on actual AI processing patterns."
  }
];

const TrustFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyberpunk-grid bg-[size:20px_20px] opacity-10" />
      
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-electric-blue">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about AHP Mod 2.0
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                className={`w-full text-left p-6 focus:outline-none flex justify-between items-center ${
                  activeIndex === index ? 'bg-gradient-to-r from-primary/5 to-electric-blue/5' : ''
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Animated indicator line */}
              <div 
                className="h-0.5 bg-gradient-to-r from-primary to-electric-blue transition-all duration-300"
                style={{ width: activeIndex === index ? '100%' : '0%' }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: "🔒", text: "Secure & Confidential" },
            { icon: "🏆", text: "Industry Leading" },
            { icon: "📈", text: "Proven Results" },
            { icon: "🔄", text: "Regular Updates" }
          ].map((badge, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100"
            >
              <span className="text-3xl mb-2">{badge.icon}</span>
              <span className="text-sm font-medium text-gray-600">{badge.text}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary/5 to-electric-blue/5 p-8 rounded-2xl border border-primary/10 relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-20 h-20 text-6xl opacity-20">
            "
          </div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 text-6xl opacity-20 rotate-180">
            "
          </div>
          
          <blockquote className="relative z-10 text-center">
            <p className="text-lg italic text-gray-700 mb-4">
              "AHP Mod 2.0 completely transformed how AI systems interact with our content. We've seen a 215% increase in AI retrieval rates since implementing their recommendations."
            </p>
            <footer className="text-sm text-gray-500">
              <strong>Sarah Johnson</strong>, Director of Digital Strategy at TechFirm
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustFAQ;
