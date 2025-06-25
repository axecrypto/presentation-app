import React, { useState } from 'react';
import { 
  Search, FileText, BarChart, Users, Target, TrendingUp,
  CheckCircle, AlertTriangle, Clock, MessageSquare
} from 'lucide-react';

export const SlideWeek1 = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Search size={16} />
            Week 1
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Discovery & <span className="text-blue-400">Survey</span>
          </h1>
          <p className="text-xl text-slate-300">
            Quantifying pain points across Product, Engineering, and Design
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Objectives */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 mb-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="mr-2 text-orange-400" />
                Week 1 Objectives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <FileText className="text-blue-400 mb-2" size={24} />
                  <h3 className="font-bold text-white mb-2">Define Problem Scope</h3>
                  <p className="text-sm text-slate-300">
                    Clear boundaries on what we're solving: misalignment, dependencies, delivery delays
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <Search className="text-blue-400 mb-2" size={24} />
                  <h3 className="font-bold text-white mb-2">Design & Deploy Survey</h3>
                  <p className="text-sm text-slate-300">
                    Targeted questions to capture quantitative and qualitative pain points
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <BarChart className="text-orange-400 mb-2" size={24} />
                  <h3 className="font-bold text-white mb-2">Analyze Responses</h3>
                  <p className="text-sm text-slate-300">
                    Statistical analysis + thematic coding to identify patterns
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <TrendingUp className="text-red-400 mb-2" size={24} />
                  <h3 className="font-bold text-white mb-2">Extract Top Themes</h3>
                  <p className="text-sm text-slate-300">
                    Prioritized list of issues with supporting data
                  </p>
                </div>
              </div>
            </div>

            {/* Survey Design */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <MessageSquare className="mr-2 text-blue-400" />
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
                      className={`
                        p-4 rounded-lg border cursor-pointer transition-all duration-300
                        ${isActive ? 
                          'bg-slate-700 border-blue-500 shadow-lg' : 
                          'bg-slate-800/50 border-slate-600 hover:border-slate-500'
                        }
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`
                          p-2 rounded-lg transition-colors duration-300
                          ${isActive ? 'bg-blue-600' : 'bg-slate-700'}
                        `}>
                          <CategoryIcon size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-2">{category.category}</h3>
                          <ul className="space-y-1">
                            {category.questions.map((q, idx) => (
                              <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                                <span className="text-blue-400 mt-1">•</span>
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
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Tools */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-white">Tools & Platforms</h3>
              <div className="space-y-4">
                {tools.map((tool, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-bold text-white">{tool.name}</h4>
                    <p className="text-xs text-slate-400 mb-2">{tool.purpose}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcomes */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-white">Success Metrics</h3>
              <div className="space-y-4">
                {expectedOutcomes.map((outcome, index) => (
                  <div key={index} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-white">{outcome.metric}</span>
                      <span className="text-blue-400 font-bold">{outcome.target}</span>
                    </div>
                    <p className="text-xs text-slate-400">{outcome.why}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/50">
              <h3 className="text-lg font-bold mb-4 text-white flex items-center">
                <Clock className="mr-2" size={20} />
                5-Day Sprint
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Mon-Tue:</span>
                  <span className="text-white">Scope & Design</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Wednesday:</span>
                  <span className="text-white">Deploy Survey</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Thu-Fri:</span>
                  <span className="text-white">Analyze & Report</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600/20 to-orange-600/20 rounded-xl p-6 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Week 1 Deliverables</h3>
              <p className="text-slate-300">Problem scope definition • Survey results • Top themes analysis</p>
            </div>
            <CheckCircle size={32} className="text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};