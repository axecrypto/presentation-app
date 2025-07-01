import React, { useState } from 'react';
import { 
  Calendar, Search, MessageSquare, Microscope, Palette, Rocket,
  ArrowRight, Clock, Users, Target, Lightbulb
} from 'lucide-react';
import { useInformaticaTheme } from '../../../../../../contexts/InformaticaThemeProvider';
import { 
  InformaticaSlideWrapper, 
  InformaticaHeader, 
  InformaticaCard,
  InformaticaBadge,
  InformaticaIconBox,
  InformaticaProgress
} from '../../../../components/InformaticaComponents';

export const SlideTimeline = () => {
  const { theme } = useInformaticaTheme();
  const [activeWeek, setActiveWeek] = useState(0);

  const weeks = [
    {
      week: 1,
      title: "Discovery & Survey",
      icon: Search,
      color: "secondary" as const,
      duration: "5 days",
      activities: [
        "Define problem scope",
        "Design & send electronic survey",
        "Capture pain points across teams",
        "Analyze quantitative & qualitative data"
      ],
      deliverables: [
        "Problem scope document",
        "Survey results analysis",
        "Top themes identification"
      ],
      participants: "All PMs, Engineers, Designers"
    },
    {
      week: 2,
      title: "Deep Dive Interviews",
      icon: MessageSquare,
      color: "primary" as const,
      duration: "5 days",
      activities: [
        "Conduct 10-12 targeted interviews",
        "Mix of platform & app PMs",
        "Include tech leads & ICs",
        "Explore behavioral bottlenecks"
      ],
      deliverables: [
        "Interview transcripts",
        "Synthesized pain points",
        "Candidate root causes"
      ],
      participants: "Selected stakeholders"
    },
    {
      week: 3,
      title: "Root Cause Analysis",
      icon: Microscope,
      color: "secondary" as const,
      duration: "5 days",
      activities: [
        "Apply 5 Whys technique",
        "Create Fishbone diagrams",
        "Run focus group validation",
        "Optional: Observe rituals"
      ],
      deliverables: [
        "Validated root causes",
        "Focus group insights",
        "Process observation notes"
      ],
      participants: "6-8 person focus group"
    },
    {
      week: 4,
      title: "Design Workshop",
      icon: Palette,
      color: "primary" as const,
      duration: "5 days",
      activities: [
        "Map current vs ideal flow",
        "Facilitate cross-functional workshop",
        "Co-design improvements",
        "Prioritize pilot actions"
      ],
      deliverables: [
        "Visual 'To-Be' process",
        "Improvement backlog",
        "Pilot action plan"
      ],
      participants: "Cross-functional teams"
    },
    {
      week: 5,
      title: "Commitment & Pilot",
      icon: Rocket,
      color: "error" as const,
      duration: "5 days",
      activities: [
        "Create executive presentation",
        "Define pilot team & scope",
        "Establish metrics/KPIs",
        "Secure leadership buy-in"
      ],
      deliverables: [
        "Executive presentation",
        "Pilot commitment plan",
        "Success metrics framework"
      ],
      participants: "Leadership & pilot team"
    }
  ];

  const getColors = (color: string) => {
    switch(color) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'error':
        return theme.colors.error;
      default:
        return theme.colors.primary;
    }
  };

  return (
    <InformaticaSlideWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <InformaticaHeader 
          title="5-Week Sprint Timeline"
          subtitle="From discovery to pilot implementation in focused sprints"
          accentColor="primary"
        />

        {/* Timeline */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            {weeks.map((week, index) => {
              const WeekIcon = week.icon;
              const isActive = activeWeek === index;
              const color = getColors(week.color);
              
              return (
                <React.Fragment key={week.week}>
                  <div
                    className="relative flex flex-col items-center cursor-pointer group z-10"
                    onClick={() => setActiveWeek(index)}
                  >
                    <div 
                      className={`
                        w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300
                        ${isActive ? 'scale-110 shadow-lg' : 'hover:scale-105'}
                      `}
                      style={{
                        backgroundColor: isActive ? color : `${color}30`,
                        border: `2px solid ${color}`
                      }}
                    >
                      <WeekIcon size={32} style={{ color: isActive ? '#FFFFFF' : color }} />
                    </div>
                    <div className="mt-3 text-center">
                      <div style={{ color: isActive ? theme.colors.textPrimary : theme.colors.textSecondary }} className="text-sm font-bold">
                        Week {week.week}
                      </div>
                      <div style={{ color: isActive ? theme.colors.textSecondary : theme.colors.textMuted }} className="text-xs">
                        {week.title}
                      </div>
                    </div>
                  </div>
                  {index < weeks.length - 1 && (
                    <div 
                      className="flex-1 h-1 relative top-[-30px]"
                      style={{ backgroundColor: theme.colors.borderLight }}
                    >
                      <div 
                        className="h-full transition-all duration-500"
                        style={{ 
                          width: index < activeWeek ? '100%' : '0%',
                          backgroundColor: theme.colors.primary
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Week Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activities */}
          <InformaticaCard>
            <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
              <Target className="mr-2" size={20} style={{ color: theme.colors.secondary }} />
              Activities
            </h3>
            <div className="space-y-2">
              {weeks[activeWeek].activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div 
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: theme.colors.secondary }}
                  />
                  <p className="text-sm" style={{ color: theme.colors.textSecondary }}>{activity}</p>
                </div>
              ))}
            </div>
          </InformaticaCard>

          {/* Deliverables */}
          <InformaticaCard>
            <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
              <Lightbulb className="mr-2" size={20} style={{ color: theme.colors.primary }} />
              Deliverables
            </h3>
            <div className="space-y-3">
              {weeks[activeWeek].deliverables.map((deliverable, index) => (
                <div 
                  key={index} 
                  className="rounded-lg p-3"
                  style={{
                    backgroundColor: `${theme.colors.secondary}20`,
                    border: `1px solid ${theme.colors.secondary}50`
                  }}
                >
                  <p className="text-sm" style={{ color: theme.colors.textPrimary }}>{deliverable}</p>
                </div>
              ))}
            </div>
          </InformaticaCard>

          {/* Participants & Duration */}
          <InformaticaCard>
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2 flex items-center" style={{ color: theme.colors.textPrimary }}>
                <Clock className="mr-2" size={20} style={{ color: theme.colors.primary }} />
                Duration
              </h3>
              <p className="text-2xl font-bold" style={{ color: theme.colors.primary }}>
                {weeks[activeWeek].duration}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 flex items-center" style={{ color: theme.colors.textPrimary }}>
                <Users className="mr-2" size={20} style={{ color: theme.colors.primary }} />
                Participants
              </h3>
              <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                {weeks[activeWeek].participants}
              </p>
            </div>
          </InformaticaCard>
        </div>

        {/* Progress Indicator */}
        <div 
          className="mt-8 rounded-xl p-6"
          style={{
            backgroundColor: theme.colors.bgSurface,
            border: `1px solid ${theme.colors.borderDefault}`
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-1" style={{ color: theme.colors.textPrimary }}>
                Total Duration
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>5 weeks • 25 business days</p>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-bold mb-1" style={{ color: theme.colors.textPrimary }}>
                Expected Outcome
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Validated process with pilot ready to launch
              </p>
            </div>
          </div>
          <div className="mt-4">
            <InformaticaProgress current={activeWeek + 1} total={5} />
          </div>
        </div>
      </div>
    </InformaticaSlideWrapper>
  );
};