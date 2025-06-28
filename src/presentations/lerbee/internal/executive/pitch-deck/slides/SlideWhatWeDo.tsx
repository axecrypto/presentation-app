import React from 'react';
import { Package, Users, Handshake, Globe, Zap, Camera, DollarSign, MessageCircle, Star, ShieldCheck, Truck } from 'lucide-react';
import { SlideHeader, QuoteBox, IconContainer, iconSizes, typography, spacing } from '../components/DesignSystem';

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
        <SlideHeader 
          title="LerBee Turns Everyday Routines into Global Opportunity"
          subtitle="A peer-to-peer marketplace where people earn by shopping, and others get trusted access to products worldwide."
        />
        
        <QuoteBox>
          "Every morning, Maria walks through Mexico City markets. Now, her daily routine feeds families in Miami."
        </QuoteBox>

        {/* Split screen visualization */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${spacing.margin.xl} mt-12`}>
          {/* Shopper Side */}
          <div className={`bg-surface rounded-xl ${spacing.lg} border border-default flex flex-col items-center`}>
            <h3 className={`${typography.heading} font-semibold text-primary text-center mb-6`}>
              Shopper
            </h3>
            
            <IconContainer size="xl" variant="secondary">
              <Users size={iconSizes.xl.icon} className="text-lerbee-yellow" />
            </IconContainer>
            
            {/* Feature icons */}
            <div className={`flex justify-center gap-4 mt-6 mb-6`}>
              <IconContainer size="small" variant="primary">
                <Camera size={iconSizes.small.icon} />
              </IconContainer>
              <IconContainer size="small" variant="primary">
                <DollarSign size={iconSizes.small.icon} />
              </IconContainer>
              <IconContainer size="small" variant="primary">
                <MessageCircle size={iconSizes.small.icon} />
              </IconContainer>
            </div>
            
            <p className={`text-center ${typography.body} text-secondary`}>
              Shopper earns by live-streaming and fulfilling requests
            </p>
          </div>

          {/* Buyer Side */}
          <div className={`bg-surface rounded-xl ${spacing.lg} border border-default flex flex-col items-center`}>
            <h3 className={`${typography.heading} font-semibold text-primary text-center mb-6`}>
              Buyer
            </h3>
            
            <IconContainer size="xl" variant="secondary">
              <Package size={iconSizes.xl.icon} className="text-lerbee-yellow" />
            </IconContainer>
            
            {/* Feature icons */}
            <div className={`flex justify-center gap-4 mt-6 mb-6`}>
              <IconContainer size="small" variant="primary">
                <Star size={iconSizes.small.icon} />
              </IconContainer>
              <IconContainer size="small" variant="primary">
                <ShieldCheck size={iconSizes.small.icon} />
              </IconContainer>
              <IconContainer size="small" variant="primary">
                <Truck size={iconSizes.small.icon} />
              </IconContainer>
            </div>
            
            <p className={`text-center ${typography.body} text-secondary`}>
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