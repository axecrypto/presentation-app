import React from 'react';
import { Search, ShoppingBag, X } from 'lucide-react';
import { SlideHeader, QuoteBox, IconContainer, iconSizes, typography, spacing } from '../components/DesignSystem';

export const SlideProblem = () => {
  const buyerPainPoints = [
    "Can't trust product photos or reviews",
    "No way to ask real questions or compare in real time",
    "High anxiety on international purchases (fraud, sizing, quality)",
    "Limited access to offline/local brands abroad"
  ];

  const shopperPainPoints = [
    "Already shop daily — but earn nothing from it",
    "No platform for trusted personal sales",
    "Can't easily accept international payments or arrange shipping",
    "Fear of responsibility, fraud, and no support"
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        <SlideHeader 
          title="Online Shopping Is Convenient — But Broken"
        />
        
        <QuoteBox>
          "I don't trust what I see online. I want to ask someone who knows." 
          <span className="text-secondary text-sm block mt-2">— Ana, mother of 3, Barcelona</span>
        </QuoteBox>

        {/* Two columns for Buyers and Shoppers */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${spacing.margin.xl}`}>
          {/* Buyers Column */}
          <div className={`bg-surface rounded-xl ${spacing.lg} border border-default`}>
            <div className={`flex items-center gap-3 ${spacing.margin.md}`}>
              <IconContainer size="medium" variant="primary">
                <Search size={iconSizes.medium.icon} />
              </IconContainer>
              <h2 className={`${typography.heading} font-semibold text-primary`}>FOR BUYERS</h2>
            </div>

            <div className={`space-y-3 ${spacing.margin.lg}`}>
              {buyerPainPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <p className={`${typography.body} text-secondary`}>{point}</p>
                </div>
              ))}
            </div>

            <div className={`bg-surface rounded-lg ${spacing.md} border border-default`}>
              <p className={`${typography.body} text-primary font-medium italic`}>
                "Shopping feels like gambling when you can't see or ask."
              </p>
            </div>
          </div>

          {/* Shoppers Column */}
          <div className={`bg-surface rounded-xl ${spacing.lg} border border-default`}>
            <div className={`flex items-center gap-3 ${spacing.margin.md}`}>
              <IconContainer size="medium" variant="primary">
                <ShoppingBag size={iconSizes.medium.icon} />
              </IconContainer>
              <h2 className={`${typography.heading} font-semibold text-primary`}>FOR SHOPPERS</h2>
            </div>

            <div className={`space-y-3 ${spacing.margin.lg}`}>
              {shopperPainPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <p className={`${typography.body} text-secondary`}>{point}</p>
                </div>
              ))}
            </div>

            <div className={`bg-surface rounded-lg ${spacing.md} border border-default`}>
              <p className={`${typography.body} text-primary font-medium italic`}>
                "Millions walk stores daily — but can't monetize it safely or globally."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className={`text-center bg-surface rounded-xl ${spacing.lg} border border-default`}>
          <p className={`${typography.large} text-secondary ${spacing.margin.sm}`}>
            Trust, access, and monetization are broken on both sides.
          </p>
          <p className={`${typography.subtitle} text-primary font-bold`}>
            We fix all three.
          </p>
        </div>
      </div>
    </div>
  );
};