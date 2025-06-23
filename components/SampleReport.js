import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const SampleReport = ({ websiteUrl, onClose }) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    // Animate the chart bars
    if (chartRef.current) {
      gsap.fromTo(
        '.chart-bar',
        { height: 0 },
        { 
          height: 'var(--bar-height)',
          duration: 1.2,
          stagger: 0.1,
          ease: 'elastic.out(1, 0.5)'
        }
      );
    }
    
    // Animate the score counters
    const counters = document.querySelectorAll('.score-counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      gsap.fromTo(
        counter,
        { textContent: '0' },
        {
          textContent: target,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate: function() {
            counter.textContent = Math.round(counter.textContent);
          }
        }
      );
    });
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Report header */}
        <div className="bg-gradient-to-r from-primary to-electric-blue p-6 text-white">
          <h3 className="text-xl font-bold">AI Visibility Report</h3>
          <p className="text-white/80 text-sm mt-1">
            {websiteUrl || 'https://example.com'}
          </p>
        </div>
        
        {/* Report content */}
        <div className="p-6">
          {/* Overall score */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-center">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Overall AI Visibility Score</h4>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="70"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-800 score-counter" data-target="75">75</span>
                  <span className="text-lg font-medium text-gray-500">/100</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Your website has good AI visibility but there's room for improvement.
            </p>
          </div>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Structure Score</h4>
              <div className="text-2xl font-bold text-primary score-counter" data-target="82">82</div>
              <p className="text-xs text-gray-500 mt-1">Well-structured content</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Retrievability</h4>
              <div className="text-2xl font-bold text-primary score-counter" data-target="68">68</div>
              <p className="text-xs text-gray-500 mt-1">Moderate AI findability</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Semantic Clarity</h4>
              <div className="text-2xl font-bold text-primary score-counter" data-target="77">77</div>
              <p className="text-xs text-gray-500 mt-1">Good semantic structure</p>
            </div>
          </div>
          
          {/* Detailed metrics */}
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Detailed Analysis</h4>
          
          <div ref={chartRef} className="mb-8">
            <div className="flex items-end h-[200px] gap-3 mb-2">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-indigo-100 rounded-t-lg relative overflow-hidden">
                  <div 
                    className="chart-bar bg-gradient-to-t from-indigo-600 to-indigo-400 w-full absolute bottom-0"
                    style={{ '--bar-height': '85%' }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-500 mt-2">Semantic HTML</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-indigo-100 rounded-t-lg relative overflow-hidden">
                  <div 
                    className="chart-bar bg-gradient-to-t from-indigo-600 to-indigo-400 w-full absolute bottom-0"
                    style={{ '--bar-height': '65%' }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-500 mt-2">Metadata</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-indigo-100 rounded-t-lg relative overflow-hidden">
                  <div 
                    className="chart-bar bg-gradient-to-t from-indigo-600 to-indigo-400 w-full absolute bottom-0"
                    style={{ '--bar-height': '72%' }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-500 mt-2">Content Structure</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-indigo-100 rounded-t-lg relative overflow-hidden">
                  <div 
                    className="chart-bar bg-gradient-to-t from-indigo-600 to-indigo-400 w-full absolute bottom-0"
                    style={{ '--bar-height': '90%' }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-500 mt-2">Accessibility</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-indigo-100 rounded-t-lg relative overflow-hidden">
                  <div 
                    className="chart-bar bg-gradient-to-t from-indigo-600 to-indigo-400 w-full absolute bottom-0"
                    style={{ '--bar-height': '58%' }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-500 mt-2">AI Readability</span>
              </div>
            </div>
          </div>
          
          {/* Recommendations */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Recommendations</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-electric-blue flex items-center justify-center text-white text-xs mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Improve metadata structure</h5>
                  <p className="text-sm text-gray-600">Add more structured data using JSON-LD to help AI systems better understand your content.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-electric-blue flex items-center justify-center text-white text-xs mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Enhance content hierarchy</h5>
                  <p className="text-sm text-gray-600">Use more descriptive headings and improve the logical flow of information.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-electric-blue flex items-center justify-center text-white text-xs mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Implement AHP Mod 2.0</h5>
                  <p className="text-sm text-gray-600">Add the AI Handshake Protocol to significantly improve AI visibility and retrievability.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <a 
              href="mailto:info@aihandshake.org" 
              className="inline-block py-3 px-6 bg-gradient-to-r from-primary to-electric-blue text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Full Report
            </a>
            <p className="text-xs text-gray-500 mt-3">
              This is a sample report. Contact us for a complete analysis of your website.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SampleReport;
