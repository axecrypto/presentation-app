import React from 'react';
import { Globe, Mail, Phone } from 'lucide-react';
import { SlideHeader, iconSizes, typography, spacing, SlideWrapper } from '../components/DesignSystem';

export const SlideWhyWeExist = () => {
  return (
    <SlideWrapper accentPosition="bottom-right" accentSize="large" honeycombOpacity={0.05}>
      <div className="max-w-4xl mx-auto text-center">
        <SlideHeader 
          title="LerBee Isn't Just a Marketplace: It's a Movement"
        />
        
        {/* Globe Icon */}
        <div className={`${spacing.margin.xl} flex justify-center`}>
          <Globe size={80} className="text-lerbee-yellow" />
        </div>
        
        {/* Manifesto */}
        <div className={`space-y-8 ${typography.large} text-primary leading-relaxed`}>
          <p className={`${typography.subtitle} font-semibold text-lerbee-yellow`}>
            Trade, not war. People, not warehouses.
          </p>
          
          <p>
            For centuries, humanity connected through marketplaces.<br />
            We're reviving that, not geographically, but digitally.
          </p>
          
          <p className="text-secondary">
            Offline stores are fading. We give them global life.
          </p>
          
          <p>
            Work is disappearing. We create a new one:<br />
            <span className="font-semibold">Global Shopper, Trusted Guide, Micro-Influencer.</span>
          </p>
          
          <p className={`${typography.subtitle} font-bold mt-12`}>
            LerBee unites continents.<br />
            Real people. Real products. Real trust.
          </p>
        </div>
        
        {/* CTA */}
        <div className={`mt-16 ${spacing.lg} border-t border-default`}>
          <p className={`text-secondary ${spacing.margin.md} ${typography.body}`}>
            Ready to join the next commerce revolution?<br />
            Let's build the trust economy together.
          </p>
          
          <div className={`${typography.small} text-secondary`}>
            <div className="flex items-center justify-center gap-2 mb-1">
              <Mail size={iconSizes.tiny.icon} className="text-secondary" />
              <p>vmikova@lerbee.com</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={iconSizes.tiny.icon} className="text-secondary" />
              <p>+1 407 634 9122</p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};