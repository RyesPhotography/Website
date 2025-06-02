import React, { useState, useEffect } from 'react';
import { galleryImages } from '../data';
import { Image } from '../types';
import ProgressiveImage from './ProgressiveImage';

const Gallery: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [visibleImages, setVisibleImages] = useState<Image[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  
  // Load images in batches for smooth performance
  const BATCH_SIZE = 4;
  
  // Load initial batch
  useEffect(() => {
    setLoadedCount(0);
    setVisibleImages(galleryImages.slice(0, BATCH_SIZE));
  }, []);

  // Load more images as they come into view
  useEffect(() => {
    if (loadedCount < galleryImages.length && isInView) {
      const timer = setTimeout(() => {
        const nextBatch = galleryImages.slice(0, Math.min(galleryImages.length, visibleImages.length + BATCH_SIZE));
        setVisibleImages(nextBatch);
        setLoadedCount(nextBatch.length);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [loadedCount, visibleImages.length, isInView]);
  
  // Detect when gallery section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      observer.observe(galleryElement);
    }

    return () => {
      if (galleryElement) {
        observer.unobserve(galleryElement);
      }
    };
  }, []);

  // Load more images when scrolling near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (visibleImages.length >= galleryImages.length) return;
      
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;
      
      if (scrollPosition > documentHeight - 1000) {
        const nextBatch = galleryImages.slice(0, Math.min(galleryImages.length, visibleImages.length + BATCH_SIZE));
        setVisibleImages(nextBatch);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleImages]);

  return (
    <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto">
      <div className={`text-center mb-12 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3 text-neutral-800">
          Portfolio Gallery
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Browse through my collection of photographs across different categories. Each image tells a unique story captured through my lens.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="image-gallery">
        {visibleImages.map((image, index) => (
          <div 
            key={image.id}
            className={`overflow-hidden rounded-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
              isInView ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ 
              animationDelay: `${(index % BATCH_SIZE) * 100}ms`,
              willChange: 'transform'
            }}
          >
            <ProgressiveImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Loading indicator */}
      {visibleImages.length < galleryImages.length && isInView && (
        <div className="text-center mt-8">
          <div className="animate-spin w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full mx-auto"></div>
        </div>
      )}
    </section>
  );
};

export default Gallery;