import React from 'react';
import { Target, Lightbulb, Heart, Users } from 'lucide-react';

export const SlideMission = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do",
      color: "yellow"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries and thinking differently",
      color: "orange"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Acting with honesty and transparency",
      color: "green"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Stronger together than apart",
      color: "yellow"
    }
  ];

  const getValueColor = (color: string) => {
    return color === 'yellow' ? 'bg-yellow-500' : 
           color === 'orange' ? 'bg-orange-500' : 
           'bg-green-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              Who We Are
            </div>
          </div>
          <h1 className="text-6xl font-black text-gray-900 mb-6">
            Our Mission & <span className="text-yellow-500">Values</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Lerbee, we're committed to creating innovative solutions that make a real difference
            in people's lives and businesses around the world.
          </p>
        </div>

        {/* Mission Statement - Beautiful Card */}
        <div className="relative mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur opacity-25"></div>
          <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-2 h-16 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed italic">
              "To empower organizations with cutting-edge technology solutions that drive growth,
              efficiency, and innovation, while maintaining the highest standards of quality and
              customer satisfaction."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Est. 2024</span>
            </div>
          </div>
        </div>

        {/* Core Values - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            const bgColor = getValueColor(value.color);
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={36} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-8 right-8 w-20 h-20 bg-gray-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 italic">
            "The future belongs to those who believe in the beauty of their dreams"
          </p>
        </div>
      </div>
    </div>
  );
};