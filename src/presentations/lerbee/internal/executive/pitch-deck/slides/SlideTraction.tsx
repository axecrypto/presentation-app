import React from 'react';
import { 
  Calendar, 
  TrendingUp, 
  Users, 
  RotateCw, 
  Smartphone, 
  Globe, 
  Truck, 
  Brain, 
  User, 
  RefreshCcw, 
  Monitor, 
  ShoppingCart, 
  DollarSign, 
  MessageSquare, 
  BarChart3, 
  Settings 
} from 'lucide-react';

export const SlideTraction = () => {
  const milestones = [
    { icon: Smartphone, title: 'App relaunch: Nov 2024', desc: 'Live sessions, balance top-ups, improved UX' },
    { icon: Globe, title: 'Onboarded shoppers in 10+ countries', desc: '' },
    { icon: Truck, title: 'Integrated US shipping flow', desc: '' },
    { icon: Brain, title: 'Internal AI tools deployed for content ops', desc: '' }
  ];

  const metrics = [
    { value: '7,810', label: 'registered users', icon: User },
    { value: '223,921', label: 'app opens', icon: RefreshCcw },
    { value: '521,718', label: 'live session views', icon: Monitor },
    { value: '15,357', label: 'confirmed orders', icon: ShoppingCart },
    { value: '$390,000', label: 'GMV', icon: DollarSign, highlight: true },
    { value: '95%', label: 'repeat buyers', icon: MessageSquare, highlight: true }
  ];

  const retention = [
    { value: '3,900', label: 'MAU' },
    { value: '1,400', label: 'WAU' },
    { value: '486', label: 'DAU' }
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">
            From Zero to Global Product — With No Paid Marketing
          </h1>
          <div className="flex items-center justify-center gap-2 text-secondary">
            <Calendar size={20} />
            <p className="text-lg">Nov 2024 → Present</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Product Milestones */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <Settings size={24} className="text-lerbee-yellow" />
              Product Milestones
            </h2>
            <div className="space-y-4">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className="bg-surface rounded-lg p-4 border border-default hover:border-lerbee-yellow transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-lerbee-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                      <p className="text-primary font-medium">{milestone.title}</p>
                      {milestone.desc && (
                        <p className="text-secondary text-sm mt-1">{milestone.desc}</p>
                      )}
                    </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Key Metrics */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <BarChart3 size={24} className="text-lerbee-yellow" />
              Key Metrics (First 6-7 Months)
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div 
                    key={index} 
                    className={`bg-surface rounded-lg p-4 border ${metric.highlight ? 'border-lerbee-yellow' : 'border-default'} hover:border-lerbee-yellow transition-colors`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={20} className="text-lerbee-yellow" />
                      <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    </div>
                    <p className="text-secondary text-sm">{metric.label}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-4 bg-surface rounded-lg p-4 border border-default">
              <p className="text-primary font-medium flex items-center gap-2">
                <BarChart3 size={20} className="text-lerbee-yellow" />
                11.2M+ screen views
              </p>
            </div>
          </div>
        </div>

        {/* Retention & Engagement */}
        <div className="bg-surface rounded-xl p-8 border border-default mb-8">
          <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-3">
            <RotateCw size={24} className="text-lerbee-yellow" />
            Retention & Engagement
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Active Users */}
            <div>
              <p className="text-sm text-secondary mb-3 flex items-center gap-2">
                <Users size={16} className="text-lerbee-yellow" />
                Active Users
              </p>
              <div className="flex gap-6">
                {retention.map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-primary">{item.value}</p>
                    <p className="text-sm text-secondary">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Key Stats */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <RotateCw size={20} className="text-lerbee-yellow" />
                <p className="text-primary"><strong>16 sessions</strong> per user (avg)</p>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 size={20} className="text-lerbee-yellow" />
                <p className="text-primary"><strong>7.9%</strong> Week-5 retention</p>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCcw size={20} className="text-lerbee-yellow" />
                <p className="text-primary">Buyers return naturally — <strong>LTV &gt; CAC</strong> even without paid growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center bg-primary border-2 border-lerbee-yellow rounded-xl p-6">
          <p className="text-xl text-primary font-semibold mb-2">
            We didn't just build a product.
          </p>
          <p className="text-2xl text-primary font-bold">
            We built a habit — across cultures and continents.
          </p>
        </div>
      </div>
    </div>
  );
};