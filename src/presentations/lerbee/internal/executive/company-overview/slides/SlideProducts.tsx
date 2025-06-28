import React from 'react';
import { Package, Cloud, Shield, Zap, ArrowRight } from 'lucide-react';

export const SlideProducts = () => {
  const products = [
    {
      icon: Cloud,
      name: "Lerbee Cloud",
      description: "Enterprise cloud infrastructure platform",
      features: ["99.99% uptime", "Global CDN", "Auto-scaling"],
      highlight: "Most Popular",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Shield,
      name: "Lerbee Shield",
      description: "Advanced cybersecurity solution",
      features: ["AI-powered threat detection", "Zero-trust architecture", "24/7 monitoring"],
      highlight: "Enterprise Ready",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Zap,
      name: "Lerbee Analytics",
      description: "Real-time business intelligence",
      features: ["Live dashboards", "Predictive analytics", "Custom reports"],
      highlight: "New Release",
      gradient: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              <Package size={20} />
              <span>Product Suite</span>
            </div>
          </div>
          <h1 className="text-6xl font-black text-gray-900 mb-6">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your business with cutting-edge technology
          </p>
        </div>

        {/* Products Grid - Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            return (
              <div key={index} className="group relative">
                {/* Background Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Badge */}
                  <div className="absolute -top-4 right-8">
                    <div className={`bg-gradient-to-r ${product.gradient} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                      {product.highlight}
                    </div>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="mb-8">
                    <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${product.gradient} rounded-3xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                      <Icon size={48} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-8 text-lg">{product.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-6 h-6 bg-gradient-to-r ${product.gradient} rounded-full`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 bg-gradient-to-r ${product.gradient} text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group`}>
                    <span>Get Started</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-50 -z-10"></div>
                  <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-tr from-gray-100 to-transparent rounded-full opacity-30 -z-10"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Need a custom solution? Let's talk about your specific requirements.
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors duration-300">
            Contact Sales Team
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};