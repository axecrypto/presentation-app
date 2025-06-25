import { Presentation } from '../../types/presentation';
import { SlideTitle } from './slides/SlideTitle';
import { SlideExecutiveSummary } from './slides/SlideExecutiveSummary';
import { SlideCurrentStatus } from './slides/SlideCurrentStatus';
import { SlideDiscoveryFindings } from './slides/SlideDiscoveryFindings';
import { SlideNext4Weeks } from './slides/SlideNext4Weeks';
import { SlideRoadmap } from './slides/SlideRoadmap';
import { SlideAsksBenefits } from './slides/SlideAsksBenefits';
import { SlideClosing } from './slides/SlideClosing';

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
      id: 'slide-executive-summary',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideExecutiveSummary />,
    },
    {
      id: 'slide-current-status',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideCurrentStatus />,
    },
    {
      id: 'slide-discovery-findings',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideDiscoveryFindings />,
    },
    {
      id: 'slide-next-4-weeks',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideNext4Weeks />,
    },
    {
      id: 'slide-roadmap',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideRoadmap />,
    },
    {
      id: 'slide-asks-benefits',
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