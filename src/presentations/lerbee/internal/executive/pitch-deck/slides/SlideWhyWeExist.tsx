import React from 'react';
import { Globe, Mail, Phone } from 'lucide-react';

export const SlideWhyWeExist = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-8 relative">
      {/* Background Globe Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Globe size={600} className="text-lerbee-yellow" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <h1 className="text-6xl font-bold text-primary mb-12">
          LerBee Isn't Just a Marketplace — It's a Movement
        </h1>
        
        {/* Globe Icon */}
        <div className="mb-12 flex justify-center">
          <Globe size={80} className="text-lerbee-yellow" />
        </div>
        
        {/* Manifesto */}
        <div className="space-y-8 text-xl text-primary leading-relaxed">
          <p className="text-2xl font-semibold text-lerbee-yellow">
            Trade, not war. People, not warehouses.
          </p>
          
          <p>
            For centuries, humanity connected through marketplaces.<br />
            We're reviving that — not geographically, but digitally.
          </p>
          
          <p className="text-secondary">
            Offline stores are fading. We give them global life.
          </p>
          
          <p>
            Work is disappearing. We create a new one:<br />
            <span className="font-semibold">Global Shopper, Trusted Guide, Micro-Influencer.</span>
          </p>
          
          <p className="text-2xl font-bold mt-12">
            LerBee unites continents.<br />
            Real people. Real products. Real trust.
          </p>
        </div>
        
        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-default">
          <p className="text-secondary mb-4">
            Ready to join the next commerce revolution?<br />
            Let's build the trust economy together.
          </p>
          
          <div className="text-sm text-secondary">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Mail size={16} className="text-secondary" />
              <p>vmikova@lerbee.com</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={16} className="text-secondary" />
              <p>+1 407 634 9122</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};