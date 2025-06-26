import React from 'react';
import { 
  HandshakeIcon, TrendingUp, Shield, Users,
  DollarSign, BarChart, Clock, Award
} from 'lucide-react';

export const SlideAsksBenefits = () => {
  const asks = [
    {
      category: "Leadership Support",
      icon: Users,
      items: [
        "Executive sponsorship for cross-team prioritization",
        "Quarterly reviews with C-suite",
        "Public commitment to metering initiative"
      ]
    },
    {
      category: "Resources",
      icon: HandshakeIcon,
      items: [
        "Dedicated team: 2 architects, 4 engineers, 1 PM",
        "Budget approval for tooling ($150K)",
        "20% time allocation from service teams"
      ]
    },
    {
      category: "Organizational",
      icon: Shield,
      items: [
        "Metering as mandatory for all new services",
        "Architecture review board approval",
        "Clear ownership model established"
      ]
    }
  ];

  const benefits = [
    {
      timeframe: "Immediate (0-3 months)",
      icon: Clock,
      color: "blue",
      items: [
        {
          benefit: "Internal Visibility",
          impact: "Reduce debugging time by 40%",
          value: "$500K/year saved"
        },
        {
          benefit: "Cost Optimization",
          impact: "Identify resource waste",
          value: "$300K/year saved"
        }
      ]
    },
    {
      timeframe: "Short-term (3-6 months)",
      icon: TrendingUp,
      color: "blue",
      items: [
        {
          benefit: "Customer Satisfaction",
          impact: "Transparency reduces support tickets",
          value: "30% reduction in escalations"
        },
        {
          benefit: "Competitive Parity",
          impact: "Match competitor features",
          value: "Win back 5 enterprise deals"
        }
      ]
    },
    {
      timeframe: "Long-term (6+ months)",
      icon: DollarSign,
      color: "orange",
      items: [
        {
          benefit: "New Revenue Streams",
          impact: "Enable usage-based pricing",
          value: "$2.5M new revenue"
        },
        {
          benefit: "Platform Optimization",
          impact: "Data-driven scaling decisions",
          value: "20% infrastructure savings"
        }
      ]
    }
  ];

  const roi = {
    investment: "$850K",
    yearOneReturn: "$3.3M",
    paybackPeriod: "4 months",
    threeYearROI: "12x"
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-gradient-accent py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">What We Need & What You Get</h2>
          <div className="text-sm text-white opacity-90">Investment & Returns</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Asks Section */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
              <HandshakeIcon className="text-accent-blue" />
              What We Need
            </h2>
            <div className="space-y-4">
              {asks.map((ask, index) => {
                const AskIcon = ask.icon;
                return (
                  <div key={index} className="bg-elevated rounded-xl p-6 border border-default shadow-default">
                    <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                      <AskIcon size={20} className="text-accent-blue" />
                      {ask.category}
                    </h3>
                    <ul className="space-y-2">
                      {ask.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-secondary">
                          <span className="text-accent-blue mt-1">•</span>
                          <span>{item}</span>
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
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
              <TrendingUp className="text-accent-blue" />
              What You Get
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div key={index} className="bg-elevated rounded-xl p-6 border border-default shadow-default">
                    <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                      <BenefitIcon size={20} className={benefit.color === 'orange' ? 'text-accent-orange' : 'text-accent-blue'} />
                      {benefit.timeframe}
                    </h3>
                    <div className="space-y-3">
                      {benefit.items.map((item, idx) => (
                        <div key={idx} className="border-l-2 border-default pl-4">
                          <h4 className="font-semibold text-primary">{item.benefit}</h4>
                          <p className="text-sm text-secondary">{item.impact}</p>
                          <p className={`text-sm font-bold ${benefit.color === 'orange' ? 'text-accent-orange' : 'text-accent-blue'}`}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ROI Summary */}
        <div className="bg-accent-blue bg-opacity-10 rounded-2xl p-8 border border-accent-blue border-opacity-30">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center flex items-center justify-center gap-2">
            <Award className="text-accent-blue" />
            Return on Investment
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-sm text-secondary mb-1">Total Investment</p>
              <p className="text-2xl font-bold text-red-500">{roi.investment}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-secondary mb-1">Year 1 Return</p>
              <p className="text-2xl font-bold text-accent-blue">{roi.yearOneReturn}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-secondary mb-1">Payback Period</p>
              <p className="text-2xl font-bold text-accent-blue">{roi.paybackPeriod}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-secondary mb-1">3-Year ROI</p>
              <p className="text-2xl font-bold text-accent-orange">{roi.threeYearROI}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-accent-blue rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Our Platform?
          </h3>
          <p className="text-lg text-white opacity-90 mb-6">
            Every week of delay costs us $50K in lost opportunities and inefficiencies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-accent-blue rounded-lg font-bold hover:bg-opacity-90 transition-colors">
              Approve Resources
            </button>
            <button className="px-8 py-3 bg-black bg-opacity-20 text-white rounded-lg font-bold hover:bg-opacity-30 transition-colors">
              Schedule Deep Dive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};