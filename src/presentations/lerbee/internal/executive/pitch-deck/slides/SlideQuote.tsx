import React from 'react';
import { Quote } from 'lucide-react';
import { SlideWrapper, typography } from '../components/DesignSystem';

export const SlideQuote = () => {
  return (
    <SlideWrapper>
      <div className="flex items-center justify-center h-full">
        <div className="text-center max-w-4xl">
          <Quote size={48} className="text-lerbee-yellow mx-auto mb-6 opacity-50" />
          
          <blockquote className={`${typography.subtitle} text-primary font-light leading-relaxed mb-8`}>
            "I don't trust what I see online. I want to ask someone who knows."
          </blockquote>
          
          <cite className={`${typography.large} text-secondary block`}>
            Ana, mother of 3, Barcelona
          </cite>
        </div>
      </div>
    </SlideWrapper>
  );
};