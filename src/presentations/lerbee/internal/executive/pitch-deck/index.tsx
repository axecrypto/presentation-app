import React from 'react';
import { Presentation } from '../../../../../types/presentation';
import { SlideTitle } from './slides/SlideTitle';
import { SlideWhatWeDo } from './slides/SlideWhatWeDo';
import { SlideProblem } from './slides/SlideProblem';
import { SlideHowItWorks } from './slides/SlideHowItWorks';
import { SlideWhyNow } from './slides/SlideWhyNow';
import { SlideMarketOpportunity } from './slides/SlideMarketOpportunity';
import { SlideTraction } from './slides/SlideTraction';
import { SlideProductMarketFit } from './slides/SlideProductMarketFit';
import { SlideBusinessModel } from './slides/SlideBusinessModel';
import { SlideCompetitiveLandscape } from './slides/SlideCompetitiveLandscape';
import { SlideAI } from './slides/SlideAI';
import { SlideTeam } from './slides/SlideTeam';
import { SlideForecast } from './slides/SlideForecast';
import { SlideRoadmap } from './slides/SlideRoadmap';
import { SlideSeedRound } from './slides/SlideSeedRound';
import { SlideWhyWeExist } from './slides/SlideWhyWeExist';
import { SlideShopperStory } from './slides/SlideShopperStory';
import { SlideQuote } from './slides/SlideQuote';
// Appendix slides
import { AppendixTraction } from './appendix/AppendixTraction';
import { AppendixMarketOpportunity } from './appendix/AppendixMarketOpportunity';
import { AppendixBusinessModel } from './appendix/AppendixBusinessModel';
import { AppendixCompetitiveLandscape } from './appendix/AppendixCompetitiveLandscape';
import { AppendixAI } from './appendix/AppendixAI';
import { AppendixTeam } from './appendix/AppendixTeam';
import { AppendixProductMarketFit } from './appendix/AppendixProductMarketFit';

export const lerbeePitchDeckPresentation: Presentation = {
  id: 'lerbee-pitch-deck',
  title: 'Lerbee Pitch Deck',
  description: 'Live peer-to-peer shopping at global scale',
  author: 'Valeria Mikova',
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
      notes: 'Live peer-to-peer shopping at global scale',
    },
    {
      id: 'what-we-do',
      title: 'What We Do',
      layout: 'full',
      content: <SlideWhatWeDo />,
      notes: 'We turn everyday shoppers into global style ambassadors',
    },
    {
      id: 'quote',
      title: 'Customer Voice',
      layout: 'full',
      content: <SlideQuote />,
      notes: 'Real customer pain point that drives our solution',
    },
    {
      id: 'problem',
      title: 'The Problem',
      layout: 'full',
      content: <SlideProblem />,
      notes: 'Online shopping is convenient but broken for both buyers and shoppers',
    },
    {
      id: 'how-it-works',
      title: 'How It Works',
      layout: 'full',
      content: <SlideHowItWorks />,
      notes: 'LerBee connects global buyers to local shoppers — live and direct',
    },
    {
      id: 'why-now',
      title: 'Why Now',
      layout: 'full',
      content: <SlideWhyNow />,
      notes: 'The world is ready for peer-to-peer shopping',
    },
    {
      id: 'market-opportunity',
      title: 'Market Opportunity',
      layout: 'full',
      content: <SlideMarketOpportunity />,
      notes: 'A massive, growing market — untapped from the bottom up',
    },
    {
      id: 'traction',
      title: 'Traction to Date',
      layout: 'full',
      content: <SlideTraction />,
      notes: 'From zero to global product — with no paid marketing',
    },
    {
      id: 'shopper-story',
      title: 'Shopper Success Story',
      layout: 'full',
      content: <SlideShopperStory />,
      notes: 'Real people building real income — Vicky\'s transformation story',
    },
    {
      id: 'product-market-fit',
      title: 'Product-Market Fit',
      layout: 'full',
      content: <SlideProductMarketFit />,
      notes: 'Deep engagement, high retention, real revenue',
    },
    {
      id: 'business-model',
      title: 'Business Model & Economics',
      layout: 'full',
      content: <SlideBusinessModel />,
      notes: 'Asset-light model with fast payback and high retention',
    },
    {
      id: 'competitive-landscape',
      title: 'Competitive Landscape',
      layout: 'full',
      content: <SlideCompetitiveLandscape />,
      notes: 'We\'re not competing on price — we\'re competing on trust',
    },
    {
      id: 'ai-force-multiplier',
      title: 'AI as a Force Multiplier',
      layout: 'full',
      content: <SlideAI />,
      notes: 'AI scales our platform — humans keep it personal',
    },
    {
      id: 'team',
      title: 'Team',
      layout: 'full',
      content: <SlideTeam />,
      notes: 'We\'ve done this before — now we\'re doing it for the world',
    },
    {
      id: 'forecast',
      title: '2025 Forecast',
      layout: 'full',
      content: <SlideForecast />,
      notes: '2025 growth plan — driven by retention, community, and scale',
    },
    {
      id: 'roadmap',
      title: 'Product Roadmap',
      layout: 'full',
      content: <SlideRoadmap />,
      notes: 'From product polish to global scale — concrete execution plan',
    },
    {
      id: 'seed-round',
      title: 'Seed Round & Use of Funds',
      layout: 'full',
      content: <SlideSeedRound />,
      notes: 'Raising $1–1.5M to scale what already works',
    },
    {
      id: 'why-we-exist',
      title: 'Why We Exist',
      layout: 'full',
      content: <SlideWhyWeExist />,
      notes: 'LerBee isn\'t just a marketplace — it\'s a movement',
    },
    // Appendix slides
    {
      id: 'appendix-divider',
      title: 'Appendix',
      layout: 'centered',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">Appendix</h1>
          <p className="text-2xl text-secondary">Detailed Information & Data</p>
        </div>
      ),
      notes: 'Additional details and supporting data',
    },
    {
      id: 'appendix-traction',
      title: 'Traction Details',
      layout: 'full',
      content: <AppendixTraction />,
      notes: 'Detailed traction metrics and milestones',
    },
    {
      id: 'appendix-market',
      title: 'Market Details',
      layout: 'full',
      content: <AppendixMarketOpportunity />,
      notes: 'TAM/SAM/SOM breakdown and calculations',
    },
    {
      id: 'appendix-pmf',
      title: 'Product-Market Fit Details',
      layout: 'full',
      content: <AppendixProductMarketFit />,
      notes: 'Detailed PMF metrics and behaviors',
    },
    {
      id: 'appendix-business-model',
      title: 'Business Model Details',
      layout: 'full',
      content: <AppendixBusinessModel />,
      notes: 'Complete unit economics and revenue streams',
    },
    {
      id: 'appendix-competitive',
      title: 'Competitive Analysis',
      layout: 'full',
      content: <AppendixCompetitiveLandscape />,
      notes: 'Full competitive landscape analysis',
    },
    {
      id: 'appendix-ai',
      title: 'AI Details',
      layout: 'full',
      content: <AppendixAI />,
      notes: 'Complete AI and human collaboration breakdown',
    },
    {
      id: 'appendix-team',
      title: 'Team Details',
      layout: 'full',
      content: <AppendixTeam />,
      notes: 'Full team profiles and experience',
    },
  ],
};