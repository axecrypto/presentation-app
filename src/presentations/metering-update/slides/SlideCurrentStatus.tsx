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
      progress: 17,
      notes: "~5/30 services integrated; full landscape and plan for coverage needed.",
      details: [
        "5 services completed",
        "25 services pending",
        "Integration roadmap needed"
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
        return { bg: 'bg-blue-500', text: 'text-white', border: 'border-blue-400' };
      case 'in-progress':
        return { bg: 'bg-orange-500', text: 'text-white', border: 'border-orange-400' };
      case 'started':
        return { bg: 'bg-blue-500', text: 'text-white', border: 'border-blue-400' };
      case 'incomplete':
        return { bg: 'bg-red-500', text: 'text-white', border: 'border-red-400' };
      case 'later-phase':
        return { bg: 'bg-gray-500', text: 'text-white', border: 'border-gray-400' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' };
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
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">
            Where We Are <span className="text-blue-400">Today</span>
          </h1>
          <p className="text-xl text-slate-300">
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
                    'bg-slate-700 border-blue-500 scale-105 shadow-xl' : 
                    'bg-slate-800/50 border-slate-600 hover:border-slate-500'
                  }
                `}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <ItemIcon size={20} className="text-white" />
                  </div>
                  <StatusIcon size={20} className={colors.text} />
                </div>
                
                <h3 className="font-bold text-white mb-2 text-sm">{item.area}</h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      item.progress === 100 ? 'bg-blue-500' :
                      item.progress >= 50 ? 'bg-orange-500' :
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
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {statusData[selectedArea].area}
            </h2>
            <p className="text-slate-300 mb-4">
              {statusData[selectedArea].notes}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-slate-400">Progress</span>
                  <span className="text-sm font-bold text-white">
                    {statusData[selectedArea].progress}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${
                      statusData[selectedArea].progress === 100 ? 'bg-blue-500' :
                      statusData[selectedArea].progress >= 50 ? 'bg-orange-500' :
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
                  <CheckCircle size={16} className="text-blue-400" />
                  <span className="text-sm text-slate-300">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Progress Summary */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white">Overall Progress</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                <span className="text-blue-400">Completed</span>
                <span className="font-bold text-white">2 of 8 areas</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-900/20 rounded-lg border border-orange-500/30">
                <span className="text-orange-400">In Progress</span>
                <span className="font-bold text-white">3 of 8 areas</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-900/20 rounded-lg border border-red-500/30">
                <span className="text-red-400">Blocked/Incomplete</span>
                <span className="font-bold text-white">2 of 8 areas</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
              <p className="text-sm text-blue-300">
                <strong>Key Risk:</strong> Platform integration at only 17% - this is our critical path
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};