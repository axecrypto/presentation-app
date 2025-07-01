import React, { useState } from 'react';
import { 
  Search, FileText, BarChart, Users, Target, TrendingUp,
  CheckCircle, AlertTriangle, Clock, MessageSquare
} from 'lucide-react';
import { useInformaticaTheme } from '../../../../../../contexts/InformaticaThemeProvider';
import { 
  InformaticaSlideWrapper, 
  InformaticaHeader, 
  InformaticaCard,
  InformaticaBadge,
  InformaticaIconBox
} from '../../../../components/InformaticaComponents';

export const SlideWeek1 = () => {
  const { theme } = useInformaticaTheme();
  const [activeSection, setActiveSection] = useState(0);

  const surveyQuestions = [
    {
      category: "Process Efficiency",
      icon: Clock,
      questions: [
        "How often do dependencies block your work?",
        "Average time waiting for platform team responses?",
        "How clear are handoff processes?"
      ]
    },
    {
      category: "Communication",
      icon: MessageSquare,
      questions: [
        "How effective is cross-team communication?",
        "Are priorities aligned across teams?",
        "How well are decisions documented?"
      ]
    },
    {
      category: "Role Clarity",
      icon: Users,
      questions: [
        "Is ownership clearly defined?",
        "Do you understand other teams' responsibilities?",
        "Are escalation paths clear?"
      ]
    }
  ];

  const tools = [
    {
      name: "Google Forms",
      purpose: "Survey creation & distribution",
      features: ["Easy setup", "Real-time responses", "Built-in analytics"]
    },
    {
      name: "Typeform",
      purpose: "Enhanced user experience",
      features: ["Conversational UI", "Logic jumps", "Completion rates"]
    },
    {
      name: "Analysis Tools",
      purpose: "Data synthesis",
      features: ["Google Sheets tagging", "Looppanel for themes", "Sentiment analysis"]
    }
  ];

  const expectedOutcomes = [
    {
      metric: "Response Rate",
      target: ">80%",
      why: "Broad participation ensures representative data"
    },
    {
      metric: "Pain Points",
      target: "Top 5-7",
      why: "Focus on most impactful issues"
    },
    {
      metric: "Themes",
      target: "3-4 major",
      why: "Identify systemic patterns"
    }
  ];

  return (
    <InformaticaSlideWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center">
            <InformaticaBadge color="primary">
              <Search size={16} className="mr-2" />
              Week 1
            </InformaticaBadge>
          </div>
          <div className="mt-4">
            <InformaticaHeader 
              title="Discovery & Survey"
              subtitle="Quantifying pain points across Product, Engineering, and Design"
              accentColor="primary"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Objectives */}
          <div className="lg:col-span-2">
            <InformaticaCard>
              <h2 className="text-2xl font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
                <Target className="mr-2" style={{ color: theme.colors.primary }} />
                Week 1 Objectives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: `${theme.colors.secondary}20`,
                    border: `1px solid ${theme.colors.secondary}50`
                  }}
                >
                  <FileText style={{ color: theme.colors.secondary }} className="mb-2" size={24} />
                  <h3 className="font-bold mb-2" style={{ color: theme.colors.textPrimary }}>Define Problem Scope</h3>
                  <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                    Clear boundaries on what we're solving: misalignment, dependencies, delivery delays
                  </p>
                </div>
                <div 
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: `${theme.colors.secondary}20`,
                    border: `1px solid ${theme.colors.secondary}50`
                  }}
                >
                  <Search style={{ color: theme.colors.secondary }} className="mb-2" size={24} />
                  <h3 className="font-bold mb-2" style={{ color: theme.colors.textPrimary }}>Design & Deploy Survey</h3>
                  <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                    Targeted questions to capture quantitative and qualitative pain points
                  </p>
                </div>
                <div 
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: `${theme.colors.secondary}20`,
                    border: `1px solid ${theme.colors.secondary}50`
                  }}
                >
                  <BarChart style={{ color: theme.colors.primary }} className="mb-2" size={24} />
                  <h3 className="font-bold mb-2" style={{ color: theme.colors.textPrimary }}>Analyze Responses</h3>
                  <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                    Statistical analysis + thematic coding to identify patterns
                  </p>
                </div>
                <div 
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: `${theme.colors.secondary}20`,
                    border: `1px solid ${theme.colors.secondary}50`
                  }}
                >
                  <TrendingUp style={{ color: theme.colors.error }} className="mb-2" size={24} />
                  <h3 className="font-bold mb-2" style={{ color: theme.colors.textPrimary }}>Extract Top Themes</h3>
                  <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                    Prioritized list of issues with supporting data
                  </p>
                </div>
              </div>
            </InformaticaCard>

            {/* Survey Design */}
            <div className="mt-6">
              <InformaticaCard>
                <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
                  <MessageSquare className="mr-2" style={{ color: theme.colors.secondary }} />
                  Survey Question Categories
                </h2>
                <div className="space-y-4">
                  {surveyQuestions.map((category, index) => {
                    const CategoryIcon = category.icon;
                    const isActive = activeSection === index;
                    
                    return (
                      <div
                        key={index}
                        onClick={() => setActiveSection(index)}
                        className="p-4 rounded-lg cursor-pointer transition-all duration-300"
                        style={{
                          backgroundColor: isActive ? `${theme.colors.secondary}30` : `${theme.colors.bgSurface}`,
                          border: `2px solid ${isActive ? theme.colors.secondary : theme.colors.borderDefault}`,
                          boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <InformaticaIconBox color="secondary" size="sm">
                            <CategoryIcon size={20} />
                          </InformaticaIconBox>
                          <div className="flex-1">
                            <h3 className="font-bold mb-2" style={{ color: theme.colors.textPrimary }}>{category.category}</h3>
                            <ul className="space-y-1">
                              {category.questions.map((q, idx) => (
                                <li key={idx} className="text-sm flex items-start gap-2" style={{ color: theme.colors.textSecondary }}>
                                  <span style={{ color: theme.colors.secondary }}>•</span>
                                  <span>{q}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </InformaticaCard>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Tools */}
            <InformaticaCard>
              <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>Tools & Platforms</h3>
              <div className="space-y-4">
                {tools.map((tool, index) => (
                  <div key={index} className="pl-4" style={{ borderLeft: `2px solid ${theme.colors.secondary}` }}>
                    <h4 className="font-bold" style={{ color: theme.colors.textPrimary }}>{tool.name}</h4>
                    <p className="text-xs mb-2" style={{ color: theme.colors.textMuted }}>{tool.purpose}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: `${theme.colors.secondary}20`,
                            color: theme.colors.textSecondary
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </InformaticaCard>

            {/* Expected Outcomes */}
            <InformaticaCard>
              <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>Success Metrics</h3>
              <div className="space-y-4">
                {expectedOutcomes.map((outcome, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg p-4"
                    style={{
                      backgroundColor: `${theme.colors.primary}20`,
                      border: `1px solid ${theme.colors.primary}50`
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold" style={{ color: theme.colors.textPrimary }}>{outcome.metric}</span>
                      <span className="font-bold" style={{ color: theme.colors.secondary }}>{outcome.target}</span>
                    </div>
                    <p className="text-xs" style={{ color: theme.colors.textMuted }}>{outcome.why}</p>
                  </div>
                ))}
              </div>
            </InformaticaCard>

            {/* Timeline */}
            <InformaticaCard variant="secondary">
              <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
                <Clock className="mr-2" size={20} style={{ color: theme.colors.secondary }} />
                5-Day Sprint
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: theme.colors.textSecondary }}>Mon-Tue:</span>
                  <span style={{ color: theme.colors.textPrimary }}>Scope & Design</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: theme.colors.textSecondary }}>Wednesday:</span>
                  <span style={{ color: theme.colors.textPrimary }}>Deploy Survey</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: theme.colors.textSecondary }}>Thu-Fri:</span>
                  <span style={{ color: theme.colors.textPrimary }}>Analyze & Report</span>
                </div>
              </div>
            </InformaticaCard>
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className="rounded-xl p-6"
          style={{
            backgroundColor: theme.colors.bgSurface,
            border: `1px solid ${theme.colors.borderDefault}`
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ color: theme.colors.textPrimary }}>Week 1 Deliverables</h3>
              <p style={{ color: theme.colors.textSecondary }}>Problem scope definition • Survey results • Top themes analysis</p>
            </div>
            <CheckCircle size={32} style={{ color: theme.colors.secondary }} />
          </div>
        </div>
      </div>
    </InformaticaSlideWrapper>
  );
};