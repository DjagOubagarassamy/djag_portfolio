import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold text-white">
          djag<span className="text-purple-500">.info</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/DjagOubagarassamy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/djag-ouba-11562a258/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        
        <div className="btn-mobile flex items-center space-x-4">
            <a 
              href="https://github.com/DjagOubagarassamy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/djag-ouba-11562a258/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* <nav className="flex flex-col items-center space-y-8 text-xl">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-purple-400 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-purple-400 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-white hover:text-purple-400 transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-purple-400 transition-colors"
          >
            Contact
          </button>
          <div className="flex items-center space-x-6 mt-6">
            <a 
              href="https://github.com/toinfinite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/samiur-rahman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;