import React from 'react';
import { Package, Cloud, Shield, Zap, ArrowRight } from 'lucide-react';

export const SlideProducts = () => {
  const products = [
    {
      icon: Cloud,
      name: "Lerbee Cloud",
      description: "Enterprise cloud infrastructure platform",
      features: ["99.99% uptime", "Global CDN", "Auto-scaling"],
      color: "yellow"
    },
    {
      icon: Shield,
      name: "Lerbee Shield",
      description: "Advanced cybersecurity solution",
      features: ["AI-powered threat detection", "Zero-trust architecture", "24/7 monitoring"],
      color: "green"
    },
    {
      icon: Zap,
      name: "Lerbee Analytics",
      description: "Real-time business intelligence",
      features: ["Live dashboards", "Predictive analytics", "Custom reports"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: any = {
      yellow: {
        bg: 'bg-yellow-500',
        bgLight: 'bg-yellow-50',
        text: 'text-yellow-600',
        border: 'border-yellow-200'
      },
      orange: {
        bg: 'bg-orange-500',
        bgLight: 'bg-orange-50',
        text: 'text-orange-600',
        border: 'border-orange-200'
      },
      green: {
        bg: 'bg-green-600',
        bgLight: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-primary text-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Package size={16} />
            Product Suite
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-xl text-secondary">
            Comprehensive solutions for modern businesses
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            const colors = getColorClasses(product.color);
            
            return (
              <div
                key={index}
                className="bg-surface rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-default group"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.bgLight} rounded-xl mb-6`}>
                  <Icon size={32} className={colors.text} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-secondary mb-6">{product.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
                      <span className="text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <button className={`flex items-center gap-2 ${colors.text} font-medium group-hover:gap-3 transition-all`}>
                  Learn more
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};