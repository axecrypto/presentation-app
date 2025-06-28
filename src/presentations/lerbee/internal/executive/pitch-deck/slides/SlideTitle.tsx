import React from 'react';
import { SlideWrapper } from '../components/DesignSystem';
import lerbeeLogo from '../assets/logo/lerbee-logo.png';

export const SlideTitle = () => {
  // Option 1: Split layout with logo on left, content on right
  const option1 = (
    <SlideWrapper>
      <div className="flex items-center justify-between gap-12">
        <div className="flex-shrink-0">
          <img 
            src={lerbeeLogo} 
            alt="Lerbee" 
            className="h-40 w-auto"
          />
        </div>
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-bold text-primary mb-4 leading-tight">
            Shop Together.<br />
            Trust Your Community.
          </h1>
          <p className="text-xl text-secondary mb-8">
            Shopping powered by real people - trust, style, and access without borders.
          </p>
          <div className="text-sm text-secondary">
            <p>Valeria Mikova • vmikova@lerbee.com • +1 407 634 9122</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );

  // Option 2: Logo as watermark behind text
  const option2 = (
    <SlideWrapper>
      <div className="relative">
        {/* Watermark logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img 
            src={lerbeeLogo} 
            alt="" 
            className="h-96 w-auto"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-primary mb-6 leading-tight">
            Live Peer-to-Peer Shopping<br />
            at Global Scale
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto mb-16">
            Shopping powered by real people - trust, style, and access without borders.
          </p>
          <div className="text-sm text-secondary">
            <p>Valeria Mikova • vmikova@lerbee.com • +1 407 634 9122</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );

  // Option 3: Logo integrated with title
  const option3 = (
    <SlideWrapper>
      <div className="text-center">
        <div className="flex items-center justify-center gap-6 mb-8">
          <img 
            src={lerbeeLogo} 
            alt="Lerbee" 
            className="h-20 w-auto"
          />
          <div className="h-16 w-px bg-gray-300"></div>
          <h2 className="text-4xl font-light text-primary">presents</h2>
        </div>
        
        <h1 className="text-6xl font-bold text-primary mb-6 leading-tight">
          Live Peer-to-Peer Shopping<br />
          at Global Scale
        </h1>
        
        <p className="text-xl text-secondary max-w-2xl mx-auto mb-16">
          Shopping powered by real people - trust, style, and access without borders.
        </p>
        
        <div className="text-sm text-secondary">
          <p>Valeria Mikova • vmikova@lerbee.com • +1 407 634 9122</p>
        </div>
      </div>
    </SlideWrapper>
  );

  // Current option (centered above)
  const current = (
    <SlideWrapper>
      <div className="text-center relative">
        <div className="mb-8">
          <img 
            src={lerbeeLogo} 
            alt="Lerbee" 
            className="h-16 w-auto mx-auto"
          />
        </div>
        
        <h1 className="text-6xl font-bold text-primary mb-6 leading-tight">
          Live Peer-to-Peer Shopping<br />
          at Global Scale
        </h1>
        
        <p className="text-xl text-secondary max-w-2xl mx-auto mb-16">
          Shopping powered by real people - trust, style, and access without borders.
        </p>
        
        <div className="text-sm text-secondary">
          <p>Valeria Mikova • vmikova@lerbee.com • +1 407 634 9122</p>
        </div>
      </div>
    </SlideWrapper>
  );

  // Change this to try different options
  return option1;
};