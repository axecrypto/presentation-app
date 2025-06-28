import React from 'react';
import { 
  Zap, Database, Users, AlertCircle
} from 'lucide-react';

export const SlideFirstWave = () => {
  const services = [
    {
      category: "Core APIs",
      icon: Database,
      owner: "Bejoy",
      priority: "Critical",
      operations: [
        { name: "Create", impact: "High", complexity: "Low" },
        { name: "Read", impact: "High", complexity: "Low" },
        { name: "Update", impact: "High", complexity: "Medium" },
        { name: "Delete", impact: "High", complexity: "Medium" },
        { name: "Search", impact: "Very High", complexity: "Medium" }
      ]
    },
    {
      category: "Match Service",
      icon: Zap,
      owner: "Prasuna",
      priority: "Critical",
      operations: [
        { name: "Match", impact: "Very High", complexity: "High" },
        { name: "Bulk Match", impact: "Very High", complexity: "Very High" }
      ]
    },
    {
      category: "Data Flow",
      icon: AlertCircle,
      owner: "Ankit",
      priority: "Critical",
      operations: [
        { name: "Ingress", impact: "High", complexity: "Medium" },
        { name: "Egress", impact: "High", complexity: "Medium" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-5xl font-bold text-primary mb-4 text-center">
          First Wave: Where We'll Start
        </h1>
        <p className="text-xl text-secondary mb-12 text-center">
          High-impact services with committed owners ready to integrate
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div key={index} className="bg-surface rounded-xl p-6 border border-default">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                      <ServiceIcon className="text-accent-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">{service.category}</h3>
                      <p className="text-sm text-secondary">PM: {service.owner}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-accent-orange bg-accent-orange bg-opacity-10 px-2 py-1 rounded">
                    {service.priority}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {service.operations.map((op, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-primary font-medium">{op.name}</span>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          op.impact === 'Very High' ? 'bg-red-500 bg-opacity-10 text-red-500' : 
                          'bg-accent-blue bg-opacity-10 text-accent-blue'
                        }`}>
                          {op.impact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-accent-orange bg-opacity-10 rounded-xl p-6 border border-accent-orange border-opacity-30">
          <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
            <Users className="text-accent-orange" size={24} />
            Why These Services First?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-secondary">
            <div>
              <p className="font-semibold text-primary mb-1">Highest Usage</p>
              <p className="text-sm">These APIs represent 80%+ of platform traffic</p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-1">Revenue Impact</p>
              <p className="text-sm">Direct correlation to customer value and pricing</p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-1">PM Commitment</p>
              <p className="text-sm">Owners ready to prioritize integration work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};