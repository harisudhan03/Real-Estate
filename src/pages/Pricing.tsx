
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PricingSection from '../components/home/PricingSection';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <PricingSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
