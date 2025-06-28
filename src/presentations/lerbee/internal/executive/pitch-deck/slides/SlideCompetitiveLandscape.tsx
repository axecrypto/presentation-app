import React from 'react';
import { Users, Shield, Zap, Globe } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideCompetitiveLandscape = () => {
  const competitors = [
    { 
      name: 'Amazon', 
      model: 'Marketplace',
      weakness: 'Cold, impersonal, slow cross-border',
      trust: 2,
      social: 0,
      global: 3
    },
    { 
      name: 'Temu/Shein', 
      model: 'B2C Direct',
      weakness: 'Low trust, fake photos, quality issues',
      trust: 1,
      social: 0,
      global: 3
    },
    { 
      name: 'TikTok Shop', 
      model: 'Creator Commerce',
      weakness: 'Shallow, entertainment-first, limited tools',
      trust: 2,
      social: 3,
      global: 2
    },
    { 
      name: 'LerBee', 
      model: 'P2P Live Shopping',
      weakness: 'Trust + Community + Global Reach',
      trust: 3,
      social: 3,
      global: 3,
      isUs: true 
    }
  ];

  const advantages = [
    { icon: Users, text: 'Micro-communities > Mass market' },
    { icon: Shield, text: 'Human trust > AI recommendations' },
    { icon: Zap, text: 'Live interaction > Static listings' },
    { icon: Globe, text: 'Local expertise > Central warehouse' }
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="We're Not Competing on Price, We're Competing on Trust"
          subtitle="Different model, different moat"
        />

        {/* Comparison Table */}
        <div className="mb-6">
          <div className="overflow-hidden rounded-xl border border-default">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr className="border-b border-default">
                  <th className="text-left p-3 text-primary font-semibold">Platform</th>
                  <th className="text-left p-3 text-primary font-semibold">Model</th>
                  <th className="text-center p-3 text-primary font-semibold">Trust</th>
                  <th className="text-center p-3 text-primary font-semibold">Social</th>
                  <th className="text-center p-3 text-primary font-semibold">Global</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-default ${
                      comp.isUs ? 'bg-gradient-to-r from-lerbee-yellow/10 to-lerbee-orange/10' : ''
                    }`}
                  >
                    <td className={`p-3 font-medium ${comp.isUs ? 'text-primary' : 'text-secondary'}`}>
                      {comp.name}
                    </td>
                    <td className="p-3 text-secondary">{comp.model}</td>
                    <td className="p-3 text-center">
                      <div className="flex justify-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < comp.trust 
                                ? comp.isUs ? 'bg-lerbee-yellow' : 'bg-gray-400'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex justify-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < comp.social 
                                ? comp.isUs ? 'bg-lerbee-yellow' : 'bg-gray-400'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex justify-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < comp.global 
                                ? comp.isUs ? 'bg-lerbee-yellow' : 'bg-gray-400'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Our Advantages */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div key={index} className="border border-lerbee-yellow/30 rounded-lg p-3 flex items-center gap-3">
                <Icon size={20} className="text-lerbee-yellow flex-shrink-0" />
                <p className={`${typography.small} text-primary`}>{adv.text}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <p className={`${typography.large} text-secondary font-medium`}>
            "We don't warehouse products, we warehouse trust."
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};