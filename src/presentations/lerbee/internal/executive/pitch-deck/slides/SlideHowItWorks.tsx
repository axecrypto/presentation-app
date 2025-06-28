import React from 'react';
import { Smartphone, MessageCircle, ShoppingBag, Send } from 'lucide-react';
import { SlideHeader, BottomTagline, IconContainer, iconSizes, typography, spacing } from '../components/DesignSystem';

export const SlideHowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Shopper Posts Products Live',
      icon: Smartphone,
      description: 'Visits local stores, shares items via live video or story format.',
      caption: 'Shoppers showcase what\'s trending nearby.'
    },
    {
      number: '2',
      title: 'Buyer Engages & Requests',
      icon: MessageCircle,
      description: 'Asks questions in real-time, requests closer views, info, or comparisons.',
      caption: 'Buyers get trusted, human advice — not fake reviews.'
    },
    {
      number: '3',
      title: 'Shopper Purchases On-Demand',
      icon: ShoppingBag,
      description: 'Fulfills buyer\'s request in-store, confirms final selection.',
      caption: 'Like a global personal shopper — without inventory.'
    },
    {
      number: '4',
      title: 'LerBee Handles Payment & Shipping',
      icon: Send,
      description: 'Buyer pays securely. Shopper ships item or drops it for fulfillment.',
      caption: 'Logistics, payments, protection — all built in.'
    }
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        <SlideHeader 
          title="LerBee Connects Global Buyers to Local Shoppers — Live and Direct"
        />

        {/* Steps Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${spacing.margin.xl}`}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -ml-3 z-0"></div>
                )}
                
                <div className={`relative bg-surface rounded-xl ${spacing.lg} border border-default hover:border-lerbee-yellow transition-colors z-10`}>
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-lerbee-yellow rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <IconContainer size="medium" variant="primary" className="mb-4">
                    <Icon size={iconSizes.medium.icon} />
                  </IconContainer>
                  
                  {/* Title */}
                  <h3 className={`${typography.body} font-semibold text-primary ${spacing.margin.sm}`}>
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`${typography.small} text-secondary ${spacing.margin.md}`}>
                    {step.description}
                  </p>
                  
                  {/* Caption */}
                  <p className={`${typography.small} text-primary font-medium italic`}>
                    "{step.caption}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <BottomTagline
          line1="Your phone + your taste = your income"
          line2="Your city becomes someone's dream store."
        />
      </div>
    </div>
  );
};