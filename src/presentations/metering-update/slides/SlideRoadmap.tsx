import React, { useState } from 'react';
import { 
  Map, Rocket, Eye, DollarSign, 
  CheckCircle, Clock, ArrowRight, TrendingUp
} from 'lucide-react';

export const SlideRoadmap = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const phases = [
    {
      phase: "Phase 1",
      name: "Foundation",
      timeline: "Current - 6 weeks",
      icon: Map,
      color: "blue",
      status: "in-progress",
      objectives: [
        "Complete technical architecture",
        "Onboard first 10 services",
        "Internal dashboard MVP",
        "Establish data collection pipeline"
      ],
      keyMetrics: [
        "10 services integrated",
        "< 5min data latency",
        "99.9% collection uptime"
      ],
      deliverables: [
        "Architecture documentation",
        "Integration playbook",
        "Internal dashboard v1"
      ]
    },
    {
      phase: "Phase 2",
      name: "Internal Rollout",
      timeline: "6-12 weeks",
      icon: Rocket,
      color: "orange",
      status: "planned",
      objectives: [
        "Scale to all 30 services",
        "Advanced analytics capabilities",
        "Alerting and anomaly detection",
        "Cost allocation models"
      ],
      keyMetrics: [
        "100% service coverage",
        "< 1min data latency",
        "Automated alerts configured"
      ],
      deliverables: [
        "Full platform coverage",
        "Analytics dashboard",
        "Alert framework"
      ]
    },
    {
      phase: "Phase 3",
      name: "Customer Visibility",
      timeline: "3-6 months",
      icon: Eye,
      color: "blue",
      status: "future",
      objectives: [
        "Customer-facing dashboard",
        "Usage reports and exports",
        "API for usage data access",
        "Self-service analytics"
      ],
      keyMetrics: [
        "Customer adoption > 80%",
        "Support tickets -30%",
        "NPS improvement +10"
      ],
      deliverables: [
        "Customer portal",
        "Usage API",
        "Documentation"
      ]
    },
    {
      phase: "Phase 4",
      name: "Monetization",
      timeline: "6+ months",
      icon: DollarSign,
      color: "orange",
      status: "future",
      objectives: [
        "Usage-based pricing models",
        "Billing integration",
        "Rate cards and limits",
        "Revenue optimization"
      ],
      keyMetrics: [
        "Revenue increase 15%",
        "Billing accuracy 99.99%",
        "New pricing tiers"
      ],
      deliverables: [
        "Pricing engine",
        "Billing integration",
        "Customer contracts"
      ]
    }
  ];

  const getPhaseStatus = (status: string) => {
    switch (status) {
      case 'in-progress':
        return { icon: Clock, color: 'text-orange-400', bg: 'bg-orange-900/20' };
      case 'planned':
        return { icon: Map, color: 'text-blue-400', bg: 'bg-blue-900/20' };
      case 'future':
        return { icon: TrendingUp, color: 'text-gray-400', bg: 'bg-gray-900/20' };
      default:
        return { icon: CheckCircle, color: 'text-blue-400', bg: 'bg-blue-900/20' };
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-blue-400">3-6 Month</span> Roadmap
          </h1>
          <p className="text-xl text-slate-300">
            From foundation to monetization
          </p>
        </div>

        {/* Phase Timeline */}
        <div className="mb-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-slate-700"></div>
            
            {/* Phase Markers */}
            <div className="relative flex justify-between">
              {phases.map((phase, index) => {
                const PhaseIcon = phase.icon;
                const isSelected = selectedPhase === index;
                const statusInfo = getPhaseStatus(phase.status);
                
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedPhase(index)}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-10
                      ${isSelected ? 
                        'bg-blue-600 scale-110 shadow-xl' : 
                        phase.status === 'in-progress' ? 'bg-orange-500' : 'bg-slate-700 hover:bg-slate-600'
                      }
                    `}>
                      <PhaseIcon size={24} className="text-white" />
                    </div>
                    <div className="mt-3 text-center">
                      <div className={`text-sm font-bold ${isSelected ? 'text-blue-400' : 'text-slate-300'}`}>
                        {phase.phase}
                      </div>
                      <div className={`text-xs ${isSelected ? 'text-slate-200' : 'text-slate-500'}`}>
                        {phase.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {phase.timeline}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Phase Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Objectives */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white">Objectives</h3>
            <div className="space-y-3">
              {phases[selectedPhase].objectives.map((objective, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">{objective}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white">Success Metrics</h3>
            <div className="space-y-3">
              {phases[selectedPhase].keyMetrics.map((metric, idx) => (
                <div key={idx} className="p-3 bg-slate-700/50 rounded-lg">
                  <p className="text-blue-400 font-medium">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white">Deliverables</h3>
            <div className="space-y-3">
              {phases[selectedPhase].deliverables.map((deliverable, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-orange-400" />
                  <span className="text-slate-300">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phase Status Summary */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current Focus */}
          <div className="bg-orange-900/20 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <Rocket className="text-orange-400" />
              Current Focus
            </h3>
            <p className="text-orange-300 mb-3">
              Phase 1: Foundation - establishing core infrastructure and proving value with initial services
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Progress</span>
                <span className="text-orange-400 font-bold">35%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>

          {/* Value Timeline */}
          <div className="bg-blue-900/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <TrendingUp className="text-blue-400" />
              Value Delivery
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-300">Internal visibility</span>
                <span className="text-blue-400">6 weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Cost optimization</span>
                <span className="text-blue-400">12 weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Customer value</span>
                <span className="text-blue-400">3 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Revenue impact</span>
                <span className="text-blue-400">6 months</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};