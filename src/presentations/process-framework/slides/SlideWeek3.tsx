import React, { useState } from 'react';
import { 
  Microscope, GitBranch, Users, Eye, ChevronDown,
  AlertTriangle, Zap, Target, Activity
} from 'lucide-react';

export const SlideWeek3 = () => {
  const [selectedCause, setSelectedCause] = useState(0);
  const [showFishbone, setShowFishbone] = useState(false);

  const rootCauses = [
    {
      issue: "Delivery Delays",
      causes: [
        { level: 1, cause: "Dependencies not identified early" },
        { level: 2, cause: "No standard dependency mapping process" },
        { level: 3, cause: "Teams work in isolation during planning" },
        { level: 4, cause: "No shared planning tools or rituals" },
        { level: 5, cause: "Organizational silos reinforced by metrics" }
      ],
      category: "Process",
      impact: "High"
    },
    {
      issue: "Conflicting Priorities",
      causes: [
        { level: 1, cause: "Platform and app teams have different OKRs" },
        { level: 2, cause: "No unified prioritization framework" },
        { level: 3, cause: "Leadership doesn't align on trade-offs" },
        { level: 4, cause: "Lack of transparent decision-making" },
        { level: 5, cause: "Incentive structures reward local optimization" }
      ],
      category: "People",
      impact: "Critical"
    },
    {
      issue: "Communication Breakdown",
      causes: [
        { level: 1, cause: "Context lost in handoffs" },
        { level: 2, cause: "No standard documentation requirements" },
        { level: 3, cause: "Multiple tools and channels used" },
        { level: 4, cause: "Async communication not optimized" },
        { level: 5, cause: "Cultural preference for meetings over documentation" }
      ],
      category: "Technology",
      impact: "High"
    }
  ];

  const fishboneCategories = [
    {
      name: "People",
      factors: ["Skills gaps", "Role confusion", "Competing incentives", "Leadership misalignment"]
    },
    {
      name: "Process",
      factors: ["No standard workflows", "Missing checkpoints", "Unclear escalation", "Poor handoffs"]
    },
    {
      name: "Technology",
      factors: ["Tool proliferation", "Integration issues", "No single source of truth", "Manual processes"]
    },
    {
      name: "Environment",
      factors: ["Remote collaboration", "Time zone differences", "Meeting overload", "Context switching"]
    }
  ];

  const focusGroupInsights = [
    {
      theme: "Planning Disconnect",
      insight: "Teams plan in isolation, dependencies discovered too late",
      votes: 7
    },
    {
      theme: "Ownership Ambiguity",
      insight: "Cross-functional work falls through cracks",
      votes: 6
    },
    {
      theme: "Metric Misalignment",
      insight: "Team success metrics drive competing behaviors",
      votes: 5
    },
    {
      theme: "Communication Overhead",
      insight: "Too many meetings, not enough documentation",
      votes: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Microscope size={16} />
            Week 3
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Root Cause <span className="text-blue-400">Analysis</span>
          </h1>
          <p className="text-xl text-slate-300">
            Triangulating insights to find the real problems
          </p>
        </div>

        {/* 5 Whys Analysis */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <GitBranch className="mr-2 text-blue-400" />
            5 Whys Deep Dive
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {rootCauses.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedCause(index)}
                className={`
                  p-4 rounded-xl border-2 transition-all duration-300 text-left
                  ${selectedCause === index ? 
                    'bg-blue-600 border-blue-400 scale-105 shadow-xl' : 
                    'bg-slate-800/50 border-slate-600 hover:border-blue-500'
                  }
                `}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-white">{item.issue}</h3>
                  <span className={`
                    text-xs px-2 py-1 rounded-full
                    ${item.impact === 'Critical' ? 'bg-red-500' : 'bg-orange-500'}
                  `}>
                    {item.impact}
                  </span>
                </div>
                <p className="text-sm text-slate-300">Category: {item.category}</p>
              </button>
            ))}
          </div>

          {/* 5 Whys Cascade */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-bold mb-4 text-white">
              {rootCauses[selectedCause].issue} - Why Analysis
            </h3>
            <div className="space-y-3">
              {rootCauses[selectedCause].causes.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`
                    flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0
                    ${index === 4 ? 'bg-red-600' : 'bg-blue-600'}
                  `}>
                    <span className="text-sm font-bold">{item.level}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white">{item.cause}</p>
                    {index < 4 && (
                      <ChevronDown size={16} className="text-blue-400 mt-2" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-red-900/20 rounded-lg border border-red-500/30">
              <p className="text-sm text-red-300">
                <strong>Root Cause:</strong> {rootCauses[selectedCause].causes[4].cause}
              </p>
            </div>
          </div>
        </div>

        {/* Fishbone Diagram Toggle */}
        <div className="mb-8">
          <button
            onClick={() => setShowFishbone(!showFishbone)}
            className="w-full bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold flex items-center justify-center">
              <Activity className="mr-2 text-blue-400" />
              Fishbone Diagram Analysis
              <ChevronDown size={24} className={`ml-2 transition-transform ${showFishbone ? 'rotate-180' : ''}`} />
            </h2>
          </button>
          
          {showFishbone && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {fishboneCategories.map((category, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-3 text-center">{category.name}</h3>
                  <div className="space-y-2">
                    {category.factors.map((factor, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-slate-700/50 rounded">
                        <AlertTriangle size={14} className="text-orange-400" />
                        <span className="text-sm text-slate-300">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Focus Group Validation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Users className="mr-2 text-blue-400" />
              Focus Group Validation (6-8 people)
            </h3>
            <div className="space-y-3">
              {focusGroupInsights.map((insight, index) => (
                <div key={index} className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-white">{insight.theme}</h4>
                    <div className="flex items-center gap-1 text-blue-400">
                      <Zap size={14} />
                      <span className="text-sm font-bold">{insight.votes}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300">{insight.insight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Eye className="mr-2 text-orange-400" />
              Observation Insights
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-orange-900/20 rounded-lg border border-orange-500/30">
                <h4 className="font-bold text-white mb-2">Stand-ups</h4>
                <p className="text-sm text-slate-300">
                  Dependencies mentioned but not tracked. No cross-team representation.
                </p>
              </div>
              <div className="p-4 bg-orange-900/20 rounded-lg border border-orange-500/30">
                <h4 className="font-bold text-white mb-2">Planning Sessions</h4>
                <p className="text-sm text-slate-300">
                  Teams plan features without platform input. Assumptions not validated.
                </p>
              </div>
              <div className="p-4 bg-orange-900/20 rounded-lg border border-orange-500/30">
                <h4 className="font-bold text-white mb-2">Retrospectives</h4>
                <p className="text-sm text-slate-300">
                  Same issues raised repeatedly. Action items lack ownership.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Week 3 Deliverables */}
        <div className="bg-gradient-to-r from-blue-600/20 to-orange-600/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="text-xl font-bold text-white mb-3">Week 3 Deliverables</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Target className="mx-auto mb-2 text-blue-400" size={32} />
              <h4 className="font-bold text-white mb-1">Validated Root Causes</h4>
              <p className="text-sm text-slate-300">3-4 core issues confirmed</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-2 text-blue-400" size={32} />
              <h4 className="font-bold text-white mb-1">Team Alignment</h4>
              <p className="text-sm text-slate-300">Focus group consensus achieved</p>
            </div>
            <div className="text-center">
              <Microscope className="mx-auto mb-2 text-blue-400" size={32} />
              <h4 className="font-bold text-white mb-1">Deep Understanding</h4>
              <p className="text-sm text-slate-300">Systemic issues identified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};