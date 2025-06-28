import React from 'react';
import { Package, Cloud, Shield, Zap, ArrowRight } from 'lucide-react';

export const SlideProducts = () => {
  const products = [
    {
      icon: Cloud,
      name: "Lerbee Cloud",
      description: "Enterprise cloud infrastructure platform",
      features: ["99.99% uptime", "Global CDN", "Auto-scaling"]
    },
    {
      icon: Shield,
      name: "Lerbee Shield",
      description: "Advanced cybersecurity solution",
      features: ["AI-powered threat detection", "Zero-trust architecture", "24/7 monitoring"]
    },
    {
      icon: Zap,
      name: "Lerbee Analytics",
      description: "Real-time business intelligence",
      features: ["Live dashboards", "Predictive analytics", "Custom reports"]
    }
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Our Products
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Everything you need to transform your business
          </p>
        </div>

        {/* Products Grid - Simple Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            return (
              <div key={index} className="bg-surface rounded-xl p-8 border border-default hover:border-lerbee-yellow transition-colors">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-lerbee-yellow rounded-xl">
                    <Icon size={32} />
                  </div>
                </div>
                
                {/* Product Info */}
                <h3 className="text-2xl font-semibold text-primary mb-3">{product.name}</h3>
                <p className="text-secondary mb-6">{product.description}</p>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-5 h-5 bg-lerbee-yellow rounded-full">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className="w-full py-3 px-6 bg-lerbee-yellow font-medium rounded-full hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-secondary mb-6">
            Need a custom solution? Let's talk about your specific requirements.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-inverse font-medium rounded-full hover:opacity-90 transition-opacity">
            Contact Sales
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};