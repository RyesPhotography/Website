import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import { FormData, FormErrors } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactElement = document.getElementById('contact');
    if (contactElement) {
      observer.observe(contactElement);
    }

    return () => {
      if (contactElement) {
        observer.unobserve(contactElement);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // SEO: Contact form for Saratoga Springs wedding photographer bookings
        const response = await fetch('https://hook.us2.make.com/m5kag8tsd1behu5vwazvqxxbhm63v29n', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            // SEO: Track contact source for Saratoga Springs photography inquiries
            source: 'Website Contact Form - Saratoga Springs Photography',
            serviceArea: 'Saratoga Springs NY photographer contact'
          })
        });

        if (response.ok) {
          setIsSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setIsSuccess(false);
          }, 5000);
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // SEO: Contact information for Saratoga Springs wedding portrait photographer
  const contactInfo = [
    { 
      icon: <Mail size={20} />, 
      text: "ryes.photographyy@gmail.com",
      ariaLabel: "Email Saratoga Springs photographer for wedding and portrait bookings"
    },
    { 
      icon: <Phone size={20} />, 
      text: "+1 (518) 502-3655",
      ariaLabel: "Call Saratoga Springs photographer for consultation"
    },
    { 
      icon: <MapPin size={20} />, 
      text: "Saratoga Springs, N.Y.",
      ariaLabel: "Saratoga Springs NY photographer location and service area"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 px-4"
      itemScope 
      itemType="https://schema.org/ContactPage"
      aria-label="Contact Saratoga Springs photographer for wedding and portrait sessions"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 
            className="text-3xl md:text-4xl font-playfair font-semibold mb-3 text-neutral-800"
            itemProp="headline"
          >
            Get In Touch
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Interested in working together? You can schedule appointment for a consultation. If you have questions please fill out the form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-neutral-100 p-8 rounded-lg h-full" itemScope itemType="https://schema.org/LocalBusiness">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-neutral-800">
                Contact Information
              </h3>
              
              {/* Schedule Button - Moved above contact info */}
              <div className="mb-8">
                <a 
                  href="https://calendly.com/ryes-photographyy/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn w-full flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white transition-colors"
                  aria-label="Schedule photography consultation appointment in Saratoga Springs"
                  title="Book Saratoga Springs photographer consultation"
                >
                  <Calendar size={18} className="mr-2" />
                  Schedule an Appointment
                </a>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-4">
                      {item.icon}
                    </div>
                    <span 
                      className="text-neutral-700"
                      itemProp="contactOption"
                      aria-label={item.ariaLabel}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                  <Send size={24} />
                </div>
                <h3 className="text-2xl font-playfair font-semibold mb-2 text-neutral-800">
                  Message Sent!
                </h3>
                <p className="text-neutral-600">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="bg-white rounded-lg p-8 shadow-sm"
                itemScope 
                itemType="https://schema.org/ContactForm"
                aria-label="Contact form for Saratoga Springs photographer bookings"
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`contact-input ${errors.name ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : ''}`}
                    placeholder="John Doe"
                    aria-label="Enter your name for photography inquiry"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`contact-input ${errors.email ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : ''}`}
                    placeholder="your@email.com"
                    aria-label="Enter email address for photography consultation follow-up"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`contact-input resize-none ${errors.message ? 'border-red-300 focus:ring-red-200 focus:border-red-400' : ''}`}
                    placeholder="Tell me about your project..."
                    aria-label="Describe your photography needs and project details"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn w-full flex items-center justify-center"
                  aria-label="Send photography inquiry to Saratoga Springs photographer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;