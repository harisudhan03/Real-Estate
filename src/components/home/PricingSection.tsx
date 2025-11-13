
import React, { useRef, useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);

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

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: '¥199',
      annualPrice: '¥1,990',
      description: 'Essential features for individuals searching for properties.',
      features: [
        'Property Search & Filtering',
        'Virtual Tours (Limited)',
        '10 Property Saves',
        'Email Support',
        'Basic Notifications',
      ],
      notIncluded: [
        'Market Analytics',
        'Premium Listings',
        'Priority Support',
        'Transaction Management',
      ],
      cta: 'Get Started',
      delay: 100,
      popular: false,
    },
    {
      name: 'Premium',
      monthlyPrice: '¥399',
      annualPrice: '¥3,990',
      description: 'Advanced features for serious buyers, sellers, and renters.',
      features: [
        'Everything in Basic',
        'Unlimited Virtual Tours',
        'Unlimited Property Saves',
        'Market Analytics (Basic)',
        'Priority Support',
        'Advanced Notifications',
        'Transaction Management',
      ],
      notIncluded: [
        'AI Property Recommendations',
      ],
      cta: 'Select Plan',
      delay: 200,
      popular: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: '¥799',
      annualPrice: '¥7,990',
      description: 'Comprehensive solution for professionals and agencies.',
      features: [
        'Everything in Premium',
        'AI Property Recommendations',
        'Advanced Market Analytics',
        'Premium Listings',
        'Dedicated Account Manager',
        'API Access',
        'Custom Branding',
        'Team Collaboration Tools',
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      delay: 300,
      popular: false,
    },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="section-container">
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-4 bg-accent-teal/10 rounded-full text-accent-teal font-medium text-sm mb-4">
          Pricing
        </span>
        <h2 className={`section-title transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Simple, Transparent Pricing
        </h2>
        <p className={`section-subtitle transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Choose the perfect plan that fits your real estate needs, with no hidden fees.
        </p>

        {/* Billing Toggle */}
        <div className={`inline-flex items-center bg-lianjia-100 p-1 rounded-full mx-auto mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !isAnnual ? 'bg-white text-lianjia-900 shadow-md' : 'text-lianjia-600'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isAnnual ? 'bg-white text-lianjia-900 shadow-md' : 'text-lianjia-600'
            }`}
          >
            Annual
            <span className="ml-1 text-xs text-accent-blue font-bold">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden transition-all duration-700 delay-${plan.delay} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } ${
              plan.popular 
                ? 'border-2 border-accent-blue shadow-lg shadow-accent-blue/10 transform md:-translate-y-4' 
                : 'border border-lianjia-200'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-accent-blue to-accent-teal text-white text-xs text-center py-1 font-medium">
                Most Popular
              </div>
            )}
            <div className={`p-6 ${plan.popular ? 'pt-8' : ''}`}>
              <div className="text-xl font-display font-bold mb-2">{plan.name}</div>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-display font-bold">
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-lianjia-500 ml-2">
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>
              <p className="text-lianjia-600 mb-6 text-sm">{plan.description}</p>

              <button 
                className={`w-full py-3 rounded-lg font-medium transition-all mb-6 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-accent-blue to-accent-teal text-white hover:shadow-lg hover:scale-[1.02]' 
                    : 'bg-lianjia-100 text-lianjia-800 hover:bg-lianjia-200'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-3">
                <div className="text-sm font-medium text-lianjia-900 mb-2">Includes:</div>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-lianjia-700 text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded.length > 0 && (
                  <>
                    <div className="text-sm font-medium text-lianjia-900 mt-4 mb-2">Not included:</div>
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <X className="w-5 h-5 text-lianjia-300 mr-2 shrink-0" />
                        <span className="text-lianjia-500 text-sm">{feature}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enterprise Banner */}
      <div className={`mt-16 bg-gradient-to-r from-lianjia-900 to-lianjia-800 rounded-xl p-8 md:p-10 shadow-xl text-white transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">Need a custom solution?</h3>
            <p className="text-white/80 max-w-2xl">
              For real estate agencies, developers, and large teams with specialized requirements, our Enterprise plan offers customizable features and dedicated support.
            </p>
          </div>
          <button className="btn-primary bg-white text-lianjia-900 hover:bg-lianjia-50 whitespace-nowrap">
            Contact Sales
          </button>
        </div>
      </div>

      {/* FAQs */}
      <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <h3 className="text-2xl font-display font-bold text-center mb-10">Frequently Asked Questions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            }
          ].map((faq, index) => (
            <div key={index} className="bg-lianjia-50 rounded-lg p-6">
              <h4 className="text-lg font-medium mb-2">{faq.question}</h4>
              <p className="text-lianjia-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
