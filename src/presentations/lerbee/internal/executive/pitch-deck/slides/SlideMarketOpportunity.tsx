import React from 'react';
import { Target } from 'lucide-react';
import { SlideHeader, IconContainer, BottomTagline, iconSizes, typography, spacing } from '../components/DesignSystem';

export const SlideMarketOpportunity = () => {
  return (
    <div className="min-h-screen bg-primary p-8 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <SlideHeader 
          title="A Massive Market Backed by Buyer Demand"
        />

        {/* Main Focus: SOM */}
        <div className="text-center">
          <div className="inline-block">
            <div className={spacing.margin.md}>
              <IconContainer size="xl" variant="primary">
                <Target size={iconSizes.xl.icon} className="text-black" />
              </IconContainer>
            </div>
            
            <p className={`${typography.hero} font-bold text-primary ${spacing.margin.sm}`}>
              $6B
            </p>
            <p className={`${typography.heading} text-secondary ${spacing.margin.lg}`}>
              Addressable Market
            </p>
            
            {/* Simple Math */}
            <div className={`bg-surface rounded-xl ${spacing.lg} border border-lerbee-yellow`}>
              <p className={`${typography.subtitle} text-primary font-semibold ${spacing.margin.xs}`}>
                143K shoppers × 140 buyers each
              </p>
              <p className={`${typography.large} text-secondary`}>
                = 20M buyers × $300/year = $6B
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <BottomTagline
            line1="Commerce is shifting from platforms to people."
            line2="LerBee builds on the trust graph — not search results."
          />
        </div>
      </div>
    </div>
  );
};