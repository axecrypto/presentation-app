import { Presentation } from '../../types/presentation';
import { SlideTitle } from './slides/SlideTitle';
import { SlideWeek1 } from './slides/SlideWeek1';
import { SlideWeek2 } from './slides/SlideWeek2';
import { SlideWeek3 } from './slides/SlideWeek3';
import { SlideWeek4 } from './slides/SlideWeek4';
import { SlideWeek5 } from './slides/SlideWeek5';
import { SlideExecutiveSummary } from './slides/SlideExecutiveSummary';
import { SlideTimeline } from './slides/SlideTimeline';
import { SlideClosing } from './slides/SlideClosing';

export const processFrameworkPresentation: Presentation = {
  id: 'process-framework',
  title: 'Validated Process Framework',
  description: 'A 5-Week Plan to Fix What\'s Broken (Without Boiling the Ocean)',
  author: 'Process Team',
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
      title: 'Unblocking Product Execution',
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
      id: 'slide-timeline',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideTimeline />,
    },
    {
      id: 'slide-week-1',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideWeek1 />,
    },
    {
      id: 'slide-week-2',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideWeek2 />,
    },
    {
      id: 'slide-week-3',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideWeek3 />,
    },
    {
      id: 'slide-week-4',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideWeek4 />,
    },
    {
      id: 'slide-week-5',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideWeek5 />,
    },
    {
      id: 'slide-closing',
      title: 'Let\'s Fix What\'s Broken',
      layout: 'centered',
      transition: { type: 'zoom' },
      background: 'gradient-dark',
      content: <SlideClosing />,
    },
  ],
};