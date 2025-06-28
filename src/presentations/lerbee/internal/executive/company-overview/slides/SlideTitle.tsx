import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const SlideTitle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-orange-500 to-orange-700 text-white p-8 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-lg">
            <Sparkles size={48} className="text-white" />
          </div>
        </div>
        
        {/* Company Name */}
        <h1 className="text-7xl font-bold mb-4 tracking-tight">
          Lerbee
        </h1>
        
        {/* Tagline */}
        <p className="text-2xl mb-12 text-yellow-100">
          Innovating Tomorrow, Today
        </p>
        
        {/* CTA */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-lg px-6 py-3 rounded-full">
            <span className="text-lg font-medium">Company Overview 2024</span>
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};