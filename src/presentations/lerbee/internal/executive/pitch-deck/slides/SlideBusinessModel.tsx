import React from 'react';
import { DollarSign } from 'lucide-react';
import { SlideHeader, IconContainer, BottomTagline, iconSizes, typography, spacing } from '../components/DesignSystem';

export const SlideBusinessModel = () => {
  return (
    <div className="min-h-screen bg-primary p-8 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <SlideHeader 
          title="Asset-Light Model with Fast Payback"
        />

        {/* Core Model */}
        <div className="flex flex-col items-center">
          {/* Commission */}
          <div className="mb-12">
            <IconContainer size="large" variant="primary">
              <DollarSign size={iconSizes.large.icon} />
            </IconContainer>
            <p className={`${typography.hero} font-bold text-primary mt-6 mb-2 text-center`}>
              5-8%
            </p>
            <p className={`${typography.large} text-secondary text-center`}>
              Commission per transaction
            </p>
          </div>

          {/* LTV > CAC */}
          <div className={`bg-surface rounded-xl ${spacing.lg} border border-lerbee-yellow`}>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <p className={`text-4xl font-bold text-primary`}>LTV</p>
                <p className={`${typography.small} text-secondary mt-1`}>95% repeat</p>
              </div>
              <span className="text-3xl text-lerbee-yellow font-bold px-4">&gt;</span>
              <div className="text-center">
                <p className={`text-4xl font-bold text-primary`}>CAC</p>
                <p className={`${typography.small} text-secondary mt-1`}>Viral growth</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <BottomTagline
            line1="Real revenue. Low cost."
            line2="Growth driven by loyalty, not burn."
          />
        </div>
      </div>
    </div>
  );
};