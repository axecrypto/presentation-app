import React, { useState } from 'react';
import { 
  Rocket, FileText, Users, BarChart, Target, 
  CheckCircle, Clock, TrendingUp, AlertCircle
} from 'lucide-react';
import { useInformaticaTheme } from '../../../../../../contexts/InformaticaThemeProvider';
import { 
  InformaticaSlideWrapper, 
  InformaticaHeader, 
  InformaticaCard,
  InformaticaBadge,
  InformaticaIconBox
} from '../../../../components/InformaticaComponents';

export const SlideWeek5 = () => {
  const { theme } = useInformaticaTheme();
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
    <InformaticaSlideWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center">
            <InformaticaBadge color="primary">
              <Rocket size={16} />
              Week 5
            </InformaticaBadge>
          </div>
          <div className="mt-4">
            <InformaticaHeader 
              title="Commitment & Launch"
              subtitle="From insights to action with executive buy-in"
              accentColor="primary"
            />
          </div>
        </div>

        {/* Executive Presentation Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.colors.textPrimary }}>
            <FileText className="mr-2" style={{ color: theme.colors.error }} />
            Executive Presentation
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InformaticaCard>
              <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
                <AlertCircle className="mr-2" style={{ color: theme.colors.primary }} />
                Key Findings
              </h3>
              <div className="space-y-4">
                {executiveSummary.findings.map((finding, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg p-4"
                    style={{
                      backgroundColor: theme.colors.bgTertiary,
                      border: `1px solid ${theme.colors.borderLight}`
                    }}
                  >
                    <p className="font-bold mb-2" style={{ color: theme.colors.error }}>{finding.pain}</p>
                    <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                      <span style={{ color: theme.colors.textMuted }}>Root cause:</span> {finding.root}
                    </p>
                  </div>
                ))}
              </div>
            </InformaticaCard>
            
            <InformaticaCard>
              <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
                <Target className="mr-2" style={{ color: theme.colors.secondary }} />
                Recommendations
              </h3>
              <div className="space-y-3">
                {executiveSummary.recommendations.map((rec, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-lg"
                    style={{
                      backgroundColor: `${theme.colors.secondary}20`,
                      border: `1px solid ${theme.colors.secondary}50`
                    }}
                  >
                    <CheckCircle size={20} style={{ color: theme.colors.secondary }} className="flex-shrink-0 mt-0.5" />
                    <p style={{ color: theme.colors.textPrimary }}>{rec}</p>
                  </div>
                ))}
              </div>
              <div 
                className="mt-4 p-4 rounded-lg"
                style={{
                  backgroundColor: `${theme.colors.secondary}20`,
                  border: `1px solid ${theme.colors.secondary}50`
                }}
              >
                <p className="text-sm" style={{ color: theme.colors.secondary }}>
                  <strong>Impact:</strong> 40-60% improvement in delivery velocity within 90 days
                </p>
              </div>
            </InformaticaCard>
          </div>
        </div>

        {/* Pilot Plans */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.colors.textPrimary }}>
            <Rocket className="mr-2" style={{ color: theme.colors.secondary }} />
            Pilot Implementation Plans
          </h2>
          
          {/* Pilot Selector */}
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            {pilots.map((pilot, index) => (
              <button
                key={index}
                onClick={() => setSelectedPilot(index)}
                className="px-6 py-3 rounded-lg font-bold whitespace-nowrap transition-all duration-300"
                style={{
                  backgroundColor: selectedPilot === index ? theme.colors.secondary : theme.colors.bgSurface,
                  color: selectedPilot === index ? '#FFFFFF' : theme.colors.textSecondary,
                  boxShadow: selectedPilot === index ? '0 10px 20px rgba(0,0,0,0.1)' : 'none',
                  transform: selectedPilot === index ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {pilot.name}
              </button>
            ))}
          </div>
          
          {/* Selected Pilot Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Overview */}
              <InformaticaCard>
                <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>Pilot Overview</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm" style={{ color: theme.colors.textMuted }}>Team</p>
                    <p className="font-bold" style={{ color: theme.colors.textPrimary }}>{pilots[selectedPilot].team}</p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: theme.colors.textMuted }}>Duration</p>
                    <p className="font-bold" style={{ color: theme.colors.textPrimary }}>{pilots[selectedPilot].duration}</p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: theme.colors.textMuted }}>Scope</p>
                    <p className="font-bold" style={{ color: theme.colors.textPrimary }}>{pilots[selectedPilot].scope}</p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: theme.colors.textMuted }}>Primary Metric</p>
                    <p className="font-bold" style={{ color: theme.colors.secondary }}>{pilots[selectedPilot].metrics.primary}</p>
                  </div>
                </div>
              </InformaticaCard>
              
              {/* Milestones */}
              <InformaticaCard>
                <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>Milestones</h3>
                <div className="space-y-3">
                  {pilots[selectedPilot].milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                        style={{
                          backgroundColor: theme.colors.secondary,
                          color: '#FFFFFF'
                        }}
                      >
                        W{milestone.week}
                      </div>
                      <div 
                        className="flex-1 p-3 rounded-lg"
                        style={{
                          backgroundColor: theme.colors.bgTertiary,
                          color: theme.colors.textPrimary
                        }}
                      >
                        <p>{milestone.task}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </InformaticaCard>
            </div>
            
            {/* Ownership */}
            <div className="space-y-6">
              <InformaticaCard>
                <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>Ownership</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm" style={{ color: theme.colors.textMuted }}>Executive Sponsor</p>
                    <p className="font-bold" style={{ color: theme.colors.textPrimary }}>{pilots[selectedPilot].owners.sponsor}</p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: theme.colors.textMuted }}>Pilot Lead</p>
                    <p className="font-bold" style={{ color: theme.colors.textPrimary }}>{pilots[selectedPilot].owners.lead}</p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: theme.colors.textMuted }}>Core Team</p>
                    <ul className="mt-2 space-y-1">
                      {pilots[selectedPilot].owners.team.map((member, idx) => (
                        <li key={idx} className="text-sm" style={{ color: theme.colors.textSecondary }}>• {member}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </InformaticaCard>
              
              <InformaticaCard variant="secondary">
                <h3 className="text-lg font-bold mb-3" style={{ color: theme.colors.textPrimary }}>Success Metrics</h3>
                <div className="space-y-2">
                  {pilots[selectedPilot].metrics.secondary.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <BarChart size={16} style={{ color: theme.colors.secondary }} />
                      <span className="text-sm" style={{ color: theme.colors.textSecondary }}>{metric}</span>
                    </div>
                  ))}
                </div>
              </InformaticaCard>
            </div>
          </div>
        </div>

        {/* Commitment Plan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InformaticaCard variant="secondary">
            <h3 className="text-lg font-bold mb-3 flex items-center" style={{ color: theme.colors.textPrimary }}>
              <Users className="mr-2" style={{ color: theme.colors.secondary }} />
              Leadership Support
            </h3>
            <ul className="space-y-2">
              {commitmentPlan.leadership.map((item, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2" style={{ color: theme.colors.textSecondary }}>
                  <CheckCircle size={14} style={{ color: theme.colors.secondary }} className="mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InformaticaCard>
          
          <InformaticaCard variant="secondary">
            <h3 className="text-lg font-bold mb-3 flex items-center" style={{ color: theme.colors.textPrimary }}>
              <TrendingUp className="mr-2" style={{ color: theme.colors.secondary }} />
              Resources
            </h3>
            <ul className="space-y-2">
              {commitmentPlan.resources.map((item, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2" style={{ color: theme.colors.textSecondary }}>
                  <CheckCircle size={14} style={{ color: theme.colors.secondary }} className="mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InformaticaCard>
          
          <InformaticaCard variant="primary">
            <h3 className="text-lg font-bold mb-3 flex items-center" style={{ color: theme.colors.textPrimary }}>
              <Clock className="mr-2" style={{ color: theme.colors.primary }} />
              Communication
            </h3>
            <ul className="space-y-2">
              {commitmentPlan.communication.map((item, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2" style={{ color: theme.colors.textSecondary }}>
                  <CheckCircle size={14} style={{ color: theme.colors.primary }} className="mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InformaticaCard>
        </div>
      </div>
    </InformaticaSlideWrapper>
  );
};