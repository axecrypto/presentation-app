import React from 'react';
import { 
  AlertTriangle, DollarSign, Shield, TrendingUp
} from 'lucide-react';

export const SlideExecutiveSummary = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Your Data Matching Crisis is Costing You <span className="text-accent-orange">Millions</span>
          </h1>
          <p className="text-xl text-secondary">
            Poor data matching isn't just an IT problem—it's a business crisis hiding in plain sight
          </p>
        </div>

        {/* Four Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* The Problem */}
          <div className="bg-surface rounded-xl p-6 border border-default">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500 bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">The Hidden Problem</h3>
                <p className="text-secondary mb-3">
                  25-30% of your critical data contains duplicates
                </p>
                <ul className="space-y-1 text-sm text-muted">
                  <li>• Same customer in 5+ systems</li>
                  <li>• Products with multiple IDs</li>
                  <li>• Suppliers duplicated across regions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Cost */}
          <div className="bg-surface rounded-xl p-6 border border-default">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-orange bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="text-accent-orange" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">The Real Cost</h3>
                <p className="text-secondary mb-3">
                  $15M average annual impact for enterprises
                </p>
                <ul className="space-y-1 text-sm text-muted">
                  <li>• 20% of staff time on data cleanup</li>
                  <li>• Lost revenue from poor targeting</li>
                  <li>• Compliance fines from bad data</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Risk */}
          <div className="bg-surface rounded-xl p-6 border border-default">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-blue bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-accent-blue" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">The Growing Risk</h3>
                <p className="text-secondary mb-3">
                  Regulations demand accurate, unified data
                </p>
                <ul className="space-y-1 text-sm text-muted">
                  <li>• GDPR right to be forgotten</li>
                  <li>• CCPA data accuracy requirements</li>
                  <li>• Industry-specific mandates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="bg-surface rounded-xl p-6 border border-default">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">The Opportunity</h3>
                <p className="text-secondary mb-3">
                  AI-powered matching delivers immediate ROI
                </p>
                <ul className="space-y-1 text-sm text-muted">
                  <li>• 95%+ match accuracy</li>
                  <li>• 80% reduction in manual effort</li>
                  <li>• ROI in less than 6 months</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="bg-accent-orange bg-opacity-10 rounded-xl p-6 border border-accent-orange border-opacity-30">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">
                Transform Your Data Matching in 90 Days
              </h3>
              <p className="text-secondary">
                From chaos to golden records with Informatica MDM
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-accent-orange">3-5x</p>
              <p className="text-sm text-secondary">Faster than manual matching</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};