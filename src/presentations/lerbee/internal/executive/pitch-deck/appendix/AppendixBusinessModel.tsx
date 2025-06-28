import React from 'react';
import { DollarSign, TrendingUp, ShoppingCart, Rocket, Handshake, RefreshCcw, RotateCw, Brain } from 'lucide-react';

export const AppendixBusinessModel = () => {
  const monetization = [
    {
      icon: ShoppingCart,
      title: '5–8% commission on every transaction',
      isMain: true
    },
    {
      icon: Rocket,
      title: 'Future monetization:',
      items: [
        'Subscription plans for premium clients or shoppers',
        'Boost/promotion tools for shoppers (like influencer ads)',
        'B2B partnerships with brands & local stores'
      ]
    }
  ];

  const economics = [
    { icon: Handshake, text: 'Client becomes profitable after 2–3 orders' },
    { icon: RefreshCcw, text: 'Repeat order rate: 95%' },
    { icon: RotateCw, text: 'No inventory, no warehouse, no logistics team', subtext: '→ Margins scale without physical overhead' },
    { icon: Brain, text: 'AI tools reduce support, translation, and listing costs', subtext: '→ Frees up human touch for trust-building, not admin work' }
  ];

  const cacDrivers = [
    'Word-of-mouth shopper invites',
    'Viral network loops inside shopper communities',
    'Content-driven UGC + discovery'
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-secondary mb-2">APPENDIX</p>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Business Model Details
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: How We Make Money */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <DollarSign size={24} className="text-lerbee-yellow" />
              Revenue Streams
            </h2>
            
            <div className="space-y-4">
              {monetization.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className={`bg-surface rounded-xl p-6 border ${item.isMain ? 'border-lerbee-yellow' : 'border-default'}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-lerbee-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-primary font-medium text-lg">{item.title}</p>
                        {item.items && (
                          <ul className="mt-3 space-y-2">
                            {item.items.map((subItem, idx) => (
                              <li key={idx} className="text-secondary text-sm">
                                • {subItem}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Why It's Profitable */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <TrendingUp size={24} className="text-lerbee-yellow" />
              Unit Economics
            </h2>
            
            <div className="space-y-4">
              {economics.map((item, index) => (
                <div key={index} className="bg-surface rounded-lg p-4 border border-default hover:border-lerbee-yellow transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center border border-lerbee-yellow">
                      <item.icon size={20} className="text-lerbee-yellow" />
                    </div>
                    <div>
                      <p className="text-primary font-medium">{item.text}</p>
                      {item.subtext && (
                        <p className="text-secondary text-sm mt-1">{item.subtext}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LTV > CAC Section */}
        <div className="bg-surface rounded-xl p-8 border border-default mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">LTV</p>
              <p className="text-sm text-secondary">Lifetime Value</p>
            </div>
            <span className="text-3xl text-lerbee-yellow font-bold">&gt;</span>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">CAC</p>
              <p className="text-sm text-secondary">Customer Acquisition Cost</p>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <p className="text-primary font-medium">CAC remains low due to:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cacDrivers.map((driver, index) => (
              <div key={index} className="bg-surface rounded-lg p-4 text-center border border-lerbee-yellow">
                <p className="text-primary text-sm">{driver}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Financial Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface rounded-xl p-6 border border-default">
            <h3 className="text-lg font-semibold text-primary mb-4">Avg Transaction Size</h3>
            <p className="text-3xl font-bold text-primary mb-2">$25-40</p>
            <p className="text-secondary text-sm">Per order</p>
          </div>
          
          <div className="bg-surface rounded-xl p-6 border border-default">
            <h3 className="text-lg font-semibold text-primary mb-4">Gross Margin</h3>
            <p className="text-3xl font-bold text-primary mb-2">85%+</p>
            <p className="text-secondary text-sm">No inventory costs</p>
          </div>
          
          <div className="bg-surface rounded-xl p-6 border border-default">
            <h3 className="text-lg font-semibold text-primary mb-4">Payback Period</h3>
            <p className="text-3xl font-bold text-primary mb-2">2-3 orders</p>
            <p className="text-secondary text-sm">~45 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};