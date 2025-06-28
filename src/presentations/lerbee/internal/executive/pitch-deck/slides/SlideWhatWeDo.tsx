import React from 'react';
import { Package, Users, Handshake, Globe, Zap, Camera, DollarSign, MessageCircle, Star, ShieldCheck, Truck } from 'lucide-react';

export const SlideWhatWeDo = () => {
  const keyPoints = [
    { icon: Package, text: 'Global product access with real-time validation' },
    { icon: Users, text: 'Verified shoppers earn by doing what they love' },
    { icon: Handshake, text: 'Trust loop with video, chat, and direct fulfillment' },
    { icon: Globe, text: 'Cross-border shopping, zero warehouses' },
    { icon: Zap, text: 'AI-enabled logistics, content, and translations' },
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            LerBee Turns Everyday Routines into Global Opportunity
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            A peer-to-peer marketplace where people earn by shopping —
            and others get trusted access to products worldwide.
          </p>
          <div className="mt-8 bg-surface rounded-xl p-6 border border-lerbee-yellow max-w-2xl mx-auto">
            <p className="text-lg text-primary italic">
              "Every morning, Maria walks through Mexico City markets. Now, her daily routine feeds families in Miami."
            </p>
          </div>
        </div>

        {/* Split screen visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Shopper Side */}
          <div className="bg-surface rounded-xl p-8 border border-default">
            <h3 className="text-2xl font-semibold text-primary mb-6">Shopper</h3>
            
            {/* Icon placeholder */}
            <div className="w-32 h-32 bg-surface rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-lerbee-yellow">
              <Users size={64} className="text-lerbee-yellow" />
            </div>
            
            {/* Feature icons */}
            <div className="flex justify-center gap-6 mb-6">
              <div className="w-12 h-12 bg-lerbee-yellow rounded-lg flex items-center justify-center">
                <Camera size={24} />
              </div>
              <div className="w-12 h-12 bg-lerbee-yellow rounded-lg flex items-center justify-center">
                <DollarSign size={24} />
              </div>
              <div className="w-12 h-12 bg-lerbee-yellow rounded-lg flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
            </div>
            
            <p className="text-center text-secondary">
              Shopper earns by live-streaming and fulfilling requests
            </p>
          </div>

          {/* Buyer Side */}
          <div className="bg-surface rounded-xl p-8 border border-default">
            <h3 className="text-2xl font-semibold text-primary mb-6">Buyer</h3>
            
            {/* Icon placeholder */}
            <div className="w-32 h-32 bg-surface rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-lerbee-yellow">
              <Package size={64} className="text-lerbee-yellow" />
            </div>
            
            {/* Feature icons */}
            <div className="flex justify-center gap-6 mb-6">
              <div className="w-12 h-12 bg-lerbee-yellow rounded-lg flex items-center justify-center">
                <Star size={24} />
              </div>
              <div className="w-12 h-12 bg-lerbee-yellow rounded-lg flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <div className="w-12 h-12 bg-lerbee-yellow rounded-lg flex items-center justify-center">
                <Truck size={24} />
              </div>
            </div>
            
            <p className="text-center text-secondary">
              Buyer shops with trust, personal advice, and global access
            </p>
          </div>
        </div>

        {/* Key Points */}
        <div className="space-y-3">
          {keyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="flex items-center gap-4 bg-surface rounded-lg p-4 border border-default hover:border-lerbee-yellow transition-colors">
                <div className="w-10 h-10 bg-lerbee-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={20} />
                </div>
                <p className="text-primary">{point.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};