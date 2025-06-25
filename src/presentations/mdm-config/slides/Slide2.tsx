import React, { useState } from 'react';
import { FileText, Search, Shield, GitMerge, Monitor, Database, Package } from 'lucide-react';

export const Slide2 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const flowSteps = [
    {
      id: 1,
      title: "Input",
      subtitle: "Use Case Document",
      description: "Business domains, entities, processes, sources",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Model Discovery",
      subtitle: "Match Against Catalog",
      description: "AI-powered mapping to existing models",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      title: "DQ/Profiling",
      subtitle: "External Agents",
      description: "Automated data quality rule suggestions",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 4,
      title: "Match/Survivorship",
      subtitle: "Pattern-Based Auto-Gen",
      description: "Intelligent rule generation from patterns",
      icon: GitMerge,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 5,
      title: "UI Generation",
      subtitle: "Screens & Workflows",
      description: "Data steward interfaces auto-generated",
      icon: Monitor,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 6,
      title: "Synthetic Data",
      subtitle: "Realistic Test Data",
      description: "Generated sample data for demos",
      icon: Database,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 7,
      title: "Output",
      subtitle: "Demo-Ready Environment",
      description: "Complete config package delivered",
      icon: Package,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];

  // Removed auto-progression - now only advances on click

  const handleStepClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveStep(index);
      setIsAnimating(false);
    }, 200);
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
            AI-Accelerated Configuration Flow
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From business requirements to demo-ready MDM in under one hour
          </p>
        </div>

        {/* Flow Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isPrevious = index < activeStep;
            
            return (
              <div key={step.id} className="flex flex-col items-center group">
                {/* Step Card */}
                <div 
                  onClick={() => handleStepClick(index)}
                  className={`
                    relative w-32 lg:w-40 xl:w-48 h-32 lg:h-36 xl:h-40 rounded-2xl border-2 cursor-pointer transition-all duration-500 transform
                    ${isActive ? 
                      `${step.bgColor} ${step.borderColor} scale-110 shadow-2xl shadow-blue-500/20` : 
                      isPrevious ? 
                        'bg-slate-700 border-slate-600 scale-95' : 
                        'bg-slate-800 border-slate-700 hover:scale-105'
                    }
                    ${isAnimating && isActive ? 'animate-pulse' : ''}
                  `}
                >
                  {/* Glow Effect */}
                  {isActive && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-20 blur-xl`}></div>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 p-3 lg:p-4 xl:p-6 h-full flex flex-col items-center justify-center text-center">
                    <div className={`
                      mb-2 p-2 lg:p-3 rounded-full transition-all duration-300
                      ${isActive ? 
                        `bg-gradient-to-r ${step.color} text-white` : 
                        'bg-slate-600 text-slate-300'
                      }
                    `}>
                      <Icon size={20} />
                    </div>
                    
                    <h3 className={`
                      font-bold text-sm lg:text-base xl:text-lg mb-1 transition-colors duration-300
                      ${isActive ? 'text-slate-900' : 'text-white'}
                    `}>
                      {step.title}
                    </h3>
                    
                    <p className={`
                      text-xs lg:text-sm font-medium mb-1 lg:mb-2 transition-colors duration-300
                      ${isActive ? 'text-slate-700' : 'text-slate-400'}
                    `}>
                      {step.subtitle}
                    </p>
                    
                    <p className={`
                      text-xs leading-tight transition-colors duration-300 hidden lg:block
                      ${isActive ? 'text-slate-600' : 'text-slate-500'}
                    `}>
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number */}
                  <div className={`
                    absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                    ${isActive ? 
                      `bg-gradient-to-r ${step.color} text-white shadow-lg` : 
                      isPrevious ?
                        'bg-green-500 text-white' :
                        'bg-slate-600 text-slate-300'
                    }
                  `}>
                    {isPrevious ? '✓' : step.id}
                  </div>
                </div>

                {/* Arrow */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:block ml-8 mt-20">
                    <div className={`
                      w-8 h-0.5 transition-all duration-500
                      ${index < activeStep ? 'bg-green-400' : 
                        index === activeStep ? 'bg-blue-400' : 'bg-slate-600'}
                    `}>
                      <div className={`
                        w-0 h-0 border-l-4 border-r-0 border-t-2 border-b-2 border-transparent ml-8 -mt-1
                        ${index < activeStep ? 'border-l-green-400' : 
                          index === activeStep ? 'border-l-blue-400' : 'border-l-slate-600'}
                      `}></div>
                    </div>
                  </div>
                )}

                {/* Mobile Arrow */}
                {index < flowSteps.length - 1 && (
                  <div className="lg:hidden mt-4 mb-4">
                    <div className={`
                      w-0.5 h-8 transition-all duration-500
                      ${index < activeStep ? 'bg-green-400' : 
                        index === activeStep ? 'bg-blue-400' : 'bg-slate-600'}
                    `}>
                      <div className={`
                        w-0 h-0 border-t-4 border-b-0 border-l-2 border-r-2 border-transparent mt-8 -ml-1
                        ${index < activeStep ? 'border-t-green-400' : 
                          index === activeStep ? 'border-t-blue-400' : 'border-t-slate-600'}
                      `}></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {flowSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${activeStep === index ? 'bg-blue-400 scale-125' : 
                    index < activeStep ? 'bg-green-400' : 'bg-slate-600'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            Step {activeStep + 1} of {flowSteps.length} • Click any step to explore
          </p>
        </div>
      </div>
    </div>
  );
};