import React from 'react';
import { Sparkles, TrendingUp, ShoppingBag, Euro } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideShopperStory = () => {
  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="Real People Building Real Income"
          subtitle="Meet Vicky: From hotel burnout to luxury curator"
        />

        {/* Main story grid */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Left - Before/After */}
          <div className="border-2 border-lerbee-yellow rounded-xl p-4">
            <h3 className={`${typography.heading} font-bold text-primary mb-4`}>Vicky's Journey</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className={`${typography.large} text-red-500 font-bold`}>Before:</span>
                <p className={`${typography.large} text-secondary`}>Toxic hotel job, no flexibility, limited income</p>
              </div>
              
              <div className="flex items-center justify-center py-3">
                <div className="bg-lerbee-yellow/20 rounded-full p-3">
                  <TrendingUp size={32} className="text-lerbee-yellow" />
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className={`${typography.large} text-green-600 font-bold`}>After:</span>
                <p className={`${typography.large} text-secondary`}>Munich luxury curator, own schedule, €100K+/year</p>
              </div>
            </div>

            <div className="mt-4 bg-lerbee-yellow/10 rounded-lg p-3">
              <p className={`${typography.large} text-primary text-center font-medium italic`}>
                "I found €3,000 ski jackets for €900. My buyers love me."
              </p>
            </div>
          </div>

          {/* Right - Impact Numbers */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-5 border border-green-500/30">
              <div className="flex items-center gap-4">
                <Euro size={28} className="text-green-600" />
                <div>
                  <p className={`${typography.subtitle} font-bold text-primary`}>€100K+</p>
                  <p className={`${typography.small} text-secondary`}>Annual income</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-orange/10 rounded-xl p-5 border border-lerbee-yellow/30">
              <div className="flex items-center gap-4">
                <ShoppingBag size={28} className="text-lerbee-yellow" />
                <div>
                  <p className={`${typography.subtitle} font-bold text-primary`}>70% Savings</p>
                  <p className={`${typography.small} text-secondary`}>On luxury brands for buyers</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl p-5 border border-orange-500/30">
              <div className="flex items-center gap-4">
                <Sparkles size={28} className="text-orange-600" />
                <div>
                  <p className={`${typography.subtitle} font-bold text-primary`}>Instagram</p>
                  <p className={`${typography.small} text-secondary`}>Discovery to decision in days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="bg-gradient-to-r from-lerbee-yellow/10 to-lerbee-orange/10 rounded-xl p-6 text-center">
          <p className={`${typography.subtitle} text-primary font-bold`}>
            This isn't a side hustle. This is the future of retail.
          </p>
          <p className={`${typography.body} text-secondary mt-2`}>
            Multiply Vicky by 143,000 shoppers = unstoppable marketplace
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};