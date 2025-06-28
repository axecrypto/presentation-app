import React from 'react';
import { Package, Rocket, TrendingUp, Check, Users, Bot, Globe } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideRoadmap = () => {
  const quarters = [
    {
      period: 'Q3 2025',
      subtitle: 'Foundation',
      icon: Package,
      color: 'border-blue-500',
      bgColor: 'bg-blue-500/10',
      highlights: [
        'V2 launch with new UX',
        'Android stability',
        'PLG hooks ready'
      ]
    },
    {
      period: 'H1 2026', 
      subtitle: 'Scale',
      icon: Rocket,
      color: 'border-lerbee-yellow',
      bgColor: 'bg-lerbee-yellow/10',
      highlights: [
        'V3 for Black Friday',
        'Emotional AI Agents',
        'LATAM / India',
        'Holiday campaigns'
      ]
    },
    {
      period: 'H2 2026',
      subtitle: 'Monetize',
      icon: TrendingUp,
      color: 'border-green-500',
      bgColor: 'bg-green-500/10',
      highlights: [
        'Shopper subscriptions',
        'Brand partnerships',
        'Analytics dashboards',
        'Multi-language'
      ]
    }
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="18-Month Roadmap to Global Scale"
          subtitle="From foundation to unstoppable growth engine"
        />

        {/* Timeline Visual */}
        <div className="relative mb-6">
          {/* Quarters */}
          <div className="grid grid-cols-3 gap-4">
            {quarters.map((quarter, index) => {
              const Icon = quarter.icon;
              return (
                <div key={index} className="relative">
                  {/* Icon circle with connector line */}
                  <div className="relative">
                    {/* Connector line */}
                    {index < quarters.length - 1 && (
                      <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700">
                        {index === 0 && <div className="h-full w-full bg-gradient-to-r from-blue-500 to-lerbee-yellow" />}
                      </div>
                    )}
                    {/* Icon circle */}
                    <div className="text-center mb-4 relative z-10">
                      <div className={`w-16 h-16 ${quarter.bgColor} ${quarter.color} border-2 rounded-full flex items-center justify-center mx-auto bg-primary`}>
                        <Icon size={28} className="text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`${quarter.bgColor} rounded-lg p-3 border ${quarter.color}`}>
                    <h3 className={`${typography.body} font-bold text-primary text-center mb-1`}>
                      {quarter.period}
                    </h3>
                    <p className={`${typography.small} font-semibold text-center text-primary mb-2`}>
                      {quarter.subtitle}
                    </p>
                    <div className="space-y-1">
                      {quarter.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <p className={`text-xs text-primary`}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Milestones */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-orange/10 rounded-lg p-3 text-center border border-lerbee-yellow/30">
            <Users size={20} className="text-lerbee-yellow mx-auto mb-1" />
            <p className={`${typography.small} font-bold text-primary`}>Viral &gt; 1.5</p>
            <p className={`text-xs text-secondary`}>by Dec 2025</p>
          </div>
          <div className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-orange/10 rounded-lg p-3 text-center border border-lerbee-yellow/30">
            <TrendingUp size={20} className="text-lerbee-yellow mx-auto mb-1" />
            <p className={`${typography.small} font-bold text-primary`}>$10M GMV</p>
            <p className={`text-xs text-secondary`}>run rate by Q1 2026</p>
          </div>
          <div className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-orange/10 rounded-lg p-3 text-center border border-lerbee-yellow/30">
            <Rocket size={20} className="text-lerbee-yellow mx-auto mb-1" />
            <p className={`${typography.small} font-bold text-primary`}>CAC &lt; $5</p>
            <p className={`text-xs text-secondary`}>organic growth</p>
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center">
          <p className={`${typography.body} text-secondary font-medium`}>
            "Ship fast, scale smart, own the category."
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};