import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { heroSlides } from '../data';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(heroSlides.length).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Preload images and track loading state
  useEffect(() => {
    heroSlides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.src;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Loading Skeleton - Only show if current slide isn't loaded */}
      {!imagesLoaded[currentSlide] && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-shimmer"></div>
        </div>
      )}

      {/* Background Slideshow */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide && imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
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
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full focus:outline-none ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            } transition-all`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;