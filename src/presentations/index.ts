import { Presentation } from '../types/presentation';
import { samplePresentation } from './samplePresentation';
import { mdmPresentation } from './mdm-config';

export interface PresentationMetadata {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  author?: string;
  date?: string;
  tags?: string[];
  duration?: string;
}

export interface PresentationEntry {
  metadata: PresentationMetadata;
  presentation: Presentation;
}

// Registry of all available presentations
export const presentations: Record<string, PresentationEntry> = {
  'sample': {
    metadata: {
      id: 'sample',
      title: 'Sample Presentation',
      description: 'A demonstration of the presentation system features',
      author: 'Demo Author',
      tags: ['demo', 'tutorial'],
      duration: '5 slides',
    },
    presentation: samplePresentation,
  },
  'mdm-config': {
    metadata: {
      id: 'mdm-config',
      title: 'AI-Powered MDM Configuration',
      description: 'From business requirements to demo-ready MDM in under one hour',
      author: 'MDM Team',
      tags: ['MDM', 'AI', 'automation', 'data-management'],
      duration: '8 slides',
    },
    presentation: mdmPresentation,
  },
};

export const getPresentationById = (id: string): PresentationEntry | undefined => {
  return presentations[id];
};

export const getAllPresentations = (): PresentationEntry[] => {
  return Object.values(presentations);
};