import React from 'react';
import { Brain, MessageCircle, DollarSign } from 'lucide-react';
import { SlideHeader, IconContainer, BottomTagline, iconSizes, typography, spacing, metricSizes } from '../components/DesignSystem';

export const SlideProductMarketFit = () => {
  const metrics = [
    { value: '95%', label: 'Repeat buyers', icon: Brain },
    { value: '16', label: 'Sessions per user', icon: MessageCircle },
    { value: '$603', label: 'Avg buyer value', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-primary p-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <SlideHeader 
          title="Deep Engagement, High Retention, Real Revenue"
        />

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="text-center">
                <IconContainer size="large" variant="primary">
                  <Icon size={iconSizes.large.icon} />
                </IconContainer>
                <p className={`${metricSizes.value} font-bold text-primary ${spacing.margin.xs}`}>
                  {metric.value}
                </p>
                <p className={`${typography.body} text-secondary`}>
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>

        <BottomTagline
          line1="We're not testing a hypothesis."
          line2="We're scaling a proven behavior."
        />
      </div>
    </div>
  );
};