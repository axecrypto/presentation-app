import React from 'react';
import { Target, ShoppingCart, Globe } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideMarketOpportunity = () => {
  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="A Massive Market Backed by Buyer Demand"
          subtitle="Bottom-up approach to a trillion-dollar opportunity"
        />

        {/* TAM/SAM/SOM Visual */}
        <div className="flex justify-center items-start gap-10 mb-8">
          {/* TAM */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full border-4 border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart size={32} className="text-gray-500 mx-auto mb-2" />
                <p className={`${typography.subtitle} font-bold text-primary`}>$5.86T</p>
                <p className={`${typography.body} text-secondary`}>TAM</p>
              </div>
            </div>
            <p className={`${typography.body} text-secondary mt-3 h-10 flex items-center`}>Global E-commerce</p>
          </div>

          {/* Arrow */}
          <div className="flex items-center h-40">
            <span className="text-lerbee-yellow text-3xl">→</span>
          </div>

          {/* SAM */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full border-4 border-lerbee-yellow/50 flex items-center justify-center">
              <div className="text-center">
                <Globe size={32} className="text-lerbee-yellow/70 mx-auto mb-2" />
                <p className={`${typography.subtitle} font-bold text-primary`}>$1.2T</p>
                <p className={`${typography.body} text-secondary`}>SAM</p>
              </div>
            </div>
            <p className={`${typography.body} text-secondary mt-3 h-10 flex items-center`}>Emerging Markets</p>
          </div>

          {/* Arrow */}
          <div className="flex items-center h-40">
            <span className="text-lerbee-yellow text-3xl">→</span>
          </div>

          {/* SOM */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full border-4 border-lerbee-yellow bg-lerbee-yellow/20 flex items-center justify-center">
              <div className="text-center">
                <Target size={32} className="text-lerbee-yellow mx-auto mb-2" />
                <p className={`${typography.subtitle} font-bold text-primary`}>$6B</p>
                <p className={`${typography.body} text-secondary`}>SOM</p>
              </div>
            </div>
            <p className={`${typography.body} text-secondary mt-3 h-10 flex items-center`}>Our Target</p>
          </div>
        </div>

        {/* The Math */}
        <div className="mb-8">
          <h3 className={`${typography.heading} font-semibold text-primary text-center mb-6`}>
            How We Get to $6B
          </h3>
          
          <div className="flex justify-center items-center gap-10">
            <div className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-orange/10 rounded-xl p-6 border-2 border-lerbee-yellow w-40 text-center">
              <p className={`${typography.subtitle} font-bold text-primary mb-1`}>143K</p>
              <p className={`${typography.body} text-secondary`}>Active Shoppers</p>
            </div>
            <div className="text-3xl text-lerbee-yellow px-3">×</div>
            <div className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-orange/10 rounded-xl p-6 border-2 border-lerbee-yellow w-40 text-center">
              <p className={`${typography.subtitle} font-bold text-primary mb-1`}>140</p>
              <p className={`${typography.body} text-secondary`}>Buyers Each</p>
            </div>
            <div className="text-3xl text-lerbee-yellow px-3">×</div>
            <div className="bg-gradient-to-br from-lerbee-yellow/10 to-lerbee-orange/10 rounded-xl p-6 border-2 border-lerbee-yellow w-40 text-center">
              <p className={`${typography.subtitle} font-bold text-primary mb-1`}>$300</p>
              <p className={`${typography.body} text-secondary`}>Annual Spend</p>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center">
          <p className={`${typography.large} text-secondary font-medium`}>
            Capturing just 0.5% of emerging markets = $6B opportunity
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};