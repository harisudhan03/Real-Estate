
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TestimonialsSection from '../components/home/TestimonialsSection';

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
