import React from 'react';
import { DollarSign, PieChart, Mail, Coins, BarChart3 } from 'lucide-react';

export const SlideSeedRound = () => {
  const raiseDetails = [
    { label: 'Round Size', value: '$1M–1.5M (Seed)' },
    { label: 'Structure', value: 'SAFE or equity' },
    { label: 'Stage', value: 'Post-product, revenue-generating, high retention' },
    { label: 'Runway Goal', value: '18 months' }
  ];

  const fundAllocation = [
    {
      percentage: '50%',
      category: 'Product & AI Development',
      details: 'Shopper tools, content automation, marketplace UX',
      color: 'bg-lerbee-yellow'
    },
    {
      percentage: '30%',
      category: 'Growth & Market Expansion',
      details: 'LATAM, MENA, referral engine, UGC strategy',
      color: 'bg-lerbee-orange'
    },
    {
      percentage: '20%',
      category: 'Team & Operations',
      details: 'Support, moderation, partner onboarding',
      color: 'bg-lerbee-green'
    }
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Raising $1–1.5M to Scale What Already Works
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Raise Details */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <DollarSign size={24} className="text-lerbee-yellow" />
              <span className="flex items-center gap-2">
                <Coins size={20} className="text-lerbee-yellow" />
                <span>Raise Details</span>
              </span>
            </h2>
            
            <div className="space-y-4">
              {raiseDetails.map((detail, index) => (
                <div key={index} className="bg-surface rounded-lg p-4 border border-default">
                  <p className="text-secondary text-sm">{detail.label}</p>
                  <p className="text-primary font-semibold text-lg">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Use of Funds */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <PieChart size={24} className="text-lerbee-yellow" />
              <span className="flex items-center gap-2">
                <BarChart3 size={20} className="text-lerbee-yellow" />
                <span>Use of Funds</span>
              </span>
            </h2>
            
            {/* Visual Bar Chart */}
            <div className="mb-6">
              <div className="flex h-12 rounded-lg overflow-hidden border border-default">
                <div className="bg-lerbee-yellow flex items-center justify-center text-sm font-bold" style={{width: '50%'}}>
                  50%
                </div>
                <div className="bg-lerbee-orange flex items-center justify-center text-sm font-bold" style={{width: '30%'}}>
                  30%
                </div>
                <div className="bg-lerbee-green flex items-center justify-center text-sm font-bold text-white" style={{width: '20%'}}>
                  20%
                </div>
              </div>
            </div>
            
            {/* Fund Categories */}
            <div className="space-y-4">
              {fundAllocation.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-4 h-4 ${item.color} rounded flex-shrink-0 mt-1`}></div>
                  <div>
                    <p className="text-primary font-semibold">
                      {item.percentage} – {item.category}
                    </p>
                    <p className="text-secondary text-sm">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="bg-surface rounded-xl p-8 border border-lerbee-yellow mb-8">
          <p className="text-xl text-primary font-semibold mb-2 text-center">
            We're not experimenting. We're operationalizing.
          </p>
          <p className="text-lg text-secondary text-center">
            LerBee is ready to scale a proven model — one trust loop at a time.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center bg-primary border-2 border-lerbee-yellow rounded-xl p-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail size={20} className="text-lerbee-yellow" />
            <span className="text-lg">Contact</span>
          </div>
          <p className="text-primary font-semibold">Valeria Mikova – CEO</p>
          <p className="text-secondary">vmikova@lerbee.com</p>
          <p className="text-secondary">+1 407 634 9122</p>
        </div>
      </div>
    </div>
  );
};