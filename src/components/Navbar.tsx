import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <GraduationCap className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EduFrame</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-primary-600 transition-colors ${
                isActive('/') ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            {location.pathname !== '/' && (
              <>
                <Link 
                  to="/generate" 
                  className={`font-medium hover:text-primary-600 transition-colors ${
                    isActive('/generate') ? 'text-primary-600' : 'text-gray-700'
                  }`}
                >
                  Generate Video
                </Link>
                <Link 
                  to="/saved" 
                  className={`font-medium hover:text-primary-600 transition-colors ${
                    isActive('/saved') ? 'text-primary-600' : 'text-gray-700'
                  }`}
                >
                  Saved Videos
                </Link>
                <Link 
                  to="/discover" 
                  className={`font-medium hover:text-primary-600 transition-colors ${
                    isActive('/discover') ? 'text-primary-600' : 'text-gray-700'
                  }`}
                >
                  Discover
                </Link>
              </>
            )}
            
            {location.pathname === '/' ? (
              <Link to="/dashboard" className="btn-primary">
                Try Now
              </Link>
            ) : (
              <button className="btn-primary">
                Sign In
              </button>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden bg-white px-4 py-5 mt-3 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium ${isActive('/') ? 'text-primary-600' : 'text-gray-700'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              {location.pathname !== '/' && (
                <>
                  <Link 
                    to="/generate" 
                    className={`font-medium ${isActive('/generate') ? 'text-primary-600' : 'text-gray-700'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Generate Video
                  </Link>
                  <Link 
                    to="/saved" 
                    className={`font-medium ${isActive('/saved') ? 'text-primary-600' : 'text-gray-700'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Saved Videos
                  </Link>
                  <Link 
                    to="/discover" 
                    className={`font-medium ${isActive('/discover') ? 'text-primary-600' : 'text-gray-700'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Discover
                  </Link>
                </>
              )}
              
              {location.pathname === '/' ? (
                <Link 
                  to="/dashboard" 
                  className="btn-primary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Try Now
                </Link>
              ) : (
                <button className="btn-primary text-center">
                  Sign In
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;