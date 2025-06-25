import React, { useState } from 'react';
import { 
  Target, Calendar, Users, Code, Palette,
  CheckCircle, Clock, ArrowRight, FileText
} from 'lucide-react';

export const SlideNext4Weeks = () => {
  const [selectedWeek, setSelectedWeek] = useState(0);

  const weeklyPlan = [
    {
      week: "Week 1",
      focus: "Technical Design Finalization",
      icon: Code,
      deliverables: [
        "Architecture decision: ELK vs Micrometer",
        "Data retention policy (30/60/90 days)",
        "Meter hierarchy definition",
        "Storage and query patterns"
      ],
      owners: ["Platform Architect", "Tech Leads"],
      milestone: "Technical blueprint approved"
    },
    {
      week: "Week 2",
      focus: "Service Prioritization",
      icon: Target,
      deliverables: [
        "Complete service inventory (30 services)",
        "Business impact scoring",
        "Integration complexity assessment",
        "Prioritized rollout schedule"
      ],
      owners: ["Product Manager", "Engineering Leads"],
      milestone: "Top 10 services identified"
    },
    {
      week: "Week 3",
      focus: "UX & Dashboard Design",
      icon: Palette,
      deliverables: [
        "Internal dashboard wireframes",
        "Key metrics visualization",
        "User journey mapping",
        "Feedback from stakeholders"
      ],
      owners: ["UX Lead", "Product Designer"],
      milestone: "Dashboard prototype ready"
    },
    {
      week: "Week 4",
      focus: "Alignment & Planning",
      icon: Users,
      deliverables: [
        "Cross-team sync meetings",
        "Resource allocation plan",
        "JIRA epic breakdown",
        "Executive readout deck"
      ],
      owners: ["Program Manager", "Leadership"],
      milestone: "Go-forward plan approved"
    }
  ];

  const criticalTasks = [
    {
      task: "1. Finalize Technical Design Scope",
      details: [
        "Confirm architecture: Where data is stored, how meters are registered",
        "Agree on granularity, retention, and query capabilities",
        "Define hierarchy of meters (service → API → operation)"
      ],
      impact: "Unblocks all implementation work"
    },
    {
      task: "2. Create Prioritized Service Onboarding Plan",
      details: [
        "Finalize list of 30 services/APIs for metering",
        "Define integration tasks and ownership by team",
        "Track in JIRA with EPIC breakdown"
      ],
      impact: "Ensures systematic rollout"
    },
    {
      task: "3. UX Wireframe & Feedback Loop",
      details: [
        "Internal UX prototype for dashboard",
        "Schedule review with PMs and Eng leads",
        "Iterate based on feedback"
      ],
      impact: "Validates user experience early"
    },
    {
      task: "4. Platform Capability Review",
      details: [
        "Lead sync with platform architects",
        "Align on tech stack and extensions",
        "Identify reusable components"
      ],
      impact: "Avoids duplicate efforts"
    },
    {
      task: "5. Executive Readout",
      details: [
        "Create update deck: vision → progress → needs",
        "Reaffirm project urgency and resources",
        "Secure commitment for next phase"
      ],
      impact: "Ensures continued sponsorship"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">
            Next <span className="text-orange-500">4-6 Weeks</span>
          </h1>
          <p className="text-xl text-slate-300">
            Critical path to platform-wide metering capability
          </p>
        </div>

        {/* Weekly Timeline */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            {weeklyPlan.map((week, index) => {
              const WeekIcon = week.icon;
              const isActive = selectedWeek === index;
              
              return (
                <React.Fragment key={index}>
                  <div
                    className="relative flex flex-col items-center cursor-pointer group z-10"
                    onClick={() => setSelectedWeek(index)}
                  >
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                      ${isActive ? 
                        'bg-orange-500 scale-110 shadow-lg' : 
                        'bg-slate-700 hover:bg-slate-600'
                      }
                    `}>
                      <WeekIcon size={24} className="text-white" />
                    </div>
                    <div className="mt-2 text-center">
                      <div className={`text-sm font-bold ${isActive ? 'text-orange-400' : 'text-slate-300'}`}>
                        {week.week}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-slate-200' : 'text-slate-500'} max-w-[100px]`}>
                        {week.focus}
                      </div>
                    </div>
                  </div>
                  {index < weeklyPlan.length - 1 && (
                    <div className="flex-1 h-0.5 bg-slate-700 relative top-[-24px]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Selected Week Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {weeklyPlan[selectedWeek].week}: {weeklyPlan[selectedWeek].focus}
            </h2>
            <div className="space-y-3 mb-6">
              {weeklyPlan[selectedWeek].deliverables.map((deliverable, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">{deliverable}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-700">
              <div>
                <p className="text-sm text-slate-400">Owners</p>
                <p className="text-white font-bold">{weeklyPlan[selectedWeek].owners.join(", ")}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400">Milestone</p>
                <p className="text-blue-400 font-bold">{weeklyPlan[selectedWeek].milestone}</p>
              </div>
            </div>
          </div>

          {/* Critical Path Visualization */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white">Dependencies & Risks</h3>
            <div className="space-y-4">
              <div className="p-4 bg-red-900/20 rounded-lg border border-red-500/30">
                <h4 className="font-bold text-red-400 mb-2">Critical Dependency</h4>
                <p className="text-sm text-slate-300">
                  Technical design must be finalized before service onboarding can begin at scale
                </p>
              </div>
              <div className="p-4 bg-orange-900/20 rounded-lg border border-orange-500/30">
                <h4 className="font-bold text-orange-400 mb-2">Resource Risk</h4>
                <p className="text-sm text-slate-300">
                  Engineering teams need dedicated capacity - competing with Q1 feature delivery
                </p>
              </div>
              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                <h4 className="font-bold text-blue-400 mb-2">Success Factor</h4>
                <p className="text-sm text-slate-300">
                  Executive sponsorship critical for cross-team prioritization
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Critical Tasks */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
          <h2 className="text-2xl font-bold mb-6 text-white">5 Critical Tasks</h2>
          <div className="space-y-4">
            {criticalTasks.map((item, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-white mb-2">{item.task}</h3>
                <ul className="space-y-1 mb-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-blue-400 font-medium">
                  Impact: {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};