import React from 'react';
import { Package, Users, Camera, DollarSign, MessageCircle, Star, ShieldCheck, Truck } from 'lucide-react';
import { SlideHeader, typography, SlideWrapper } from '../components/DesignSystem';

export const SlideWhatWeDo = () => {
  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          title="We Connect Shoppers with Buyers Globally"
          subtitle="Turning everyday shopping into income opportunities"
        />

        {/* Split screen visualization */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Shopper Side */}
          <div className="bg-surface rounded-xl p-6 border border-default h-full">
            <div className="flex items-center gap-3 mb-6 h-12">
              <div className="w-10 h-10 bg-lerbee-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users size={20} className="text-lerbee-yellow" />
              </div>
              <h3 className={`${typography.heading} font-semibold text-primary`}>
                Shoppers
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                  <Camera size={18} className="text-lerbee-yellow" />
                </div>
                <p className={`${typography.small} text-primary`}>Live stream while shopping</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                  <DollarSign size={18} className="text-lerbee-yellow" />
                </div>
                <p className={`${typography.small} text-primary`}>Earn from every purchase</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                  <MessageCircle size={18} className="text-lerbee-yellow" />
                </div>
                <p className={`${typography.small} text-primary`}>Build trusted relationships</p>
              </div>
            </div>
          </div>

          {/* Buyer Side */}
          <div className="bg-surface rounded-xl p-6 border border-default h-full">
            <div className="flex items-center gap-3 mb-6 h-12">
              <div className="w-10 h-10 bg-lerbee-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package size={20} className="text-lerbee-yellow" />
              </div>
              <h3 className={`${typography.heading} font-semibold text-primary`}>
                Buyers
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                  <Star size={18} className="text-lerbee-yellow" />
                </div>
                <p className={`${typography.small} text-primary`}>Access products worldwide</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-lerbee-yellow" />
                </div>
                <p className={`${typography.small} text-primary`}>Shop with verified locals</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                  <Truck size={18} className="text-lerbee-yellow" />
                </div>
                <p className={`${typography.small} text-primary`}>Direct shipping to your door</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Value Props */}
        <div className="bg-gradient-to-r from-lerbee-yellow/10 to-lerbee-orange/10 rounded-xl p-6">
          <h3 className={`${typography.heading} font-semibold text-primary mb-6 text-center`}>
            How It Works
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-lerbee-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <p className={`${typography.small} text-primary`}>Shoppers go live from stores & markets</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-lerbee-orange rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <p className={`${typography.small} text-primary`}>Buyers chat, request, and purchase</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-lerbee-green rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <p className={`${typography.small} text-primary`}>Direct fulfillment with trust</p>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center mt-6">
          <p className={`${typography.large} text-secondary font-medium`}>
            Zero inventory. Zero warehouses. 100% human connections.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};