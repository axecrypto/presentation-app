import { Presentation } from '../../types/presentation';
import { SlideExecutiveSummary } from './slides/SlideExecutiveSummary';

export const dataMatchingPresentation: Presentation = {
  id: 'data-matching',
  title: 'Data Matching: Foundation of Enterprise Data Management',
  description: 'Why data matching is critical for business success',
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
      id: 'slide-title',
      layout: 'centered',
      transition: { type: 'zoom' },
      background: 'gradient-dark',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8 text-primary">
            The Hidden Cost of <span className="text-accent-orange">Duplicate Data</span>
          </h1>
          <p className="text-3xl text-secondary mb-8">
            Why Data Matching is Critical for Enterprise Success
          </p>
          <p className="text-xl text-muted mb-12">
            Turn data chaos into competitive advantage
          </p>
          <div className="flex flex-col gap-4 text-lg text-muted">
            <p className="flex items-center justify-center gap-2">
              <span className="text-accent-orange">•</span> For Pre-Sales, Sales & Field Enablement
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-accent-orange">•</span> ROI-focused messaging
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-accent-orange">•</span> Industry-specific examples
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'slide-executive-summary',
      title: 'Executive Summary',
      layout: 'full',
      transition: { type: 'slide' },
      content: <SlideExecutiveSummary />,
    },
    // Placeholder for future slides
    {
      id: 'slide-coming-soon',
      layout: 'centered',
      transition: { type: 'fade' },
      content: (
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">
            More Slides Coming Soon
          </h2>
          <p className="text-xl text-secondary">
            Full presentation under development
          </p>
        </div>
      ),
    },
  ],
};