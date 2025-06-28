import React, { useState } from 'react';
import { Users, FileText, Search, Shield, GitMerge, Monitor, Database, Building2, Bot, Cpu, Brain, Palette, Zap } from 'lucide-react';

export const Slide3 = () => {
  const [activeRow, setActiveRow] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const responsibilities = [
    {
      step: "Business Use Case Input",
      actor: "Implementation Partner (IPS)",
      actorType: "human",
      icon: Building2,
      notes: "Source → Target, processes, domains, goals",
      description: "Provides business requirements and use case documentation",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      actorColor: "text-blue-700"
    },
    {
      step: "Model & Catalog Mapping", 
      actor: "IDMC Platform Agent",
      actorType: "ai",
      icon: Search,
      notes: "Suggest model structure & reusable config",
      description: "AI-powered matching against existing catalogs and templates",
      color: "from-blue-500 to-blue-600", 
      bgColor: "bg-blue-50",
      actorColor: "text-blue-700"
    },
    {
      step: "Data Quality Profiling",
      actor: "External DQ Agent", 
      actorType: "ai",
      icon: Shield,
      notes: "Ingestion checks + ongoing validations",
      description: "Automated data quality rule suggestions and profiling",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50", 
      actorColor: "text-blue-700"
    },
    {
      step: "Match/Survivorship Logic",
      actor: "MDM Pattern Agent",
      actorType: "ai", 
      icon: GitMerge,
      notes: "Based on data types, patterns, business hints",
      description: "Intelligent rule generation from data patterns and semantics",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      actorColor: "text-orange-700"
    },
    {
      step: "Screen/Layout Gen",
      actor: "UI Config Agent",
      actorType: "ai",
      icon: Monitor, 
      notes: "Search/update/fix screens for Stewards",
      description: "Auto-generates data steward interfaces and workflows",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      actorColor: "text-indigo-700"
    },
    {
      step: "Test Data Generation", 
      actor: "Synthetic Data Agent",
      actorType: "ai",
      icon: Database,
      notes: "Realistic sample data per discovered model",
      description: "Creates realistic test data for demos and validation",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      actorColor: "text-teal-700"
    }
  ];

  // Auto-progression removed - slides advance only on user interaction

  const handleRowClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveRow(index);
      setIsAnimating(false);
    }, 200);
  };

  const getActorIcon = (actorType: string) => {
    return actorType === 'human' ? Users : Bot;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-green-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Who Does What?
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Clear separation of responsibilities between human experts and AI agents
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <Users size={16} className="text-blue-400" />
              <span className="text-slate-300 text-sm">Human Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <Bot size={16} className="text-purple-400" />
              <span className="text-slate-300 text-sm">AI Agent</span>
            </div>
          </div>
        </div>

        {/* Responsibilities Table */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 pl-16 pr-6 py-6">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4 text-slate-200 font-semibold text-lg">Step</div>
              <div className="col-span-3 text-slate-200 font-semibold text-lg">Actor/Agent</div>
              <div className="col-span-5 text-slate-200 font-semibold text-lg">Notes</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-700">
            {responsibilities.map((item, index) => {
              const StepIcon = item.icon;
              const ActorIcon = getActorIcon(item.actorType);
              const isActive = activeRow === index;
              
              return (
                <div
                  key={index}
                  onClick={() => handleRowClick(index)}
                  className={`
                    grid grid-cols-12 gap-4 items-center pl-16 pr-6 py-6 cursor-pointer transition-all duration-500 transform relative
                    ${isActive ? 
                      `${item.bgColor} scale-[1.02] shadow-lg border-l-4 border-l-blue-500` : 
                      'hover:bg-slate-700/30'
                    }
                    ${isAnimating && isActive ? 'animate-pulse' : ''}
                  `}
                >
                  {/* Step Column */}
                  <div className="col-span-4">
                    <div className="flex items-center space-x-4">
                      <div className={`
                        p-3 rounded-xl transition-all duration-300
                        ${isActive ? 
                          `bg-gradient-to-r ${item.color} text-white shadow-lg` : 
                          'bg-slate-600 text-slate-300'
                        }
                      `}>
                        <StepIcon size={20} />
                      </div>
                      <div>
                        <h3 className={`
                          font-bold text-lg transition-colors duration-300
                          ${isActive ? 'text-slate-900' : 'text-white'}
                        `}>
                          {item.step}
                        </h3>
                        <p className={`
                          text-sm transition-colors duration-300
                          ${isActive ? 'text-slate-600' : 'text-slate-400'}
                        `}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actor Column */}
                  <div className="col-span-3">
                    <div className="flex items-center space-x-3">
                      <div className={`
                        p-2 rounded-lg transition-all duration-300
                        ${item.actorType === 'human' ? 
                          'bg-blue-100 text-blue-600' : 
                          'bg-orange-100 text-orange-600'
                        }
                        ${isActive ? 'scale-110 shadow-lg' : ''}
                      `}>
                        <ActorIcon size={16} />
                      </div>
                      <div>
                        <div className={`
                          font-semibold transition-colors duration-300
                          ${isActive ? item.actorColor : 'text-white'}
                        `}>
                          {item.actor}
                        </div>
                        <div className={`
                          text-xs px-2 py-1 rounded-full inline-block mt-1
                          ${item.actorType === 'human' ? 
                            'bg-blue-100 text-blue-700' : 
                            'bg-orange-100 text-orange-700'
                          }
                        `}>
                          {item.actorType === 'human' ? 'Human' : 'AI Agent'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notes Column */}
                  <div className="col-span-5">
                    <p className={`
                      text-sm leading-relaxed transition-colors duration-300
                      ${isActive ? 'text-slate-700 font-medium' : 'text-slate-300'}
                    `}>
                      {item.notes}
                    </p>
                  </div>

                  {/* Row Number */}
                  <div className={`
                    absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                    ${isActive ? 
                      'bg-blue-500 text-white shadow-lg scale-110' : 
                      'bg-slate-600 text-slate-300'
                    }
                  `}>
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-900/30 backdrop-blur-lg rounded-2xl p-6 border border-blue-700/50">
            <div className="flex items-center space-x-3 mb-2">
              <Users className="text-blue-400" size={24} />
              <h3 className="text-lg font-semibold text-blue-300">Human Experts</h3>
            </div>
            <p className="text-2xl font-bold text-white">1 Role</p>
            <p className="text-blue-200 text-sm">Implementation Partners provide business context</p>
          </div>

          <div className="bg-purple-900/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-700/50">
            <div className="flex items-center space-x-3 mb-2">
              <Bot className="text-purple-400" size={24} />
              <h3 className="text-lg font-semibold text-purple-300">AI Agents</h3>
            </div>
            <p className="text-2xl font-bold text-white">5 Agents</p>
            <p className="text-purple-200 text-sm">Specialized AI handles technical configuration</p>
          </div>

          <div className="bg-green-900/30 backdrop-blur-lg rounded-2xl p-6 border border-green-700/50">
            <div className="flex items-center space-x-3 mb-2">
              <Zap className="text-green-400" size={24} />
              <h3 className="text-lg font-semibold text-green-300">Automation</h3>
            </div>
            <p className="text-2xl font-bold text-white">83%</p>
            <p className="text-green-200 text-sm">Of configuration tasks automated</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {responsibilities.map((_, index) => (
              <button
                key={index}
                onClick={() => handleRowClick(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${activeRow === index ? 'bg-blue-400 scale-125' : 'bg-slate-600'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-slate-400 text-sm">
            Row {activeRow + 1} of {responsibilities.length} • Click any row to highlight
          </p>
        </div>
      </div>
    </div>
  );
};