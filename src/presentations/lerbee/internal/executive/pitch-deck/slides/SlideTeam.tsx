import React from 'react';
import { Users } from 'lucide-react';
import { SlideHeader, BottomTagline, typography, SlideWrapper } from '../components/DesignSystem';
import { HexagonFrame } from '../components/HoneycombPattern';
import { CompanyLogo } from '../components/CompanyLogos';

// Import founder images
import valeriaImg from '../assets/team/valeria.png';
import denisImg from '../assets/team/denis.png';
import vasilyImg from '../assets/team/vasily.png';
import rustamImg from '../assets/team/rustam.png';
import alexeyImg from '../assets/team/alexey.png';

interface TeamMember {
  name: string;
  role: string;
  highlight?: string;
  highlights?: string[];
  image?: string;
  placeholder: string;
}

export const SlideTeam = () => {
  const founders: TeamMember[] = [
    { 
      name: 'Valeria', 
      role: 'CEO', 
      highlight: 'Built to $4.5M GMV',
      image: valeriaImg,
      placeholder: 'bg-gradient-to-br from-purple-400 to-pink-400'
    },
    { 
      name: 'Denis', 
      role: 'CGO', 
      highlight: 'Informatica Director\nCenterfin Capital Cofounder',
      image: denisImg,
      placeholder: 'bg-gradient-to-br from-blue-400 to-cyan-400'
    },
    { 
      name: 'Vasily', 
      role: 'CFO', 
      highlight: 'Marketplace economics',
      image: vasilyImg,
      placeholder: 'bg-gradient-to-br from-green-400 to-teal-400'
    },
    { 
      name: 'Rustam', 
      role: 'CTO', 
      highlight: 'Coinbase, Ex-LinkedIn',
      image: rustamImg,
      placeholder: 'bg-gradient-to-br from-orange-400 to-red-400'
    }
  ];

  const advisor: TeamMember = {
    name: 'Alexey Morov',
    role: 'Strategic Advisor',
    highlights: [
      'Ex-Stanford Health, Tesla. PhDs in AI & systems thinking.',
      'Award-winning speaker and GTM strategist.'
    ],
    image: alexeyImg,
    placeholder: 'bg-gradient-to-br from-indigo-400 to-purple-400'
  };

  return (
    <SlideWrapper>
        <SlideHeader 
          title="We've Done This Before"
        />

        {/* Team Section */}
        <div className="mb-6">
          {/* Team Grid - All 5 members */}
          <div className="grid grid-cols-5 gap-3 items-start">
            {founders.map((founder, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Founder Image in Hexagon */}
                <div className="mb-2 flex justify-center">
                  <HexagonFrame size={90} className="mx-auto">
                    {founder.image ? (
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover"
                        style={{ 
                          objectFit: 'cover', 
                          objectPosition: 'center 20%',
                          transform: 'scale(1.2)'
                        }}
                      />
                    ) : (
                      <div className={`w-full h-full ${founder.placeholder} flex items-center justify-center`}>
                        <Users size={32} className="text-white opacity-80" />
                      </div>
                    )}
                  </HexagonFrame>
                </div>
                <h3 className={`${typography.body} font-semibold text-primary`}>
                  {founder.name}
                </h3>
                <p className={`${typography.small} text-secondary`}>
                  {founder.role}
                </p>
                <p className={`${typography.tiny} text-primary mt-1 text-center whitespace-pre-line`}>
                  {founder.highlight}
                </p>
              </div>
            ))}
            
            {/* Advisor in the same row */}
            <div className="flex flex-col items-center">
              {/* Advisor Image in Hexagon */}
              <div className="mb-2 flex justify-center">
                <HexagonFrame size={90} className="mx-auto">
                  {advisor.image ? (
                    <img 
                      src={advisor.image} 
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                      style={{ 
                        objectFit: 'cover', 
                        objectPosition: 'center 20%',
                        transform: 'scale(1.2)'
                      }}
                    />
                  ) : (
                    <div className={`w-full h-full ${advisor.placeholder} flex items-center justify-center`}>
                      <Users size={32} className="text-white opacity-80" />
                    </div>
                  )}
                </HexagonFrame>
              </div>
              <h3 className={`${typography.body} font-semibold text-primary`}>
                {advisor.name}
              </h3>
              <p className={`${typography.small} text-secondary`}>
                {advisor.role}
              </p>
              <p className={`${typography.tiny} text-primary mt-1 text-center`}>
                PhDs AI & Systems
              </p>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mb-8">
          <p className={`${typography.small} text-secondary text-center mb-6`}>Our Experience From</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <CompanyLogo company="Tesla" />
            <CompanyLogo company="LinkedIn" />
            <CompanyLogo company="Coinbase" />
            <CompanyLogo company="Informatica" />
            <CompanyLogo company="Stanford" />
          </div>
        </div>

        <BottomTagline
          line1="We're not hiring experts. We are the experts."
          line2="And we've already shipped."
        />
    </SlideWrapper>
  );
};