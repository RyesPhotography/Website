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
        className={`progressive-image ${isLoaded ? 'loaded' : 'loading'} ${className} focus:outline-none`}
        style={{ 
          outline: 'none',
          border: 'none'
        }}
        onLoad={() => {
          setIsLoaded(true);
          onLoadComplete?.();
        }}
      />
    </div>
  );
};

export default ProgressiveImage;