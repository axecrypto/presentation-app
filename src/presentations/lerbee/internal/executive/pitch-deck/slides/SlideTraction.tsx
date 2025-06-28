import React from 'react';
import { Globe, RefreshCcw, DollarSign } from 'lucide-react';
import { SlideHeader, IconContainer, MetricCard, BottomTagline, QuoteBox, iconSizes } from '../components/DesignSystem';

export const SlideTraction = () => {
  const heroMetrics = [
    { value: '$390K', label: 'GMV in 6 months', icon: DollarSign },
    { value: '95%', label: 'Repeat buyers', icon: RefreshCcw },
    { value: '10+', label: 'Countries', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-primary p-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <SlideHeader 
          title="From Zero to Global Product With No Paid Marketing"
        />
        
        <QuoteBox>
          "Thousands of buyers came back not because we paid them, but because they believed it."
        </QuoteBox>

        {/* Hero Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 mt-16">
          {heroMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <MetricCard
                key={index}
                value={metric.value}
                label={metric.label}
                icon={
                  <IconContainer size="large" variant="primary">
                    <Icon size={iconSizes.large.icon} />
                  </IconContainer>
                }
              />
            );
          })}
        </div>

        <BottomTagline
          line1="We didn't just build a product."
          line2="We built a habit across cultures and continents."
        />
      </div>
    </div>
  );
};