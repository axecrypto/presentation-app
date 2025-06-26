import React from 'react';
import { 
  Target, TrendingUp, AlertCircle, CheckCircle,
  Clock, Users, DollarSign
} from 'lucide-react';

export const SlideExecutiveSummary = () => {
  const keyMessages = [
    {
      icon: Target,
      title: "Strategic Initiative",
      message: "Metering is critical for monetization, optimization, and customer success"
    },
    {
      icon: Clock,
      title: "Current Phase",
      message: "Discovery & Alignment - establishing foundation for platform-wide capability"
    },
    {
      icon: AlertCircle,
      title: "Key Challenge",
      message: "Scattered implementation across services - no unified approach"
    },
    {
      icon: CheckCircle,
      title: "Next Milestone",
      message: "Technical design finalization and prioritized service rollout in 4-6 weeks"
    }
  ];

  const businessDrivers = [
    {
      metric: "20%",
      label: "Revenue Uplift",
      description: "Industry standard with usage-based pricing"
    },
    {
      metric: "$20M",
      label: "Annual Opportunity",
      description: "Up to 20% of $100M revenue"
    },
    {
      metric: "Zero",
      label: "Usage Visibility",
      description: "Cannot differentiate user consumption"
    }
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-gradient-accent py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Executive Summary</h2>
          <div className="text-sm text-white opacity-90">Metering Platform Update</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Vision Statement */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Building a Unified Metering Platform
          </h1>
          <p className="text-xl text-secondary max-w-4xl mx-auto">
            Enable usage-based pricing, optimize platform performance, and provide 
            transparency to customers through comprehensive service metering
          </p>
        </div>

        {/* Key Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {keyMessages.map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={index}
                className="bg-elevated rounded-xl p-6 border border-default shadow-default hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-blue bg-opacity-10 rounded-lg">
                    <ItemIcon size={24} className="text-accent-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-secondary">{item.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Impact */}
        <div className="bg-accent-blue bg-opacity-10 rounded-2xl p-8 border border-accent-blue border-opacity-30 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Why This Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessDrivers.map((driver, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent-blue mb-2">{driver.metric}</div>
                <div className="text-lg font-semibold text-primary mb-1">{driver.label}</div>
                <div className="text-sm text-secondary">{driver.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Situation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-accent-orange bg-opacity-10 rounded-xl p-6 border border-accent-orange border-opacity-30">
            <AlertCircle className="text-accent-orange mb-3" size={32} />
            <h3 className="text-lg font-bold text-primary mb-2">Fragmented Coverage</h3>
            <p className="text-secondary">Some services have partial metering, most have none</p>
          </div>
          <div className="bg-accent-blue bg-opacity-10 rounded-xl p-6 border border-accent-blue border-opacity-30">
            <Users className="text-accent-blue mb-3" size={32} />
            <h3 className="text-lg font-bold text-primary mb-2">Growing Demand</h3>
            <p className="text-secondary">Customer requests for usage transparency increasing</p>
          </div>
          <div className="bg-accent-orange bg-opacity-10 rounded-xl p-6 border border-accent-orange border-opacity-30">
            <DollarSign className="text-accent-orange mb-3" size={32} />
            <h3 className="text-lg font-bold text-primary mb-2">Revenue Impact</h3>
            <p className="text-secondary">Heavy users paying same as light users - missing 20% uplift</p>
          </div>
        </div>
      </div>
    </div>
  );
};