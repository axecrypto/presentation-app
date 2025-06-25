import React from 'react';
import { 
  FileText, Search, Cloud, GitMerge, Monitor, Database, 
  Package, Clock, CheckCircle, Zap, Users, Target
} from 'lucide-react';

export const SlideSummary = () => {
  const deliverables = [
    {
      icon: Search,
      title: "AI Model Discovery",
      description: "Automated matching of business entities to pre-built MDM models",
      highlight: "70% faster setup"
    },
    {
      icon: Cloud,
      title: "IDMC Integration Services",
      description: "Leverage IDMC agents for DQ, ETL, profiling & data integration",
      highlight: "Full platform access"
    },
    {
      icon: GitMerge,
      title: "Match & Merge Logic",
      description: "Intelligent survivorship and matching algorithms",
      highlight: "95% accuracy"
    },
    {
      icon: Monitor,
      title: "User Interfaces",
      description: "Auto-generated screens for data stewards",
      highlight: "Ready to use"
    },
    {
      icon: Database,
      title: "Sample Data",
      description: "Realistic synthetic data for immediate demos",
      highlight: "10K+ records"
    },
    {
      icon: Package,
      title: "Complete Package",
      description: "Export-ready configuration for MDM deployment",
      highlight: "Production ready"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Orange Header Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl font-bold">AI-Powered MDM Configuration</h2>
          <div className="text-sm opacity-90">Informatica MDM</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            What We Deliver in Under 1 Hour
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Complete MDM configuration package powered by AI, ready for immediate deployment and demonstration
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {deliverables.map((item, index) => {
            const ItemIcon = item.icon;
            
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-orange-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <ItemIcon size={24} className="text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-base text-gray-600 mb-2">{item.description}</p>
                    <div className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                      <CheckCircle size={12} />
                      {item.highlight}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Timeline - Simplified */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            7-Step Automated Workflow
          </h2>
          
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
              <span>Input</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
              <span>Discover</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
              <span>Profile</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-orange-500"></div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs">4</div>
              <span>Rules</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">5</div>
              <span>UI</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-orange-500"></div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs">6</div>
              <span>Data</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs">7</div>
              <span>Output</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Complete configuration in under 1 hour</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-orange-50 rounded-2xl p-8 text-center border border-orange-200">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-left">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                From Requirements to Demo-Ready MDM
              </h3>
              <p className="text-lg text-gray-600">
                Traditional approach: 16-24 weeks • Our approach: Under 1 hour
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">99%</div>
                <div className="text-base text-gray-600">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">100%</div>
                <div className="text-base text-gray-600">Automated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">Day 1</div>
                <div className="text-base text-gray-600">Demo Ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>Informatica CoPilot</span>
          </div>
          <div>© Informatica. Proprietary and Confidential.</div>
        </div>
      </div>
    </div>
  );
};