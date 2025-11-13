
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import { toast } from 'sonner';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-lianjia-100/50 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/home" 
            className="flex items-center space-x-2 transform transition hover:scale-[1.03]"
          >
            <div className="relative w-8 h-8 bg-gradient-to-tr from-accent-blue to-accent-teal rounded-lg overflow-hidden transform -rotate-12">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-12"></div>
              </div>
            </div>
            <span className="text-xl font-display font-bold text-lianjia-900">ZONER</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/home" 
              className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-blue after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left ${
                location.pathname === '/home' ? 'text-lianjia-900 after:scale-x-100' : 'text-lianjia-600 hover:text-lianjia-900'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-blue after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left ${
                location.pathname === '/features' ? 'text-lianjia-900 after:scale-x-100' : 'text-lianjia-600 hover:text-lianjia-900'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/testimonials" 
              className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-blue after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left ${
                location.pathname === '/testimonials' ? 'text-lianjia-900 after:scale-x-100' : 'text-lianjia-600 hover:text-lianjia-900'
              }`}
            >
              Testimonials
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-blue after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left ${
                location.pathname === '/pricing' ? 'text-lianjia-900 after:scale-x-100' : 'text-lianjia-600 hover:text-lianjia-900'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/faq" 
              className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-blue after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left ${
                location.pathname === '/faq' ? 'text-lianjia-900 after:scale-x-100' : 'text-lianjia-600 hover:text-lianjia-900'
              }`}
            >
              FAQ
            </Link>
            <Link 
              to="/ai-feature" 
              className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-blue after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left ${
                location.pathname === '/ai-feature' ? 'text-lianjia-900 after:scale-x-100' : 'text-lianjia-600 hover:text-lianjia-900'
              }`}
            >
              AI Features
            </Link>
            <Link 
              to="/ai-feature" 
              className="btn-primary text-sm py-2.5 px-5"
            >
              Try AI Assistant
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm font-medium text-lianjia-600 hover:text-lianjia-900 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {!isMobileMenuOpen ? (
              <Menu className="w-6 h-6 text-lianjia-800" />
            ) : (
              <X className="w-6 h-6 text-lianjia-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-lianjia-100 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          <Link 
            to="/home" 
            className={`block py-2 text-base font-medium ${
              location.pathname === '/home' ? 'text-accent-blue' : 'text-lianjia-800'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`block py-2 text-base font-medium ${
              location.pathname === '/features' ? 'text-accent-blue' : 'text-lianjia-800'
            }`}
          >
            Features
          </Link>
          <Link 
            to="/testimonials" 
            className={`block py-2 text-base font-medium ${
              location.pathname === '/testimonials' ? 'text-accent-blue' : 'text-lianjia-800'
            }`}
          >
            Testimonials
          </Link>
          <Link 
            to="/pricing" 
            className={`block py-2 text-base font-medium ${
              location.pathname === '/pricing' ? 'text-accent-blue' : 'text-lianjia-800'
            }`}
          >
            Pricing
          </Link>
          <Link 
            to="/faq" 
            className={`block py-2 text-base font-medium ${
              location.pathname === '/faq' ? 'text-accent-blue' : 'text-lianjia-800'
            }`}
          >
            FAQ
          </Link>
          <Link 
            to="/ai-feature" 
            className={`block py-2 text-base font-medium ${
              location.pathname === '/ai-feature' ? 'text-accent-blue' : 'text-lianjia-800'
            }`}
          >
            AI Features
          </Link>
          <Link 
            to="/ai-feature" 
            className="block py-2 mt-3 text-center bg-gradient-to-r from-accent-blue to-accent-teal text-white rounded-lg font-medium"
          >
            Try AI Assistant
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 w-full py-2 text-base font-medium text-lianjia-800 hover:text-accent-blue"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
