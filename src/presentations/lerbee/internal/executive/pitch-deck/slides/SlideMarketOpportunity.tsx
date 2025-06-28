import React from 'react';
import { TrendingUp, Globe, Target, Calculator, Users, Key, ShoppingCart, Lightbulb } from 'lucide-react';

export const SlideMarketOpportunity = () => {
  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            A Massive Market Backed by Buyer Demand and Creator Power
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
            <h3 className="text-2xl font-semibold text-primary">How We Reach $6B GMV:</h3>
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

        {/* Bottom Tagline */}
        <div className="text-center bg-primary border-2 border-lerbee-yellow rounded-xl p-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Key size={24} className="text-lerbee-yellow" />
          </div>
          <p className="text-xl text-primary font-semibold mb-2">
            Commerce is shifting from platforms to people.
          </p>
          <p className="text-lg text-secondary">
            LerBee builds on the trust graph — not search results.
          </p>
        </div>
      </div>
    </div>
  );
};