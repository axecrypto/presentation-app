import React from 'react';
import { DollarSign, TrendingUp, Package, RotateCw } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideBusinessModel = () => {
  const unitEconomics = [
    { label: 'Take Rate', value: '5-8%', sublabel: 'commission' },
    { label: 'Avg Order', value: '$25-40', sublabel: 'per transaction' },
    { label: 'CAC', value: '$15-20', sublabel: 'blended' },
    { label: 'Payback', value: '<60', sublabel: 'days' }
  ];

  const flywheel = [
    { icon: Package, text: 'Zero inventory = high margins' },
    { icon: RotateCw, text: '95% repeat rate = lower CAC over time' },
    { icon: TrendingUp, text: 'Word of mouth reduces paid spend' },
    { icon: DollarSign, text: 'LTV:CAC ratio improves with scale' }
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="Asset-Light Model with Fast Payback"
          subtitle="Real revenue from day one, no burn required"
        />

        {/* Unit Economics Grid */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {unitEconomics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-orange/10 rounded-lg p-3 text-center border border-lerbee-yellow/30">
              <p className={`text-xs text-secondary`}>{metric.label}</p>
              <p className={`${typography.body} font-bold text-primary`}>{metric.value}</p>
              <p className={`text-xs text-secondary`}>{metric.sublabel}</p>
            </div>
          ))}
        </div>

        {/* The Flywheel */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {flywheel.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="border border-lerbee-yellow/30 rounded-lg p-3 flex items-center gap-3">
                <Icon size={20} className="text-lerbee-yellow flex-shrink-0" />
                <p className={`${typography.small} text-primary`}>{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* LTV > CAC Visual */}
        <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl p-4 text-center border border-green-500/30">
          <div className="flex items-center justify-center gap-6 mb-2">
            <div>
              <p className={`${typography.subtitle} font-bold text-primary`}>LTV</p>
              <p className={`text-xs text-secondary`}>$603 avg</p>
            </div>
            <span className={`${typography.subtitle} text-green-600 font-bold`}>&gt;</span>
            <div>
              <p className={`${typography.subtitle} font-bold text-primary`}>CAC</p>
              <p className={`text-xs text-secondary`}>$15-20</p>
            </div>
          </div>
          <p className={`${typography.small} text-secondary`}>
            Growth driven by loyalty, not burn. Every dollar compounds.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};