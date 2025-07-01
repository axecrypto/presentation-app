import React from 'react';
import { 
  TrendingDown, GitBranch, UserX, Zap,
  CheckCircle,
  AlertCircle, Target
} from 'lucide-react';
import { 
  InformaticaSlideWrapper, 
  InformaticaCard,
  InformaticaBadge,
  InformaticaIconBox 
} from '../../../../components/InformaticaComponents';
import { useInformaticaTheme } from '../../../../../../contexts/InformaticaThemeProvider';

export const SlideExecutiveSummary = () => {
  const { theme } = useInformaticaTheme();
  
  const researchAreas = [
    {
      icon: TrendingDown,
      title: "Delivery & Execution Health",
      question: "Where is process friction killing our velocity?",
      insight: "Quantify delays, rework, and blocked work"
    },
    {
      icon: GitBranch,
      title: "Organizational Alignment",
      question: "Are teams aligned or working at cross-purposes?",
      insight: "Map dependency bottlenecks and coordination gaps"
    },
    {
      icon: UserX,
      title: "Talent Retention & Growth",
      question: "Are we enabling or burning out our best people?",
      insight: "Measure engagement, growth paths, and flight risk"
    },
    {
      icon: Zap,
      title: "Innovation Capacity",
      question: "Strategic work or just firefighting?",
      insight: "Assess time on innovation vs. maintenance"
    }
  ];
  
  return (
    <InformaticaSlideWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-5xl font-bold mb-3" style={{ color: theme.colors.textPrimary }}>
            We're Not <span style={{ color: theme.colors.primary }}>Boiling the Ocean</span>
          </h1>
          <p className="text-xl" style={{ color: theme.colors.textSecondary }}>
            Focused 5-week sprint to diagnose root causes, align stakeholders, and deliver actionable recommendations.
          </p>
        </div>

        {/* What We're Hearing */}
        <div 
          className="mb-6 p-4 rounded-lg"
          style={{ 
            backgroundColor: theme.colors.bgSurface,
            border: `1px solid ${theme.colors.borderDefault}`
          }}
        >
          <h3 className="font-bold mb-2 flex items-center" style={{ color: theme.colors.textPrimary }}>
            <AlertCircle size={18} className="mr-2" style={{ color: theme.colors.primary }} />
            What we're hearing on the ground:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <p className="text-sm italic" style={{ color: theme.colors.textSecondary }}>
              "We're still waiting on them to unblock us."
            </p>
            <p className="text-sm italic" style={{ color: theme.colors.textSecondary }}>
              "Let's move it to next sprint — again."
            </p>
            <p className="text-sm italic" style={{ color: theme.colors.textSecondary }}>
              "They don't listen anyway."
            </p>
            <p className="text-sm italic" style={{ color: theme.colors.textMuted }}>
              (Silence during planning)
            </p>
          </div>
        </div>

        {/* Four Research Areas */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: theme.colors.textPrimary }}>
            Four Areas We'll Diagnose
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchAreas.map((area, index) => {
              const AreaIcon = area.icon;
              return (
                <InformaticaCard key={index} variant="default">
                  <div className="flex items-start gap-3">
                    <InformaticaIconBox color="secondary" size="sm">
                      <AreaIcon size={20} />
                    </InformaticaIconBox>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1" style={{ color: theme.colors.textPrimary }}>
                        {area.title}
                      </h3>
                      <p className="text-sm mb-2 font-medium" style={{ color: theme.colors.textSecondary }}>
                        {area.question}
                      </p>
                      <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                        → {area.insight}
                      </p>
                    </div>
                  </div>
                </InformaticaCard>
              );
            })}
          </div>
        </div>

        {/* 5-Week Approach */}
        <InformaticaCard>
          <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
            Our Data-Driven Approach
          </h3>
          <div className="grid grid-cols-5 gap-3">
            <div 
              className="text-center p-3 rounded-lg"
              style={{ 
                backgroundColor: theme.colors.bgPrimary,
                border: `1px solid ${theme.colors.borderLight}`
              }}
            >
              <InformaticaBadge color="secondary" size="md">Week 1</InformaticaBadge>
              <p className="text-sm mt-2 font-medium" style={{ color: theme.colors.textPrimary }}>Survey</p>
              <p className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>Quantify pain</p>
            </div>
            <div 
              className="text-center p-3 rounded-lg"
              style={{ 
                backgroundColor: theme.colors.bgPrimary,
                border: `1px solid ${theme.colors.borderLight}`
              }}
            >
              <InformaticaBadge color="secondary" size="md">Week 2</InformaticaBadge>
              <p className="text-sm mt-2 font-medium" style={{ color: theme.colors.textPrimary }}>Interviews</p>
              <p className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>Deep dive</p>
            </div>
            <div 
              className="text-center p-3 rounded-lg"
              style={{ 
                backgroundColor: theme.colors.bgPrimary,
                border: `1px solid ${theme.colors.borderLight}`
              }}
            >
              <InformaticaBadge color="secondary" size="md">Week 3</InformaticaBadge>
              <p className="text-sm mt-2 font-medium" style={{ color: theme.colors.textPrimary }}>Root Cause</p>
              <p className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>Analysis</p>
            </div>
            <div 
              className="text-center p-3 rounded-lg"
              style={{ 
                backgroundColor: theme.colors.bgPrimary,
                border: `1px solid ${theme.colors.borderLight}`
              }}
            >
              <InformaticaBadge color="secondary" size="md">Week 4</InformaticaBadge>
              <p className="text-sm mt-2 font-medium" style={{ color: theme.colors.textPrimary }}>Co-Design</p>
              <p className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>Workshop</p>
            </div>
            <div 
              className="text-center p-3 rounded-lg"
              style={{ 
                backgroundColor: `${theme.colors.primary}10`,
                border: `1px solid ${theme.colors.primary}30`
              }}
            >
              <InformaticaBadge color="primary" size="md">Week 5</InformaticaBadge>
              <p className="text-sm mt-2 font-medium" style={{ color: theme.colors.textPrimary }}>Executive</p>
              <p className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>Readout</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
              <strong style={{ color: theme.colors.textPrimary }}>Deliverable:</strong> Actionable recommendations based on data
            </p>
          </div>
        </InformaticaCard>
      </div>
    </InformaticaSlideWrapper>
  );
};