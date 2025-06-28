import React from 'react';
import { Globe } from 'lucide-react';
import { SlideWrapper } from '../components/DesignSystem';

export const SlideTitle = () => {
  return (
    <SlideWrapper>
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-lerbee-yellow rounded-2xl">
            <span className="text-4xl">🐝</span>
          </div>
        </div>
        
        {/* Company Name */}
        <h2 className="text-2xl font-semibold text-secondary mb-8">Lerbee</h2>
        
        {/* Main heading */}
        <h1 className="text-6xl font-bold text-primary mb-6 leading-tight">
          Live Peer-to-Peer Shopping<br />
          at Global Scale
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-secondary max-w-2xl mx-auto mb-12">
          Shopping powered by real people - trust, style, and access without borders.
        </p>
        
        {/* Simple globe icon */}
        <div className="mb-12">
          <Globe size={80} className="text-lerbee-yellow mx-auto" />
        </div>
        
        {/* Contact info */}
        <div className="text-sm text-secondary">
          <p>Valeria Mikova • vmikova@lerbee.com • +1 407 634 9122</p>
        </div>
      </div>
    </SlideWrapper>
  );
};