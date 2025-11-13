
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, Key, MapPin } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay before triggering animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Images for the shifting background
  const buildingImages = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % buildingImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {buildingImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${img})`,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-lianjia-900/60 backdrop-blur-sm" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-[20%] left-[10%] w-16 h-16 rounded-2xl bg-accent-blue/10 backdrop-blur-md border border-white/10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ animationDelay: '0.2s', animation: 'float 6s ease-in-out infinite' }}
        >
          <Home className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
        </div>
        <div 
          className={`absolute top-[70%] left-[80%] w-20 h-20 rounded-full bg-accent-teal/10 backdrop-blur-md border border-white/10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ animationDelay: '0.4s', animation: 'float 7s ease-in-out infinite' }}
        >
          <Key className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
        </div>
        <div 
          className={`absolute top-[30%] left-[70%] w-12 h-12 rounded-lg bg-accent-purple/10 backdrop-blur-md border border-white/10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ animationDelay: '0.6s', animation: 'float 5s ease-in-out infinite' }}
        >
          <MapPin className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <span 
            className={`inline-block py-1 px-4 bg-accent-blue/10 backdrop-blur-md border border-accent-blue/20 rounded-full text-accent-teal font-medium text-sm mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            Reimagining Real Estate
          </span>
          
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            Find Your <span className="text-gradient">Perfect Space</span> With Zoner
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-white/80 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            Streamlining the real estate experience with an innovative platform that connects buyers, sellers, and renters through cutting-edge technology.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            <Link 
              to="/ai-feature" 
              className="btn-primary w-full sm:w-auto"
            >
              Try AI Assistant
            </Link>
            <a 
              href="#features" 
              className="btn-secondary w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Property Search Bar */}
        <div 
          className={`mt-16 max-w-4xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/10">
                <label className="block text-white/70 text-sm mb-1">Location</label>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-white/50 mr-2" />
                  <select className="w-full bg-transparent text-white border-none focus:outline-none focus:ring-0">
                    <option value="" className="bg-lianjia-800 text-white">Any Location</option>
                    <option value="beijing" className="bg-lianjia-800 text-white">Beijing</option>
                    <option value="shanghai" className="bg-lianjia-800 text-white">Shanghai</option>
                    <option value="guangzhou" className="bg-lianjia-800 text-white">Guangzhou</option>
                  </select>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/10">
                <label className="block text-white/70 text-sm mb-1">Property Type</label>
                <div className="flex items-center">
                  <Home className="w-5 h-5 text-white/50 mr-2" />
                  <select className="w-full bg-transparent text-white border-none focus:outline-none focus:ring-0">
                    <option value="" className="bg-lianjia-800 text-white">Any Type</option>
                    <option value="apartment" className="bg-lianjia-800 text-white">Apartment</option>
                    <option value="house" className="bg-lianjia-800 text-white">House</option>
                    <option value="condo" className="bg-lianjia-800 text-white">Condo</option>
                  </select>
                </div>
              </div>
              <div className="md:border-l md:border-white/10 md:pl-4">
                <button className="w-full bg-gradient-to-r from-accent-blue to-accent-teal text-white rounded-lg p-3 h-full flex items-center justify-center font-medium transition-all hover:shadow-lg hover:scale-[1.02]">
                  <Search className="w-5 h-5 mr-2" />
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
