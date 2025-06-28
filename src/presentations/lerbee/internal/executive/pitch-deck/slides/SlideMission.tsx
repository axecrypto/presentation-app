import React from 'react';
import { Target, Lightbulb, Heart, Users } from 'lucide-react';

export const SlideMission = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries and thinking differently"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Acting with honesty and transparency"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Stronger together than apart"
    }
  ];

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Our Mission & Values
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Creating innovative solutions that make a real difference
          </p>
        </div>

        {/* Mission Statement - Simple Card */}
        <div className="mb-20">
          <div className="bg-surface rounded-2xl p-12 border border-default">
            <h2 className="text-2xl font-semibold text-primary mb-6">Our Mission</h2>
            <p className="text-lg text-secondary leading-relaxed">
              To empower organizations with cutting-edge technology solutions that drive growth,
              efficiency, and innovation, while maintaining the highest standards of quality and
              customer satisfaction.
            </p>
          </div>
        </div>

        {/* Core Values - Simple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-surface rounded-xl p-6 border border-default hover:border-lerbee-yellow transition-colors">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lerbee-yellow rounded-xl mb-4">
                  <Icon size={32} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-secondary">{value.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};