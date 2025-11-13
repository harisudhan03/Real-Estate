
import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatInterface from '../components/ai/ChatInterface';

const AIFeature = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-lianjia-50 to-white z-0"></div>
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-accent-teal/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span 
              className={`inline-block py-1 px-4 bg-accent-blue/10 backdrop-blur-md border border-accent-blue/20 rounded-full text-accent-blue font-medium text-sm mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
              AI-Powered Real Estate Assistant
            </span>
            
            <h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
              Intelligent Property Insights <br />
              <span className="text-gradient">With Artificial Intelligence</span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl text-lianjia-600 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
              Our AI assistant is here to help with all your real estate questions. Get personalized property recommendations and market insights instantly.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white relative z-10">
          <div className="w-[90%] mx-auto">
            <ChatInterface />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIFeature;
