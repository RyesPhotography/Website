import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { heroSlides } from '../data';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      const yOffset = -80;
      const y = gallerySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  // Preload images for smooth transitions
  useEffect(() => {
    heroSlides.forEach(slide => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Slideshow */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-hidden={index !== currentSlide}
        />
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
        <div className="text-center slide-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold text-white mb-4 leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Fine art photography capturing life's most precious moments
          </p>
          <button 
            onClick={handleScrollDown}
            className="btn bg-white hover:bg-amber-50 text-amber-800 border-0 mt-4"
          >
            View Gallery
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            } transition-all`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10 hidden md:block"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;