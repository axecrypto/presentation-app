import React, { useState } from 'react';
import { 
  Rocket, FileText, Users, BarChart, Target, 
  CheckCircle, Clock, TrendingUp, AlertCircle
} from 'lucide-react';

export const SlideWeek5 = () => {
  const [selectedPilot, setSelectedPilot] = useState(0);

  const executiveSummary = {
    findings: [
      {
        pain: "60% of delays due to late dependency discovery",
        root: "Teams plan in isolation without shared visibility"
      },
      {
        pain: "45% report unclear ownership on cross-team work",
        root: "No RACI matrix or explicit handoff process"
      },
      {
        pain: "3.5 avg meetings to make one decision",
        root: "Lack of decision-making framework"
      }
    ],
    recommendations: [
      "Implement weekly cross-team planning rituals",
      "Deploy dependency tracking system",
      "Establish clear RACI for all workflows"
    ]
  };

  const pilots = [
    {
      name: "Dependency Tracker MVP",
      team: "Platform + Shopping Cart Team",
      duration: "4 weeks",
      scope: "Q2 feature rollout",
      metrics: {
        primary: "Reduce blocked work by 50%",
        secondary: ["Dependency identification time", "On-time delivery rate"]
      },
      owners: {
        sponsor: "VP Engineering",
        lead: "Platform PM",
        team: ["2 engineers", "1 designer", "2 PMs"]
      },
      milestones: [
        { week: 1, task: "Tool setup & training" },
        { week: 2, task: "First planning session" },
        { week: 3, task: "Process refinement" },
        { week: 4, task: "Metrics review" }
      ]
    },
    {
      name: "Cross-Team Planning Ritual",
      team: "All Product Teams",
      duration: "6 weeks",
      scope: "Weekly 1-hour sessions",
      metrics: {
        primary: "Improve planning efficiency by 40%",
        secondary: ["Decision velocity", "Stakeholder NPS"]
      },
      owners: {
        sponsor: "CPO",
        lead: "Process Excellence Lead",
        team: ["All PMs", "Tech leads"]
      },
      milestones: [
        { week: 1, task: "Facilitator training" },
        { week: 2, task: "Template rollout" },
        { week: 4, task: "Mid-point review" },
        { week: 6, task: "Scale decision" }
      ]
    },
    {
      name: "RACI Implementation",
      team: "Platform + 2 App Teams",
      duration: "3 weeks",
      scope: "Core workflows only",
      metrics: {
        primary: "Reduce ownership disputes by 75%",
        secondary: ["Handoff clarity score", "Escalation frequency"]
      },
      owners: {
        sponsor: "COO",
        lead: "Program Manager",
        team: ["Team leads", "Sr engineers"]
      },
      milestones: [
        { week: 1, task: "RACI workshop" },
        { week: 2, task: "Documentation" },
        { week: 3, task: "Training & adoption" }
      ]
    }
  ];

  const commitmentPlan = {
    leadership: [
      "Executive sponsor assigned to each pilot",
      "Weekly check-ins with leadership",
      "Public commitment in all-hands"
    ],
    resources: [
      "20% time allocation for pilot participants",
      "Budget for tooling if needed",
      "External facilitator for workshops"
    ],
    communication: [
      "Weekly pilot updates in Slack",
      "Bi-weekly showcase demos",
      "Success stories shared broadly"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Rocket size={16} />
            Week 5
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Commitment & <span className="text-red-400">Launch</span>
          </h1>
          <p className="text-xl text-slate-300">
            From insights to action with executive buy-in
          </p>
        </div>

        {/* Executive Presentation Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FileText className="mr-2 text-red-400" />
            Executive Presentation
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <AlertCircle className="mr-2 text-orange-400" />
                Key Findings
              </h3>
              <div className="space-y-4">
                {executiveSummary.findings.map((finding, index) => (
                  <div key={index} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <p className="text-red-400 font-bold mb-2">{finding.pain}</p>
                    <p className="text-sm text-slate-300">
                      <span className="text-slate-500">Root cause:</span> {finding.root}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Target className="mr-2 text-blue-400" />
                Recommendations
              </h3>
              <div className="space-y-3">
                {executiveSummary.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                    <CheckCircle size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white">{rec}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                <p className="text-sm text-blue-300">
                  <strong>Impact:</strong> 40-60% improvement in delivery velocity within 90 days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pilot Plans */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Rocket className="mr-2 text-blue-400" />
            Pilot Implementation Plans
          </h2>
          
          {/* Pilot Selector */}
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            {pilots.map((pilot, index) => (
              <button
                key={index}
                onClick={() => setSelectedPilot(index)}
                className={`
                  px-6 py-3 rounded-lg font-bold whitespace-nowrap transition-all duration-300
                  ${selectedPilot === index ? 
                    'bg-blue-600 text-white shadow-lg scale-105' : 
                    'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }
                `}
              >
                {pilot.name}
              </button>
            ))}
          </div>
          
          {/* Selected Pilot Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Overview */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold mb-4 text-white">Pilot Overview</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Team</p>
                    <p className="font-bold text-white">{pilots[selectedPilot].team}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Duration</p>
                    <p className="font-bold text-white">{pilots[selectedPilot].duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Scope</p>
                    <p className="font-bold text-white">{pilots[selectedPilot].scope}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Primary Metric</p>
                    <p className="font-bold text-blue-400">{pilots[selectedPilot].metrics.primary}</p>
                  </div>
                </div>
              </div>
              
              {/* Milestones */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold mb-4 text-white">Milestones</h3>
                <div className="space-y-3">
                  {pilots[selectedPilot].milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                        W{milestone.week}
                      </div>
                      <div className="flex-1 p-3 bg-slate-700/50 rounded-lg">
                        <p className="text-white">{milestone.task}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Ownership */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold mb-4 text-white">Ownership</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-400">Executive Sponsor</p>
                    <p className="font-bold text-white">{pilots[selectedPilot].owners.sponsor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Pilot Lead</p>
                    <p className="font-bold text-white">{pilots[selectedPilot].owners.lead}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Core Team</p>
                    <ul className="mt-2 space-y-1">
                      {pilots[selectedPilot].owners.team.map((member, idx) => (
                        <li key={idx} className="text-sm text-slate-300">• {member}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-900/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-lg font-bold mb-3 text-white">Success Metrics</h3>
                <div className="space-y-2">
                  {pilots[selectedPilot].metrics.secondary.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <BarChart size={16} className="text-blue-400" />
                      <span className="text-sm text-slate-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-900/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <Users className="mr-2 text-blue-400" />
              Leadership Support
            </h3>
            <ul className="space-y-2">
              {commitmentPlan.leadership.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                  <CheckCircle size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-900/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <TrendingUp className="mr-2 text-blue-400" />
              Resources
            </h3>
            <ul className="space-y-2">
              {commitmentPlan.resources.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                  <CheckCircle size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-orange-900/20 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <Clock className="mr-2 text-orange-400" />
              Communication
            </h3>
            <ul className="space-y-2">
              {commitmentPlan.communication.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                  <CheckCircle size={14} className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};