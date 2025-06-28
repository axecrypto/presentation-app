import React from 'react';
import { Smartphone, MessageCircle, ShoppingBag, Send } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideHowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Shopper Goes Live',
      icon: Smartphone,
      description: 'From local stores and markets'
    },
    {
      number: '2',
      title: 'Buyer Engages',
      icon: MessageCircle,
      description: 'Real-time chat and requests'
    },
    {
      number: '3',
      title: 'Shopper Purchases',
      icon: ShoppingBag,
      description: 'On-demand fulfillment'
    },
    {
      number: '4',
      title: 'We Handle the Rest',
      icon: Send,
      description: 'Payment, shipping, protection'
    }
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="How LerBee Works"
          subtitle="Connecting global buyers to local shoppers in 4 simple steps"
        />

        {/* Simple flow with outlined boxes */}
        <div className="flex justify-center items-stretch gap-4 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center">
                {/* Step box - outline only */}
                <div className="border-2 border-lerbee-yellow rounded-xl p-5 text-center w-[200px] h-[160px] flex flex-col justify-center">
                  {/* Icon with step number */}
                  <div className="relative mb-4 inline-block mx-auto">
                    <div className="w-14 h-14 bg-lerbee-yellow/20 rounded-xl flex items-center justify-center">
                      <Icon size={26} className="text-lerbee-yellow" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-lerbee-yellow rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`${typography.body} font-semibold text-primary mb-1`}>
                    {step.title}
                  </h3>
                  <p className={`${typography.small} text-secondary`}>
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="mx-2 text-lerbee-yellow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Key differentiators */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-yellow/5 rounded-xl p-4 text-center">
            <p className={`${typography.body} font-semibold text-primary mb-1`}>No Inventory</p>
            <p className={`${typography.small} text-secondary`}>Zero warehouse costs</p>
          </div>
          <div className="bg-gradient-to-br from-lerbee-orange/10 to-lerbee-orange/5 rounded-xl p-4 text-center">
            <p className={`${typography.body} font-semibold text-primary mb-1`}>Real-Time Trust</p>
            <p className={`${typography.small} text-secondary`}>Live human connections</p>
          </div>
          <div className="bg-gradient-to-br from-lerbee-green/10 to-lerbee-green/5 rounded-xl p-4 text-center">
            <p className={`${typography.body} font-semibold text-primary mb-1`}>Global Access</p>
            <p className={`${typography.small} text-secondary`}>Shop anywhere, anytime</p>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center">
          <p className={`${typography.large} text-secondary font-medium`}>
            Your phone + your taste = your income
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};