import React, { useState } from 'react';
import { 
  MessageSquare, Users, Brain, Target, Layers, 
  UserCheck, Briefcase, Code, PenTool, ChevronRight
} from 'lucide-react';
import { useInformaticaTheme } from '../../../../../../contexts/InformaticaThemeProvider';
import { 
  InformaticaSlideWrapper, 
  InformaticaHeader, 
  InformaticaCard,
  InformaticaBadge,
  InformaticaIconBox
} from '../../../../components/InformaticaComponents';

export const SlideWeek2 = () => {
  const { theme } = useInformaticaTheme();
  const [selectedRole, setSelectedRole] = useState(0);

  const interviewTargets = [
    {
      role: "Platform PMs",
      icon: Layers,
      count: "2-3",
      focus: [
        "Infrastructure priorities",
        "Resource allocation challenges",
        "Communication bottlenecks"
      ],
      questions: [
        "How do you prioritize platform vs. app requests?",
        "What friction points slow down delivery?",
        "Where do handoffs typically break down?"
      ]
    },
    {
      role: "App PMs",
      icon: Briefcase,
      count: "2-3",
      focus: [
        "Feature delivery blockers",
        "Dependency management",
        "Timeline pressures"
      ],
      questions: [
        "What dependencies cause the most delays?",
        "How clear are platform team commitments?",
        "What would accelerate your delivery?"
      ]
    },
    {
      role: "Tech Leads",
      icon: Code,
      count: "3-4",
      focus: [
        "Technical debt impact",
        "Architecture decisions",
        "Team coordination"
      ],
      questions: [
        "Where do technical and product priorities clash?",
        "How are architecture decisions communicated?",
        "What slows down your team most?"
      ]
    },
    {
      role: "Individual Contributors",
      icon: UserCheck,
      count: "2-3",
      focus: [
        "Day-to-day friction",
        "Process inefficiencies",
        "Tool limitations"
      ],
      questions: [
        "What wastes the most time in your workflow?",
        "How could cross-team collaboration improve?",
        "What context do you often lack?"
      ]
    },
    {
      role: "Design/Stakeholders",
      icon: PenTool,
      count: "1-2",
      focus: [
        "Design system adoption",
        "Feedback loops",
        "Decision making speed"
      ],
      questions: [
        "How well do teams adopt design standards?",
        "Where do design reviews cause delays?",
        "How could decisions be made faster?"
      ]
    }
  ];

  const interviewTechniques = [
    {
      name: "Start Broad",
      description: "Open-ended questions to surface unexpected issues",
      example: "Tell me about your biggest frustration this quarter"
    },
    {
      name: "Dig Deep",
      description: "Follow the 'why' trail to root causes",
      example: "Why does that happen? And why is that the case?"
    },
    {
      name: "Get Specific",
      description: "Ask for concrete examples and stories",
      example: "Can you walk me through the last time this happened?"
    },
    {
      name: "Quantify Impact",
      description: "Understand the real cost of problems",
      example: "How many hours per week does this cost your team?"
    }
  ];

  return (
    <InformaticaSlideWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center">
            <InformaticaBadge color="primary">
              <MessageSquare size={16} />
              Week 2
            </InformaticaBadge>
          </div>
          <div className="mt-4">
            <InformaticaHeader 
              title="Deep Dive Interviews"
              subtitle="Understanding the 'why' behind survey pain points"
              accentColor="primary"
            />
          </div>
        </div>

        {/* Interview Targets */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.colors.textPrimary }}>
            <Users className="mr-2" style={{ color: theme.colors.primary }} />
            Interview Mix: 10-12 Total
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {interviewTargets.map((target, index) => {
              const TargetIcon = target.icon;
              const isSelected = selectedRole === index;
              
              return (
                <div
                  key={index}
                  onClick={() => setSelectedRole(index)}
                  className="p-4 rounded-xl border-2 cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: isSelected ? `${theme.colors.secondary}30` : theme.colors.bgSurface,
                    borderColor: isSelected ? theme.colors.secondary : theme.colors.borderDefault,
                    transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isSelected ? '0 10px 20px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  <div className="text-center">
                    <InformaticaIconBox color={isSelected ? 'secondary' : 'primary'} size="md">
                      <TargetIcon size={24} />
                    </InformaticaIconBox>
                    <h3 className="font-bold mb-1 mt-3" style={{ color: theme.colors.textPrimary }}>{target.role}</h3>
                    <p className="text-2xl font-bold" style={{ color: isSelected ? theme.colors.secondary : theme.colors.primary }}>
                      {target.count}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Role Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InformaticaCard>
              <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
                <Target className="mr-2" style={{ color: theme.colors.primary }} />
                Focus Areas for {interviewTargets[selectedRole].role}
              </h3>
              <div className="space-y-3">
                {interviewTargets[selectedRole].focus.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{
                      backgroundColor: `${theme.colors.secondary}20`,
                      border: `1px solid ${theme.colors.secondary}30`
                    }}
                  >
                    <ChevronRight size={16} style={{ color: theme.colors.secondary }} />
                    <span style={{ color: theme.colors.textPrimary }}>{item}</span>
                  </div>
                ))}
              </div>
            </InformaticaCard>

            <InformaticaCard>
              <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: theme.colors.textPrimary }}>
                <Brain className="mr-2" style={{ color: theme.colors.secondary }} />
                Sample Questions
              </h3>
              <div className="space-y-3">
                {interviewTargets[selectedRole].questions.map((question, index) => (
                  <div 
                    key={index} 
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: theme.colors.bgTertiary,
                      border: `1px solid ${theme.colors.borderLight}`
                    }}
                  >
                    <p className="text-sm" style={{ color: theme.colors.textSecondary }}>{question}</p>
                  </div>
                ))}
              </div>
            </InformaticaCard>
          </div>
        </div>

        {/* Interview Techniques */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.colors.textPrimary }}>
            <Brain className="mr-2" style={{ color: theme.colors.secondary }} />
            Interview Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interviewTechniques.map((technique, index) => (
              <InformaticaCard key={index}>
                <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.textPrimary }}>{technique.name}</h3>
                <p className="text-sm mb-3" style={{ color: theme.colors.textSecondary }}>{technique.description}</p>
                <div 
                  className="rounded-lg p-3"
                  style={{
                    backgroundColor: `${theme.colors.secondary}20`,
                    border: `1px solid ${theme.colors.secondary}30`
                  }}
                >
                  <p className="text-xs font-mono" style={{ color: theme.colors.secondary }}>"{technique.example}"</p>
                </div>
              </InformaticaCard>
            ))}
          </div>
        </div>

        {/* Behavioral Bottlenecks to Explore */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <InformaticaCard variant="error">
            <h3 className="text-lg font-bold mb-3" style={{ color: theme.colors.textPrimary }}>Conflicting Priorities</h3>
            <ul className="space-y-2 text-sm" style={{ color: theme.colors.textSecondary }}>
              <li>• How are trade-offs decided?</li>
              <li>• Who has final say?</li>
              <li>• What gets deprioritized?</li>
            </ul>
          </InformaticaCard>
          <InformaticaCard variant="primary">
            <h3 className="text-lg font-bold mb-3" style={{ color: theme.colors.textPrimary }}>Unclear Ownership</h3>
            <ul className="space-y-2 text-sm" style={{ color: theme.colors.textSecondary }}>
              <li>• Where do things fall through cracks?</li>
              <li>• Who owns cross-team work?</li>
              <li>• How are disputes resolved?</li>
            </ul>
          </InformaticaCard>
          <InformaticaCard variant="secondary">
            <h3 className="text-lg font-bold mb-3" style={{ color: theme.colors.textPrimary }}>Communication Gaps</h3>
            <ul className="space-y-2 text-sm" style={{ color: theme.colors.textSecondary }}>
              <li>• What context is missing?</li>
              <li>• Where do handoffs fail?</li>
              <li>• How is progress tracked?</li>
            </ul>
          </InformaticaCard>
        </div>

        {/* Week 2 Output */}
        <div 
          className="rounded-xl p-6"
          style={{
            backgroundColor: theme.colors.bgSurface,
            border: `2px solid ${theme.colors.primary}50`
          }}
        >
          <h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.textPrimary }}>Week 2 Output</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.secondary }}>10-12</div>
              <p className="text-sm" style={{ color: theme.colors.textSecondary }}>Interviews Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.secondary }}>5-7</div>
              <p className="text-sm" style={{ color: theme.colors.textSecondary }}>Core Issues Identified</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.secondary }}>3-4</div>
              <p className="text-sm" style={{ color: theme.colors.textSecondary }}>Root Cause Candidates</p>
            </div>
          </div>
        </div>
      </div>
    </InformaticaSlideWrapper>
  );
};