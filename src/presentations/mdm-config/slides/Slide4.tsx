import React, { useState, useEffect } from 'react';
import { Search, Database, Layers, GitMerge, CheckCircle2, ArrowRight, Brain, Zap, Target, Building2 } from 'lucide-react';

export const Slide4 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [discoveredItems, setDiscoveredItems] = useState<typeof discoveredEntities>([]);

  const discoverySteps = [
    {
      id: 1,
      title: "Business Requirements Analysis",
      description: "AI analyzes business use case document",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
      details: ["Customer domains", "Product catalogs", "Business processes", "Data sources"]
    },
    {
      id: 2,
      title: "Catalog Matching",
      description: "Search existing model catalogs & templates",
      icon: Search,
      color: "from-purple-500 to-purple-600",
      details: ["Industry templates", "Domain models", "Entity libraries", "Best practices"]
    },
    {
      id: 3,
      title: "Entity Suggestion",
      description: "Auto-suggest entities & relationships",
      icon: Layers,
      color: "from-green-500 to-green-600",
      details: ["Customer entities", "Product hierarchies", "Reference data", "Relationships"]
    },
    {
      id: 4,
      title: "Field Mapping",
      description: "Map source fields to target model",
      icon: GitMerge,
      color: "from-orange-500 to-orange-600",
      details: ["Source to target", "Data type mapping", "Transformation rules", "Validation logic"]
    }
  ];

  const discoveredEntities = [
    { name: "Customer", confidence: 98, fields: 15, sources: 3, type: "Core Entity" },
    { name: "Product", confidence: 95, fields: 12, sources: 2, type: "Master Data" },
    { name: "Address", confidence: 92, fields: 8, sources: 4, type: "Reference Data" },
    { name: "Organization", confidence: 89, fields: 10, sources: 2, type: "Hierarchy" },
    { name: "Contact", confidence: 87, fields: 9, sources: 3, type: "Relationship" }
  ];

  const mappingExamples = [
    { source: "cust_first_name", target: "Customer.FirstName", confidence: 96, status: "mapped" },
    { source: "customer_email", target: "Customer.EmailAddress", confidence: 94, status: "mapped" },
    { source: "prod_id", target: "Product.ProductId", confidence: 98, status: "mapped" },
    { source: "addr_line1", target: "Address.AddressLine1", confidence: 91, status: "suggested" },
    { source: "phone_num", target: "Contact.PhoneNumber", confidence: 88, status: "suggested" }
  ];

  useEffect(() => {
    // Simulate discovery progress based on active step
    if (activeStep === discoverySteps.length - 1) {
      setDiscoveredItems(discoveredEntities);
    }
  }, [activeStep, discoverySteps.length]);

  const handleStepClick = (index: number) => {
    setIsProcessing(true);
    setTimeout(() => {
      setActiveStep(index);
      setIsProcessing(false);
    }, 300);
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
            AI-Powered Model Discovery
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Smart matching of business needs to model structure using intelligent agents
          </p>
        </div>

        {/* Discovery Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Left Side - Process Steps */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Brain className="mr-3 text-purple-400" size={28} />
              Discovery Process
            </h2>
            
            {discoverySteps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = activeStep === index;
              const isCompleted = index < activeStep;
              
              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={`
                    relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 transform
                    ${isActive ? 
                      'bg-slate-700/50 border-blue-500 scale-105 shadow-xl shadow-blue-500/20' : 
                      isCompleted ?
                        'bg-green-900/20 border-green-500/50' :
                        'bg-slate-800/50 border-slate-600 hover:border-slate-500'
                    }
                    ${isProcessing && isActive ? 'animate-pulse' : ''}
                  `}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`
                      p-3 rounded-xl transition-all duration-300
                      ${isActive ? 
                        `bg-gradient-to-r ${step.color} text-white shadow-lg` : 
                        isCompleted ?
                          'bg-green-500 text-white' :
                          'bg-slate-600 text-slate-300'
                      }
                    `}>
                      {isCompleted ? <CheckCircle2 size={24} /> : <StepIcon size={24} />}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`
                        text-lg font-bold mb-2 transition-colors duration-300
                        ${isActive ? 'text-blue-300' : isCompleted ? 'text-green-300' : 'text-white'}
                      `}>
                        {step.title}
                      </h3>
                      
                      <p className={`
                        text-sm mb-3 transition-colors duration-300
                        ${isActive ? 'text-slate-300' : 'text-slate-400'}
                      `}>
                        {step.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {step.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className={`
                              text-xs px-2 py-1 rounded-lg transition-all duration-300
                              ${isActive ? 
                                'bg-blue-100 text-blue-800' : 
                                isCompleted ?
                                  'bg-green-100 text-green-800' :
                                  'bg-slate-700 text-slate-300'
                              }
                            `}
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className={`
                    absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                    ${isActive ? 
                      'bg-blue-500 text-white shadow-lg scale-110' : 
                      isCompleted ?
                        'bg-green-500 text-white' :
                        'bg-slate-600 text-slate-300'
                    }
                  `}>
                    {isCompleted ? '✓' : step.id}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Discovery Results */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="mr-3 text-green-400" size={28} />
              Discovery Results
            </h2>

            {/* Discovered Entities */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Database className="mr-2 text-purple-400" size={20} />
                Suggested Entities
              </h3>
              
              <div className="space-y-3">
                {discoveredEntities.slice(0, activeStep + 2).map((entity, index) => (
                  <div
                    key={entity.name}
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg border border-slate-600 transform transition-all duration-500"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`
                        w-3 h-3 rounded-full
                        ${entity.confidence >= 95 ? 'bg-green-400' : 
                          entity.confidence >= 90 ? 'bg-yellow-400' : 'bg-orange-400'}
                      `}></div>
                      <div>
                        <div className="font-medium text-white">{entity.name}</div>
                        <div className="text-xs text-slate-400">{entity.type}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-400">{entity.confidence}%</div>
                      <div className="text-xs text-slate-400">{entity.fields} fields</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Mapping Preview */}
            {activeStep >= 3 && (
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <GitMerge className="mr-2 text-orange-400" size={20} />
                  Field Mapping Preview
                </h3>
                
                <div className="space-y-2">
                  {mappingExamples.slice(0, 3).map((mapping, index) => (
                    <div
                      key={mapping.source}
                      className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-slate-600"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-sm text-slate-300 font-mono">{mapping.source}</div>
                        <ArrowRight size={16} className="text-slate-500" />
                        <div className="text-sm text-blue-300 font-mono">{mapping.target}</div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className={`
                          px-2 py-1 rounded text-xs font-medium
                          ${mapping.status === 'mapped' ? 
                            'bg-green-100 text-green-800' : 
                            'bg-yellow-100 text-yellow-800'}
                        `}>
                          {mapping.status}
                        </div>
                        <div className="text-xs text-slate-400">{mapping.confidence}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-blue-900/30 backdrop-blur-lg rounded-2xl p-6 border border-blue-700/50 text-center">
            <Zap className="mx-auto mb-3 text-blue-400" size={32} />
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Speed</h3>
            <p className="text-2xl font-bold text-white">10x</p>
            <p className="text-blue-200 text-sm">Faster model discovery</p>
          </div>

          <div className="bg-purple-900/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-700/50 text-center">
            <Target className="mx-auto mb-3 text-purple-400" size={32} />
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Accuracy</h3>
            <p className="text-2xl font-bold text-white">95%</p>
            <p className="text-purple-200 text-sm">Mapping confidence</p>
          </div>

          <div className="bg-green-900/30 backdrop-blur-lg rounded-2xl p-6 border border-green-700/50 text-center">
            <Database className="mx-auto mb-3 text-green-400" size={32} />
            <h3 className="text-lg font-semibold text-green-300 mb-2">Reuse</h3>
            <p className="text-2xl font-bold text-white">80%</p>
            <p className="text-green-200 text-sm">Template reusability</p>
          </div>

          <div className="bg-orange-900/30 backdrop-blur-lg rounded-2xl p-6 border border-orange-700/50 text-center">
            <CheckCircle2 className="mx-auto mb-3 text-orange-400" size={32} />
            <h3 className="text-lg font-semibold text-orange-300 mb-2">Quality</h3>
            <p className="text-2xl font-bold text-white">Best</p>
            <p className="text-orange-200 text-sm">Practice alignment</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {discoverySteps.map((_, index) => (
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
        <div className="text-center mt-6">
          <p className="text-slate-400 text-sm">
            Step {activeStep + 1} of {discoverySteps.length} • AI-powered intelligent model discovery
          </p>
        </div>
      </div>
    </div>
  );
};