import React from 'react';
import { TrendingUp, Rocket, BarChart } from 'lucide-react';
import { SlideHeader, BottomTagline, iconSizes, typography, spacing } from '../components/DesignSystem';

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
        <SlideHeader 
          title="2025 Growth Plan: Driven by Retention, Community, and Scale"
        />

        {/* Metrics Table */}
        <div className={spacing.margin.xl}>
          <h2 className={`${typography.heading} font-semibold text-primary ${spacing.margin.md} flex items-center gap-3`}>
            <TrendingUp size={iconSizes.medium.icon} className="text-lerbee-yellow" />
            <span className="flex items-center gap-2">
              <BarChart size={iconSizes.small.icon} className="text-lerbee-yellow" />
              <span>2025 Target Metrics</span>
            </span>
            <span className={`${typography.body} text-secondary font-normal`}>(Assuming $1M Seed Round)</span>
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
                    <td className={`p-4 text-primary font-medium ${typography.body}`}>{item.metric}</td>
                    <td className={`p-4 text-secondary ${typography.body}`}>{item.current}</td>
                    <td className={`p-4 font-semibold ${typography.body} ${item.highlight ? 'text-lerbee-yellow' : 'text-primary'}`}>
                      {item.target}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Growth Levers */}
        <div className={spacing.margin.xl}>
          <h2 className={`${typography.heading} font-semibold text-primary ${spacing.margin.md} flex items-center gap-3`}>
            <Rocket size={iconSizes.medium.icon} className="text-lerbee-yellow" />
            <span>Key Growth Levers</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {growthLevers.map((lever, index) => (
              <div key={index} className={`bg-surface rounded-lg ${spacing.md} border border-default hover:border-lerbee-yellow transition-colors`}>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-lerbee-yellow rounded-full flex-shrink-0"></div>
                  <p className={`${typography.body} text-primary`}>{lever}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BottomTagline
          line1="With $1M, we turn traction into velocity."
          line2="Our community already works. It's time to scale it."
        />
      </div>
    </div>
  );
};