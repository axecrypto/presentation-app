import React from 'react';
import { 
  HandshakeIcon, Shield, Users,
  DollarSign, Clock
} from 'lucide-react';

export const SlideAsksBenefits = () => {
  const asks = [
    {
      category: "People",
      icon: Users,
      items: [
        "Dedicated team with clear ownership",
        "Service team participation for integration",
        "Technical leadership involvement"
      ]
    },
    {
      category: "Process",
      icon: Shield,
      items: [
        "Executive sponsorship for prioritization",
        "Metering mandatory for all new services",
        "Regular architecture reviews"
      ]
    },
    {
      category: "Investment",
      icon: HandshakeIcon,
      items: [
        "Budget for IDMC integration",
        "Time allocation for planning phase",
        "Training and documentation resources"
      ]
    }
  ];

  const benefits = [
    {
      timeframe: "Operational Benefits",
      icon: Clock,
      color: "blue",
      items: [
        {
          benefit: "Visibility & Control",
          impact: "See usage patterns",
          value: "Make informed decisions"
        },
        {
          benefit: "Cost Optimization",
          impact: "Right-size resources",
          value: "Stop waste immediately"
        }
      ]
    },
    {
      timeframe: "Business Benefits",
      icon: DollarSign,
      color: "orange",
      items: [
        {
          benefit: "Revenue Growth",
          impact: "Usage-based pricing",
          value: "Capture true value"
        },
        {
          benefit: "Customer Success",
          impact: "Self-service insights",
          value: "Reduce support burden"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-primary flex items-center">
      <div className="max-w-7xl mx-auto px-12 w-full">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Asks Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4 pb-2 border-b border-default">Our Asks</h3>
            <div className="space-y-4">
              {asks.map((ask, index) => {
                const AskIcon = ask.icon;
                return (
                  <div key={index} className="bg-surface rounded-lg p-5 border border-default">
                    <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                      <AskIcon size={20} className="text-accent-orange" />
                      {ask.category}
                    </h4>
                    <ul className="space-y-2">
                      {ask.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-secondary">
                          <span className="text-accent-orange mt-1">•</span>
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4 pb-2 border-b border-default">Our Returns</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div key={index} className="bg-surface rounded-lg p-5 border border-default">
                    <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                      <BenefitIcon size={20} className={benefit.color === 'orange' ? 'text-accent-orange' : 'text-accent-blue'} />
                      {benefit.timeframe}
                    </h4>
                    <div className="space-y-4">
                      {benefit.items.map((item, idx) => (
                        <div key={idx}>
                          <p className="font-semibold text-primary text-base">{item.benefit}</p>
                          <p className="text-sm text-secondary">{item.impact} → {item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};