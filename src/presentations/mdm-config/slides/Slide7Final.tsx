import React, { useState } from 'react';
import { 
  Clock, Users, Target, Rocket, TrendingUp, Award, DollarSign, 
  CheckCircle2, ArrowRight, Zap, Calendar, Building2, ShoppingCart, 
  Factory, Heart, Handshake
} from 'lucide-react';

interface Impact {
  id: number;
  title: string;
  subtitle: string;
  icon: any;
  description: string;
  benefits: string[];
  beforeAfter: {
    before: { value: string; label: string };
    after: { value: string; label: string };
  };
}

interface UseCase {
  industry: string;
  icon: any;
  scenario: string;
  description: string;
  savings: string;
  timeline: string;
}

export const Slide7Final = () => {
  const [activeImpact, setActiveImpact] = useState(0);
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

  const impacts: Impact[] = [
    {
      id: 1,
      title: "Speed to Value",
      subtitle: "Cut weeks of effort to under 1 hour",
      icon: Clock,
      description: "Transform months-long MDM projects into hour-long implementations",
      benefits: [
        "Immediate business value realization",
        "Rapid prototype development",
        "Quick iteration cycles",
        "Faster time to market"
      ],
      beforeAfter: {
        before: { value: "16-24 weeks", label: "Traditional Setup" },
        after: { value: "< 1 hour", label: "AI-Powered Setup" }
      }
    },
    {
      id: 2,
      title: "Reduce Dependencies",
      subtitle: "Less reliance on specialized MDM experts",
      icon: Users,
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
      stats: [
        { label: "Business Alignment", value: "3x", detail: "Better fit" },
        { label: "User Adoption", value: "90%", detail: "Intuitive design" },
        { label: "Value Realization", value: "5x", detail: "Faster benefits" }
      ]
    }
  ];

  const useCases: UseCase[] = [
    {
      industry: "Retail",
      icon: ShoppingCart,
      scenario: "Customer 360 Implementation",
      description: "Unified customer view across channels",
      savings: "$2.5M",
      timeline: "3 weeks vs 6 months"
    },
    {
      industry: "Manufacturing",
      icon: Factory,
      scenario: "Product Master Data",
      description: "Global product hierarchy setup",
      savings: "$1.8M",
      timeline: "2 weeks vs 4 months"
    },
    {
      industry: "Healthcare",
      icon: Heart,
      scenario: "Provider Data Management",
      description: "Healthcare provider network MDM",
      savings: "$3.2M",
      timeline: "4 weeks vs 8 months"
    },
    {
      industry: "Financial Services",
      icon: Building2,
      scenario: "Reference Data Management",
      description: "Multi-domain reference data setup",
      savings: "$2.8M",
      timeline: "2 weeks vs 5 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 overflow-hidden relative">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Why It Matters
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transforming MDM implementation from months-long projects to hour-long solutions
          </p>
        </div>

        {/* Impact Cards - Similar to other slides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {impacts.map((impact, index) => {
            const ImpactIcon = impact.icon;
            const isActive = activeImpact === index;
            
            return (
              <div
                key={impact.id}
                onClick={() => setActiveImpact(index)}
                className={`
                  relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 transform
                  ${isActive ? 
                    'bg-slate-700 border-orange-500 scale-105 shadow-xl shadow-orange-500/20' : 
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
                  
                  <h3 className="text-lg font-bold mb-2 text-white">
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
                <div className={`
                  mt-4 p-3 rounded-lg border transition-all duration-300
                  ${isActive ? 'bg-slate-800 border-slate-600' : 'bg-slate-900/50 border-slate-700'}
                `}>
                  <div className="flex items-center justify-between text-xs">
                    <div className="text-red-400">
                      <div className="font-bold">{impact.beforeAfter.before.value}</div>
                      <div className="text-slate-500">{impact.beforeAfter.before.label}</div>
                    </div>
                    <ArrowRight size={16} className="text-slate-500" />
                    <div className="text-green-400">
                      <div className="font-bold">{impact.beforeAfter.after.value}</div>
                      <div className="text-slate-500">{impact.beforeAfter.after.label}</div>
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
              <Zap className="mr-2 text-orange-400" size={24} />
              {impacts[activeImpact].title} - Impact Details
            </h2>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6">
              <p className="text-base text-slate-300 mb-4">{impacts[activeImpact].description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {impacts[activeImpact].benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-slate-700/50 rounded-lg border border-slate-600"
                  >
                    <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-white text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Case Examples */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Handshake className="mr-2 text-blue-400" size={20} />
                Real-World Impact
              </h3>
              
              <div className="space-y-3">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-white text-sm">{useCase.scenario}</h4>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-sm">{useCase.savings}</div>
                        <div className="text-xs text-slate-500">Savings</div>
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
                    bg-slate-800/50 backdrop-blur-lg rounded-xl border p-4 transition-all duration-300 transform
                    ${hoveredMetric === index ? 
                      'border-orange-500 scale-105 shadow-lg shadow-orange-500/10' : 
                      'border-slate-700'
                    }
                  `}
                >
                  <h3 className="font-bold text-white mb-3 flex items-center text-sm">
                    <MetricIcon size={16} className={`mr-2 ${metric.color}`} />
                    {metric.category}
                  </h3>
                  
                  <div className="space-y-2">
                    {metric.stats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-xs text-slate-400">{stat.label}</span>
                        <div className="text-right">
                          <span className="text-sm font-bold text-white">{stat.value}</span>
                          <span className="text-xs text-slate-500 ml-1">{stat.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section - Subtle but effective */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 text-center border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your MDM Implementation?
          </h2>
          <p className="text-xl text-slate-300 mb-6">
            Experience the power of AI-driven configuration today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg">
              Schedule Demo
            </button>
            <button className="px-8 py-3 bg-slate-700 text-white rounded-lg font-bold hover:bg-slate-600 transition-all duration-300 border border-slate-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};