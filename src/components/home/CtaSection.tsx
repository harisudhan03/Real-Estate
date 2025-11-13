
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden relative py-20 bg-gradient-to-b from-white to-lianjia-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`bg-gradient-to-r from-lianjia-900 to-lianjia-800 rounded-3xl overflow-hidden shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative p-8 md:p-16">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full transform -translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="inline-block py-1 px-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-sm mb-6">
                Ready to Get Started?
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Find Your Dream Property with Zoner Today
              </h2>
              
              <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have transformed their real estate experience with our innovative platform.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/ai-feature" 
                  className="btn-primary bg-white text-lianjia-900 hover:bg-lianjia-50 group"
                >
                  Try AI Assistant
                  <ArrowRight className="ml-2 w-5 h-5 inline transition-transform group-hover:translate-x-1" />
                </Link>
                <button 
                  className="btn-secondary bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lianjia-500 mb-6">Trusted by leading companies and thousands of individuals</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
              <div key={index} className="text-lianjia-400 font-display font-bold text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
