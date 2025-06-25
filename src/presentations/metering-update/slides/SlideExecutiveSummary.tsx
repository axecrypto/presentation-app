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
      message: "Only 5 of 30 services integrated - need accelerated onboarding plan"
    },
    {
      icon: CheckCircle,
      title: "Next Milestone",
      message: "Technical design finalization and prioritized service rollout in 4-6 weeks"
    }
  ];

  const businessDrivers = [
    {
      metric: "$2.5M",
      label: "Revenue at Risk",
      description: "Without usage visibility"
    },
    {
      metric: "30+",
      label: "Services",
      description: "Requiring integration"
    },
    {
      metric: "Q2 2024",
      label: "Target",
      description: "Customer-facing rollout"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl font-bold">Executive Summary</h2>
          <div className="text-sm opacity-90">Metering Platform Update</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Vision Statement */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Building a Unified Metering Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <ItemIcon size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Impact */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why This Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessDrivers.map((driver, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{driver.metric}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{driver.label}</div>
                <div className="text-sm text-gray-600">{driver.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Situation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <AlertCircle className="text-orange-600 mb-3" size={32} />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Limited Coverage</h3>
            <p className="text-gray-600">Only 17% of services have metering capability</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <Users className="text-blue-600 mb-3" size={32} />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Growing Demand</h3>
            <p className="text-gray-600">Customer requests for usage transparency increasing</p>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <DollarSign className="text-orange-600 mb-3" size={32} />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Revenue Impact</h3>
            <p className="text-gray-600">Usage-based pricing models require accurate metering</p>
          </div>
        </div>
      </div>
    </div>
  );
};