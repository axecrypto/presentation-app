import React from 'react';
import { Search, ShoppingBag, X } from 'lucide-react';

export const SlideProblem = () => {
  const buyerPainPoints = [
    "Can't trust product photos or reviews",
    "No way to ask real questions or compare in real time",
    "High anxiety on international purchases (fraud, sizing, quality)",
    "Limited access to offline/local brands abroad"
  ];

  const shopperPainPoints = [
    "Already shop daily — but earn nothing from it",
    "No platform for trusted personal sales",
    "Can't easily accept international payments or arrange shipping",
    "Fear of responsibility, fraud, and no support"
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Online Shopping Is Convenient — But Broken
          </h1>
          <div className="mt-6 bg-surface rounded-xl p-6 border border-red-500 max-w-3xl mx-auto">
            <p className="text-lg text-primary italic">
              "I don't trust what I see online. I want to ask someone who knows." 
              <span className="text-secondary text-sm block mt-2">— Ana, mother of 3, Barcelona</span>
            </p>
          </div>
        </div>

        {/* Two columns for Buyers and Shoppers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Buyers Column */}
          <div className="bg-surface rounded-xl p-8 border border-default">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-lerbee-yellow rounded-lg flex items-center justify-center">
                <Search size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-primary">FOR BUYERS</h2>
            </div>

            <div className="space-y-3 mb-8">
              {buyerPainPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-secondary">{point}</p>
                </div>
              ))}
            </div>

            <div className="bg-surface rounded-lg p-4 border border-default">
              <p className="text-primary font-medium italic">
                "Shopping feels like gambling when you can't see or ask."
              </p>
            </div>
          </div>

          {/* Shoppers Column */}
          <div className="bg-surface rounded-xl p-8 border border-default">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-lerbee-yellow rounded-lg flex items-center justify-center">
                <ShoppingBag size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-primary">FOR SHOPPERS</h2>
            </div>

            <div className="space-y-3 mb-8">
              {shopperPainPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-secondary">{point}</p>
                </div>
              ))}
            </div>

            <div className="bg-surface rounded-lg p-4 border border-default">
              <p className="text-primary font-medium italic">
                "Millions walk stores daily — but can't monetize it safely or globally."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center bg-surface rounded-xl p-6 border border-default">
          <p className="text-xl text-secondary mb-2">
            Trust, access, and monetization are broken on both sides.
          </p>
          <p className="text-2xl text-primary font-bold">
            We fix all three.
          </p>
        </div>
      </div>
    </div>
  );
};