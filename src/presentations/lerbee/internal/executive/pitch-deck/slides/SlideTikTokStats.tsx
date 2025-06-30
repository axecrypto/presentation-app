import React from 'react';
import { TrendingUp, DollarSign, ShoppingCart, Users, ArrowRight, Zap } from 'lucide-react';
import { SlideHeader, SlideWrapper, typography, IconContainer } from '../components/DesignSystem';
import lerbeeAppScreenshot from '../assets/screenshots/lerbee-app-live-transparent.png';

export const SlideTikTokStats = () => {
  return (
    <SlideWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Custom header for better hierarchy */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-primary mb-2">
            $50K Investment → 2X in 6 Months
          </h1>
          <p className="text-xl text-secondary">
            Live shopping platform with proven traction scaling globally
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Current Traction */}
          <div className="space-y-3">
            {/* Proven Metrics */}
            <div className="rounded-lg p-4 bg-gradient-to-br from-lerbee-yellow/20 to-lerbee-orange/20 dark:from-lerbee-yellow/30 dark:to-lerbee-orange/30 border-2 border-lerbee-yellow">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                <TrendingUp size={20} className="text-lerbee-yellow" />
                Proven Traction
              </h3>
              
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">GMV (6mo)</span>
                  <span className="text-2xl font-bold text-primary">$390K</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Users</span>
                  <span className="text-2xl font-bold text-primary">7,800</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Repeat Rate</span>
                  <span className="text-2xl font-bold text-primary">95%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">CAC</span>
                  <div className="flex items-center gap-2">
                    <span className="text-base text-secondary line-through">$20</span>
                    <ArrowRight size={16} className="text-lerbee-yellow" />
                    <span className="text-2xl font-bold text-lerbee-yellow">$1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Terms */}
            <div className="rounded-lg p-3 border-2 border-lerbee-yellow/30 bg-lerbee-yellow/5 dark:bg-lerbee-yellow/10">
              <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                <DollarSign size={20} className="text-lerbee-yellow" />
                Investment Terms
              </h3>
              
              <div className="space-y-2">
                <div className="text-center p-2.5 bg-lerbee-yellow/20 rounded">
                  <p className="text-3xl font-bold text-lerbee-yellow">$50K</p>
                  <p className="text-sm text-primary">Minimum</p>
                </div>
                <div className="space-y-1 text-sm text-primary">
                  <p>• $1.5M seed round</p>
                  <p>• SAFE, 20% discount</p>
                  <p>• Pro-rata rights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - App Screenshot */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-2 -left-2 bg-red-500 text-white px-2.5 py-1 rounded-full text-sm font-bold flex items-center gap-1 z-10 shadow-md">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                LIVE
              </div>
              <div className="bg-transparent">
                <img 
                  src={lerbeeAppScreenshot}
                  alt="LerBee Live Shopping App"
                  className="w-full max-w-[260px]"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-lerbee-yellow text-black px-3 py-1.5 rounded text-base font-bold z-10 shadow-md">
                274 Shoppers
              </div>
            </div>
          </div>

          {/* Right Column - Growth Projections */}
          <div className="space-y-3">
            {/* 6 Month Target */}
            <div className="rounded-lg p-3.5 bg-gradient-to-br from-green-500/20 to-green-600/20 dark:from-green-500/30 dark:to-green-600/30 border-2 border-green-500">
              <h3 className="text-lg font-bold text-primary mb-2.5 flex items-center gap-2">
                <Zap size={20} className="text-green-500" />
                6 Month Target
              </h3>
              
              <div className="text-center p-3 bg-green-500/20 rounded mb-3">
                <p className="text-4xl font-bold text-green-600 dark:text-green-400">2X</p>
                <p className="text-sm text-primary">Return Multiple</p>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-secondary">GMV</span>
                  <span className="text-base font-bold text-primary">$390K → $780K</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-secondary">Users</span>
                  <span className="text-base font-bold text-primary">7.8K → 15.6K</span>
                </div>
              </div>
            </div>

            {/* 12 Month Target */}
            <div className="rounded-lg p-3.5 bg-gradient-to-br from-lerbee-yellow to-lerbee-orange">
              <h3 className="text-lg font-bold text-black mb-2.5">12 Month Target</h3>
              
              <div className="text-center p-3 bg-black/10 rounded mb-3">
                <p className="text-5xl font-bold text-black">4X</p>
                <p className="text-sm text-black">Return Multiple</p>
              </div>
              
              <div className="space-y-1.5 text-black">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm">GMV</span>
                  <span className="text-lg font-bold">$1.56M</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm">Revenue</span>
                  <span className="text-lg font-bold">$125K</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm">Users</span>
                  <span className="text-lg font-bold">31.2K</span>
                </div>
              </div>
              
              <button className="w-full bg-black hover:bg-gray-900 text-white font-bold py-2.5 px-5 rounded-lg text-base transition-colors mt-3">
                Get Investor Deck
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-6">
          <p className="text-lg text-secondary font-medium">
            No inventory. No warehouses. Just human connections driving commerce.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};