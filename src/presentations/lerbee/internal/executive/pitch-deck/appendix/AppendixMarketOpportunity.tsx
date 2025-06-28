import React from 'react';
import { Globe, Target, Calculator, Key, ShoppingCart, Lightbulb } from 'lucide-react';

export const AppendixMarketOpportunity = () => {
  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-secondary mb-2">APPENDIX</p>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Market Opportunity Details
          </h1>
        </div>

        {/* TAM/SAM/SOM Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* TAM */}
          <div className="bg-surface rounded-xl p-6 border border-default hover:border-lerbee-yellow transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center border border-default">
                <ShoppingCart size={24} className="text-lerbee-yellow" />
              </div>
              <h3 className="text-xl font-semibold text-primary">TAM – $5.86T</h3>
            </div>
            <p className="text-secondary mb-2">
              Global e-commerce in 2024 → projected to reach $12.35T by 2030
            </p>
            <p className="text-sm text-muted">
              (Statista, Morgan Stanley)
            </p>
          </div>

          {/* SAM */}
          <div className="bg-surface rounded-xl p-6 border border-default hover:border-lerbee-yellow transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center border border-default">
                <Globe size={24} className="text-lerbee-yellow" />
              </div>
              <h3 className="text-xl font-semibold text-primary">SAM – $1.2T</h3>
            </div>
            <p className="text-secondary">
              Emerging digital economies in LatAm, India, Eastern Europe & CIS
            </p>
          </div>

          {/* SOM */}
          <div className="bg-surface rounded-xl p-6 border border-lerbee-yellow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-lerbee-yellow rounded-lg flex items-center justify-center">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary">SOM – $6B</h3>
            </div>
            <p className="text-secondary">
              Targeting &lt;0.5% of SAM with buyer-led, high-retention micro-communities
            </p>
          </div>
        </div>

        {/* Bottom-Up Validation */}
        <div className="bg-surface rounded-xl p-8 border border-default mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Calculator size={28} className="text-lerbee-yellow" />
            <h3 className="text-2xl font-semibold text-primary">Detailed Calculation: How We Reach $6B GMV</h3>
          </div>

          {/* Calculation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">20M buyers</p>
              <p className="text-secondary">× $300/year average spend</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">140:1</p>
              <p className="text-secondary">Client-to-shopper ratio</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">~143K</p>
              <p className="text-secondary">active shoppers needed</p>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-surface rounded-lg p-4 border border-lerbee-yellow">
            <div className="flex items-start gap-3">
              <Lightbulb size={24} className="text-lerbee-yellow mt-1 flex-shrink-0" />
              <div>
                <p className="text-primary font-medium">
                  Each shopper is a trusted influencer with a private micro-community
                </p>
                <p className="text-secondary text-sm mt-1">
                  → Buyers engage, follow, chat, and shop regularly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Market Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface rounded-xl p-6 border border-default">
            <h3 className="text-lg font-semibold text-primary mb-4">Market Drivers</h3>
            <ul className="space-y-2 text-secondary">
              <li>• Live commerce grew 3x in 2 years (McKinsey)</li>
              <li>• 73% of Gen Z prefer real people to ads</li>
              <li>• Cross-border e-commerce growing 25% YoY</li>
              <li>• Trust commerce valued at $500B+ globally</li>
            </ul>
          </div>
          
          <div className="bg-surface rounded-xl p-6 border border-default">
            <h3 className="text-lg font-semibold text-primary mb-4">Geographic Breakdown</h3>
            <ul className="space-y-2 text-secondary">
              <li>• LatAm: $300B opportunity</li>
              <li>• India: $200B opportunity</li>
              <li>• Eastern Europe: $150B opportunity</li>
              <li>• CIS: $100B opportunity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};