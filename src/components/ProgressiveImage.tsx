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
  }, [src]);

  return (
    <div className="relative overflow-hidden">
      {/* Loading skeleton */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-neutral-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${className}`}
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