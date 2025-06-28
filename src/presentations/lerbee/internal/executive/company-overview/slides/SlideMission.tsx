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
    <div className="min-h-screen bg-primary text-primary p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Our Mission & Values
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            At Lerbee, we're committed to creating innovative solutions that make a real difference
            in people's lives and businesses.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-surface rounded-2xl p-8 mb-12 shadow-lg border border-default">
          <h2 className="text-2xl font-bold mb-4 text-center">Mission Statement</h2>
          <p className="text-lg text-center text-secondary leading-relaxed">
            "To empower organizations with cutting-edge technology solutions that drive growth,
            efficiency, and innovation, while maintaining the highest standards of quality and
            customer satisfaction."
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-surface rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-default"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 bg-opacity-10 rounded-full mb-4">
                  <Icon size={32} className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-secondary text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};