import React, { useState } from 'react';
import { 
  MessageSquare, Users, Brain, Target, Layers, 
  UserCheck, Briefcase, Code, PenTool, ChevronRight
} from 'lucide-react';

export const SlideWeek2 = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <MessageSquare size={16} />
            Week 2
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Deep Dive <span className="text-blue-400">Interviews</span>
          </h1>
          <p className="text-xl text-slate-300">
            Understanding the "why" behind survey pain points
          </p>
        </div>

        {/* Interview Targets */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Users className="mr-2 text-blue-400" />
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
                  className={`
                    p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                    ${isSelected ? 
                      'bg-blue-600 border-blue-400 scale-105 shadow-xl' : 
                      'bg-slate-800/50 border-slate-600 hover:border-blue-500'
                    }
                  `}
                >
                  <div className="text-center">
                    <div className={`
                      mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-3
                      ${isSelected ? 'bg-blue-700' : 'bg-slate-700'}
                    `}>
                      <TargetIcon size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-1">{target.role}</h3>
                    <p className={`text-2xl font-bold ${isSelected ? 'text-blue-200' : 'text-blue-400'}`}>
                      {target.count}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Role Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Target className="mr-2 text-orange-400" />
                Focus Areas for {interviewTargets[selectedRole].role}
              </h3>
              <div className="space-y-3">
                {interviewTargets[selectedRole].focus.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                    <ChevronRight size={16} className="text-blue-400" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Brain className="mr-2 text-blue-400" />
                Sample Questions
              </h3>
              <div className="space-y-3">
                {interviewTargets[selectedRole].questions.map((question, index) => (
                  <div key={index} className="p-3 bg-slate-700/50 rounded-lg border border-slate-600">
                    <p className="text-sm text-slate-300">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interview Techniques */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Brain className="mr-2 text-blue-400" />
            Interview Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interviewTechniques.map((technique, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-2">{technique.name}</h3>
                <p className="text-sm text-slate-300 mb-3">{technique.description}</p>
                <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600">
                  <p className="text-xs text-blue-300 font-mono">"{technique.example}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Behavioral Bottlenecks to Explore */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-900/20 backdrop-blur-lg rounded-xl p-6 border border-red-500/30">
            <h3 className="text-lg font-bold text-white mb-3">Conflicting Priorities</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• How are trade-offs decided?</li>
              <li>• Who has final say?</li>
              <li>• What gets deprioritized?</li>
            </ul>
          </div>
          <div className="bg-orange-900/20 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30">
            <h3 className="text-lg font-bold text-white mb-3">Unclear Ownership</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Where do things fall through cracks?</li>
              <li>• Who owns cross-team work?</li>
              <li>• How are disputes resolved?</li>
            </ul>
          </div>
          <div className="bg-blue-900/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
            <h3 className="text-lg font-bold text-white mb-3">Communication Gaps</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• What context is missing?</li>
              <li>• Where do handoffs fail?</li>
              <li>• How is progress tracked?</li>
            </ul>
          </div>
        </div>

        {/* Week 2 Output */}
        <div className="bg-gradient-to-r from-blue-600/20 to-orange-600/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="text-xl font-bold text-white mb-3">Week 2 Output</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">10-12</div>
              <p className="text-sm text-slate-300">Interviews Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">5-7</div>
              <p className="text-sm text-slate-300">Core Issues Identified</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">3-4</div>
              <p className="text-sm text-slate-300">Root Cause Candidates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};