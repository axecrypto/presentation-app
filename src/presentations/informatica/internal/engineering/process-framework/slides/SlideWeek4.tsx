import React, { useState } from 'react';
import { 
  Palette, GitMerge, Users, ArrowRight, Layers,
  CheckCircle, Map, Lightbulb, Play, Settings
} from 'lucide-react';

export const SlideWeek4 = () => {
  const [activeImprovement, setActiveImprovement] = useState(0);

  const currentVsFuture = [
    {
      aspect: "Planning",
      current: {
        state: "Siloed team planning",
        issues: ["Dependencies discovered late", "No cross-team visibility"]
      },
      future: {
        state: "Joint planning sessions",
        benefits: ["Early dependency mapping", "Shared roadmap view"]
      }
    },
    {
      aspect: "Communication",
      current: {
        state: "Ad-hoc updates",
        issues: ["Context lost", "Inconsistent channels"]
      },
      future: {
        state: "Structured check-ins",
        benefits: ["Regular sync points", "Documented decisions"]
      }
    },
    {
      aspect: "Ownership",
      current: {
        state: "Unclear accountability",
        issues: ["Work falls through cracks", "Finger pointing"]
      },
      future: {
        state: "RACI matrix",
        benefits: ["Clear responsibilities", "Explicit handoffs"]
      }
    }
  ];

  const pilotImprovements = [
    {
      title: "Dependency Resolution Playbook",
      icon: GitMerge,
      description: "Standardized process for identifying and managing dependencies",
      components: [
        "Dependency mapping template",
        "Early warning system",
        "Escalation framework",
        "Regular review cadence"
      ],
      metrics: ["Time to identify dependencies", "Blocked work reduction", "On-time delivery rate"]
    },
    {
      title: "Cross-Team Planning Ritual",
      icon: Users,
      description: "Weekly alignment session between platform and app teams",
      components: [
        "Structured agenda template",
        "Rotating facilitator role",
        "Decision log requirement",
        "Action item tracking"
      ],
      metrics: ["Meeting effectiveness score", "Decision velocity", "Follow-through rate"]
    },
    {
      title: "Unified Prioritization Framework",
      icon: Layers,
      description: "Shared criteria for making trade-off decisions",
      components: [
        "Value vs effort matrix",
        "Strategic alignment scoring",
        "Transparent ranking system",
        "Quarterly calibration"
      ],
      metrics: ["Priority alignment score", "Trade-off decision time", "Stakeholder satisfaction"]
    }
  ];

  const workshopActivities = [
    {
      time: "9:00-10:00",
      activity: "Current State Mapping",
      output: "Pain point visualization"
    },
    {
      time: "10:00-11:30",
      activity: "Future State Design",
      output: "'To-Be' process flows"
    },
    {
      time: "11:30-12:00",
      activity: "Gap Analysis",
      output: "Change requirements"
    },
    {
      time: "1:00-2:30",
      activity: "Solution Brainstorm",
      output: "Improvement ideas"
    },
    {
      time: "2:30-3:30",
      activity: "Prioritization",
      output: "Pilot shortlist"
    },
    {
      time: "3:30-4:00",
      activity: "Commitment",
      output: "Next steps & owners"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-accent-orange text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Palette size={16} />
            Week 4
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Design <span className="text-accent-orange">Workshop</span>
          </h1>
          <p className="text-xl text-gray-300">
            Co-creating the future state with cross-functional teams
          </p>
        </div>

        {/* Current vs Future State */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Map className="mr-2 text-accent-orange" />
            Current vs. Future State Mapping
          </h2>
          
          <div className="space-y-6">
            {currentVsFuture.map((item, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">{item.aspect}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Current State */}
                  <div className="bg-red-500 bg-opacity-20 rounded-lg p-4 border border-red-500 border-opacity-30">
                    <h4 className="font-bold text-red-400 mb-3">Current State</h4>
                    <p className="text-white mb-3">{item.current.state}</p>
                    <ul className="space-y-2">
                      {item.current.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-red-400 mt-0.5">✗</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight size={32} className="text-accent-orange" />
                  </div>
                  
                  {/* Future State */}
                  <div className="bg-accent-blue bg-opacity-20 rounded-lg p-4 border border-accent-blue border-opacity-30 md:col-start-2">
                    <h4 className="font-bold text-accent-blue mb-3">Future State</h4>
                    <p className="text-white mb-3">{item.future.state}</p>
                    <ul className="space-y-2">
                      {item.future.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle size={16} className="text-accent-blue mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilot Improvements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Lightbulb className="mr-2 text-accent-orange" />
            Prioritized Pilot Improvements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {pilotImprovements.map((improvement, index) => {
              const ImprovementIcon = improvement.icon;
              const isActive = activeImprovement === index;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveImprovement(index)}
                  className={`
                    p-4 rounded-xl border-2 transition-all duration-300 text-left
                    ${isActive ? 
                      'bg-accent-orange border-accent-orange scale-105 shadow-xl' : 
                      'bg-gray-800/50 border-gray-600 hover:border-accent-orange'
                    }
                  `}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`
                      p-2 rounded-lg ${isActive ? 'bg-accent-orange' : 'bg-gray-700'}
                    `}>
                      <ImprovementIcon size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-white flex-1">{improvement.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{improvement.description}</p>
                </button>
              );
            })}
          </div>
          
          {/* Selected Improvement Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold mb-4 text-white">Key Components</h3>
              <div className="space-y-2">
                {pilotImprovements[activeImprovement].components.map((component, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <Settings size={16} className="text-accent-orange" />
                    <span className="text-white">{component}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold mb-4 text-white">Success Metrics</h3>
              <div className="space-y-2">
                {pilotImprovements[activeImprovement].metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <Play size={16} className="text-accent-blue" />
                    <span className="text-white">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Agenda */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Users className="mr-2 text-accent-blue" />
              Workshop Agenda
            </h3>
            <div className="space-y-3">
              {workshopActivities.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-3 bg-gray-700/50 rounded-lg">
                  <span className="text-accent-orange font-mono text-sm whitespace-nowrap">{item.time}</span>
                  <div className="flex-1">
                    <p className="font-bold text-white">{item.activity}</p>
                    <p className="text-xs text-slate-400">{item.output}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-accent-orange bg-opacity-20 backdrop-blur-lg rounded-xl p-6 border border-accent-orange border-opacity-30">
            <h3 className="text-xl font-bold mb-4 text-white">Workshop Principles</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-accent-orange mb-1">Co-creation</h4>
                <p className="text-sm text-gray-300">Solutions designed BY the teams, not FOR the teams</p>
              </div>
              <div>
                <h4 className="font-bold text-accent-orange mb-1">Bias to Action</h4>
                <p className="text-sm text-gray-300">Focus on what we can pilot immediately</p>
              </div>
              <div>
                <h4 className="font-bold text-accent-orange mb-1">Measurable Impact</h4>
                <p className="text-sm text-gray-300">Every improvement has clear success criteria</p>
              </div>
              <div>
                <h4 className="font-bold text-accent-orange mb-1">Commitment</h4>
                <p className="text-sm text-gray-300">Leave with owners and timelines, not just ideas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};