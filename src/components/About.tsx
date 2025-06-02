import React, { useEffect, useState } from 'react';
import { aboutInfo } from '../data';
import ProgressiveImage from './ProgressiveImage';

const About: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3 text-neutral-800">
            About The Photographer
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className={`${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              {/* Only show decorative background AFTER image loads */}
              {imageLoaded && (
                <div className="absolute inset-0 bg-amber-200 rounded-md transform translate-x-4 translate-y-4 -z-10"></div>
              )}
              <div className="overflow-hidden rounded-md shadow-lg">
                <ProgressiveImage
                  src={aboutInfo.image}
                  alt={aboutInfo.name}
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  onLoadComplete={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className={`${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-playfair font-semibold mb-2 text-neutral-800">
              {aboutInfo.name}
            </h3>
            <p className="text-amber-600 italic mb-6">{aboutInfo.title}</p>
            
            <div className="text-neutral-700 space-y-4 leading-relaxed">
              <p>
                Hey, I'm Riley — the one behind the camera at Ryes.Photographyy. I've been doing this for over two years now. Honestly, I just love helping people get photos they actually like and want. Whether it's a graduation, a couple's session, or just something fun for yourself.
              </p>
              
              <p>
                My goal is to make you feel comfortable and capture those real moments. I handle everything from start to finish, so when you reach out, you're talking to the person who'll be showing up with the camera. I keep things simple, laid-back, and easygoing so it will be a wonderful experience.
              </p>
              
              <p className="font-medium">
                If you're looking for someone that pays attention to the little details, and wants to make sure you walk away with photos you're proud of... I'd love to work with you. Let's do a photo shoot soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;