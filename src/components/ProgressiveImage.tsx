import React, { useState, useEffect } from 'react';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  onLoadComplete?: () => void;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  onLoadComplete
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  
  // Calculate aspect ratio for consistent layout
  const aspectRatio = (height / width) * 100;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      onLoadComplete?.();
    };
    
    return () => {
      img.onload = null;
    };
  }, [src, onLoadComplete]);

  return (
    <div 
      className="relative overflow-hidden"
      style={{ 
        paddingBottom: `${aspectRatio}%`,
        height: 0
      }}
    >
      {/* Loading skeleton */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-neutral-200 animate-pulse"
        />
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{ 
          outline: 'none !important',
          border: 'none !important',
          boxShadow: 'none !important'
        }}
        onFocus={(e) => e.target.blur()}
        tabIndex={-1}
      />
    </div>
  );
};

export default ProgressiveImage;