import React from 'react';
import { 
  AlertTriangle, Target, Lightbulb, Rocket, TrendingUp,
  Users, Clock, CheckCircle
} from 'lucide-react';

export const SlideExecutiveSummary = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Misalignment",
      description: "Teams working in silos with conflicting priorities"
    },
    {
      icon: Clock,
      title: "Inefficiency",
      description: "Dependency friction causing delivery delays"
    },
    {
      icon: Users,
      title: "Confusion",
      description: "Unclear ownership and accountability"
    }
  ];

  const approach = [
    {
      week: "Week 1",
      title: "Discovery & Survey",
      focus: "Quantify pain points across teams"
    },
    {
      week: "Week 2",
      title: "Deep Dive Interviews",
      focus: "Understand the 'why' behind issues"
    },
    {
      week: "Week 3",
      title: "Root Cause Analysis",
      focus: "Validate core problems collaboratively"
    },
    {
      week: "Week 4",
      title: "Design Workshop",
      focus: "Co-create the solution"
    },
    {
      week: "Week 5",
      title: "Commitment & Pilot",
      focus: "Launch with metrics"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl font-bold">Executive Summary</h2>
          <div className="text-sm opacity-90">Validated Process Framework</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Core Message */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            We're Not Boiling the Ocean
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We're triangulating what's broken, aligning teams on why, co-designing a fix, 
            and piloting change with metrics – all in 5 weeks.
          </p>
        </div>

        {/* The Problem */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <AlertTriangle className="mr-2 text-red-500" size={28} />
            The Problem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((problem, index) => {
              const ProblemIcon = problem.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <ProblemIcon size={24} className="text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{problem.title}</h3>
                      <p className="text-gray-600">{problem.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Approach */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Target className="mr-2 text-blue-500" size={28} />
            The Approach: 5-Week Sprint
          </h2>
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="space-y-4">
              {approach.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="w-20 text-center">
                    <div className="text-sm font-bold text-blue-600">{item.week}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.focus}</p>
                  </div>
                  <CheckCircle size={20} className="text-blue-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <Lightbulb className="text-blue-600 mb-3" size={32} />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Clear Insights</h3>
            <p className="text-gray-600">Validated root causes backed by data</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <Rocket className="text-blue-600 mb-3" size={32} />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Actionable Plan</h3>
            <p className="text-gray-600">Co-designed solution with team buy-in</p>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <TrendingUp className="text-orange-600 mb-3" size={32} />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Measurable Impact</h3>
            <p className="text-gray-600">Pilot with clear KPIs and ownership</p>
          </div>
        </div>
      </div>
    </div>
  );
};