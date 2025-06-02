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

  // SEO: Navigation items for Saratoga Springs photographer website
  const navigationItems = [
    { 
      id: 'hero', 
      label: 'Home',
      ariaLabel: 'Navigate to Saratoga Springs photographer homepage',
      title: 'Home - Ryes Photography Saratoga Springs'
    },
    { 
      id: 'gallery', 
      label: 'Gallery',
      ariaLabel: 'View Saratoga Springs wedding and portrait photography portfolio',
      title: 'Photography Portfolio - Saratoga Springs Weddings & Portraits'
    },
    { 
      id: 'about', 
      label: 'About',
      ariaLabel: 'Learn about Saratoga Springs photographer Riley Morris',
      title: 'About Riley Morris - Professional Photographer Saratoga Springs NY'
    },
    { 
      id: 'contact', 
      label: 'Contact',
      ariaLabel: 'Contact Saratoga Springs photographer for bookings',
      title: 'Contact Ryes Photography - Book Saratoga Springs Wedding Photographer'
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 bg-transparent py-5 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      role="banner"
      itemScope
      itemType="https://schema.org/WPHeader"
      aria-label="Saratoga Springs photographer website navigation"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center"
          itemProp="url"
          aria-label="Ryes Photography - Saratoga Springs wedding and portrait photographer"
          title="Ryes Photography - Professional Photography Services Saratoga Springs NY"
        >
          <Camera 
            className="h-6 w-6 mr-2 text-white" 
            aria-hidden="true"
            role="img"
            title="Photography camera icon"
          />
          <span 
            className="text-xl font-playfair font-semibold text-white"
            itemProp="name"
          >
            Ryes<span className="text-amber-500">.</span>Photographyy
          </span>
        </a>
        
        <nav 
          className="hidden md:flex space-x-8"
          role="navigation"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
          aria-label="Main navigation for Saratoga Springs photographer website"
        >
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-medium text-sm tracking-wide text-white hover:text-amber-200 transition-colors"
              aria-label={item.ariaLabel}
              title={item.title}
              itemProp="url"
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none z-30"
          aria-label="Toggle mobile navigation menu for Saratoga Springs photographer website"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          title="Open mobile navigation menu"
        >
          {isOpen ? (
            <X 
              className="h-6 w-6 text-neutral-800" 
              aria-hidden="true"
              role="img"
              title="Close menu icon"
            />
          ) : (
            <Menu 
              className="h-6 w-6 text-white" 
              aria-hidden="true"
              role="img"
              title="Open menu icon"
            />
          )}
        </button>
        
        {/* Mobile menu */}
        {isOpen && (
          <div 
            className="fixed top-0 left-0 w-full h-screen bg-white p-6 md:hidden flex flex-col z-20"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu for Saratoga Springs photographer"
          >
            <div className="flex justify-between items-center mb-8">
              <span 
                className="text-xl font-playfair font-semibold text-amber-600"
                aria-label="Ryes Photography logo"
              >
                Ryes<span className="text-amber-500">.</span>Photographyy
              </span>
            </div>
            <nav 
              className="flex flex-col space-y-6 mt-10"
              role="navigation"
              aria-label="Mobile navigation links"
            >
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-neutral-800 text-2xl font-playfair hover:text-amber-600 transition-colors"
                  aria-label={item.ariaLabel}
                  title={item.title}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;