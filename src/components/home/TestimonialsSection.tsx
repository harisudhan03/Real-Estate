
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const totalTestimonials = testimonials.length;

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

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-lianjia-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 bg-accent-purple/10 rounded-full text-accent-purple font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className={`section-title transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            What Our Clients Say
          </h2>
          <p className={`section-subtitle transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Discover how Zoner has transformed the real estate experience for thousands of satisfied customers.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={`relative max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-accent-blue/20">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                          <p className="text-lianjia-500 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-lianjia-700 italic text-lg leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-lianjia-500">{testimonial.date}</p>
                      <div className="text-sm text-lianjia-800 font-medium bg-lianjia-50 px-3 py-1 rounded-full">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white rounded-full p-3 shadow-lg z-10 hidden md:block hover:bg-lianjia-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-lianjia-800" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white rounded-full p-3 shadow-lg z-10 hidden md:block hover:bg-lianjia-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-lianjia-800" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1.5 transition-all ${
                  activeTestimonial === index 
                    ? 'bg-accent-blue w-6' 
                    : 'bg-lianjia-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {[
            { number: '500K+', label: 'Happy Clients' },
            { number: '1.2M+', label: 'Properties Listed' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '15+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={index} className="glass-card rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-display font-bold text-lianjia-900 mb-2">
                {stat.number}
              </div>
              <p className="text-lianjia-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: 'Wei Zhang',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3',
    location: 'Beijing, China',
    quote: 'Lianjia completely transformed my home buying experience. The virtual tours saved me countless hours, and their AI recommendations found me the perfect apartment that matched all my criteria. The entire process from search to closing was seamless.',
    rating: 5,
    date: 'March 15, 2023',
    service: 'Home Purchase'
  },
  {
    name: 'Li Mei',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3',
    location: 'Shanghai, China',
    quote: 'As a first-time seller, I was nervous about the process, but Lianjia made it incredibly straightforward. Their market analytics helped me price my property competitively, and their platform connected me with serious buyers quickly. Sold within two weeks!',
    rating: 5,
    date: 'January 22, 2023',
    service: 'Property Sale'
  },
  {
    name: 'Jian Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3',
    location: 'Guangzhou, China',
    quote: 'The real-time notifications feature is a game-changer. In a competitive rental market, being the first to know about new listings gave me a significant advantage. I secured my dream apartment because I was able to act quickly. Highly recommend!',
    rating: 5,
    date: 'April 7, 2023',
    service: 'Rental'
  },
  {
    name: 'Ying Wang',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3',
    location: 'Shenzhen, China',
    quote: 'As a property investor, I need reliable data and market insights. Lianjia provides comprehensive analytics that have proven invaluable for my investment decisions. The platform\'s ability to identify emerging neighborhood trends has helped me maximize returns.',
    rating: 4,
    date: 'February 3, 2023',
    service: 'Investment'
  }
];

export default TestimonialsSection;
