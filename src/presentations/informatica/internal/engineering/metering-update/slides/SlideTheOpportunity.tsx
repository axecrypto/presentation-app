import React from 'react';
import { 
  TrendingUp, DollarSign, CheckCircle
} from 'lucide-react';

export const SlideTheOpportunity = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-8">
        {/* Title */}
        <h1 className="text-5xl font-bold text-primary mb-12 text-center">
          The Industry Has Already Proven This Works
        </h1>

        {/* Central Metric */}
        <div className="bg-accent-blue bg-opacity-10 rounded-2xl p-12 border border-accent-blue border-opacity-30 mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <TrendingUp className="text-accent-blue" size={48} />
            <span className="text-7xl font-bold text-accent-blue">20%</span>
          </div>
          <p className="text-2xl text-primary font-semibold mb-2">
            Average Revenue Uplift
          </p>
          <p className="text-xl text-secondary">
            When companies implement usage-based pricing
          </p>
        </div>

        {/* What this means */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-surface rounded-xl p-6">
            <DollarSign className="text-accent-orange mx-auto mb-3" size={32} />
            <p className="text-3xl font-bold text-primary mb-2">$20M</p>
            <p className="text-secondary">Annual opportunity for $100M business</p>
          </div>

          <div className="bg-surface rounded-xl p-6">
            <CheckCircle className="text-green-500 mx-auto mb-3" size={32} />
            <p className="text-3xl font-bold text-primary mb-2">2-3%</p>
            <p className="text-secondary">Would justify entire investment</p>
          </div>

          <div className="bg-surface rounded-xl p-6">
            <TrendingUp className="text-accent-blue mx-auto mb-3" size={32} />
            <p className="text-3xl font-bold text-primary mb-2">Day 1</p>
            <p className="text-secondary">Internal visibility & optimization begins</p>
          </div>
        </div>
      </div>
    </div>
  );
};