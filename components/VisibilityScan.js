import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import SampleReport from './SampleReport';

const VisibilityScan = () => {
  const [activeTab, setActiveTab] = useState('sample-report');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const reportRef = useRef(null);
  
  // Animation for the glow effect
  useEffect(() => {
    if (reportRef.current) {
      gsap.to('.glow-effect', {
        boxShadow: '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)',
        duration: 2,
        repeat: -1,
        yoyo: true
      });
    }
  }, [showReport]);

  const handleGenerateReport = (e) => {
    e.preventDefault();
    if (!websiteUrl) return;
    
    setIsGenerating(true);
    
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      setShowReport(true);
    }, 2500);
  };
  
  const handleCloseReport = () => {
    setShowReport(false);
    setWebsiteUrl('');
  };

  return (
    <motion.section 
      className="py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence>
        {showReport && (
          <SampleReport websiteUrl={websiteUrl} onClose={handleCloseReport} />
        )}
      </AnimatePresence>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/30 z-0"></div>
      <div className="absolute inset-0 bg-cyberpunk-grid bg-[size:50px_50px] opacity-20 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden relative"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Preview badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
            PREVIEW
          </div>
          
          {/* Header */}
          <div className="p-8 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Test & Preview AHP Mod 2.0</h2>
          </div>
          
          {/* Tabs */}
          <div className="px-8">
            <div className="flex border-b border-gray-200">
              <button
                className={`py-3 px-4 font-medium text-sm transition-all duration-200 relative ${
                  activeTab === 'sample-report' 
                    ? 'text-primary' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('sample-report')}
              >
                Sample Report
                {activeTab === 'sample-report' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-electric-blue"
                    layoutId="activeTab"
                  />
                )}
              </button>
              <button
                className={`py-3 px-4 font-medium text-sm transition-all duration-200 relative ${
                  activeTab === 'connection-test' 
                    ? 'text-primary' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('connection-test')}
              >
                Connection Test
                {activeTab === 'connection-test' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-electric-blue"
                    layoutId="activeTab"
                  />
                )}
              </button>
            </div>
          </div>
          
          {/* Tab content */}
          <div className="p-8 pt-6">
            {activeTab === 'sample-report' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-gray-600 text-sm mb-6 text-center">
                  Enter your website URL to generate a sample AI visibility report
                </p>
                
                <form onSubmit={handleGenerateReport}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="url"
                        className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 transition-all duration-200"
                        placeholder="https://yourwebsite.com"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-primary to-electric-blue text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating Report...
                      </>
                    ) : (
                      'Generate Sample Report'
                    )}
                  </motion.button>
                </form>
              </motion.div>
            )}
            
            {activeTab === 'connection-test' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-gray-600 text-sm mb-6 text-center">
                  Verify if your website has properly implemented the AHP Mod 2.0 protocol
                </p>
                
                <form onSubmit={handleGenerateReport}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="url"
                        className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 transition-all duration-200"
                        placeholder="https://yourwebsite.com"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-primary to-electric-blue text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Testing Connection...
                      </>
                    ) : (
                      'Test Connection'
                    )}
                  </motion.button>
                </form>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisibilityScan;
