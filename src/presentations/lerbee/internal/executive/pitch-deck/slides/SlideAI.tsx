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
          <div className="flex flex-col items-center">
            <IconContainer size="xl" variant="secondary">
              <Bot size={iconSizes.xl.icon} className="text-lerbee-yellow" />
            </IconContainer>
            <h2 className={`${typography.subtitle} font-semibold text-primary mt-6 mb-2`}>
              AI
            </h2>
            <p className={`${typography.large} text-secondary text-center`}>
              Automates operations<br/>
              Scales infinitely
            </p>
          </div>

          {/* Human Side */}
          <div className="flex flex-col items-center">
            <IconContainer size="xl" variant="primary">
              <Users size={iconSizes.xl.icon} />
            </IconContainer>
            <h2 className={`${typography.subtitle} font-semibold text-primary mt-6 mb-2`}>
              Humans
            </h2>
            <p className={`${typography.large} text-secondary text-center`}>
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