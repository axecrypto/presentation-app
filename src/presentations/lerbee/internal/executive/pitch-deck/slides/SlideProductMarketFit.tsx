import React from 'react';
import { RefreshCcw, TrendingUp, Users, Star, MessageCircle, DollarSign } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideProductMarketFit = () => {
  const heroMetrics = [
    { value: '95%', label: 'Repeat Buyers', sublabel: 'come back naturally' },
    { value: '7.9%', label: 'Week 5 Retention', sublabel: 'above industry avg' },
    { value: '$603', label: 'Avg Buyer Value', sublabel: 'in 7 months' }
  ];

  const proofPoints = [
    { icon: Users, text: 'Word of mouth drives growth' },
    { icon: MessageCircle, text: '16 sessions per user average' },
    { icon: Star, text: '4.7 App Store rating' },
    { icon: TrendingUp, text: 'GMV growing month-over-month' }
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="Deep Engagement, High Retention, Real Revenue"
          subtitle="All the signals of product-market fit"
        />

        {/* Hero Metrics */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {heroMetrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-orange/10 rounded-xl p-6 border border-lerbee-yellow/30 text-center">
              <p className={`${typography.hero} font-bold text-primary mb-1`}>{metric.value}</p>
              <p className={`${typography.body} text-primary font-medium`}>{metric.label}</p>
              <p className={`${typography.small} text-secondary`}>{metric.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Proof Points Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {proofPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="border border-lerbee-yellow/30 rounded-lg p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-lerbee-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-lerbee-yellow" />
                </div>
                <p className={`${typography.body} text-primary`}>{point.text}</p>
              </div>
            );
          })}
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-lerbee-yellow/10 to-lerbee-orange/10 rounded-xl p-6 text-center">
          <RefreshCcw size={32} className="text-lerbee-yellow mx-auto mb-3" />
          <p className={`${typography.subtitle} text-primary font-bold mb-2`}>
            "We're not testing a hypothesis. We're scaling a proven behavior."
          </p>
          <p className={`${typography.body} text-secondary`}>
            Buyers trust shoppers. Shoppers earn from trust. The flywheel spins itself.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};