import React from 'react';
import { Bot, Users } from 'lucide-react';
import { SlideHeader, IconContainer, BottomTagline, iconSizes, typography, spacing } from '../components/DesignSystem';

export const SlideAI = () => {
  return (
    <div className="min-h-screen bg-primary p-8 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <SlideHeader 
          title="AI Scales the Machine. Humans Scale the Trust."
          subtitle="Technology handles the complexity. People handle the connection."
        />

        {/* Visual Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* AI Side */}
          <div className="text-center">
            <div className={spacing.margin.md}>
              <IconContainer size="xl" variant="secondary">
                <Bot size={iconSizes.xl.icon} className="text-lerbee-yellow" />
              </IconContainer>
            </div>
            <h2 className={`${typography.subtitle} font-semibold text-primary ${spacing.margin.sm}`}>
              AI
            </h2>
            <p className={`${typography.large} text-secondary`}>
              Automates operations<br/>
              Scales infinitely
            </p>
          </div>

          {/* Human Side */}
          <div className="text-center">
            <div className={spacing.margin.md}>
              <IconContainer size="xl" variant="primary">
                <Users size={iconSizes.xl.icon} />
              </IconContainer>
            </div>
            <h2 className={`${typography.subtitle} font-semibold text-primary ${spacing.margin.sm}`}>
              Humans
            </h2>
            <p className={`${typography.large} text-secondary`}>
              Build relationships<br/>
              Create trust
            </p>
          </div>
        </div>

        <BottomTagline
          line1="AI does the heavy lifting."
          line2="Humans do the heart work."
        />
      </div>
    </div>
  );
};