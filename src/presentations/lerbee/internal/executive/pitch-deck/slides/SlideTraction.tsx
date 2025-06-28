import React from 'react';
import { DollarSign } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideTraction = () => {

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="From Zero to Global Product With No Paid Marketing"
          subtitle="Built lean, scaled globally, monetizing already"
        />

        {/* Key metrics line */}
        <div className="text-center mb-8">
          <p className={`${typography.subtitle} text-secondary flex justify-center items-center gap-6`}>
            <span><span className="text-primary font-bold">7,800+</span> users</span>
            <span className="text-lerbee-yellow">•</span>
            <span><span className="text-primary font-bold">11M+</span> views</span>
            <span className="text-lerbee-yellow">•</span>
            <span><span className="text-primary font-bold">95%</span> repeat buyers</span>
          </p>
        </div>

        {/* Hero GMV */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <div className="bg-gradient-to-br from-lerbee-yellow/20 to-lerbee-orange/20 rounded-2xl p-8 border-2 border-lerbee-yellow">
              <DollarSign size={48} className="text-lerbee-yellow mx-auto mb-4" />
              <p className={`${typography.hero} font-bold text-primary text-5xl mb-2`}>$390K GMV</p>
              <p className={`${typography.body} text-secondary`}>in 6 months</p>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center">
          <p className={`${typography.large} text-secondary font-medium`}>
            "Thousands of buyers came back not because we paid them, but because they believed it."
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};