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
        <div className="text-center">
          {/* Commission */}
          <div className={spacing.margin.xl}>
            <IconContainer size="large" variant="primary">
              <DollarSign size={iconSizes.large.icon} />
            </IconContainer>
            <p className={`${typography.hero} font-bold text-primary mt-4 ${spacing.margin.xs}`}>
              5-8%
            </p>
            <p className={`${typography.large} text-secondary`}>
              Commission per transaction
            </p>
          </div>

          {/* LTV > CAC */}
          <div className={`bg-surface rounded-xl ${spacing.lg} border border-lerbee-yellow inline-block mt-12`}>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className={`text-4xl font-bold text-primary`}>LTV</p>
                <p className={`${typography.small} text-secondary`}>95% repeat</p>
              </div>
              <span className="text-3xl text-lerbee-yellow font-bold">&gt;</span>
              <div className="text-center">
                <p className={`text-4xl font-bold text-primary`}>CAC</p>
                <p className={`${typography.small} text-secondary`}>Viral growth</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <BottomTagline
            line1="Real revenue. Low cost."
            line2="Growth driven by loyalty — not burn."
          />
        </div>
      </div>
    </div>
  );
};