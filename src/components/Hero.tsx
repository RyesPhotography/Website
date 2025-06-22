import React, { useState, useEffect } from 'react';
import { heroSlides } from '../data';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(heroSlides.length).fill(false));
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // OPTIMIZED: Only preload non-LCP images after LCP loads
  useEffect(() => {
    // First slide (LCP) is already preloaded in HTML, so mark it as loaded immediately
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[0] = true; // First slide is preloaded in HTML
      return newState;
    });

    // Lazy load other slides after a delay to not compete with LCP
    const timer = setTimeout(() => {
      heroSlides.slice(1).forEach((slide, index) => {
        const actualIndex = index + 1; // +1 because we skip first slide
        const desktopImg = new Image();
        const mobileImg = new Image();
        
        let loadedCount = 0;
        const checkBothLoaded = () => {
          loadedCount++;
          if (loadedCount === 2) {
            setImagesLoaded(prev => {
              const newState = [...prev];
              newState[actualIndex] = true;
              return newState;
            });
          }
        };

        desktopImg.src = slide.src;
        desktopImg.onload = checkBothLoaded;
        
        if (slide.srcMobile) {
          mobileImg.src = slide.srcMobile;
          mobileImg.onload = checkBothLoaded;
        } else {
          checkBothLoaded();
        }
      });
    }, 1000); // Wait 1 second before loading other slides

    return () => clearTimeout(timer);
  }, []);

  // Get the appropriate image source based on screen size
  const getImageSrc = (slide: any) => {
    return isMobile && slide.srcMobile ? slide.srcMobile : slide.src;
  };

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
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
          
          {/* CRITICAL OPTIMIZATION: Add fetchpriority="high" to first slide only */}
          <img
            src={getImageSrc(slide)}
            alt={slide.alt}
            className="w-full h-full object-cover"
            style={{
              objectPosition: slide.id === 'slide1' ? 'center 35%' : 'center center'
            }}
            // HIGH PRIORITY for LCP element (first slide)
            fetchPriority={index === 0 ? "high" : "low"}
            // Don't lazy load the first image, lazy load others
            loading={index === 0 ? "eager" : "lazy"}
            // Add importance hint for first slide
            {...(index === 0 && { 'data-priority': 'critical' })}
          />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-20 pt-32">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
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