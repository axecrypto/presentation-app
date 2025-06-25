import React, { useState } from 'react';
import { 
  Lightbulb, AlertTriangle, TrendingUp, Users,
  Server, Code, BarChart, DollarSign
} from 'lucide-react';

export const SlideDiscoveryFindings = () => {
  const [activeTab, setActiveTab] = useState(0);

  const findings = [
    {
      category: "Technical",
      icon: Server,
      color: "blue",
      discoveries: [
        {
          title: "Fragmented Implementation",
          finding: "Each service has implemented metering differently",
          impact: "High maintenance cost, inconsistent data",
          recommendation: "Standardize on single framework"
        },
        {
          title: "Limited Tool Integration",
          finding: "ELK/Micrometer only partially deployed",
          impact: "Incomplete visibility across platform",
          recommendation: "Complete tool rollout with clear standards"
        },
        {
          title: "No Central Registry",
          finding: "Meters are not discoverable or catalogued",
          impact: "Cannot query across services effectively",
          recommendation: "Build meter registry service"
        }
      ]
    },
    {
      category: "Business",
      icon: DollarSign,
      color: "blue",
      discoveries: [
        {
          title: "Revenue Leakage Risk",
          finding: "Cannot accurately track billable usage",
          impact: "$2.5M annual revenue at risk",
          recommendation: "Prioritize revenue-impacting services"
        },
        {
          title: "Customer Dissatisfaction",
          finding: "No transparency into usage or limits",
          impact: "Support tickets increasing 30% QoQ",
          recommendation: "Build customer dashboard MVP"
        },
        {
          title: "Competitive Disadvantage",
          finding: "Competitors offer detailed usage analytics",
          impact: "Lost deals in enterprise segment",
          recommendation: "Match competitor capabilities by Q2"
        }
      ]
    },
    {
      category: "Organizational",
      icon: Users,
      color: "orange",
      discoveries: [
        {
          title: "Unclear Ownership",
          finding: "No dedicated team owns metering platform",
          impact: "Slow progress, competing priorities",
          recommendation: "Form dedicated metering team"
        },
        {
          title: "Skill Gaps",
          finding: "Limited expertise in observability tools",
          impact: "Dependency on external consultants",
          recommendation: "Training program + hiring plan"
        },
        {
          title: "Siloed Efforts",
          finding: "Teams building duplicate solutions",
          impact: "Wasted effort, inconsistent approach",
          recommendation: "Central architecture governance"
        }
      ]
    }
  ];

  const meeterTypes = [
    { type: "Concurrency Limits", example: "Simultaneous API connections", priority: "High" },
    { type: "API Rate Limits", example: "Requests per second/minute", priority: "High" },
    { type: "Ingestion Volume", example: "Records processed per hour", priority: "Critical" },
    { type: "Matching Operations", example: "Match/merge transactions", priority: "Medium" },
    { type: "Error Rates", example: "Failed operations tracking", priority: "Medium" },
    { type: "Data Volume", example: "Storage consumption", priority: "Low" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">
            Discovery <span className="text-blue-400">Findings</span>
          </h1>
          <p className="text-xl text-slate-300">
            Key insights from architecture review and stakeholder interviews
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          {findings.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300
                  ${activeTab === index ? 
                    'bg-blue-600 text-white shadow-lg scale-105' : 
                    'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }
                `}
              >
                <CategoryIcon size={20} />
                {category.category}
              </button>
            );
          })}
        </div>

        {/* Active Category Findings */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {findings[activeTab].discoveries.map((discovery, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <Lightbulb size={20} className="text-orange-400" />
                    {discovery.title}
                  </h3>
                  <p className="text-slate-300">{discovery.finding}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-red-400 mb-2 flex items-center gap-2">
                    <AlertTriangle size={16} />
                    Impact
                  </h4>
                  <p className="text-slate-300">{discovery.impact}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-400 mb-2 flex items-center gap-2">
                    <TrendingUp size={16} />
                    Recommendation
                  </h4>
                  <p className="text-slate-300">{discovery.recommendation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meter Types Identified */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BarChart className="text-blue-400" />
            Meter Types Identified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {meeterTypes.map((meter, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="font-bold text-white">{meter.type}</h4>
                  <p className="text-sm text-slate-400">{meter.example}</p>
                </div>
                <span className={`
                  px-3 py-1 rounded-full text-xs font-bold
                  ${meter.priority === 'Critical' ? 'bg-red-500 text-white' :
                    meter.priority === 'High' ? 'bg-orange-500 text-white' :
                    'bg-blue-500 text-white'
                  }
                `}>
                  {meter.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-8 bg-blue-900/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
          <h3 className="text-xl font-bold text-white mb-3">Key Takeaway</h3>
          <p className="text-blue-300">
            We have the vision and partial technical foundation, but need focused execution 
            on service integration and organizational alignment to deliver value quickly.
          </p>
        </div>
      </div>
    </div>
  );
};