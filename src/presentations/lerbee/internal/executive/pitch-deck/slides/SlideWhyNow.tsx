import React from 'react';
import { Brain, Users, Smartphone, Store } from 'lucide-react';
import { SlideHeader, QuoteBox, IconContainer, iconSizes, typography, spacing } from '../components/DesignSystem';

export const SlideWhyNow = () => {
  const drivers = [
    {
      icon: Brain,
      title: 'AI Is Ready to Scale the Infrastructure',
      description: 'Automates descriptions, translation, routing, letting humans focus on trust & style.'
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
      description: 'People want work-from-phone options without upfront investment. This is that.'
    },
    {
      icon: Store,
      title: 'Offline Stores Are Dying, But Still Have Value',
      description: 'We revive them by turning every local shop into a global inventory.'
    }
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        <SlideHeader 
          title="The World Is Ready for Peer-to-Peer Shopping"
        />
        
        <QuoteBox>
          "Millions lost jobs. Stores lost foot traffic. <span className="font-bold">We connect them both.</span>"
        </QuoteBox>

        {/* Drivers Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${spacing.margin.xl}`}>
          {drivers.map((driver, index) => {
            const Icon = driver.icon;
            return (
              <div key={index} className={`bg-surface rounded-xl ${spacing.lg} border border-default hover:border-lerbee-yellow transition-colors`}>
                {/* Icon and Title */}
                <div className={`flex items-start gap-4 ${spacing.margin.md}`}>
                  <IconContainer size="large" variant="primary">
                    <Icon size={iconSizes.large.icon} />
                  </IconContainer>
                  <h3 className={`${typography.body} font-semibold text-primary leading-tight flex-1`}>
                    {driver.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className={`${typography.body} text-secondary ${spacing.margin.sm}`}>
                  {driver.description}
                </p>
                
                {/* Stat if available */}
                {driver.stat && (
                  <p className={`${typography.small} text-primary font-medium bg-surface rounded-lg px-4 py-2 inline-block border border-lerbee-yellow`}>
                    {driver.stat}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Line */}
        <div className={`text-center bg-surface rounded-xl ${spacing.lg} border border-lerbee-yellow`}>
          <p className={`${typography.large} text-primary font-semibold`}>
            LerBee taps into five unstoppable shifts: 
          </p>
          <p className={`${typography.subtitle} text-primary font-bold ${spacing.margin.sm}`}>
            AI, gig work, distrust in brands, retail collapse, and global curiosity.
          </p>
        </div>
      </div>
    </div>
  );
};