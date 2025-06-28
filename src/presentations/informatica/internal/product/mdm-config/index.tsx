import { Presentation } from '../../../../../types/presentation';
import { Slide2 } from './slides/Slide2';
import { Slide3 } from './slides/Slide3';
import { Slide4 } from './slides/Slide4';
import { Slide5 } from './slides/Slide5';
import { Slide6 } from './slides/Slide6';
import { Slide7Final as Slide7 } from './slides/Slide7Final';
import { SlideSummary } from './slides/SlideSummary';
import { SlideUIPrototype } from './slides/SlideUIPrototype';

export const mdmPresentation: Presentation = {
  id: 'mdm-config',
  title: 'AI-Powered MDM Configuration',
  description: 'From business requirements to demo-ready MDM in under one hour',
  author: 'MDM Team',
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
      id: 'slide-1',
      title: 'AI-Powered MDM Configuration',
      layout: 'centered',
      transition: { type: 'zoom' },
      background: 'gradient-dark',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8 text-primary">
            AI-Powered <span className="text-accent-orange">MDM</span> Configuration
          </h1>
          <p className="text-2xl text-secondary mb-12">
            From business requirements to demo-ready MDM in under one hour
          </p>
          <div className="flex flex-col gap-4 text-lg text-muted">
            <p className="flex items-center justify-center gap-2">
              <span className="text-accent-orange">•</span> 7-step automated workflow
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-accent-orange">•</span> AI agents handle complexity
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-accent-orange">•</span> Complete configuration in minutes
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-accent-orange">•</span> Demo-ready with synthetic data
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-summary',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideSummary />,
    },
    {
      id: 'slide-ui-prototype',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideUIPrototype />,
    },
    {
      id: 'slide-2',
      layout: 'full',
      transition: { type: 'slide' },
      content: <Slide2 />,
    },
    {
      id: 'slide-3',
      layout: 'full',
      transition: { type: 'slide' },
      content: <Slide3 />,
    },
    {
      id: 'slide-4',
      layout: 'full',
      transition: { type: 'slide' },
      content: <Slide4 />,
    },
    {
      id: 'slide-5',
      layout: 'full',
      transition: { type: 'slide' },
      content: <Slide5 />,
    },
    {
      id: 'slide-6',
      layout: 'full',
      transition: { type: 'slide' },
      content: <Slide6 />,
    },
    {
      id: 'slide-7',
      layout: 'full',
      transition: { type: 'slide' },
      content: <Slide7 />,
    },
    {
      id: 'slide-8',
      title: 'Thank You',
      layout: 'centered',
      transition: { type: 'zoom' },
      background: 'gradient-dark',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8 text-primary">
            Thank You!
          </h1>
          <p className="text-2xl text-secondary mb-8">
            Ready to transform your MDM implementation?
          </p>
          <p className="text-lg text-muted">
            Get started with AI-powered configuration today
          </p>
        </div>
      ),
    },
  ],
};