import React from 'react';
import { Users, Award } from 'lucide-react';

export const AppendixTeam = () => {
  const founders = [
    {
      name: 'Valeria Mikova',
      role: 'CEO & Founder',
      highlights: [
        'Built LerBee from zero to $4.5M+ GMV. UX, marketing, and community expert.',
        '16 years in business. Serial founder.',
        'Previous exit in e-commerce space'
      ]
    },
    {
      name: 'Denis Toporov',
      role: 'CGO & Co-founder',
      highlights: [
        'Ex-Product Director at Informatica. Co-founder at Centerfin.',
        'Go-to-market, fintech, AI & user growth strategy.',
        '15+ years in product and growth roles'
      ]
    },
    {
      name: 'Vasily Adushkin',
      role: 'CFO & Co-founder',
      highlights: [
        'Financial modeling, ops, and process automation in international projects.',
        'Ex-Big 4 audit and consulting',
        'Specialized in marketplace economics'
      ]
    },
    {
      name: 'Rustam Goigov',
      role: 'CTO & Co-founder',
      highlights: [
        'AI & backend architect. Previously at Coinbase, LinkedIn, TrippL.',
        'Built scalable systems serving millions',
        'Expert in distributed systems and AI'
      ]
    }
  ];

  const advisor = {
    name: 'Alexey Morov',
    role: 'Strategic Advisor',
    highlights: [
      'Ex-Stanford Health, Tesla. PhDs in AI & systems thinking.',
      'Award-winning speaker and GTM strategist.',
      'Published researcher in AI applications'
    ]
  };

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-secondary mb-2">APPENDIX</p>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Team Details & Background
          </h1>
        </div>

        {/* Founding Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
            <Users size={24} className="text-lerbee-yellow" />
            Founding Team - Full Profiles
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
                    <p key={idx} className="text-sm text-primary">• {highlight}</p>
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
            Strategic Advisor
          </h2>
          
          <div className="bg-surface rounded-xl p-6 border border-lerbee-yellow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-primary">{advisor.name}</h3>
              <p className="text-secondary">{advisor.role}</p>
            </div>
            <div className="space-y-2">
              {advisor.highlights.map((highlight, idx) => (
                <p key={idx} className="text-sm text-primary">• {highlight}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface rounded-xl p-6 border border-default text-center">
            <p className="text-3xl font-bold text-primary mb-2">60+</p>
            <p className="text-secondary">Combined years of experience</p>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-default text-center">
            <p className="text-3xl font-bold text-primary mb-2">5</p>
            <p className="text-secondary">Previous successful exits</p>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-default text-center">
            <p className="text-3xl font-bold text-primary mb-2">$500M+</p>
            <p className="text-secondary">Products built & scaled</p>
          </div>
        </div>

        {/* Company Experience */}
        <div>
          <p className="text-center text-secondary mb-6">Combined Experience From</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-primary font-semibold text-lg">Tesla</span>
            <span className="text-primary font-semibold text-lg">LinkedIn</span>
            <span className="text-primary font-semibold text-lg">Coinbase</span>
            <span className="text-primary font-semibold text-lg">Informatica</span>
            <span className="text-primary font-semibold text-lg">Stanford Health</span>
            <span className="text-primary font-semibold text-lg">Big 4</span>
          </div>
        </div>
      </div>
    </div>
  );
};