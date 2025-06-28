import React from 'react';
import { Search, ShoppingBag, X } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideProblem = () => {
  const buyerPainPoints = [
    "Can't trust product photos or reviews",
    "No way to ask real questions in real time",
    "Limited access to local brands abroad"
  ];

  const shopperPainPoints = [
    "Shop daily but earn nothing from it",
    "No platform for trusted personal sales",
    "Can't accept international payments easily"
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="Online Shopping Is Convenient But Broken"
          subtitle="Trust, access, and monetization are broken on both sides"
        />

        {/* Two columns for Buyers and Shoppers */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Buyers Column */}
          <div className="bg-surface rounded-xl p-6 border border-default">
            <div className="flex items-center gap-3 mb-6 h-12">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Search size={20} className="text-red-500" />
              </div>
              <h3 className={`${typography.heading} font-semibold text-primary`}>
                Buyers
              </h3>
            </div>

            <div className="space-y-4">
              {buyerPainPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    <X size={18} className="text-red-500" />
                  </div>
                  <p className={`${typography.small} text-primary`}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Shoppers Column */}
          <div className="bg-surface rounded-xl p-6 border border-default">
            <div className="flex items-center gap-3 mb-6 h-12">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShoppingBag size={20} className="text-red-500" />
              </div>
              <h3 className={`${typography.heading} font-semibold text-primary`}>
                Shoppers
              </h3>
            </div>

            <div className="space-y-4">
              {shopperPainPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    <X size={18} className="text-red-500" />
                  </div>
                  <p className={`${typography.small} text-primary`}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-gradient-to-r from-lerbee-yellow/10 to-lerbee-orange/10 rounded-xl p-6 text-center">
          <p className={`${typography.subtitle} text-primary font-bold`}>
            We fix all three: Trust, Access, and Monetization
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};