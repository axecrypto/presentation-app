import React from 'react';
import { Brain, Users, Smartphone, Store } from 'lucide-react';

export const SlideWhyNow = () => {
  const drivers = [
    {
      icon: Brain,
      title: 'AI Is Ready to Scale the Infrastructure',
      description: 'Automates descriptions, translation, routing — lets humans focus on trust & style.'
    },
    {
      icon: Users,
      title: 'Consumers Demand Authenticity',
      description: '73% of Gen Z prefer real people and live video to polished ads.',
      stat: 'Live commerce grew 3x in 2 years (McKinsey)'
    },
    {
      icon: Smartphone,
      title: 'Millions Seek Flexible Income',
      description: 'People want work-from-phone options without upfront investment — this is that.'
    },
    {
      icon: Store,
      title: 'Offline Stores Are Dying — But Still Have Value',
      description: 'We revive them by turning every local shop into a global inventory.'
    }
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            The World Is Ready for Peer-to-Peer Shopping
          </h1>
        </div>

        {/* Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {drivers.map((driver, index) => {
            const Icon = driver.icon;
            return (
              <div key={index} className="bg-surface rounded-xl p-8 border border-default hover:border-lerbee-yellow transition-colors">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-lerbee-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary leading-tight flex-1">
                    {driver.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-secondary mb-3">
                  {driver.description}
                </p>
                
                {/* Stat if available */}
                {driver.stat && (
                  <p className="text-sm text-primary font-medium bg-surface rounded-lg px-4 py-2 inline-block border border-lerbee-yellow">
                    {driver.stat}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Line */}
        <div className="text-center bg-surface rounded-xl p-8 border border-lerbee-yellow">
          <p className="text-xl text-primary font-semibold">
            LerBee taps into five unstoppable shifts: 
          </p>
          <p className="text-2xl text-primary font-bold mt-2">
            AI, gig work, distrust in brands, retail collapse, and global curiosity.
          </p>
        </div>
      </div>
    </div>
  );
};