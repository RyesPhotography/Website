import React, { useState, useEffect } from 'react';
import { categories, galleryImages } from '../data';
import { Image } from '../types';
import ProgressiveImage from './ProgressiveImage';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState<Image[]>(galleryImages);
  const [isInView, setIsInView] = useState(false);
  
  // Filter images when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.category === activeCategory));
    }
  }, [activeCategory]);

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

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`category-button ${
              activeCategory === category.id ? 'active' : ''
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="image-gallery">
        {filteredImages.map((image, index) => (
          <div 
            key={image.id}
            className={`overflow-hidden rounded-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
              isInView ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
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
    </section>
  );
};

export default Gallery;