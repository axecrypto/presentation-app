import React from 'react';
import { BarChart3, MessageCircle, DollarSign, CheckCircle, Brain } from 'lucide-react';

export const SlideProductMarketFit = () => {
  const indicators = [
    {
      icon: Brain,
      title: 'Retention',
      metrics: [
        '7.9% retention at Week 5 (well above average for early-stage consumer apps)',
        '95%+ of buyers return and place more than one order'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Engagement',
      metrics: [
        'Avg. 16 sessions per user',
        'High live session viewership (521K+ views)',
        'Persistent shopper-client chat activity = micro-community stickiness'
      ]
    },
    {
      icon: DollarSign,
      title: 'Monetization',
      metrics: [
        '$390,000 GMV in 6 months — bootstrapped',
        'Avg buyer revenue: ~$603 in 7 months',
        'No subsidies, no discounts — real buying behavior'
      ]
    }
  ];

  const confirmedBehaviors = [
    'Users return without reminders',
    'Orders happen across multiple geographies',
    'Word of mouth drives shopper growth',
    'Buyers build trust and spend more over time'
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Deep Engagement, High Retention, Real Revenue
          </h1>
        </div>

        {/* Key PMF Indicators */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
            <BarChart3 size={24} className="text-lerbee-yellow" />
            Key PMF Indicators
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {indicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <div key={index} className="bg-surface rounded-xl p-6 border border-default hover:border-lerbee-yellow transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-lerbee-yellow rounded-lg flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{indicator.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {indicator.metrics.map((metric, idx) => (
                      <li key={idx} className="text-secondary text-sm leading-relaxed">
                        • {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Confirmed Behaviors */}
        <div className="bg-surface rounded-xl p-8 border border-lerbee-yellow mb-8">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle size={24} className="text-lerbee-yellow" />
            <h3 className="text-xl font-semibold text-primary">Confirmed behaviors that signal PMF:</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {confirmedBehaviors.map((behavior, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-lerbee-yellow mt-1">✓</span>
                <p className="text-primary">{behavior}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center bg-primary border-2 border-lerbee-yellow rounded-xl p-6">
          <p className="text-xl text-primary font-semibold mb-2">
            We're not testing a hypothesis.
          </p>
          <p className="text-2xl text-primary font-bold">
            We're scaling a proven behavior.
          </p>
        </div>
      </div>
    </div>
  );
};