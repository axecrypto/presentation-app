import { Presentation } from '../../types/presentation';
import { SlideTitle } from './slides/SlideTitle';
import { SlideTheProblem } from './slides/SlideTheProblem';
import { SlideTheOpportunity } from './slides/SlideTheOpportunity';
import { SlideWhereWeAre } from './slides/SlideWhereWeAre';
import { SlideFirstWave } from './slides/SlideFirstWave';
import { SlideSimpleRoadmap } from './slides/SlideSimpleRoadmap';
import { SlideNext4Weeks } from './slides/SlideNext4Weeks';
import { SlideAsksBenefits } from './slides/SlideAsksBenefits';
import { SlideClosing } from './slides/SlideClosing';

// Legacy slides - kept for reference but not used
// import { SlideExecutiveSummary } from './slides/SlideExecutiveSummary';
// import { SlideCurrentStatus } from './slides/SlideCurrentStatus';
// import { SlideDiscoveryFindings } from './slides/SlideDiscoveryFindings';
// import { SlideRoadmap } from './slides/SlideRoadmap';

export const meteringUpdatePresentation: Presentation = {
  id: 'metering-update',
  title: 'Metering Platform Update',
  description: 'Executive Overview - Discovery & Alignment Phase',
  author: 'Platform Team',
  date: new Date().toISOString(),
  settings: {
    showProgress: true,
    showSlideNumbers: true,
    loop: false,
    autoPlay: false,
    autoPlayInterval: 5000,
    availableThemes: ['light', 'dark'],
    defaultTheme: 'dark',
  },
  slides: [
    {
      id: 'slide-title',
      title: 'Metering Platform Initiative',
      layout: 'centered',
      transition: { type: 'zoom' },
      background: 'gradient-dark',
      content: <SlideTitle />,
    },
    {
      id: 'slide-the-problem',
      title: 'The Problem',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideTheProblem />,
    },
    {
      id: 'slide-the-opportunity',
      title: 'The Opportunity',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideTheOpportunity />,
    },
    {
      id: 'slide-where-we-are',
      title: 'Where We Are',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideWhereWeAre />,
    },
    {
      id: 'slide-first-wave',
      title: 'First Wave',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideFirstWave />,
    },
    {
      id: 'slide-simple-roadmap',
      title: 'The Roadmap',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideSimpleRoadmap />,
    },
    {
      id: 'slide-next-4-weeks',
      title: 'Planning Sprint: Critical Decisions',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideNext4Weeks />,
    },
    {
      id: 'slide-asks-benefits',
      title: 'What We Need',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideAsksBenefits />,
    },
    {
      id: 'slide-closing',
      title: 'Next Steps',
      layout: 'centered',
      transition: { type: 'zoom' },
      background: 'gradient-dark',
      content: <SlideClosing />,
    },
  ],
};