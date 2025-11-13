
import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const FAQ = () => {
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="section-container" ref={sectionRef}>
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 bg-accent-teal/10 rounded-full text-accent-teal font-medium text-sm mb-4">
              FAQ
            </span>
            <h2 className={`section-title transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Frequently Asked Questions
            </h2>
            <p className={`section-subtitle transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Find answers to the most common questions about our services
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              {
                question: 'Can I upgrade or downgrade my plan later?',
                answer: 'Yes, you can upgrade your plan at any time. Downgrades will take effect at the end of your current billing cycle.'
              },
              {
                question: 'Are there any additional fees?',
                answer: 'No hidden fees. All features listed in your plan are included in the price you see.'
              },
              {
                question: 'Do you offer a free trial?',
                answer: 'Yes, we offer a 14-day free trial on our Premium plan so you can experience all the features before committing.'
              },
              {
                question: 'How secure is my data?',
                answer: 'Your security is our priority. We use industry-leading encryption and security practices to protect your information.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for business accounts.'
              },
              {
                question: 'Can I cancel my subscription anytime?',
                answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.'
              },
              {
                question: 'Do you provide customer support?',
                answer: 'Yes, we offer 24/7 customer support via email, live chat, and phone for all our paid plans.'
              },
              {
                question: 'Is my personal information shared with third parties?',
                answer: 'No, we never share your personal information with third parties without your explicit consent.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-lianjia-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-medium mb-2">{faq.question}</h4>
                <p className="text-lianjia-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
