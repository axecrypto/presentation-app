import React from 'react';
import { DollarSign, Mail, Rocket, TrendingUp, Users } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideSeedRound = () => {
  const keyPoints = [
    { icon: DollarSign, metric: '$1-1.5M', label: 'Seed Round' },
    { icon: Rocket, metric: '18 months', label: 'Runway' },
    { icon: TrendingUp, metric: '10x', label: 'Growth Target' },
    { icon: Users, metric: '100K', label: 'Users by 2026' }
  ];

  const fundAllocation = [
    { percentage: 40, label: 'Product & AI', color: 'bg-blue-500' },
    { percentage: 30, label: 'Growth', color: 'bg-lerbee-yellow' },
    { percentage: 20, label: 'Team', color: 'bg-lerbee-orange' },
    { percentage: 10, label: 'Ops', color: 'bg-green-600' }
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="$1-1.5M Seed to Scale What Works"
          subtitle="From proven traction to global dominance"
        />

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {keyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-orange/10 rounded-lg p-3 border border-lerbee-yellow/30">
                  <Icon size={20} className="text-lerbee-yellow mx-auto mb-1" />
                  <p className={`${typography.body} font-bold text-primary`}>{point.metric}</p>
                  <p className={`text-xs text-secondary`}>{point.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Use of Funds Visual */}
        <div className="mb-4">
          <p className={`${typography.body} font-semibold text-primary text-center mb-2`}>
            Use of Funds
          </p>
          <div className="flex gap-1 h-10 rounded-lg overflow-hidden mb-2">
            {fundAllocation.map((item, index) => (
              <div 
                key={index} 
                className={`${item.color} flex items-center justify-center`}
                style={{ flex: item.percentage }}
              >
                <span className="text-xs font-bold text-white">
                  {item.label} {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="border border-lerbee-yellow/30 rounded-lg p-3">
            <p className={`${typography.small} font-bold text-primary mb-1`}>Product (40%)</p>
            <p className={`text-xs text-secondary`}>• Emotional AI agents</p>
            <p className={`text-xs text-secondary`}>• Viral referral engine</p>
            <p className={`text-xs text-secondary`}>• Trust infrastructure</p>
          </div>
          <div className="border border-lerbee-yellow/30 rounded-lg p-3">
            <p className={`${typography.small} font-bold text-primary mb-1`}>Growth (30%)</p>
            <p className={`text-xs text-secondary`}>• LATAM/India expansion</p>
            <p className={`text-xs text-secondary`}>• Influencer partnerships</p>
            <p className={`text-xs text-secondary`}>• Community incentives</p>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="bg-gradient-to-r from-lerbee-yellow/10 to-lerbee-orange/10 rounded-lg p-3 text-center border border-lerbee-yellow/30 mb-4">
          <p className={`${typography.body} text-primary font-medium`}>
            "We're not experimenting. We're scaling what already works."
          </p>
        </div>

        {/* Contact */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Mail size={16} className="text-lerbee-yellow" />
            <p className={`${typography.small} text-primary font-semibold`}>Valeria Mikova, CEO</p>
          </div>
          <p className={`text-xs text-secondary`}>vmikova@lerbee.com • +1 407 634 9122</p>
        </div>
      </div>
    </SlideWrapper>
  );
};