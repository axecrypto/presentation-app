import React from 'react';
import { 
  CheckCircle, AlertTriangle, XCircle
} from 'lucide-react';

export const SlideWhereWeAre = () => {
  const status = [
    {
      icon: CheckCircle,
      status: "What's Working",
      color: "green" as const,
      title: "Vision & Alignment",
      points: [
        "Leadership understands the opportunity",
        "Business case is clear",
        "Meter types identified"
      ]
    },
    {
      icon: AlertTriangle,
      status: "What's In Progress",
      color: "orange" as const,
      title: "Fragmented Implementation",
      points: [
        "Some services have partial metering",
        "Different teams, different approaches",
        "No standards or consistency"
      ]
    },
    {
      icon: XCircle,
      status: "What's Missing",
      color: "red" as const,
      title: "Platform Adoption",
      points: [
        "Services not connected to IDMC metering",
        "No comprehensive service inventory",
        "No dedicated team to drive integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-5xl font-bold text-primary mb-12 text-center">
          Where We Are Today
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {status.map((item, index) => {
            const StatusIcon = item.icon;
            const colorClasses: Record<'green' | 'orange' | 'red', string> = {
              green: 'text-green-500 bg-green-500',
              orange: 'text-accent-orange bg-accent-orange',
              red: 'text-red-500 bg-red-500'
            };
            
            return (
              <div key={index} className="bg-surface rounded-xl p-8 border border-default">
                <div className={`w-16 h-16 ${colorClasses[item.color]} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <StatusIcon className={colorClasses[item.color].split(' ')[0]} size={32} />
                </div>
                <p className={`text-sm font-semibold ${colorClasses[item.color].split(' ')[0]} text-center mb-2`}>
                  {item.status}
                </p>
                <h3 className="text-xl font-bold text-primary text-center mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`${colorClasses[item.color].split(' ')[0]} mt-1.5`}>•</span>
                      <span className="text-secondary">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl text-primary font-semibold">
            The foundation exists. We need to build the house.
          </p>
        </div>
      </div>
    </div>
  );
};