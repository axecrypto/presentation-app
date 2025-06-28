import React, { useState } from 'react';
import { 
  Hammer, Rocket, DollarSign, ArrowRight
} from 'lucide-react';

export const SlideSimpleRoadmap = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      icon: Hammer,
      name: "Foundation",
      timeline: "6-9 months",
      description: "Connect first services to IDMC",
      deliverables: [
        "Technical architecture finalized",
        "3-5 pilot services integrated",
        "Basic monitoring dashboard",
        "Integration patterns established"
      ],
      outcome: "Prove it works"
    },
    {
      icon: Rocket,
      name: "Scale",
      timeline: "12-18 months",
      description: "Roll out across platform",
      deliverables: [
        "Major services integrated",
        "Analytics capabilities",
        "Automated alerting",
        "Team dashboards"
      ],
      outcome: "Internal value realized"
    },
    {
      icon: DollarSign,
      name: "Monetize",
      timeline: "18-24 months",
      description: "Enable new business models",
      deliverables: [
        "Customer-facing dashboards",
        "Usage-based pricing pilots",
        "Billing integration",
        "Self-service analytics"
      ],
      outcome: "Revenue models enabled"
    }
  ];

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-5xl font-bold text-primary mb-12 text-center">
          Simple 3-Phase Approach
        </h1>

        {/* Phase Timeline */}
        <div className="relative mb-12">
          <div className="absolute top-12 left-0 right-0 h-1 bg-muted"></div>
          <div className="flex justify-between relative">
            {phases.map((phase, index) => {
              const PhaseIcon = phase.icon;
              const isActive = activePhase === index;
              
              return (
                <div
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <div className={`
                    w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 z-10
                    ${isActive ? 
                      'bg-accent-orange shadow-xl ring-4 ring-accent-orange ring-opacity-30' : 
                      'bg-surface border-2 border-default hover:border-accent-orange'
                    }
                  `}>
                    <PhaseIcon size={32} className={isActive ? 'text-white' : 'text-primary'} />
                  </div>
                  <p className={`mt-3 text-lg font-bold ${isActive ? 'text-accent-orange' : 'text-primary'}`}>
                    {phase.name}
                  </p>
                  <p className="text-sm text-secondary">{phase.timeline}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="bg-surface rounded-xl p-8 border border-default">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Phase {activePhase + 1}: {phases[activePhase].name}
          </h2>
          <p className="text-xl text-secondary mb-6">
            {phases[activePhase].description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Key Deliverables</h3>
              <ul className="space-y-2">
                {phases[activePhase].deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ArrowRight className="text-accent-orange mt-1" size={16} />
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-accent-orange bg-opacity-10 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-secondary mb-2">Outcome</p>
                <p className="text-2xl font-bold text-accent-orange">
                  {phases[activePhase].outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};