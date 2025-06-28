import React, { useState } from 'react';
import { 
  CheckCircle, Circle, Clock, AlertCircle,
  Target, Users, Code, Palette, GitMerge, Database, BarChart, Shield
} from 'lucide-react';

export const SlideCurrentStatus = () => {
  const [selectedArea, setSelectedArea] = useState(0);

  const statusData = [
    {
      area: "Vision & Business Goals",
      status: "aligned",
      icon: Target,
      progress: 100,
      notes: "Importance of usage metering established for monetization, analytics, and platform optimization.",
      details: [
        "Executive sponsorship secured",
        "Business case approved",
        "ROI projections validated"
      ]
    },
    {
      area: "Initial Stakeholder Buy-in",
      status: "in-progress",
      icon: Users,
      progress: 70,
      notes: "Leadership, UX, and core PMs involved; need stronger engineering and architecture alignment.",
      details: [
        "Product leadership aligned",
        "UX team engaged",
        "Engineering alignment pending"
      ]
    },
    {
      area: "Architecture Discovery",
      status: "in-progress",
      icon: Code,
      progress: 60,
      notes: "Architect completed partial discovery; ELK/Micrometer explored; code analysis ongoing.",
      details: [
        "ELK stack evaluated",
        "Micrometer POC complete",
        "Integration patterns defined"
      ]
    },
    {
      area: "UX Design Exploration",
      status: "started",
      icon: Palette,
      progress: 30,
      notes: "UX lead initiated early design ideas for internal dashboards.",
      details: [
        "Initial wireframes created",
        "User research planned",
        "Dashboard concepts drafted"
      ]
    },
    {
      area: "Platform Integration",
      status: "incomplete",
      icon: GitMerge,
      progress: 10,
      notes: "Scattered implementations exist; comprehensive service inventory and unified approach needed.",
      details: [
        "Some services have partial metering",
        "No complete service inventory",
        "Integration standards undefined"
      ]
    },
    {
      area: "Tooling Assessment",
      status: "in-progress",
      icon: Database,
      progress: 50,
      notes: "ELK/Micrometer under consideration for collection; Power BI for internal visualizations.",
      details: [
        "Collection layer: ELK/Micrometer",
        "Visualization: Power BI",
        "Storage strategy pending"
      ]
    },
    {
      area: "Metering Types Identified",
      status: "aligned",
      icon: BarChart,
      progress: 100,
      notes: "Concurrency, API rate limits, ingestion records, matching behavior, errors, records processed.",
      details: [
        "6 meter types defined",
        "Measurement units agreed",
        "Granularity levels set"
      ]
    },
    {
      area: "Customer-Facing Design",
      status: "later-phase",
      icon: Shield,
      progress: 10,
      notes: "Requires packaging, pricing, rate cards, and UX integration — planned for post-internal rollout.",
      details: [
        "Deferred to Phase 2",
        "Dependency on internal rollout",
        "Pricing model TBD"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'aligned':
        return { bg: 'bg-accent-blue', text: 'text-white', border: 'border-accent-blue' };
      case 'in-progress':
        return { bg: 'bg-accent-orange', text: 'text-white', border: 'border-accent-orange' };
      case 'started':
        return { bg: 'bg-accent-blue', text: 'text-white', border: 'border-accent-blue' };
      case 'incomplete':
        return { bg: 'bg-red-500', text: 'text-white', border: 'border-red-500' };
      case 'later-phase':
        return { bg: 'bg-gray-500', text: 'text-white', border: 'border-gray-500' };
      default:
        return { bg: 'bg-muted', text: 'text-primary', border: 'border-default' };
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'aligned':
        return CheckCircle;
      case 'in-progress':
        return Clock;
      case 'started':
        return Circle;
      case 'incomplete':
        return AlertCircle;
      default:
        return Circle;
    }
  };

  return (
    <div className="min-h-screen bg-primary text-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">
            Where We Are <span className="text-accent-blue">Today</span>
          </h1>
          <p className="text-xl text-secondary">
            Current Phase: Discovery & Alignment
          </p>
        </div>

        {/* Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statusData.map((item, index) => {
            const ItemIcon = item.icon;
            const StatusIcon = getStatusIcon(item.status);
            const colors = getStatusColor(item.status);
            const isSelected = selectedArea === index;

            return (
              <div
                key={index}
                onClick={() => setSelectedArea(index)}
                className={`
                  relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                  ${isSelected ? 
                    'bg-elevated border-accent-blue scale-105 shadow-xl' : 
                    'bg-surface bg-opacity-50 border-default hover:border-opacity-80'
                  }
                `}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <ItemIcon size={20} className="text-primary" />
                  </div>
                  <StatusIcon size={20} className={colors.text} />
                </div>
                
                <h3 className="font-bold text-primary mb-2 text-sm">{item.area}</h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-3">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      item.progress === 100 ? 'bg-accent-blue' :
                      item.progress >= 50 ? 'bg-accent-orange' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                
                <div className={`
                  inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                  ${colors.bg} ${colors.text} ${colors.border} border
                `}>
                  {item.status.replace('-', ' ').toUpperCase()}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Area Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-default">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              {statusData[selectedArea].area}
            </h2>
            <p className="text-secondary mb-4">
              {statusData[selectedArea].notes}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-muted">Progress</span>
                  <span className="text-sm font-bold text-primary">
                    {statusData[selectedArea].progress}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${
                      statusData[selectedArea].progress === 100 ? 'bg-accent-blue' :
                      statusData[selectedArea].progress >= 50 ? 'bg-accent-orange' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${statusData[selectedArea].progress}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {statusData[selectedArea].details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent-blue" />
                  <span className="text-sm text-secondary">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Progress Summary */}
          <div className="bg-surface bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-default">
            <h3 className="text-xl font-bold mb-4 text-primary">Overall Progress</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-accent-blue bg-opacity-10 rounded-lg border border-accent-blue border-opacity-30">
                <span className="text-accent-blue">Completed</span>
                <span className="font-bold text-primary">2 of 8 areas</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-accent-orange bg-opacity-10 rounded-lg border border-accent-orange border-opacity-30">
                <span className="text-accent-orange">In Progress</span>
                <span className="font-bold text-primary">3 of 8 areas</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-500 bg-opacity-10 rounded-lg border border-red-500 border-opacity-30">
                <span className="text-red-500">Blocked/Incomplete</span>
                <span className="font-bold text-primary">2 of 8 areas</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent-blue bg-opacity-10 rounded-lg border border-accent-blue border-opacity-30">
              <p className="text-sm text-accent-blue">
                <strong>Key Risk:</strong> Platform integration at only 17% - this is our critical path
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};