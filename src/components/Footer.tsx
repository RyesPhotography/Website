import React from 'react';
import { Camera, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // SEO: Footer navigation for Saratoga Springs photographer website
  const footerLinks = [
    { 
      label: 'Home', 
      href: '#hero',
      ariaLabel: 'Return to Saratoga Springs photographer homepage',
      title: 'Home - Ryes Photography Saratoga Springs NY'
    },
    { 
      label: 'Gallery', 
      href: '#gallery',
      ariaLabel: 'Browse Saratoga Springs wedding and portrait photography gallery',
      title: 'Photography Portfolio - Saratoga Springs Wedding & Portrait Gallery'
    },
    { 
      label: 'About', 
      href: '#about',
      ariaLabel: 'Learn about Riley Morris - Professional photographer in Saratoga Springs',
      title: 'About Riley Morris - Saratoga Springs Wedding & Portrait Photographer'
    },
    { 
      label: 'Contact', 
      href: '#contact',
      ariaLabel: 'Contact Ryes Photography for Saratoga Springs wedding and portrait bookings',
      title: 'Contact Ryes Photography - Book Saratoga Springs Photographer'
    }
  ];

  // SEO: Social media links for Saratoga Springs photographer
  const socialLinks = [
    {
      href: "https://www.instagram.com/ryes.photographyy?fbclid=IwY2xjawKa59FleHRuA2FlbQIxMABicmlkETFnT2ltWjVpb3FPWXJRcFJJAR7HXrBcu-NSDMbXrJvGZ-brfOZlH6KRzGmAUG_O3GkHfq2tKQxk09YSe5UPVQ_aem_tyyh_LSbsRHK05eQstQkhg",
      icon: <Instagram size={20} />,
      label: "Instagram",
      ariaLabel: "Follow Ryes Photography on Instagram - Saratoga Springs wedding and portrait photos",
      title: "Instagram - Ryes Photography Saratoga Springs NY"
    },
    {
      href: "https://www.facebook.com/profile.php?id=100090296060657",
      icon: <Facebook size={20} />,
      label: "Facebook",
      ariaLabel: "Follow Ryes Photography on Facebook - Saratoga Springs photographer updates",
      title: "Facebook - Ryes Photography Saratoga Springs Wedding Photographer"
    },
    {
      href: "https://www.tiktok.com/@ryes.photographyy?fbclid=IwY2xjawKa6CVleHRuA2FlbQIxMABicmlkETFnT2ltWjVpb3FPWXJRcFJJAR7wG975rXJyJtNB-3jw8bKtXOVqVLK4Ha5XidrOYBz3kH3QwzBmfO1jO6tPaQ_aem_s40H2CHrUaqEqpumn6WZlg",
      icon: (
        <svg 
          viewBox="0 0 256 256" 
          width="20" 
          height="20" 
          fill="currentColor"
          stroke="none"
          aria-hidden="true"
        >
          <path d="M224 84.4c-21.1 0-38.3-17.2-38.3-38.3V32h-36.3v119.2c0 19.8-16.1 35.9-35.9 35.9s-35.9-16.1-35.9-35.9 16.1-35.9 35.9-35.9v-36.3c-39.8 0-72.2 32.4-72.2 72.2s32.4 72.2 72.2 72.2 72.2-32.4 72.2-72.2v-48.2c11.2 9.1 25.2 14.6 40.4 14.6V84.4z"/>
        </svg>
      ),
      label: "TikTok",
      ariaLabel: "Follow Ryes Photography on TikTok - Behind the scenes Saratoga Springs photography",
      title: "TikTok - Ryes Photography Saratoga Springs NY Behind The Scenes"
    }
  ];
  
  return (
    <footer 
      className="bg-neutral-900 text-white py-12"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
      aria-label="Saratoga Springs photographer website footer"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center mb-6 md:mb-0"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <Camera 
              className="h-6 w-6 mr-2 text-amber-500" 
              aria-hidden="true"
              role="img"
              title="Photography camera logo icon"
            />
            <span 
              className="text-xl font-playfair font-semibold"
              itemProp="name"
              aria-label="Ryes Photography - Professional photographer serving Saratoga Springs NY"
            >
              Ryes<span className="text-amber-500">.</span>Photographyy
            </span>
          </div>
          
          {/* Links */}
          <nav 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center md:text-left mb-8 md:mb-0"
            role="navigation"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            aria-label="Footer navigation for Saratoga Springs photographer website"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-400 hover:text-amber-500 transition-colors"
                aria-label={link.ariaLabel}
                title={link.title}
                itemProp="url"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Social Icons */}
          <div 
            className="flex flex-col items-center"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <h4 className="text-lg font-playfair font-medium mb-4 text-white">
              Follow Me
            </h4>
            <div 
              className="flex space-x-4"
              role="list"
              aria-label="Social media links for Ryes Photography Saratoga Springs"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-amber-500 hover:text-amber-500 transition-colors"
                  aria-label={social.ariaLabel}
                  title={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="sameAs"
                  role="listitem"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div 
          className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500 text-sm"
          role="contentinfo"
          aria-label="Copyright information for Ryes Photography Saratoga Springs"
        >
          <p 
            itemScope 
            itemType="https://schema.org/Organization"
            itemProp="copyrightNotice"
          >
            &copy; {currentYear} Ryes.Photographyy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;