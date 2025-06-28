import React from 'react';
import { Sparkles, MapPin, TrendingUp } from 'lucide-react';
import { SlideHeader, QuoteBox, IconContainer, iconSizes, typography, spacing } from '../components/DesignSystem';

export const SlideShopperStory = () => {
  return (
    <div className="min-h-screen bg-primary p-8 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <SlideHeader 
          title="Real People. Real Income. Real Impact."
        />
        
        {/* Story Header */}
        <div className="flex flex-col items-center mb-8">
          <h2 className={`${typography.subtitle} font-bold text-primary mb-2`}>
            Vicky, Germany
          </h2>
          <p className={`${typography.large} text-lerbee-yellow font-semibold`}>
            "From hospitality burnout to six-figure luxury curator."
          </p>
        </div>

        {/* Story Content */}
        <div className={`bg-surface rounded-xl ${spacing.lg} border border-lerbee-yellow mb-12`}>
          <div className="flex flex-col items-center mb-6">
            <IconContainer size="large" variant="primary">
              <Sparkles size={iconSizes.large.icon} />
            </IconContainer>
          </div>
          
          <div className={`space-y-4 ${typography.large} text-primary`}>
            <p>
              Vicky left her <span className="font-semibold">toxic hotel job</span> after discovering LerBee on Instagram.
            </p>
            <p>
              Now she curates <span className="font-semibold">high-end fashion in Munich</span>, like €3,000 ski jackets for €900.
            </p>
            <p className="text-center mt-6">
              <span className={`${typography.subtitle} font-bold text-lerbee-yellow`}>
                She earns over €100K/year
              </span>
              <br />
              <span className={typography.large}>doing what she loves, with just her taste and a phone.</span>
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center">
            <IconContainer size="medium" variant="secondary">
              <MapPin size={iconSizes.medium.icon} className="text-lerbee-yellow" />
            </IconContainer>
            <p className={`${typography.body} text-primary font-semibold mt-3`}>Munich</p>
            <p className={`${typography.small} text-secondary`}>Luxury hub</p>
          </div>
          <div className="flex flex-col items-center">
            <IconContainer size="medium" variant="secondary">
              <TrendingUp size={iconSizes.medium.icon} className="text-lerbee-yellow" />
            </IconContainer>
            <p className={`${typography.body} text-primary font-semibold mt-3`}>€100K+</p>
            <p className={`${typography.small} text-secondary`}>Annual income</p>
          </div>
          <div className="flex flex-col items-center">
            <IconContainer size="medium" variant="secondary">
              <Sparkles size={iconSizes.medium.icon} className="text-lerbee-yellow" />
            </IconContainer>
            <p className={`${typography.body} text-primary font-semibold mt-3`}>70% off</p>
            <p className={`${typography.small} text-secondary`}>Luxury finds</p>
          </div>
        </div>

        <QuoteBox>
          "This isn't a side hustle. This is how millions will build careers on their terms."
        </QuoteBox>
      </div>
    </div>
  );
};