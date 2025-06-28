import React from 'react';
import { Bot, Users, RefreshCw, PenTool, Globe, Package, Search, BarChart3, Video, Brain, MessageCircle, Palette, RotateCw } from 'lucide-react';

export const SlideAI = () => {
  const aiTasks = [
    { icon: PenTool, task: 'Autogenerates product descriptions' },
    { icon: Globe, task: 'Translates chats and listings' },
    { icon: Package, task: 'Suggests optimal logistics/fulfillment methods' },
    { icon: Search, task: 'Surfaces top shopper content using engagement signals' },
    { icon: BarChart3, task: 'Improves trust signals with behavior-based shopper scoring' }
  ];

  const humanTasks = [
    { icon: Video, task: 'Host live streams, share context and nuance' },
    { icon: Brain, task: 'Provide personalized advice & taste' },
    { icon: MessageCircle, task: 'Build real connection in chat' },
    { icon: Palette, task: 'Curate — not just sell' },
    { icon: RotateCw, task: 'Retain micro-community trust and loyalty' }
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            AI Scales the Machine. Humans Scale the Trust.
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto mt-4">
            Technology handles the complexity. People handle the connection.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: What AI Does */}
          <div className="bg-surface rounded-xl p-8 border border-default">
            <div className="flex items-center gap-3 mb-6">
              <Bot size={28} className="text-lerbee-yellow" />
              <h2 className="text-2xl font-semibold text-primary">
                What AI Does
              </h2>
            </div>
            <p className="text-secondary mb-6">Automation Layer</p>
            
            <div className="space-y-4">
              {aiTasks.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center flex-shrink-0 border border-lerbee-yellow">
                    <item.icon size={18} className="text-lerbee-yellow" />
                  </div>
                  <p className="text-primary">{item.task}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What Humans Do */}
          <div className="bg-surface rounded-xl p-8 border border-lerbee-yellow">
            <div className="flex items-center gap-3 mb-6">
              <Users size={28} className="text-lerbee-yellow" />
              <h2 className="text-2xl font-semibold text-primary">
                What Humans Do
              </h2>
            </div>
            <p className="text-secondary mb-6">Trust Layer</p>
            
            <div className="space-y-4">
              {humanTasks.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center flex-shrink-0 border border-lerbee-yellow">
                    <item.icon size={18} className="text-lerbee-yellow" />
                  </div>
                  <p className="text-primary">{item.task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI + Human Flywheel */}
        <div className="bg-surface rounded-xl p-8 border border-default mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <RefreshCw size={24} className="text-lerbee-yellow" />
            <h3 className="text-xl font-semibold text-primary">AI + Human Flywheel</h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="bg-primary border border-lerbee-yellow rounded-lg p-4">
              <p className="text-sm text-primary font-medium">AI reduces overhead</p>
            </div>
            <span className="text-lerbee-yellow">→</span>
            <div className="bg-primary border border-lerbee-yellow rounded-lg p-4">
              <p className="text-sm text-primary font-medium">Humans focus on relationship</p>
            </div>
            <span className="text-lerbee-yellow">→</span>
            <div className="bg-primary border border-lerbee-yellow rounded-lg p-4">
              <p className="text-sm text-primary font-medium">More trust</p>
            </div>
            <span className="text-lerbee-yellow">→</span>
            <div className="bg-primary border border-lerbee-yellow rounded-lg p-4">
              <p className="text-sm text-primary font-medium">More data</p>
            </div>
            <span className="text-lerbee-yellow">→</span>
            <div className="bg-primary border border-lerbee-yellow rounded-lg p-4">
              <p className="text-sm text-primary font-medium">Better AI</p>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center bg-primary border-2 border-lerbee-yellow rounded-xl p-6">
          <p className="text-xl text-primary font-semibold mb-2">
            AI does the heavy lifting.
          </p>
          <p className="text-2xl text-primary font-bold">
            Humans do the heart work.
          </p>
        </div>
      </div>
    </div>
  );
};