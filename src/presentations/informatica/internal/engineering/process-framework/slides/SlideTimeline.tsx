import React, { useState } from 'react';
import { 
  Calendar, Search, MessageSquare, Microscope, Palette, Rocket,
  ArrowRight, Clock, Users, Target, Lightbulb
} from 'lucide-react';

export const SlideTimeline = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const weeks = [
    {
      week: 1,
      title: "Discovery & Survey",
      icon: Search,
      color: "blue",
      duration: "5 days",
      activities: [
        "Define problem scope",
        "Design & send electronic survey",
        "Capture pain points across teams",
        "Analyze quantitative & qualitative data"
      ],
      deliverables: [
        "Problem scope document",
        "Survey results analysis",
        "Top themes identification"
      ],
      participants: "All PMs, Engineers, Designers"
    },
    {
      week: 2,
      title: "Deep Dive Interviews",
      icon: MessageSquare,
      color: "orange",
      duration: "5 days",
      activities: [
        "Conduct 10-12 targeted interviews",
        "Mix of platform & app PMs",
        "Include tech leads & ICs",
        "Explore behavioral bottlenecks"
      ],
      deliverables: [
        "Interview transcripts",
        "Synthesized pain points",
        "Candidate root causes"
      ],
      participants: "Selected stakeholders"
    },
    {
      week: 3,
      title: "Root Cause Analysis",
      icon: Microscope,
      color: "blue",
      duration: "5 days",
      activities: [
        "Apply 5 Whys technique",
        "Create Fishbone diagrams",
        "Run focus group validation",
        "Optional: Observe rituals"
      ],
      deliverables: [
        "Validated root causes",
        "Focus group insights",
        "Process observation notes"
      ],
      participants: "6-8 person focus group"
    },
    {
      week: 4,
      title: "Design Workshop",
      icon: Palette,
      color: "orange",
      duration: "5 days",
      activities: [
        "Map current vs ideal flow",
        "Facilitate cross-functional workshop",
        "Co-design improvements",
        "Prioritize pilot actions"
      ],
      deliverables: [
        "Visual 'To-Be' process",
        "Improvement backlog",
        "Pilot action plan"
      ],
      participants: "Cross-functional teams"
    },
    {
      week: 5,
      title: "Commitment & Pilot",
      icon: Rocket,
      color: "red",
      duration: "5 days",
      activities: [
        "Create executive presentation",
        "Define pilot team & scope",
        "Establish metrics/KPIs",
        "Secure leadership buy-in"
      ],
      deliverables: [
        "Executive presentation",
        "Pilot commitment plan",
        "Success metrics framework"
      ],
      participants: "Leadership & pilot team"
    }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors: any = {
      blue: {
        bg: isActive ? 'bg-accent-blue' : 'bg-accent-blue bg-opacity-20',
        text: isActive ? 'text-white' : 'text-accent-blue',
        border: 'border-accent-blue border-opacity-30',
        iconBg: 'bg-accent-blue bg-opacity-10',
        iconText: 'text-accent-blue'
      },
      orange: {
        bg: isActive ? 'bg-accent-orange' : 'bg-accent-orange bg-opacity-20',
        text: isActive ? 'text-white' : 'text-accent-orange',
        border: 'border-accent-orange border-opacity-30',
        iconBg: 'bg-accent-orange bg-opacity-10',
        iconText: 'text-accent-orange'
      },
      red: {
        bg: isActive ? 'bg-red-600' : 'bg-red-500 bg-opacity-20',
        text: isActive ? 'text-white' : 'text-red-600',
        border: 'border-red-500 border-opacity-30',
        iconBg: 'bg-red-500 bg-opacity-10',
        iconText: 'text-red-600'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">
            5-Week <span className="text-accent-blue">Sprint Timeline</span>
          </h1>
          <p className="text-xl text-gray-300">
            From discovery to pilot implementation in focused sprints
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            {weeks.map((week, index) => {
              const WeekIcon = week.icon;
              const isActive = activeWeek === index;
              const colors = getColorClasses(week.color, isActive);
              
              return (
                <React.Fragment key={week.week}>
                  <div
                    className="relative flex flex-col items-center cursor-pointer group"
                    onClick={() => setActiveWeek(index)}
                  >
                    <div className={`
                      w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300
                      ${colors.bg} ${isActive ? 'scale-110 shadow-lg' : 'hover:scale-105'}
                    `}>
                      <WeekIcon size={32} className={colors.text} />
                    </div>
                    <div className="mt-3 text-center">
                      <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        Week {week.week}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
                        {week.title}
                      </div>
                    </div>
                  </div>
                  {index < weeks.length - 1 && (
                    <div className="flex-1 h-1 bg-gray-700 relative top-[-30px]">
                      <div className={`
                        h-full transition-all duration-500
                        ${index < activeWeek ? 'bg-blue-500' : ''}
                      `} style={{ width: index < activeWeek ? '100%' : '0%' }}></div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Week Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activities */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Target className="mr-2 text-accent-blue" size={20} />
              Activities
            </h3>
            <div className="space-y-2">
              {weeks[activeWeek].activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-300">{activity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Lightbulb className="mr-2 text-accent-blue" size={20} />
              Deliverables
            </h3>
            <div className="space-y-3">
              {weeks[activeWeek].deliverables.map((deliverable, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-3 border border-slate-600">
                  <p className="text-sm text-white">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Participants & Duration */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <Clock className="mr-2 text-orange-400" size={20} />
                Duration
              </h3>
              <p className="text-2xl font-bold text-orange-400">{weeks[activeWeek].duration}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <Users className="mr-2 text-orange-400" size={20} />
                Participants
              </h3>
              <p className="text-sm text-gray-300">{weeks[activeWeek].participants}</p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Total Duration</h3>
              <p className="text-gray-300">5 weeks • 25 business days</p>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-bold text-white mb-1">Expected Outcome</h3>
              <p className="text-gray-300">Validated process with pilot ready to launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};