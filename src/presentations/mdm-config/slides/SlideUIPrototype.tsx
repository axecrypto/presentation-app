import React, { useState } from 'react';
import { 
  Upload, FileText, Play, CheckCircle, Circle, Clock, 
  Database, Shield, GitMerge, Monitor, Package, 
  ChevronRight, Download, Eye, Settings, Sparkles
} from 'lucide-react';

export const SlideUIPrototype = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [selectedView, setSelectedView] = useState('overview');

  const steps = [
    { id: 1, name: 'Upload Use Case', status: 'completed', icon: Upload },
    { id: 2, name: 'Model Discovery', status: 'active', icon: Database },
    { id: 3, name: 'Configure Rules', status: 'pending', icon: Shield },
    { id: 4, name: 'Review & Export', status: 'pending', icon: Package },
  ];

  const discoveredModels = [
    { name: 'Customer 360', match: '95%', entities: 12, status: 'recommended' },
    { name: 'Product Master', match: '78%', entities: 8, status: 'partial' },
    { name: 'Supplier Hub', match: '45%', entities: 5, status: 'low' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">MDM CLAIRE Config Under 1h</h1>
              <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium flex items-center gap-1">
                <Sparkles size={14} />
                AI-Powered
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                Save Draft
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                Export Configuration
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar - Progress Steps */}
        <div className="w-80 bg-white border-r border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Configuration Progress
          </h2>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                  step.status === 'active' 
                    ? 'bg-orange-50 border border-orange-200' 
                    : step.status === 'completed'
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  step.status === 'active' 
                    ? 'bg-orange-500 text-white' 
                    : step.status === 'completed'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  <step.icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{step.name}</h3>
                  <p className="text-sm text-gray-500">
                    {step.status === 'completed' ? 'Completed' : 
                     step.status === 'active' ? 'In Progress' : 'Pending'}
                  </p>
                </div>
                {step.status === 'completed' && (
                  <CheckCircle className="text-green-500" size={20} />
                )}
                {step.status === 'active' && (
                  <div className="w-5 h-5 border-2 border-orange-500 rounded-full border-t-transparent animate-spin" />
                )}
              </div>
            ))}
          </div>

          {/* Time Estimate */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 text-blue-700">
              <Clock size={20} />
              <div>
                <p className="font-medium">Estimated Time</p>
                <p className="text-sm">~15 minutes remaining</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Step Content */}
          {activeStep === 2 && (
            <>
              {/* Step Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Model Discovery Results</h2>
                <p className="text-gray-600">
                  AI has analyzed your use case and found the following MDM model matches
                </p>
              </div>

              {/* View Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setSelectedView('overview')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedView === 'overview'
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setSelectedView('details')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedView === 'details'
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                >
                  Detailed Mapping
                </button>
              </div>

              {/* Model Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {discoveredModels.map((model, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl p-6 border-2 transition-all hover:shadow-lg cursor-pointer ${
                      model.status === 'recommended'
                        ? 'border-green-500 bg-green-50/50'
                        : 'border-gray-200'
                    }`}
                  >
                    {model.status === 'recommended' && (
                      <div className="mb-3 inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                        <Sparkles size={12} />
                        AI Recommended
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{model.name}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Match Score</span>
                        <span className={`font-bold ${
                          parseInt(model.match) > 80 ? 'text-green-600' : 
                          parseInt(model.match) > 60 ? 'text-orange-600' : 'text-red-600'
                        }`}>{model.match}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Entities</span>
                        <span className="font-medium text-gray-900">{model.entities}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            parseInt(model.match) > 80 ? 'bg-green-500' : 
                            parseInt(model.match) > 60 ? 'bg-orange-500' : 'bg-red-500'
                          }`}
                          style={{ width: model.match }}
                        />
                      </div>
                    </div>
                    <button className="mt-4 w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                      <Eye size={16} />
                      View Details
                    </button>
                  </div>
                ))}
              </div>

              {/* AI Insights */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="text-blue-600" size={20} />
                  AI Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Entity Mapping</h4>
                    <p className="text-sm text-gray-600">
                      12 of 15 business entities successfully mapped to Customer 360 model
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Gap Analysis</h4>
                    <p className="text-sm text-gray-600">
                      3 custom attributes identified that require additional configuration
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Recommendations</h4>
                    <p className="text-sm text-gray-600">
                      Consider enabling Address Validation and Duplicate Detection modules
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Data Quality</h4>
                    <p className="text-sm text-gray-600">
                      AI suggests 47 data quality rules based on your data patterns
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Sidebar - Quick Actions */}
        <div className="w-80 bg-white border-l border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Quick Actions
          </h2>
          
          <div className="space-y-3">
            <button className="w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3 text-left">
              <Eye className="text-gray-600" size={20} />
              <div>
                <p className="font-medium text-gray-900">Preview Configuration</p>
                <p className="text-sm text-gray-500">See how it looks</p>
              </div>
            </button>
            
            <button className="w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3 text-left">
              <Download className="text-gray-600" size={20} />
              <div>
                <p className="font-medium text-gray-900">Download Report</p>
                <p className="text-sm text-gray-500">PDF summary</p>
              </div>
            </button>
            
            <button className="w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3 text-left">
              <Settings className="text-gray-600" size={20} />
              <div>
                <p className="font-medium text-gray-900">Advanced Settings</p>
                <p className="text-sm text-gray-500">Fine-tune options</p>
              </div>
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Our AI assistant can guide you through the configuration process
            </p>
            <button className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Chat with AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};