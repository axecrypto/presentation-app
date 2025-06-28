import React from 'react';
import { Users } from 'lucide-react';
import { SlideHeader, IconContainer, BottomTagline, QuoteBox, iconSizes, typography, spacing } from '../components/DesignSystem';

export const SlideTeam = () => {
  const founders = [
    { name: 'Valeria', role: 'CEO', highlight: 'Built to $4.5M GMV' },
    { name: 'Denis', role: 'CGO', highlight: 'Ex-Informatica Product' },
    { name: 'Vasily', role: 'CFO', highlight: 'Marketplace economics' },
    { name: 'Rustam', role: 'CTO', highlight: 'Ex-Coinbase, LinkedIn' }
  ];

  return (
    <div className="min-h-screen bg-primary p-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <SlideHeader 
          title="We've Done This Before"
        />
        
        <QuoteBox>
          "We're not consultants. We built it with our hands — with our phones."
        </QuoteBox>

        {/* Founders Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center">
              <IconContainer size="large" variant="secondary">
                <Users size={iconSizes.large.icon} className="text-lerbee-yellow" />
              </IconContainer>
              <h3 className={`${typography.large} font-semibold text-primary mt-4 mb-1`}>
                {founder.name}
              </h3>
              <p className={`${typography.small} text-secondary mb-1`}>
                {founder.role}
              </p>
              <p className={`${typography.small} text-primary`}>
                {founder.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className={`text-center ${spacing.margin['2xl']}`}>
          <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-4 ${typography.heading} font-semibold text-secondary`}>
            <span>Tesla</span>
            <span>LinkedIn</span>
            <span>Coinbase</span>
            <span>Informatica</span>
          </div>
        </div>

        <BottomTagline
          line1="We're not hiring experts — we are the experts."
          line2="And we've already shipped."
        />
      </div>
    </div>
  );
};