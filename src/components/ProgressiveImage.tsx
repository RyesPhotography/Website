import React, { useState, useEffect } from 'react';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '' 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <img
      src={imageSrc || src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={`progressive-image ${isLoaded ? 'loaded' : 'loading'} ${className}`}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default ProgressiveImage;