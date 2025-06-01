import React from 'react';
import { Camera, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <Camera className="h-6 w-6 mr-2 text-amber-500" />
            <span className="text-xl font-playfair font-semibold">
              Ryes<span className="text-amber-500">.</span>Photographyy
            </span>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center md:text-left mb-8 md:mb-0">
            {[
              { label: 'Home', href: '#hero' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-400 hover:text-amber-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Social Icons */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-playfair font-medium mb-4 text-white">
              Follow Me
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ryes.photographyy?fbclid=IwY2xjawKa59FleHRuA2FlbQIxMABicmlkETFnT2ltWjVpb3FPWXJRcFJJAR7HXrBcu-NSDMbXrJvGZ-brfOZlH6KRzGmAUG_O3GkHfq2tKQxk09YSe5UPVQ_aem_tyyh_LSbsRHK05eQstQkhg"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-amber-500 hover:text-amber-500 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090296060657"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-amber-500 hover:text-amber-500 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@ryes.photographyy?fbclid=IwY2xjawKa6CVleHRuA2FlbQIxMABicmlkETFnT2ltWjVpb3FPWXJRcFJJAR7wG975rXJyJtNB-3jw8bKtXOVqVLK4Ha5XidrOYBz3kH3QwzBmfO1jO6tPaQ_aem_s40H2CHrUaqEqpumn6WZlg"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-amber-500 hover:text-amber-500 transition-colors"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  viewBox="0 0 256 256" 
                  width="20" 
                  height="20" 
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M224 84.4c-21.1 0-38.3-17.2-38.3-38.3V32h-36.3v119.2c0 19.8-16.1 35.9-35.9 35.9s-35.9-16.1-35.9-35.9 16.1-35.9 35.9-35.9v-36.3c-39.8 0-72.2 32.4-72.2 72.2s32.4 72.2 72.2 72.2 72.2-32.4 72.2-72.2v-48.2c11.2 9.1 25.2 14.6 40.4 14.6V84.4z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {currentYear} Ryes.Photographyy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;