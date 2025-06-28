import React from 'react';
import { Brain } from 'lucide-react';
import { SlideHeader, IconContainer, BottomTagline, iconSizes, typography, spacing } from '../components/DesignSystem';

export const SlideCompetitiveLandscape = () => {
  const competitors = [
    { name: 'Amazon', weakness: 'Cold & impersonal' },
    { name: 'Temu/Shein', weakness: 'Low trust' },
    { name: 'TikTok Shop', weakness: 'Shallow commerce' },
    { name: 'LerBee', weakness: 'Trust-first P2P', isUs: true }
  ];

  return (
    <div className="min-h-screen bg-primary p-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <SlideHeader 
          title="We're Not Competing on Price"
          subtitle="We're Competing on Trust"
        />

        {/* Simple Comparison */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {competitors.map((comp, index) => (
            <div 
              key={index} 
              className={`text-center ${spacing.md} rounded-xl ${
                comp.isUs 
                  ? 'bg-surface border-2 border-lerbee-yellow' 
                  : 'bg-surface border border-default'
              }`}
            >
              <h3 className={`${typography.large} font-semibold ${spacing.margin.sm} ${
                comp.isUs ? 'text-primary' : 'text-secondary'
              }`}>
                {comp.name}
              </h3>
              <p className={`${typography.small} ${
                comp.isUs ? 'text-primary font-medium' : 'text-muted'
              }`}>
                {comp.weakness}
              </p>
            </div>
          ))}
        </div>

        {/* Core Differentiator */}
        <div className="flex justify-center mb-16">
          <div className={`bg-surface rounded-xl ${spacing.lg} border border-lerbee-yellow flex flex-col items-center`}>
            <IconContainer size="large" variant="primary">
              <Brain size={iconSizes.large.icon} />
            </IconContainer>
            <p className={`${typography.heading} text-primary font-semibold mt-4 text-center`}>
              Peer-to-peer trust + Micro-communities
            </p>
          </div>
        </div>

        <BottomTagline
          line1="We don't warehouse products,"
          line2="We warehouse trust."
        />
      </div>
    </div>
  );
};