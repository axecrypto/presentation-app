import { Presentation } from '../types/presentation';
import { samplePresentation } from './samplePresentation';
import { mdmPresentation } from './mdm-config';
import { processFrameworkPresentation } from './process-framework';
import { meteringUpdatePresentation } from './metering-update';
import { dataMatchingPresentation } from './data-matching';

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
  'process-framework': {
    metadata: {
      id: 'process-framework',
      title: 'Validated Process Framework',
      description: 'A 5-Week Plan to Fix What\'s Broken (Without Boiling the Ocean)',
      author: 'Process Team',
      tags: ['process', 'framework', 'agile', 'improvement'],
      duration: '9 slides',
    },
    presentation: processFrameworkPresentation,
  },
  'metering-update': {
    metadata: {
      id: 'metering-update',
      title: 'Metering Platform Update',
      description: 'Executive Overview - Discovery & Alignment Phase',
      author: 'Platform Team',
      tags: ['metering', 'platform', 'monetization', 'analytics'],
      duration: '9 slides',
    },
    presentation: meteringUpdatePresentation,
  },
  'data-matching': {
    metadata: {
      id: 'data-matching',
      title: 'Data Matching',
      description: 'The Hidden Cost of Duplicate Data',
      author: 'MDM Team',
      tags: ['data-matching', 'MDM', 'data-quality', 'sales-enablement'],
      duration: '3 slides',
    },
    presentation: dataMatchingPresentation,
  },
};

export const getPresentationById = (id: string): PresentationEntry | undefined => {
  return presentations[id];
};

export const getAllPresentations = (): PresentationEntry[] => {
  return Object.values(presentations);
};