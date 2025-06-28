import React from 'react';
import { TrendingUp, Rocket, BarChart } from 'lucide-react';

export const SlideForecast = () => {
  const metrics = [
    {
      metric: 'Registered Users',
      current: '7,810',
      target: '100,000',
      highlight: true
    },
    {
      metric: 'Paying Clients',
      current: '647',
      target: '20,000',
      highlight: true
    },
    {
      metric: 'GMV',
      current: '$390,000',
      target: '$8–15M',
      highlight: true
    },
    {
      metric: 'Platform Revenue',
      current: '~$20–30K (organic)',
      target: '$640K–1.2M'
    },
    {
      metric: 'Runway',
      current: '–',
      target: '18 months'
    }
  ];

  const growthLevers = [
    'LATAM + MENA shopper expansion',
    'Referrals and UGC as virality engine',
    'AI-enabled content scaling',
    'Creator education + community tools',
    'Higher-value categories (home, wellness, limited drops)'
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            2025 Growth Plan — Driven by Retention, Community, and Scale
          </h1>
        </div>

        {/* Metrics Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
            <TrendingUp size={24} className="text-lerbee-yellow" />
            <span className="flex items-center gap-2">
              <BarChart size={20} className="text-lerbee-yellow" />
              <span>2025 Target Metrics</span>
            </span>
            <span className="text-lg text-secondary font-normal">(Assuming $1M Seed Round)</span>
          </h2>
          
          <div className="bg-surface rounded-xl overflow-hidden border border-default">
            <table className="w-full">
              <thead>
                <tr className="border-b border-default bg-muted">
                  <th className="text-left p-4 text-primary font-semibold">Metric</th>
                  <th className="text-left p-4 text-primary font-semibold">2024 (Current)</th>
                  <th className="text-left p-4 text-primary font-semibold">2025 (Target)</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-default ${item.highlight ? 'hover:bg-surface' : ''}`}
                  >
                    <td className="p-4 text-primary font-medium">{item.metric}</td>
                    <td className="p-4 text-secondary">{item.current}</td>
                    <td className={`p-4 font-semibold ${item.highlight ? 'text-lerbee-yellow' : 'text-primary'}`}>
                      {item.target}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Growth Levers */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
            <Rocket size={24} className="text-lerbee-yellow" />
            <span>Key Growth Levers</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {growthLevers.map((lever, index) => (
              <div key={index} className="bg-surface rounded-lg p-4 border border-default hover:border-lerbee-yellow transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-lerbee-yellow rounded-full flex-shrink-0"></div>
                  <p className="text-primary">{lever}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center bg-primary border-2 border-lerbee-yellow rounded-xl p-6">
          <p className="text-xl text-primary font-semibold mb-2">
            With $1M, we turn traction into velocity.
          </p>
          <p className="text-2xl text-primary font-bold">
            Our community already works — it's time to scale it.
          </p>
        </div>
      </div>
    </div>
  );
};