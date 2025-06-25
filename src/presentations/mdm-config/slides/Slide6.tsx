import React, { useState } from 'react';
import { Settings, Database, Monitor, Package, CheckCircle2, Download, Play, Eye, Zap, Clock, FileText, Code2, Users } from 'lucide-react';

interface DemoScenario {
  name: string;
  description: string;
  screens: string[];
  duration: string;
}

export const Slide6 = () => {
  const [activeOutput, setActiveOutput] = useState(0);
  const [selectedDemo, setSelectedDemo] = useState<DemoScenario | null>(null);

  const outputs = [
    {
      id: 1,
      title: "Auto-Configured MDM Environment",
      description: "Fully configured IDMC environment ready for use",
      icon: Settings,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      deliverables: [
        "Data model implementation",
        "Business rules configuration", 
        "Workflow definitions",
        "Security & access controls",
        "Integration endpoints"
      ]
    },
    {
      id: 2,
      title: "Sample Data Loaded",
      description: "Realistic test data for immediate demos",
      icon: Database,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      deliverables: [
        "10K+ synthetic customer records",
        "Product catalog data",
        "Reference data tables",
        "Hierarchical relationships",
        "Realistic data quality issues"
      ]
    },
    {
      id: 3,
      title: "UI Screens for Stewards",
      description: "Ready-to-use data steward interfaces",
      icon: Monitor,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      deliverables: [
        "Search & browse interfaces",
        "Record update forms",
        "Data quality dashboards",
        "Merge & split workflows",
        "Approval processes"
      ]
    },
    {
      id: 4,
      title: "Config Package",
      description: "Deployment-ready configuration bundle",
      icon: Package,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      deliverables: [
        "Environment export files",
        "Deployment scripts",
        "Configuration documentation",
        "Test data generation scripts",
        "Migration guidelines"
      ]
    }
  ];

  const demoScenarios: DemoScenario[] = [
    {
      name: "Customer Search & Update",
      description: "Search for customers, view profiles, and update information",
      screens: ["Search Interface", "Customer Profile", "Edit Form"],
      duration: "3 min"
    },
    {
      name: "Duplicate Resolution",
      description: "Identify potential duplicates and merge records",
      screens: ["Duplicate Dashboard", "Comparison View", "Merge Workflow"],
      duration: "5 min"
    },
    {
      name: "Data Quality Review",
      description: "Review data quality issues and apply corrections",
      screens: ["Quality Dashboard", "Issue Details", "Correction Forms"],
      duration: "4 min"
    },
    {
      name: "Hierarchy Management",
      description: "Manage organizational and product hierarchies",
      screens: ["Hierarchy Viewer", "Node Editor", "Relationship Map"],
      duration: "3 min"
    }
  ];

  const configStats = {
    totalFiles: 47,
    codeLines: 12500,
    configurations: 156,
    testRecords: 10000,
    setupTime: "< 1 hour"
  };

  const handleOutputClick = (index: number) => {
    setActiveOutput(index);
    setSelectedDemo(null);
  };

  const handleDemoClick = (demo: DemoScenario) => {
    setSelectedDemo(demo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-orange-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
            Deliverables Within the Hour
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Complete, demo-ready MDM environment with all configurations and test data
          </p>
        </div>

        {/* Time Indicator */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-full px-8 py-3 flex items-center space-x-3">
            <Clock size={24} className="text-white" />
            <span className="text-white font-bold text-lg">Setup Time: {configStats.setupTime}</span>
            <Zap size={20} className="text-orange-300" />
          </div>
        </div>

        {/* Output Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {outputs.map((output, index) => {
            const OutputIcon = output.icon;
            const isActive = activeOutput === index;
            
            return (
              <div
                key={output.id}
                onClick={() => handleOutputClick(index)}
                className={`
                  relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 transform
                  ${isActive ? 
                    `${output.bgColor} border-blue-500 scale-105 shadow-xl shadow-blue-500/20` : 
                    'bg-slate-800/50 border-slate-600 hover:border-slate-500 hover:scale-102'
                  }
                `}
              >
                <div className="text-center">
                  <div className={`
                    mx-auto mb-4 p-4 rounded-xl transition-all duration-300
                    ${isActive ? 
                      `bg-gradient-to-r ${output.color} text-white shadow-lg` : 
                      'bg-slate-600 text-slate-300'
                    }
                  `}>
                    <OutputIcon size={32} />
                  </div>
                  
                  <h3 className={`
                    text-lg font-bold mb-2 transition-colors duration-300
                    ${isActive ? 'text-slate-900' : 'text-white'}
                  `}>
                    {output.title}
                  </h3>
                  
                  <p className={`
                    text-sm transition-colors duration-300
                    ${isActive ? 'text-slate-700' : 'text-slate-400'}
                  `}>
                    {output.description}
                  </p>
                </div>

                {/* Checkmark for completed */}
                <div className={`
                  absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                  ${isActive ? 
                    'bg-blue-500 text-white shadow-lg scale-110' : 
                    'bg-slate-600 text-slate-300'
                  }
                `}>
                  <CheckCircle2 size={16} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Deliverables Detail */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Package className="mr-3 text-blue-400" size={28} />
              {outputs[activeOutput].title} - Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outputs[activeOutput].deliverables.map((deliverable, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-800/50 rounded-xl border border-slate-600 hover:border-slate-500 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <span className="text-white font-medium">{deliverable}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Scenarios for UI Screens */}
            {activeOutput === 2 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Play className="mr-2 text-blue-400" size={24} />
                  Available Demo Scenarios
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {demoScenarios.map((demo, index) => (
                    <div
                      key={index}
                      onClick={() => handleDemoClick(demo)}
                      className={`
                        p-4 rounded-xl border cursor-pointer transition-all duration-300 transform
                        ${selectedDemo === demo ? 
                          'bg-blue-900/30 border-blue-500 scale-102 shadow-lg' : 
                          'bg-slate-800/50 border-slate-600 hover:border-slate-500'
                        }
                      `}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-white">{demo.name}</h4>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {demo.duration}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 mb-3">{demo.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {demo.screens.map((screen, idx) => (
                          <span key={idx} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                            {screen}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Configuration Package Details */}
            {activeOutput === 3 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Code2 className="mr-2 text-orange-400" size={24} />
                  Package Contents
                </h3>
                
                <div className="bg-slate-800/50 rounded-xl border border-slate-600 p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-400">{configStats.totalFiles}</div>
                      <div className="text-sm text-slate-400">Config Files</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">{configStats.codeLines.toLocaleString()}</div>
                      <div className="text-sm text-slate-400">Lines of Code</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">{configStats.configurations}</div>
                      <div className="text-sm text-slate-400">Configurations</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">{configStats.testRecords.toLocaleString()}</div>
                      <div className="text-sm text-slate-400">Test Records</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Panel */}
          <div className="space-y-6">
            {selectedDemo ? (
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Eye className="mr-2 text-blue-400" size={24} />
                  Demo Preview
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400 block mb-1">Scenario</label>
                    <div className="text-white font-medium">{selectedDemo.name}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-slate-400 block mb-1">Description</label>
                    <div className="text-slate-300 text-sm">{selectedDemo.description}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-slate-400 block mb-1">Duration</label>
                    <div className="text-blue-400 font-medium">{selectedDemo.duration}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-slate-400 block mb-1">Screens Included</label>
                    <div className="space-y-1">
                      {selectedDemo.screens.map((screen, idx) => (
                        <div key={idx} className="text-sm text-blue-300 flex items-center">
                          <Monitor size={14} className="mr-2" />
                          {screen}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
                    <Play size={16} className="mr-2" />
                    Launch Demo
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Download className="mr-2 text-blue-400" size={24} />
                  Quick Actions
                </h3>
                
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
                    <Download size={16} className="mr-2" />
                    Download Package
                  </button>
                  
                  <button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 text-white py-3 px-4 rounded-lg hover:from-orange-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                    <Eye size={16} className="mr-2" />
                    Preview Environment
                  </button>
                  
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center">
                    <Users size={16} className="mr-2" />
                    Share with Team
                  </button>
                </div>
              </div>
            )}

            {/* Summary Stats */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Zap className="mr-2 text-orange-400" size={20} />
                Delivery Summary
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Total Outputs</span>
                  <span className="text-white font-bold">{outputs.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Setup Time</span>
                  <span className="text-blue-400 font-bold">{configStats.setupTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Demo Ready</span>
                  <span className="text-blue-400 font-bold">✓ Yes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Production Ready</span>
                  <span className="text-orange-400 font-bold">✓ Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {outputs.map((_, index) => (
              <button
                key={index}
                onClick={() => handleOutputClick(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${activeOutput === index ? 'bg-blue-400 scale-125' : 'bg-slate-600'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-slate-400 text-sm">
            Output {activeOutput + 1} of {outputs.length} • Complete MDM environment delivered in under 1 hour
          </p>
        </div>
      </div>
    </div>
  );
};