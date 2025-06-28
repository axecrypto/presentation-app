import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const SlideTitle = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Sparkles size={56} className="text-yellow-500" />
              </div>
              <div className="absolute -inset-4 bg-white opacity-20 rounded-3xl blur-xl"></div>
            </div>
          </div>
          
          {/* Company Name */}
          <div className="mb-6">
            <h1 className="text-8xl font-black text-white tracking-tight mb-2">
              LERBEE
            </h1>
            <div className="h-2 bg-white opacity-30 w-32 mx-auto rounded-full"></div>
          </div>
          
          {/* Tagline */}
          <p className="text-3xl text-white opacity-90 mb-16 font-light">
            Innovating Tomorrow, Today
          </p>
          
          {/* CTA */}
          <div className="flex justify-center">
            <div className="group relative">
              <div className="absolute -inset-1 bg-white opacity-25 rounded-full blur group-hover:opacity-40 transition-opacity"></div>
              <div className="relative flex items-center gap-3 bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span>Company Overview 2024</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};