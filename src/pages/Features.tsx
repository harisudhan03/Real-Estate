
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FeaturesSection from '../components/home/FeaturesSection';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
