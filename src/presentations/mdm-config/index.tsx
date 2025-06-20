import React from 'react';
import { Presentation } from '../../types/presentation';
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
  },
  slides: [
    {
      id: 'slide-1',
      title: 'AI-Powered MDM Configuration',
      layout: 'centered',
      transition: { type: 'zoom' },
      background: 'linear-gradient(to bottom right, #0A0A0A, #1A1A1A, #0A0A0A)',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8 text-white">
            AI-Powered <span className="text-orange-500">MDM</span> Configuration
          </h1>
          <p className="text-2xl text-gray-300 mb-12">
            From business requirements to demo-ready MDM in under one hour
          </p>
          <div className="flex flex-col gap-4 text-lg text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <span className="text-orange-500">•</span> 7-step automated workflow
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-orange-500">•</span> AI agents handle complexity
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-orange-500">•</span> Complete configuration in minutes
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-orange-500">•</span> Demo-ready with synthetic data
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
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2D2D2D 100%)',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8 text-white">
            Thank You!
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Ready to transform your MDM implementation?
          </p>
          <p className="text-lg text-gray-400">
            Get started with AI-powered configuration today
          </p>
        </div>
      ),
    },
  ],
};