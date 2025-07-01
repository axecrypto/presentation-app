import React, { useState } from 'react';
import { 
  Microscope, GitBranch, Users, Eye, ChevronDown,
  AlertTriangle, Zap, Target, Activity
} from 'lucide-react';
import { useInformaticaTheme } from '../../../../../../contexts/InformaticaThemeProvider';
import { 
  InformaticaSlideWrapper, 
  InformaticaHeader, 
  InformaticaCard,
  InformaticaBadge,
  InformaticaIconBox
} from '../../../../components/InformaticaComponents';

export const SlideWeek3 = () => {
  const { theme } = useInformaticaTheme();
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
    <InformaticaSlideWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center">
            <InformaticaBadge color="secondary">
              <Microscope size={16} />
              Week 3
            </InformaticaBadge>
          </div>
          <div className="mt-4">
            <InformaticaHeader 
              title="Root Cause Analysis"
              subtitle="Triangulating insights to find the real problems"
              accentColor="secondary"
            />
          </div>
        </div>

        {/* 5 Whys Analysis */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.colors.textPrimary }}>
            <GitBranch className="mr-2" style={{ color: theme.colors.secondary }} />
            5 Whys Deep Dive
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {rootCauses.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedCause(index)}
                className="p-4 rounded-xl border-2 transition-all duration-300 text-left"
                style={{
                  backgroundColor: selectedCause === index ? `${theme.colors.secondary}30` : theme.colors.bgSurface,
                  borderColor: selectedCause === index ? theme.colors.secondary : theme.colors.borderDefault,
                  transform: selectedCause === index ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: selectedCause === index ? '0 10px 20px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold" style={{ color: theme.colors.textPrimary }}>{item.issue}</h3>
                  <span 
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: item.impact === 'Critical' ? theme.colors.error : theme.colors.primary,
                      color: '#FFFFFF'
                    }}
                  >
                    {item.impact}
                  </span>
                </div>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>Category: {item.category}</p>
              </button>
            ))}
          </div>

          {/* 5 Whys Cascade */}
          <InformaticaCard>
            <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
              {rootCauses[selectedCause].issue} - Why Analysis
            </h3>
            <div className="space-y-3">
              {rootCauses[selectedCause].causes.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div 
                    className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: index === 4 ? theme.colors.error : theme.colors.secondary,
                      color: '#FFFFFF'
                    }}
                  >
                    <span className="text-sm font-bold">{item.level}</span>
                  </div>
                  <div className="flex-1">
                    <p style={{ color: theme.colors.textPrimary }}>{item.cause}</p>
                    {index < 4 && (
                      <ChevronDown size={16} style={{ color: theme.colors.secondary }} className="mt-2" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div 
              className="mt-4 p-4 rounded-lg"
              style={{
                backgroundColor: `${theme.colors.error}20`,
                border: `1px solid ${theme.colors.error}50`
              }}
            >
              <p className="text-sm" style={{ color: theme.colors.error }}>
                <strong>Root Cause:</strong> {rootCauses[selectedCause].causes[4].cause}
              </p>
            </div>
          </InformaticaCard>
        </div>

        {/* Fishbone Diagram Toggle */}
        <div className="mb-8">
          <button
            onClick={() => setShowFishbone(!showFishbone)}
            className="w-full rounded-xl p-6 border-2 transition-all duration-300"
            style={{
              backgroundColor: theme.colors.bgSurface,
              borderColor: showFishbone ? theme.colors.secondary : theme.colors.borderDefault,
              color: theme.colors.textPrimary
            }}
          >
            <h2 className="text-2xl font-bold flex items-center justify-center">
              <Activity className="mr-2" style={{ color: theme.colors.secondary }} />
              Fishbone Diagram Analysis
              <ChevronDown size={24} className={`ml-2 transition-transform ${showFishbone ? 'rotate-180' : ''}`} />
            </h2>
          </button>
          
          {showFishbone && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {fishboneCategories.map((category, index) => (
                <InformaticaCard key={index}>
                  <h3 className="text-lg font-bold mb-3 text-center" style={{ color: theme.colors.textPrimary }}>{category.name}</h3>
                  <div className="space-y-2">
                    {category.factors.map((factor, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2 p-2 rounded"
                        style={{
                          backgroundColor: `${theme.colors.primary}20`,
                          color: theme.colors.textSecondary
                        }}
                      >
                        <AlertTriangle size={14} style={{ color: theme.colors.primary }} />
                        <span className="text-sm">{factor}</span>
                      </div>
                    ))}
                  </div>
                </InformaticaCard>
              ))}
            </div>
          )}
        </div>

        {/* Focus Group Validation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <InformaticaCard>
            <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
              <Users className="mr-2" style={{ color: theme.colors.secondary }} />
              Focus Group Validation (6-8 people)
            </h3>
            <div className="space-y-3">
              {focusGroupInsights.map((insight, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: theme.colors.bgTertiary,
                    border: `1px solid ${theme.colors.borderLight}`
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold" style={{ color: theme.colors.textPrimary }}>{insight.theme}</h4>
                    <div className="flex items-center gap-1" style={{ color: theme.colors.secondary }}>
                      <Zap size={14} />
                      <span className="text-sm font-bold">{insight.votes}</span>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: theme.colors.textSecondary }}>{insight.insight}</p>
                </div>
              ))}
            </div>
          </InformaticaCard>

          <InformaticaCard>
            <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
              <Eye className="mr-2" style={{ color: theme.colors.primary }} />
              Observation Insights
            </h3>
            <div className="space-y-4">
              <div 
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: `${theme.colors.primary}20`,
                  border: `1px solid ${theme.colors.primary}50`
                }}
              >
                <h4 className="font-bold mb-2" style={{ color: theme.colors.textPrimary }}>Stand-ups</h4>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                  Dependencies mentioned but not tracked. No cross-team representation.
                </p>
              </div>
              <div 
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: `${theme.colors.primary}20`,
                  border: `1px solid ${theme.colors.primary}50`
                }}
              >
                <h4 className="font-bold mb-2" style={{ color: theme.colors.textPrimary }}>Planning Sessions</h4>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                  Teams plan features without platform input. Assumptions not validated.
                </p>
              </div>
              <div 
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: `${theme.colors.primary}20`,
                  border: `1px solid ${theme.colors.primary}50`
                }}
              >
                <h4 className="font-bold mb-2" style={{ color: theme.colors.textPrimary }}>Retrospectives</h4>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                  Same issues raised repeatedly. Action items lack ownership.
                </p>
              </div>
            </div>
          </InformaticaCard>
        </div>

        {/* Week 3 Deliverables */}
        <div 
          className="rounded-xl p-6"
          style={{
            backgroundColor: theme.colors.bgSurface,
            border: `2px solid ${theme.colors.secondary}50`
          }}
        >
          <h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.textPrimary }}>Week 3 Deliverables</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <InformaticaIconBox color="secondary" size="lg">
                <Target size={32} />
              </InformaticaIconBox>
              <h4 className="font-bold mb-1 mt-3" style={{ color: theme.colors.textPrimary }}>Validated Root Causes</h4>
              <p className="text-sm" style={{ color: theme.colors.textSecondary }}>3-4 core issues confirmed</p>
            </div>
            <div className="text-center">
              <InformaticaIconBox color="secondary" size="lg">
                <Users size={32} />
              </InformaticaIconBox>
              <h4 className="font-bold mb-1 mt-3" style={{ color: theme.colors.textPrimary }}>Team Alignment</h4>
              <p className="text-sm" style={{ color: theme.colors.textSecondary }}>Focus group consensus achieved</p>
            </div>
            <div className="text-center">
              <InformaticaIconBox color="secondary" size="lg">
                <Microscope size={32} />
              </InformaticaIconBox>
              <h4 className="font-bold mb-1 mt-3" style={{ color: theme.colors.textPrimary }}>Deep Understanding</h4>
              <p className="text-sm" style={{ color: theme.colors.textSecondary }}>Systemic issues identified</p>
            </div>
          </div>
        </div>
      </div>
    </InformaticaSlideWrapper>
  );
};