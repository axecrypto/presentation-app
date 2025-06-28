import React from 'react';
import { TrendingUp, Users, DollarSign, ShoppingCart, Target } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideForecast = () => {
  const keyMetrics = [
    {
      icon: Users,
      metric: 'Users',
      current: '7.8K',
      target: '100K',
      growth: '13x'
    },
    {
      icon: ShoppingCart,
      metric: 'Buyers',
      current: '647',
      target: '20K',
      growth: '31x'
    },
    {
      icon: DollarSign,
      metric: 'GMV',
      current: '$390K',
      target: '$10M',
      growth: '26x'
    },
    {
      icon: Target,
      metric: 'Revenue',
      current: '$25K',
      target: '$800K',
      growth: '32x'
    }
  ];

  const growthDrivers = [
    { title: 'Expand to LATAM + MENA', detail: '50K+ new shoppers in high-growth markets' },
    { title: 'Launch referral program', detail: 'Each user brings 3-5 friends (proven in tests)' },
    { title: 'AI-powered operations', detail: 'Scale without adding headcount' },
    { title: 'Add premium categories', detail: 'Home, wellness, luxury = higher AOV' }
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="2025: From Traction to Scale"
          subtitle="Conservative projections with $1-1.5M seed round"
        />

        {/* Key Metrics Growth */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {keyMetrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-orange/10 rounded-lg p-2 border border-lerbee-yellow/30">
                  <Icon size={18} className="text-lerbee-yellow mx-auto" />
                  <p className={`text-xs text-secondary`}>{item.metric}</p>
                  <p className={`${typography.body} font-bold text-primary`}>{item.target}</p>
                  <p className={`text-xs text-lerbee-yellow font-bold`}>{item.growth}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Growth Drivers */}
        <div className="mb-3">
          <p className={`${typography.small} font-semibold text-primary text-center mb-2`}>
            4 Growth Engines
          </p>
          <div className="grid grid-cols-2 gap-2">
            {growthDrivers.map((driver, index) => (
              <div key={index} className="border border-lerbee-yellow/30 rounded p-2">
                <p className={`text-xs font-bold text-primary`}>{index + 1}. {driver.title}</p>
                <p className={`text-xs text-secondary`}>{driver.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use of Funds */}
        <div className="mb-3">
          <p className={`${typography.small} font-semibold text-primary text-center mb-2`}>
            $1-1.5M Use of Funds
          </p>
          <div className="flex gap-1 h-8 rounded-lg overflow-hidden">
            <div className="bg-blue-500 flex-[40] flex items-center justify-center">
              <span className="text-xs font-bold text-white">Product 40%</span>
            </div>
            <div className="bg-lerbee-yellow flex-[30] flex items-center justify-center">
              <span className="text-xs font-bold text-primary">Growth 30%</span>
            </div>
            <div className="bg-lerbee-orange flex-[20] flex items-center justify-center">
              <span className="text-xs font-bold text-white">Team 20%</span>
            </div>
            <div className="bg-green-600 flex-[10] flex items-center justify-center">
              <span className="text-xs font-bold text-white">10%</span>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="bg-gradient-to-r from-lerbee-yellow/10 to-lerbee-orange/10 rounded-lg p-3 text-center border border-lerbee-yellow/30">
          <p className={`${typography.body} text-primary font-medium`}>
            "Our community already works. Now we make it unstoppable."
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};