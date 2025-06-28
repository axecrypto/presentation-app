import React from 'react';
import { Smartphone, MessageCircle, ShoppingBag, Send } from 'lucide-react';

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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            LerBee Connects Global Buyers to Local Shoppers — Live and Direct
          </h1>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -ml-3 z-0"></div>
                )}
                
                <div className="relative bg-surface rounded-xl p-6 border border-default hover:border-lerbee-yellow transition-colors z-10">
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-lerbee-yellow rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-lerbee-yellow rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-secondary mb-4">
                    {step.description}
                  </p>
                  
                  {/* Caption */}
                  <p className="text-sm text-primary font-medium italic">
                    "{step.caption}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <div className="text-center bg-surface rounded-xl p-8 border border-default">
          <p className="text-2xl text-primary font-semibold">
            Anyone with a phone and taste can now become a trusted global seller.
          </p>
        </div>
      </div>
    </div>
  );
};