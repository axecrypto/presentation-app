import React, { useState } from 'react';
import { Shield, CheckCircle2, AlertTriangle, Users, Target, Database, Zap, GitMerge, Brain, Settings, TrendingUp } from 'lucide-react';

interface Rule {
  rule: string;
  pattern: string;
  severity: string;
  confidence: number;
  entity: string;
  field: string;
}

export const Slide5 = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [selectedRule, setSelectedRule] = useState<Rule | null>(null);

  const sections = [
    {
      id: 1,
      title: "Ingestion DQ Rules",
      description: "Required fields, pattern checks, uniqueness validation",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Daily Validation",
      description: "Ongoing checks for anomalies and data drift",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      title: "Match Rules",
      description: "Entity matching based on patterns and semantics",
      icon: Users,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      id: 4,
      title: "Survivorship Logic",
      description: "Data consolidation and conflict resolution",
      icon: Target,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const dqRules: Record<number, Rule[]> = {
    0: [ // Ingestion DQ Rules
      {
        rule: "Email Format Validation",
        pattern: "^[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,}$",
        severity: "Error",
        confidence: 98,
        entity: "Customer",
        field: "EmailAddress"
      },
      {
        rule: "Phone Number Format",
        pattern: "^\\+?[1-9]\\d{1,14}$",
        severity: "Warning",
        confidence: 95,
        entity: "Customer",
        field: "PhoneNumber"
      },
      {
        rule: "Required Field Check",
        pattern: "NOT NULL",
        severity: "Error",
        confidence: 100,
        entity: "Customer",
        field: "CustomerId"
      },
      {
        rule: "Date Range Validation",
        pattern: "BETWEEN '1900-01-01' AND CURRENT_DATE",
        severity: "Error",
        confidence: 92,
        entity: "Customer",
        field: "DateOfBirth"
      }
    ],
    1: [ // Daily Validation
      {
        rule: "Duplicate Detection",
        pattern: "GROUP BY email HAVING COUNT(*) > 1",
        severity: "Warning",
        confidence: 89,
        entity: "Customer",
        field: "EmailAddress"
      },
      {
        rule: "Data Completeness",
        pattern: "NULL percentage > 10%",
        severity: "Warning",
        confidence: 94,
        entity: "Customer",
        field: "LastName"
      },
      {
        rule: "Value Distribution",
        pattern: "Statistical outlier detection",
        severity: "Info",
        confidence: 87,
        entity: "Product",
        field: "Price"
      },
      {
        rule: "Referential Integrity",
        pattern: "Foreign key constraint validation",
        severity: "Error",
        confidence: 96,
        entity: "Order",
        field: "CustomerId"
      }
    ],
    2: [ // Match Rules
      {
        rule: "Exact Email Match",
        pattern: "email1 = email2",
        severity: "High",
        confidence: 99,
        entity: "Customer",
        field: "EmailAddress"
      },
      {
        rule: "Fuzzy Name Match",
        pattern: "Jaro-Winkler > 0.85",
        severity: "Medium",
        confidence: 88,
        entity: "Customer",
        field: "FullName"
      },
      {
        rule: "Phone Normalization",
        pattern: "Normalized phone comparison",
        severity: "Medium",
        confidence: 82,
        entity: "Customer",
        field: "PhoneNumber"
      },
      {
        rule: "Address Similarity",
        pattern: "Geocoding + fuzzy matching",
        severity: "Low",
        confidence: 75,
        entity: "Customer",
        field: "Address"
      }
    ],
    3: [ // Survivorship Logic
      {
        rule: "Most Recent Data",
        pattern: "MAX(last_updated_date)",
        severity: "High",
        confidence: 94,
        entity: "Customer",
        field: "All Fields"
      },
      {
        rule: "Most Complete Record",
        pattern: "Highest field completeness %",
        severity: "High",
        confidence: 91,
        entity: "Customer",
        field: "Profile Data"
      },
      {
        rule: "Source Priority",
        pattern: "CRM > ERP > External",
        severity: "Medium",
        confidence: 88,
        entity: "Customer",
        field: "Contact Info"
      },
      {
        rule: "Data Quality Score",
        pattern: "Weighted quality metrics",
        severity: "High",
        confidence: 86,
        entity: "Customer",
        field: "Master Record"
      }
    ]
  };

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
    setSelectedRule(null);
  };

  const handleRuleClick = (rule: Rule) => {
    setSelectedRule(rule);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Error':
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Warning':
      case 'Medium':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Info':
      case 'Low':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 95) return 'text-blue-400';
    if (confidence >= 85) return 'text-orange-400';
    return 'text-orange-400';
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
            Automated Suggestion of Critical MDM Rules
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            AI-powered generation of data quality checks, match logic, and survivorship rules
          </p>
        </div>

        {/* Section Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {sections.map((section, index) => {
            const SectionIcon = section.icon;
            const isActive = activeSection === index;
            
            return (
              <div
                key={section.id}
                onClick={() => handleSectionClick(index)}
                className={`
                  relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 transform
                  ${isActive ? 
                    `${section.bgColor} border-blue-500 scale-105 shadow-xl shadow-blue-500/20` : 
                    'bg-slate-800/50 border-slate-600 hover:border-slate-500 hover:scale-102'
                  }
                `}
              >
                <div className="text-center">
                  <div className={`
                    mx-auto mb-4 p-4 rounded-xl transition-all duration-300
                    ${isActive ? 
                      `bg-gradient-to-r ${section.color} text-white shadow-lg` : 
                      'bg-slate-600 text-slate-300'
                    }
                  `}>
                    <SectionIcon size={32} />
                  </div>
                  
                  <h3 className={`
                    text-lg font-bold mb-2 transition-colors duration-300
                    ${isActive ? 'text-slate-900' : 'text-white'}
                  `}>
                    {section.title}
                  </h3>
                  
                  <p className={`
                    text-sm transition-colors duration-300
                    ${isActive ? 'text-slate-700' : 'text-slate-400'}
                  `}>
                    {section.description}
                  </p>
                </div>

                {/* Section Number */}
                <div className={`
                  absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                  ${isActive ? 
                    'bg-blue-500 text-white shadow-lg scale-110' : 
                    'bg-slate-600 text-slate-300'
                  }
                `}>
                  {section.id}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Rules List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Brain className="mr-3 text-blue-400" size={28} />
              {sections[activeSection].title} - AI Suggestions
            </h2>
            
            <div className="space-y-3">
              {dqRules[activeSection]?.map((rule, index) => (
                <div
                  key={index}
                  onClick={() => handleRuleClick(rule)}
                  className={`
                    p-4 rounded-xl border cursor-pointer transition-all duration-300 transform
                    ${selectedRule === rule ? 
                      'bg-blue-900/30 border-blue-500 scale-102 shadow-lg' : 
                      'bg-slate-800/50 border-slate-600 hover:border-slate-500 hover:bg-slate-700/50'
                    }
                  `}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{rule.rule}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`
                        px-2 py-1 rounded-lg text-xs font-medium border
                        ${getSeverityColor(rule.severity)}
                      `}>
                        {rule.severity}
                      </span>
                      <span className={`text-sm font-bold ${getConfidenceColor(rule.confidence)}`}>
                        {rule.confidence}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-400">Entity:</span>
                      <span className="ml-2 text-blue-300 font-medium">{rule.entity}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Field:</span>
                      <span className="ml-2 text-orange-300 font-medium">{rule.field}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                    <code className="text-xs text-blue-400 font-mono">{rule.pattern}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rule Details Panel */}
          <div className="space-y-6">
            {selectedRule ? (
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Settings className="mr-2 text-blue-400" size={24} />
                  Rule Details
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400 block mb-1">Rule Name</label>
                    <div className="text-white font-medium">{selectedRule.rule}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-slate-400 block mb-1">Target Entity</label>
                    <div className="text-blue-300 font-medium">{selectedRule.entity}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-slate-400 block mb-1">Target Field</label>
                    <div className="text-orange-300 font-medium">{selectedRule.field}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-slate-400 block mb-1">Pattern/Logic</label>
                    <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                      <code className="text-xs text-green-400 font-mono break-all">{selectedRule.pattern}</code>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-400 block mb-1">Severity</label>
                      <span className={`
                        px-3 py-1 rounded-lg text-sm font-medium border inline-block
                        ${getSeverityColor(selectedRule.severity)}
                      `}>
                        {selectedRule.severity}
                      </span>
                    </div>
                    <div>
                      <label className="text-sm text-slate-400 block mb-1">Confidence</label>
                      <span className={`text-lg font-bold ${getConfidenceColor(selectedRule.confidence)}`}>
                        {selectedRule.confidence}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 p-6 text-center">
                <Database className="mx-auto mb-4 text-slate-500" size={48} />
                <h3 className="text-lg font-semibold text-slate-400 mb-2">Select a Rule</h3>
                <p className="text-slate-500 text-sm">Click on any rule to view detailed configuration</p>
              </div>
            )}

            {/* Rule Statistics */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Zap className="mr-2 text-orange-400" size={20} />
                Rule Statistics
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Total Rules</span>
                  <span className="text-white font-bold">{dqRules[activeSection]?.length || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Avg Confidence</span>
                  <span className="text-blue-400 font-bold">
                    {dqRules[activeSection] ? 
                      Math.round(dqRules[activeSection].reduce((acc, rule) => acc + rule.confidence, 0) / dqRules[activeSection].length) : 0}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">High Priority</span>
                  <span className="text-red-400 font-bold">
                    {dqRules[activeSection]?.filter(rule => rule.severity === 'Error' || rule.severity === 'High').length || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSectionClick(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${activeSection === index ? 'bg-blue-400 scale-125' : 'bg-slate-600'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-slate-400 text-sm">
            Section {activeSection + 1} of {sections.length} • Click sections and rules to explore
          </p>
        </div>
      </div>
    </div>
  );
};