import React from 'react';
import { Users, Award, Brain, MapPin, TrendingUp, Flame, Calculator, GraduationCap, Trophy } from 'lucide-react';

export const SlideTeam = () => {
  const founders = [
    {
      name: 'Valeria Mikova',
      role: 'CEO & Founder',
      highlights: [
        'Built LerBee from zero to $4.5M+ GMV. UX, marketing, and community expert.',
        '16 years in business. Serial founder.'
      ]
    },
    {
      name: 'Denis Toporov',
      role: 'CGO & Co-founder',
      highlights: [
        'Ex-Product Director at Informatica. Co-founder at Centerfin.',
        'Go-to-market, fintech, AI & user growth strategy.'
      ]
    },
    {
      name: 'Vasily Adushkin',
      role: 'CFO & Co-founder',
      highlights: [
        'Financial modeling, ops, and process automation in international projects.'
      ]
    },
    {
      name: 'Rustam Goigov',
      role: 'CTO & Co-founder',
      highlights: [
        'AI & backend architect. Previously at Coinbase, LinkedIn, TrippL.'
      ]
    }
  ];

  const advisor = {
    name: 'Alexey Morov',
    role: 'Strategic Advisor',
    highlights: [
      'Ex-Stanford Health, Tesla. PhDs in AI & systems thinking.',
      'Award-winning speaker and GTM strategist.'
    ]
  };

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            We've Done This Before — Now We're Doing It for the World
          </h1>
        </div>

        {/* Founding Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
            <Users size={24} className="text-lerbee-yellow" />
            <span>Founding Team</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founders.map((founder, index) => (
              <div key={index} className="bg-surface rounded-xl p-6 border border-default hover:border-lerbee-yellow transition-colors">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-primary">{founder.name}</h3>
                  <p className="text-secondary">{founder.role}</p>
                </div>
                <div className="space-y-2">
                  {founder.highlights.map((highlight, idx) => (
                    <p key={idx} className="text-sm text-primary">{highlight}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisor */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
            <Award size={24} className="text-lerbee-yellow" />
            <span>Advisor</span>
          </h2>
          
          <div className="bg-surface rounded-xl p-6 border border-lerbee-yellow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-primary">{advisor.name}</h3>
              <p className="text-secondary">{advisor.role}</p>
            </div>
            <div className="space-y-2">
              {advisor.highlights.map((highlight, idx) => (
                <p key={idx} className="text-sm text-primary">{highlight}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mb-12">
          <p className="text-center text-secondary mb-6">Previously at</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-primary font-semibold text-lg">Tesla</span>
            <span className="text-primary font-semibold text-lg">LinkedIn</span>
            <span className="text-primary font-semibold text-lg">Coinbase</span>
            <span className="text-primary font-semibold text-lg">Informatica</span>
            <span className="text-primary font-semibold text-lg">Stanford Health</span>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center bg-primary border-2 border-lerbee-yellow rounded-xl p-6">
          <p className="text-xl text-primary font-semibold mb-2">
            We're not hiring experts — we are the experts.
          </p>
          <p className="text-2xl text-primary font-bold">
            And we've already shipped.
          </p>
        </div>
      </div>
    </div>
  );
};