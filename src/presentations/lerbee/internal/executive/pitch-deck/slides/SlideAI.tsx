import React from 'react';
import { Bot, Users, PenTool, Globe, Package, Brain, MessageCircle, TrendingUp } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography } from '../components/DesignSystem';

export const SlideAI = () => {
  const aiTasks = [
    { icon: PenTool, task: 'Auto-generates listings' },
    { icon: Globe, task: 'Translates 50+ languages' },
    { icon: Package, task: 'Routes logistics' },
    { icon: TrendingUp, task: 'Optimizes discovery' }
  ];

  const humanTasks = [
    { icon: MessageCircle, task: 'Builds relationships' },
    { icon: Brain, task: 'Provides taste & style' },
    { icon: Users, task: 'Creates community' },
    { icon: TrendingUp, task: 'Earns trust' }
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="AI Scales Operations. Humans Scale Trust."
          subtitle="The perfect partnership for global peer-to-peer commerce"
        />

        {/* Main Split */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* AI Side */}
          <div className="border-2 border-lerbee-yellow rounded-xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-lerbee-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bot size={24} className="text-lerbee-yellow" />
              </div>
              <h3 className={`${typography.heading} font-semibold text-primary`}>AI Handles</h3>
            </div>
            <div className="space-y-3">
              {aiTasks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Icon size={18} className="text-lerbee-yellow" />
                    </div>
                    <p className={`${typography.small} text-primary`}>{item.task}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Human Side */}
          <div className="border-2 border-lerbee-yellow rounded-xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-lerbee-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users size={24} className="text-lerbee-yellow" />
              </div>
              <h3 className={`${typography.heading} font-semibold text-primary`}>Humans Deliver</h3>
            </div>
            <div className="space-y-3">
              {humanTasks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Icon size={18} className="text-lerbee-yellow" />
                    </div>
                    <p className={`${typography.small} text-primary`}>{item.task}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* The Result */}
        <div className="bg-gradient-to-r from-lerbee-yellow/10 to-lerbee-orange/10 rounded-xl p-4 text-center mb-6">
          <p className={`${typography.body} text-primary mb-2`}>
            <span className="font-bold">Result:</span> Seamless experience + Deep engagement + 95% retention
          </p>
          <p className={`${typography.small} text-secondary`}>
            AI removes friction. Humans add magic. Together they create addiction.
          </p>
        </div>

        {/* Bottom message */}
        <div className="text-center">
          <p className={`${typography.large} text-secondary font-medium`}>
            "We're not replacing shoppers with AI. We're empowering them with it."
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};