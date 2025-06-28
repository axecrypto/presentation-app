import React from 'react';
import { 
  Calendar, CheckCircle, Package, Users, Bot, Globe, CreditCard, BarChart,
  Rocket, Users2, Settings, Brain, ShoppingBag, Check, FlaskConical,
  RefreshCw, Wrench, TrendingUp, DollarSign, Database, Handshake,
  Languages
} from 'lucide-react';
import { SlideHeader, BottomTagline, typography } from '../components/DesignSystem';

export const SlideRoadmap = () => {
  const quarters = [
    {
      period: 'Q3 2025',
      dateRange: 'Now → Sep',
      goal: 'Ship solid, beautiful foundation',
      icon: <CheckCircle className="w-5 h-5 text-lerbee-green" />,
      color: 'bg-surface border-default',
      items: [
        { icon: <Check className="w-4 h-4 text-lerbee-green" />, text: 'Version 2 released with upgraded UI/UX' },
        { icon: <FlaskConical className="w-4 h-4 text-lerbee-yellow" />, text: 'Android stability and device coverage' },
        { icon: <RefreshCw className="w-4 h-4 text-lerbee-orange" />, text: 'Retention improvements (bug fixes, push logic, in-app comms)' },
        { icon: <Wrench className="w-4 h-4 text-secondary" />, text: 'Finalize PLG hooks (invite, sharing, auto-content, etc.)' }
      ]
    },
    {
      period: 'Q4 2025',
      dateRange: 'Oct → Dec',
      goal: 'Revenue-driving scale before holiday season',
      icon: <Package className="w-5 h-5 text-lerbee-orange" />,
      color: 'bg-surface border-default',
      items: [
        { icon: <Rocket className="w-4 h-4 text-lerbee-yellow" />, text: 'Version 3 launch (Black Friday ready)' },
        { icon: <Users2 className="w-4 h-4 text-lerbee-green" />, text: 'Micro-influencer onboarding tools' },
        { icon: <Package className="w-4 h-4 text-lerbee-orange" />, text: 'Shopper-side optimization (streamlining flow, CRM tools)' },
        { icon: <Bot className="w-4 h-4 text-secondary" />, text: 'AI agents: chat response, language support, pre-fill logistics' },
        { icon: <Globe className="w-4 h-4 text-lerbee-yellow" />, text: 'Launch India + LATAM growth partnerships' },
        { icon: <ShoppingBag className="w-4 h-4 text-lerbee-green" />, text: 'Limited-time campaigns: Holiday discovery deals, themed sessions' }
      ]
    },
    {
      period: 'Q1–Q2 2026',
      dateRange: 'Optional Preview',
      goal: 'Operational scale & monetization expansion',
      icon: <TrendingUp className="w-5 h-5 text-lerbee-yellow" />,
      color: 'bg-surface border-default',
      items: [
        { icon: <CreditCard className="w-4 h-4 text-lerbee-green" />, text: 'Shopper monetization tools (subscriptions, boost, insights)' },
        { icon: <BarChart className="w-4 h-4 text-lerbee-orange" />, text: 'In-app dashboards: earnings, buyer analytics, trust score' },
        { icon: <Handshake className="w-4 h-4 text-lerbee-yellow" />, text: 'First brand/shop partnerships (curated product pools)' },
        { icon: <Languages className="w-4 h-4 text-secondary" />, text: 'Localization: Hindi, Portuguese, Arabic' },
        { icon: <Brain className="w-4 h-4 text-lerbee-green" />, text: 'AI-powered onboarding & support agent' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-primary p-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <SlideHeader 
          title="Roadmap: From Product Polish to Global Scale"
        />

        {/* Quarters Grid - Horizontal Layout */}
        <div className="relative">
          {/* Timeline connector - only visible on desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-lerbee-green via-lerbee-orange to-lerbee-yellow opacity-30" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative">
            {quarters.map((quarter, index) => (
            <div 
              key={index} 
              className={`rounded-lg border-2 ${quarter.color} p-4 transition-all hover:shadow-md flex flex-col h-full`}
            >
              {/* Quarter Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {quarter.icon}
                    <h3 className={`${typography.body} font-bold text-primary`}>
                      {quarter.period}
                    </h3>
                  </div>
                  <Calendar className="w-4 h-4 text-secondary" />
                </div>
                <p className={`${typography.small} text-secondary mb-2`}>
                  {quarter.dateRange}
                </p>
                <p className={`${typography.small} text-primary font-medium`}>
                  {quarter.goal}
                </p>
              </div>

              {/* Quarter Items */}
              <div className="space-y-2 flex-1">
                {quarter.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <p className={`${typography.tiny} text-primary flex-1`}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>

        <BottomTagline
          line1="We've built the core."
          line2="Now we're layering growth, intelligence, and monetization before the global wave hits."
        />
      </div>
    </div>
  );
};