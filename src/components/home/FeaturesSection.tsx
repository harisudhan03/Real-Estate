
import React, { useRef, useEffect, useState } from 'react';
import { Search, Home, Clock, PieChart } from 'lucide-react';

const FeaturesSection = () => {
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

  const features = [
    {
      icon: <Search className="w-10 h-10 text-accent-blue" />,
      title: 'Smart Property Search',
      description: 'Our AI-powered search understands your preferences and finds properties that match your unique needs with precision.',
      delay: 100
    },
    {
      icon: <Home className="w-10 h-10 text-accent-teal" />,
      title: 'Virtual Tours',
      description: 'Experience properties remotely with immersive 3D virtual tours, saving time and narrowing down your options efficiently.',
      delay: 200
    },
    {
      icon: <Clock className="w-10 h-10 text-accent-purple" />,
      title: 'Real-time Updates',
      description: 'Get instant notifications about new listings, price changes, and market trends tailored to your interests.',
      delay: 300
    },
    {
      icon: <PieChart className="w-10 h-10 text-accent-blue" />,
      title: 'Market Analytics',
      description: 'Access comprehensive market data and analytics to make informed decisions about buying, selling, or renting properties.',
      delay: 400
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="section-container overflow-hidden">
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-4 bg-accent-blue/10 rounded-full text-accent-blue font-medium text-sm mb-4">
          Features
        </span>
        <h2 className={`section-title transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Revolutionizing Real Estate
        </h2>
        <p className={`section-subtitle transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Our platform combines cutting-edge technology with user-friendly design to deliver a seamless property experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`glass-card rounded-xl p-6 hover-lift transition-all duration-700 delay-${feature.delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg w-16 h-16 flex items-center justify-center mb-5 shadow-md">
              {feature.icon}
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">
              {feature.title}
            </h3>
            <p className="text-lianjia-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Feature Showcase */}
      <div className={`mt-24 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="lg:col-span-2 space-y-6">
          <span className="inline-block py-1 px-4 bg-accent-teal/10 rounded-full text-accent-teal font-medium text-sm">
            Seamless Experience
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-bold">
            All Your Real Estate Needs in One Platform
          </h3>
          <p className="text-lianjia-600">
            Our integrated approach connects all aspects of the property journey, from search to negotiation to closing, in a single streamlined interface.
          </p>
          
          <ul className="space-y-3">
            {[
              'Advanced filtering and sorting options',
              'Secure messaging with property owners',
              'Document signing and verification',
              'Payment processing and escrow services'
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="bg-gradient-to-r from-accent-blue to-accent-teal rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lg:col-span-3 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 to-accent-purple/30 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3" 
              alt="Lianjia Platform Interface" 
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-lianjia-900/50 to-transparent"></div>
            
            {/* Floating UI Elements */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
              <div className="bg-white/90 backdrop-blur-md rounded-lg py-2 px-4 shadow-lg flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Available Now</span>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-lg py-2 px-4 shadow-lg flex items-center">
                <span className="text-sm font-medium">¥8,500,000</span>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-lg py-2 px-4 shadow-lg flex items-center">
                <span className="text-sm font-medium">3 Bed • 2 Bath</span>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-accent-blue/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent-teal/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
