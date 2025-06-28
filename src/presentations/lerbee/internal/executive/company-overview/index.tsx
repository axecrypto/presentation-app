import React from 'react';
import { Presentation } from '../../../../../types/presentation';
import { SlideTitle } from './slides/SlideTitle';
import { SlideMission } from './slides/SlideMission';
import { SlideProducts } from './slides/SlideProducts';

export const lerbeeCompanyOverviewPresentation: Presentation = {
  id: 'lerbee-company-overview',
  title: 'Lerbee Company Overview',
  description: 'An introduction to Lerbee - our mission, values, and products',
  author: 'Lerbee Executive Team',
  date: new Date().toISOString(),
  settings: {
    showProgress: true,
    showSlideNumbers: true,
    loop: false,
    autoPlay: false,
    autoPlayInterval: 5000,
    availableThemes: ['light', 'dark'],
    defaultTheme: 'light',
  },
  slides: [
    {
      id: 'title',
      title: 'Welcome',
      layout: 'centered',
      content: <SlideTitle />,
      notes: 'Welcome to Lerbee company overview',
    },
    {
      id: 'mission',
      title: 'Mission & Values',
      layout: 'full',
      content: <SlideMission />,
      notes: 'Our core mission and values that drive everything we do',
    },
    {
      id: 'products',
      title: 'Product Suite',
      layout: 'full',
      content: <SlideProducts />,
      notes: 'Overview of our main product offerings',
    },
  ],
};