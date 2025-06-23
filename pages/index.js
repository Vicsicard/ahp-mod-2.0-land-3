import Head from 'next/head';
import { useEffect } from 'react';
import AnimatedHero from '../components/AnimatedHero';
import InteractiveComparison from '../components/InteractiveComparison';
import AIFilteringRules from '../components/AIFilteringRules';
import HowAHPHelps from '../components/HowAHPHelps';
import RoadmapTimeline from '../components/RoadmapTimeline';
import AnimatedCTA from '../components/AnimatedCTA';
import TrustFAQ from '../components/TrustFAQ';
import AnimatedFooter from '../components/AnimatedFooter';

export default function Home() {
  // Add scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Head>
        <title>AHP Mod 2.0: Visibility for the AI-First Web</title>
        <meta name="description" content="The first website visibility engine optimized for AI-driven search and retrieval systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        {/* Hero Section */}
        <AnimatedHero />

        {/* Paradigm Shift Section */}
        <section className="section py-20 relative overflow-hidden transition-all duration-700 opacity-0 translate-y-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
                The Internet isn't just for people anymore.
              </div>
              <div className="text-lg text-gray-600">
                Users don't browse websites. They ask AI and get summaries. Most answers are built from your content — but without linking to you. To compete, you must optimize for what the machine sees.
              </div>
            </div>
          </div>
        </section>

        {/* Human vs Machine Web Comparison */}
        <InteractiveComparison />

        {/* AHP Mod 2.0 Introduction */}
        <section className="section py-20 relative overflow-hidden transition-all duration-700 opacity-0 translate-y-10">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-electric-blue">
              The First Visibility Engine Built for the AI Layer
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              AHP Mod 2.0 uses our patent-pending AI Visibility Scoring System to audit how your content is interpreted by AI. We scan your site, analyze structure, and deliver a free report to help you rank in the AI layer.
            </p>
            <ul className="list-none pl-0 space-y-4 text-lg">
              {[
                'Scans public site content',
                'Scores retrievability, structure',
                'Sends AI visibility report by email'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-electric-blue flex items-center justify-center text-white text-xs mr-3">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What You're Up Against */}
        <AIFilteringRules />

        {/* How AHP Helps */}
        <HowAHPHelps />

        {/* Future Roadmap Teaser */}
        <RoadmapTimeline />

        {/* Final CTA */}
        <AnimatedCTA />

        {/* Trust/FAQ Section */}
        <TrustFAQ />
      </main>

      {/* Footer */}
      <AnimatedFooter />

      {/* Add global styles for section reveal animations */}
      <style jsx global>{`
        .section {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .section.revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
