import React, { useState } from 'react';
import { Clock, TrendingUp, Users, Target, Zap, CheckCircle2, ArrowRight, DollarSign, Calendar, Handshake, Award, Rocket, Shield } from 'lucide-react';

interface Impact {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  bgColor: string;
  description: string;
  benefits: string[];
  beforeAfter: {
    before: { value: string; label: string };
    after: { value: string; label: string };
  };
}

interface UseCase {
  scenario: string;
  timeline: string;
  savings: string;
  description: string;
}

export const Slide7 = () => {
  const [activeImpact, setActiveImpact] = useState(0);
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

  const impacts: Impact[] = [
    {
      id: 1,
      title: "Speed to Value",
      subtitle: "Cut weeks of effort to under 1 hour",
      icon: Clock,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      description: "Dramatically reduce time-to-market for MDM implementations",
      benefits: [
        "Weeks → 1 Hour setup time",
        "Immediate demo capability",
        "Faster stakeholder buy-in",
        "Reduced project risk"
      ],
      beforeAfter: {
        before: { value: "8-12 weeks", label: "Traditional Setup" },
        after: { value: "< 1 hour", label: "AI-Accelerated" }
      }
    },
    {
      id: 2,
      title: "Reduce Dependencies",
      subtitle: "Less reliance on specialized MDM experts",
      icon: Users,
      color: "from-green-500 to-green-600", 
      bgColor: "bg-green-50",
      description: "Enable broader teams to configure and deploy MDM solutions",
      benefits: [
        "Lower skill barrier to entry",
        "Reduced consultant dependency",
        "Knowledge democratization",
        "Self-service capabilities"
      ],
      beforeAfter: {
        before: { value: "5-8 experts", label: "Traditional Team" },
        after: { value: "1-2 people", label: "AI-Assisted" }
      }
    },
    {
      id: 3,
      title: "Business Alignment",
      subtitle: "Better alignment with business use cases",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50", 
      description: "Ensure technical implementation matches business requirements",
      benefits: [
        "Business-driven configuration",
        "Use case-specific models",
        "Stakeholder involvement",
        "Reduced miscommunication"
      ],
      beforeAfter: {
        before: { value: "30%", label: "Requirements Match" },
        after: { value: "95%", label: "AI-Optimized Match" }
      }
    },
    {
      id: 4,
      title: "Demo-Ready Environment",
      subtitle: "Immediate stakeholder alignment & validation",
      icon: Rocket,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      description: "Accelerate decision-making with working prototypes",
      benefits: [
        "Instant visualization",
        "Stakeholder validation",
        "Early feedback loops",
        "Proof of concept ready"
      ],
      beforeAfter: {
        before: { value: "4-6 months", label: "First Demo" },
        after: { value: "Day 1", label: "Immediate Demo" }
      }
    }
  ];

  const metrics = [
    {
      category: "Time Savings",
      icon: Clock,
      color: "text-blue-400",
      bgColor: "bg-blue-900/30",
      borderColor: "border-blue-700/50",
      stats: [
        { label: "Setup Time Reduction", value: "99%", detail: "Weeks to 1 hour" },
        { label: "Time to Demo", value: "100x", detail: "Faster delivery" },
        { label: "Config Effort", value: "90%", detail: "Automated" }
      ]
    },
    {
      category: "Cost Impact", 
      icon: DollarSign,
      color: "text-green-400",
      bgColor: "bg-green-900/30", 
      borderColor: "border-green-700/50",
      stats: [
        { label: "Implementation Cost", value: "70%", detail: "Reduction" },
        { label: "Expert Dependency", value: "80%", detail: "Less consulting" },
        { label: "ROI Timeline", value: "6x", detail: "Faster payback" }
      ]
    },
    {
      category: "Quality Improvement",
      icon: Award,
      color: "text-purple-400", 
      bgColor: "bg-purple-900/30",
      borderColor: "border-purple-700/50",
      stats: [
        { label: "Configuration Accuracy", value: "95%", detail: "AI-optimized" },
        { label: "Best Practice Adherence", value: "100%", detail: "Built-in standards" },
        { label: "Error Reduction", value: "85%", detail: "Automated validation" }
      ]
    },
    {
      category: "Business Value",
      icon: TrendingUp,
      color: "text-orange-400",
      bgColor: "bg-orange-900/30",
      borderColor: "border-orange-700/50", 
      stats: [
        { label: "Stakeholder Satisfaction", value: "92%", detail: "Higher engagement" },
        { label: "Project Success Rate", value: "87%", detail: "vs 60% traditional" },
        { label: "Business Alignment", value: "95%", detail: "Requirements match" }
      ]
    }
  ];

  const useCases: UseCase[] = [
    {
      scenario: "Enterprise Customer MDM",
      timeline: "3 months → 1 hour",
      savings: "$500K+",
      description: "Fortune 500 company accelerated customer data unification"
    },
    {
      scenario: "Product Information Management",
      timeline: "6 weeks → 45 min", 
      savings: "$200K+",
      description: "Retail chain streamlined product catalog management"
    },
    {
      scenario: "Supplier Master Data",
      timeline: "4 months → 50 min",
      savings: "$800K+", 
      description: "Manufacturing firm unified supplier information"
    }
  ];

  const handleImpactClick = (index: number) => {
    setActiveImpact(index);
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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3 text-white">
            Why It Matters
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Transforming MDM implementation from months-long projects to hour-long solutions
          </p>
        </div>

        {/* Impact Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impacts.map((impact, index) => {
            const ImpactIcon = impact.icon;
            const isActive = activeImpact === index;
            
            return (
              <div
                key={impact.id}
                onClick={() => handleImpactClick(index)}
                className={`
                  relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 transform
                  ${isActive ? 
                    `${impact.bgColor} border-blue-500 scale-105 shadow-xl shadow-blue-500/20` : 
                    'bg-slate-800/50 border-slate-600 hover:border-slate-500 hover:scale-102'
                  }
                `}
              >
                <div className="text-center">
                  <div className={`
                    mx-auto mb-4 p-4 rounded-xl transition-all duration-300
                    ${isActive ? 
                      'bg-orange-500 text-white shadow-lg' : 
                      'bg-slate-700 text-slate-300'
                    }
                  `}>
                    <ImpactIcon size={32} />
                  </div>
                  
                  <h3 className={`
                    text-lg font-bold mb-2 transition-colors duration-300
                    ${isActive ? 'text-white' : 'text-white'}
                  `}>
                    {impact.title}
                  </h3>
                  
                  <p className={`
                    text-sm transition-colors duration-300
                    ${isActive ? 'text-slate-200' : 'text-slate-400'}
                  `}>
                    {impact.subtitle}
                  </p>
                </div>

                {/* Before/After Indicator */}
                <div className={`mt-4 p-3 rounded-lg border transition-all duration-300 ${
                  isActive ? 'bg-slate-800/70 border-slate-600' : 'bg-slate-900/50 border-slate-700'
                }`}>
                  <div className="flex items-center justify-between text-xs">
                    <div className="text-red-400">
                      <div className="font-bold">{impact.beforeAfter.before.value}</div>
                      <div>{impact.beforeAfter.before.label}</div>
                    </div>
                    <ArrowRight size={16} className="text-slate-400" />
                    <div className="text-green-400">
                      <div className="font-bold">{impact.beforeAfter.after.value}</div>
                      <div>{impact.beforeAfter.after.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Impact View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Active Impact Details */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Zap className="mr-2 text-yellow-400" size={24} />
              {impacts[activeImpact].title} - Impact Details
            </h2>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-4">
              <p className="text-base text-slate-300 mb-4">{impacts[activeImpact].description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {impacts[activeImpact].benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-2 bg-slate-700/50 rounded-lg border border-slate-600"
                  >
                    <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-white text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Case Examples */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-4">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <Handshake className="mr-2 text-blue-400" size={20} />
                Real-World Impact
              </h3>
              
              <div className="space-y-3">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-3 bg-slate-700/50 rounded-lg border border-slate-600"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-white text-sm">{useCase.scenario}</h4>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-sm">{useCase.savings}</div>
                        <div className="text-xs text-slate-400">Savings</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mb-2">{useCase.description}</p>
                    <div className="flex items-center text-xs">
                      <Calendar size={12} className="mr-1 text-blue-400" />
                      <span className="text-blue-300">{useCase.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics Panel */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white mb-3 flex items-center">
              <TrendingUp className="mr-2 text-green-400" size={20} />
              Key Metrics
            </h2>
            
            {metrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredMetric(index)}
                  onMouseLeave={() => setHoveredMetric(null)}
                  className={`
                    ${metric.bgColor} backdrop-blur-lg rounded-xl border ${metric.borderColor} p-3 transition-all duration-300 transform
                    ${hoveredMetric === index ? 'scale-105 shadow-lg' : ''}
                  `}
                >
                  <h3 className="font-bold text-white mb-2 flex items-center text-sm">
                    <MetricIcon size={16} className={`mr-1 ${metric.color}`} />
                    {metric.category}
                  </h3>
                  
                  <div className="space-y-2">
                    {metric.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-400">{stat.label}</div>
                          <div className="text-xs text-slate-500">{stat.detail}</div>
                        </div>
                        <div className={`text-lg font-bold ${metric.color}`}>
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-3xl p-8 text-center border border-orange-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your MDM Implementation?</h2>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto">
            Join organizations already accelerating their data management with AI-powered configuration
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/60 backdrop-blur-lg rounded-xl p-4 border border-slate-600">
              <Shield size={32} className="mx-auto mb-2 text-blue-400" />
              <h3 className="text-lg font-bold text-white mb-1">Enterprise Ready</h3>
              <p className="text-slate-300 text-sm">Production-grade configurations with enterprise security</p>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-lg rounded-xl p-4 border border-slate-600">
              <Rocket size={32} className="mx-auto mb-2 text-green-400" />
              <h3 className="text-lg font-bold text-white mb-1">Instant Value</h3>
              <p className="text-slate-300 text-sm">Demo-ready environment in under one hour</p>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-lg rounded-xl p-4 border border-slate-600">
              <Award size={32} className="mx-auto mb-2 text-orange-400" />
              <h3 className="text-lg font-bold text-white mb-1">Best Practices</h3>
              <p className="text-slate-300 text-sm">Built-in industry standards and proven patterns</p>
            </div>
          </div>
          
          <button className="bg-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {impacts.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImpactClick(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${activeImpact === index ? 'bg-blue-400 scale-125' : 'bg-slate-600'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-slate-400 text-sm">
            Impact {activeImpact + 1} of {impacts.length} • Transforming MDM implementation with AI
          </p>
        </div>
      </div>
    </div>
  );
};