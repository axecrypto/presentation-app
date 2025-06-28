import React from 'react';
import { Brain, Users, Smartphone, Store } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideWhyNow = () => {
  const drivers = [
    {
      icon: Brain,
      title: 'AI Makes It Scalable',
      description: 'Translation, routing, and matching automated',
      stat: 'Cost per transaction: $0.001'
    },
    {
      icon: Users,
      title: 'Trust Crisis in E-commerce',
      description: 'Fake reviews and photos drive buyer anxiety',
      stat: '64% don\'t trust online reviews'
    },
    {
      icon: Smartphone,
      title: 'Everyone Has a Smartphone',
      description: 'Global mobile penetration enables participation',
      stat: '6.8B smartphone users globally'
    },
    {
      icon: Store,
      title: 'Physical Retail Still Matters',
      description: 'Touch, feel, and instant gratification remain key',
      stat: '85% of sales still in-store'
    }
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="The World Is Ready for Peer-to-Peer Shopping"
          subtitle="Four unstoppable trends converge to create our moment"
        />

        {/* Quote */}
        <div className="bg-lerbee-yellow/10 border border-lerbee-yellow/30 rounded-xl p-4 mb-6 text-center">
          <p className={`${typography.body} text-primary`}>
            "Millions lost jobs. Stores lost foot traffic. <span className="font-bold">We connect them both.</span>"
          </p>
        </div>

        {/* Drivers Grid - 2x2 compact */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {drivers.map((driver, index) => {
            const Icon = driver.icon;
            return (
              <div key={index} className="border-2 border-lerbee-yellow rounded-xl p-5">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-lerbee-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-lerbee-yellow" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`${typography.body} font-semibold text-primary mb-1`}>
                      {driver.title}
                    </h3>
                    <p className={`${typography.small} text-secondary mb-2`}>
                      {driver.description}
                    </p>
                    <span className={`${typography.small} font-bold text-lerbee-yellow`}>
                      {driver.stat}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual summary */}
        <div className="bg-gradient-to-r from-lerbee-yellow/10 to-lerbee-orange/10 rounded-xl p-6 text-center">
          <p className={`${typography.subtitle} text-primary font-bold mb-2`}>
            Perfect Storm = Perfect Timing
          </p>
          <p className={`${typography.body} text-secondary`}>
            AI Infrastructure + Trust Crisis + Mobile Ubiquity + Physical Retail = LerBee's Moment
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};