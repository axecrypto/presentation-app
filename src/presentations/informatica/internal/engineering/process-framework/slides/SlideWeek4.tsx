import React, { useState } from 'react';
import { 
  Palette, GitMerge, Users, ArrowRight, Layers,
  CheckCircle, Map, Lightbulb, Play, Settings
} from 'lucide-react';
import { useInformaticaTheme } from '../../../../../../contexts/InformaticaThemeProvider';
import { 
  InformaticaSlideWrapper, 
  InformaticaHeader, 
  InformaticaCard,
  InformaticaBadge,
  InformaticaIconBox
} from '../../../../components/InformaticaComponents';

export const SlideWeek4 = () => {
  const { theme } = useInformaticaTheme();
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
    <InformaticaSlideWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center">
            <InformaticaBadge color="primary">
              <Palette size={16} />
              Week 4
            </InformaticaBadge>
          </div>
          <div className="mt-4">
            <InformaticaHeader 
              title="Design Workshop"
              subtitle="Co-creating the future state with cross-functional teams"
              accentColor="primary"
            />
          </div>
        </div>

        {/* Current vs Future State */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.colors.textPrimary }}>
            <Map className="mr-2" style={{ color: theme.colors.primary }} />
            Current vs. Future State Mapping
          </h2>
          
          <div className="space-y-6">
            {currentVsFuture.map((item, index) => (
              <InformaticaCard key={index}>
                <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>{item.aspect}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Current State */}
                  <div 
                    className="rounded-lg p-4"
                    style={{
                      backgroundColor: `${theme.colors.error}20`,
                      border: `1px solid ${theme.colors.error}50`
                    }}
                  >
                    <h4 className="font-bold mb-3" style={{ color: theme.colors.error }}>Current State</h4>
                    <p className="mb-3" style={{ color: theme.colors.textPrimary }}>{item.current.state}</p>
                    <ul className="space-y-2">
                      {item.current.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: theme.colors.textSecondary }}>
                          <span style={{ color: theme.colors.error }} className="mt-0.5">✗</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight size={32} style={{ color: theme.colors.primary }} />
                  </div>
                  
                  {/* Future State */}
                  <div 
                    className="rounded-lg p-4 md:col-start-2"
                    style={{
                      backgroundColor: `${theme.colors.secondary}20`,
                      border: `1px solid ${theme.colors.secondary}50`
                    }}
                  >
                    <h4 className="font-bold mb-3" style={{ color: theme.colors.secondary }}>Future State</h4>
                    <p className="mb-3" style={{ color: theme.colors.textPrimary }}>{item.future.state}</p>
                    <ul className="space-y-2">
                      {item.future.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: theme.colors.textSecondary }}>
                          <CheckCircle size={16} style={{ color: theme.colors.secondary }} className="mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </InformaticaCard>
            ))}
          </div>
        </div>

        {/* Pilot Improvements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.colors.textPrimary }}>
            <Lightbulb className="mr-2" style={{ color: theme.colors.primary }} />
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
                  className="p-4 rounded-xl border-2 transition-all duration-300 text-left"
                  style={{
                    backgroundColor: isActive ? `${theme.colors.primary}30` : theme.colors.bgSurface,
                    borderColor: isActive ? theme.colors.primary : theme.colors.borderDefault,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isActive ? '0 10px 20px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <InformaticaIconBox color={isActive ? 'primary' : 'secondary'} size="sm">
                      <ImprovementIcon size={20} />
                    </InformaticaIconBox>
                    <h3 className="font-bold flex-1" style={{ color: theme.colors.textPrimary }}>{improvement.title}</h3>
                  </div>
                  <p className="text-sm" style={{ color: theme.colors.textSecondary }}>{improvement.description}</p>
                </button>
              );
            })}
          </div>
          
          {/* Selected Improvement Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InformaticaCard>
              <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>Key Components</h3>
              <div className="space-y-2">
                {pilotImprovements[activeImprovement].components.map((component, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{
                      backgroundColor: theme.colors.bgTertiary,
                      color: theme.colors.textPrimary
                    }}
                  >
                    <Settings size={16} style={{ color: theme.colors.primary }} />
                    <span>{component}</span>
                  </div>
                ))}
              </div>
            </InformaticaCard>
            
            <InformaticaCard>
              <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>Success Metrics</h3>
              <div className="space-y-2">
                {pilotImprovements[activeImprovement].metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{
                      backgroundColor: theme.colors.bgTertiary,
                      color: theme.colors.textPrimary
                    }}
                  >
                    <Play size={16} style={{ color: theme.colors.secondary }} />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </InformaticaCard>
          </div>
        </div>

        {/* Workshop Agenda */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InformaticaCard>
            <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
              <Users className="mr-2" style={{ color: theme.colors.secondary }} />
              Workshop Agenda
            </h3>
            <div className="space-y-3">
              {workshopActivities.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-3 rounded-lg"
                  style={{
                    backgroundColor: theme.colors.bgTertiary
                  }}
                >
                  <span className="font-mono text-sm whitespace-nowrap" style={{ color: theme.colors.primary }}>{item.time}</span>
                  <div className="flex-1">
                    <p className="font-bold" style={{ color: theme.colors.textPrimary }}>{item.activity}</p>
                    <p className="text-xs" style={{ color: theme.colors.textMuted }}>{item.output}</p>
                  </div>
                </div>
              ))}
            </div>
          </InformaticaCard>
          
          <InformaticaCard variant="primary">
            <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>Workshop Principles</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-1" style={{ color: theme.colors.primary }}>Co-creation</h4>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>Solutions designed BY the teams, not FOR the teams</p>
              </div>
              <div>
                <h4 className="font-bold mb-1" style={{ color: theme.colors.primary }}>Bias to Action</h4>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>Focus on what we can pilot immediately</p>
              </div>
              <div>
                <h4 className="font-bold mb-1" style={{ color: theme.colors.primary }}>Measurable Impact</h4>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>Every improvement has clear success criteria</p>
              </div>
              <div>
                <h4 className="font-bold mb-1" style={{ color: theme.colors.primary }}>Commitment</h4>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>Leave with owners and timelines, not just ideas</p>
              </div>
            </div>
          </InformaticaCard>
        </div>
      </div>
    </InformaticaSlideWrapper>
  );
};