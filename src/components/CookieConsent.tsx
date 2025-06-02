import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPreferences = localStorage.getItem('cookie-preferences');
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
    
    // Initialize analytics/marketing scripts here
    initializeTrackingScripts(allAccepted);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', 'customized');
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
    
    // Initialize only selected scripts
    initializeTrackingScripts(preferences);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    setPreferences(essentialOnly);
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-preferences', JSON.stringify(essentialOnly));
    setShowBanner(false);
    setShowSettings(false);
  };

  const initializeTrackingScripts = (prefs: CookiePreferences) => {
    // Google Analytics
    if (prefs.analytics) {
      // Add Google Analytics script here when ready
      console.log('Analytics cookies accepted');
    }
    
    // Marketing pixels (Facebook, Instagram, etc.)
    if (prefs.marketing) {
      // Add marketing pixels here when ready
      console.log('Marketing cookies accepted');
    }
  };

  const togglePreference = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-50">
        <div className="bg-white/95 backdrop-blur-md border border-neutral-200/50 rounded-2xl shadow-2xl p-6 max-w-md ml-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="h-6 w-6 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-playfair font-semibold text-neutral-800 text-lg mb-2">
                🍪 We use cookies
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                We use cookies to enhance your experience and analyze our traffic. Choose your preferences below.
              </p>
              
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Accept All
                </button>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex-1 px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors flex items-center justify-center gap-1"
                  >
                    <Settings size={14} />
                    Settings
                  </button>
                  <button
                    onClick={handleRejectNonEssential}
                    className="flex-1 px-3 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-playfair font-semibold text-neutral-800">
                  Cookie Settings
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-neutral-100 rounded"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-neutral-600">
                  Choose which cookies you want to accept. You can change these settings at any time.
                </p>

                {/* Necessary Cookies */}
                <div className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-neutral-800">Necessary Cookies</h3>
                    <div className="flex items-center">
                      <span className="text-sm text-neutral-500 mr-2">Always active</span>
                      <div className="w-12 h-6 bg-amber-600 rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600">
                    These cookies are essential for the website to function properly. They cannot be disabled.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-neutral-800">Analytics Cookies</h3>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.analytics ? 'bg-amber-600' : 'bg-neutral-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.analytics ? 'right-1' : 'left-1'
                      }`}></div>
                    </button>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-neutral-800">Marketing Cookies</h3>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.marketing ? 'bg-amber-600' : 'bg-neutral-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.marketing ? 'right-1' : 'left-1'
                      }`}></div>
                    </button>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={handleRejectNonEssential}
                  className="flex-1 px-4 py-2 border border-neutral-300 rounded hover:bg-neutral-50 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;