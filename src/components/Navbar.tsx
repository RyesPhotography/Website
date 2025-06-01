import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Only show navbar when at the very top (hero section)
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({top: y, behavior: 'smooth'});
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 bg-transparent py-5 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Camera className="h-6 w-6 mr-2 text-white" />
          <span className="text-xl font-playfair font-semibold text-white">
            Ryes<span className="text-amber-500">.</span>Photographyy
          </span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'gallery', label: 'Gallery' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-medium text-sm tracking-wide text-white hover:text-amber-200 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none z-30"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-neutral-800" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white p-6 md:hidden flex flex-col z-20">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-playfair font-semibold text-amber-600">
                Ryes<span className="text-amber-500">.</span>Photographyy
              </span>
            </div>
            <div className="flex flex-col space-y-6 mt-10">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-neutral-800 text-2xl font-playfair hover:text-amber-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;