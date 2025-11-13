import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lianjia-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8 bg-gradient-to-tr from-accent-blue to-accent-teal rounded-lg overflow-hidden transform -rotate-12">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm transform rotate-12"></div>
                </div>
              </div>
              <span className="text-xl font-display font-bold">ZONER</span>
            </div>
            <p className="text-lianjia-300 text-sm leading-relaxed">
              Streamlining the real estate market with an integrated online platform for buying, selling, and renting properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-lianjia-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-lianjia-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-lianjia-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-lianjia-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-lianjia-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ai-feature" className="text-lianjia-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  AI Features
                </Link>
              </li>
              <li>
                <a href="#features" className="text-lianjia-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-lianjia-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-lianjia-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-lianjia-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Buy Property
                </a>
              </li>
              <li>
                <a href="#" className="text-lianjia-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Sell Property
                </a>
              </li>
              <li>
                <a href="#" className="text-lianjia-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Rent Property
                </a>
              </li>
              <li>
                <a href="#" className="text-lianjia-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Virtual Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-lianjia-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Property Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent-blue shrink-0 mt-0.5" />
                <span className="text-lianjia-300">
                  123 Real Estate Blvd, Beijing, coimbatore
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent-blue shrink-0" />
                <span className="text-lianjia-300">+91 866 755 3861</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent-blue shrink-0" />
                <span className="text-lianjia-300">contact hharisudhan@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-lianjia-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-lianjia-400 text-sm">
              &copy; {new Date().getFullYear()} ZONER. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-lianjia-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lianjia-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lianjia-400 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
