import React from 'react';
import { BarChart3, CheckCircle, Brain, BarChart } from 'lucide-react';

export const SlideCompetitiveLandscape = () => {
  const competitors = [
    {
      platform: 'Temu / Shein',
      geography: 'Asia / Global',
      model: 'B2C',
      experience: 'Static, Cheap',
      weaknesses: 'Low trust, fake photos'
    },
    {
      platform: 'Amazon',
      geography: 'Global',
      model: 'Marketplace',
      experience: 'Long delivery, AI',
      weaknesses: 'Cold, impersonal, slow cross-border'
    },
    {
      platform: 'Taobao Live',
      geography: 'China',
      model: 'B2C + Live',
      experience: 'Interactive',
      weaknesses: "Doesn't scale globally"
    },
    {
      platform: 'TikTok Shop',
      geography: 'US / Asia',
      model: 'Creator',
      experience: 'Video + Viral',
      weaknesses: 'Shallow, no deep commerce tools'
    },
    {
      platform: 'LerBee',
      geography: 'Global',
      model: 'P2P Live',
      experience: 'Trusted + Social',
      weaknesses: 'Early-stage, but high retention',
      isHighlighted: true
    }
  ];

  const differentiators = [
    'Peer-to-peer trust loop',
    'Micro-community commerce',
    'Asset-light scaling',
    'Built-in logistics/payments',
    'Shopper = expert, not warehouse'
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            We're Not Competing on Price — We're Competing on Trust
          </h1>
        </div>

        {/* Competitive Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
            <BarChart3 size={24} className="text-lerbee-yellow" />
            Competitive Landscape
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-default">
                  <th className="text-left p-4 text-primary font-semibold">Platform</th>
                  <th className="text-left p-4 text-primary font-semibold">Geography</th>
                  <th className="text-left p-4 text-primary font-semibold">Model</th>
                  <th className="text-left p-4 text-primary font-semibold">Experience</th>
                  <th className="text-left p-4 text-primary font-semibold">Weaknesses</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp, index) => (
                  <tr 
                    key={index} 
                    className={`border-b ${comp.isHighlighted ? 'bg-surface border-lerbee-yellow' : 'border-default hover:bg-surface'} transition-colors`}
                  >
                    <td className={`p-4 ${comp.isHighlighted ? 'font-semibold text-primary' : 'text-primary'}`}>
                      {comp.platform}
                    </td>
                    <td className="p-4 text-secondary">{comp.geography}</td>
                    <td className="p-4 text-secondary">{comp.model}</td>
                    <td className="p-4 text-secondary">{comp.experience}</td>
                    <td className="p-4 text-secondary text-sm">{comp.weaknesses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* LerBee Differentiators */}
        <div className="bg-surface rounded-xl p-8 border border-lerbee-yellow mb-8">
          <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-3">
            <Brain size={24} className="text-lerbee-yellow" />
            LerBee Differentiators
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {differentiators.map((diff, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-lerbee-yellow flex-shrink-0" />
                <p className="text-primary">{diff}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center bg-primary border-2 border-lerbee-yellow rounded-xl p-6">
          <p className="text-xl text-primary font-semibold mb-2">
            We don't warehouse products —
          </p>
          <p className="text-2xl text-primary font-bold">
            We warehouse trust.
          </p>
        </div>
      </div>
    </div>
  );
};