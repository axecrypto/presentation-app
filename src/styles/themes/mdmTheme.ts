import { theme as baseTheme } from '../theme';

// MDM Presentation Theme - Extracted from source slides
export const mdmTheme = {
  ...baseTheme,
  colors: {
    // Primary colors from gradients
    primary: '#3B82F6', // blue-500
    primaryDark: '#2563EB', // blue-600
    primaryLight: '#60A5FA', // blue-400
    
    // Secondary colors
    secondary: '#10B981', // green-500
    secondaryDark: '#059669', // green-600
    secondaryLight: '#34D399', // green-400
    
    // Background colors (dark theme)
    background: '#0F172A', // slate-900
    backgroundLight: '#1E293B', // slate-800
    surface: '#334155', // slate-700
    surfaceLight: '#475569', // slate-600
    
    // Text colors
    text: '#F1F5F9', // slate-100
    textSecondary: '#CBD5E1', // slate-300
    textMuted: '#94A3B8', // slate-400
    
    // Accent colors from slides
    purple: '#A855F7', // purple-500
    purpleDark: '#9333EA', // purple-600
    orange: '#F97316', // orange-500
    orangeDark: '#EA580C', // orange-600
    teal: '#14B8A6', // teal-500
    tealDark: '#0D9488', // teal-600
    indigo: '#6366F1', // indigo-500
    indigoDark: '#4F46E5', // indigo-600
    red: '#EF4444', // red-500
    redDark: '#DC2626', // red-600
    
    // Status colors
    error: '#EF4444',
    success: '#10B981',
    warning: '#F59E0B',
    info: '#3B82F6',
    
    // Special effects
    glow: {
      blue: 'rgba(59, 130, 246, 0.5)', // blue glow
      purple: 'rgba(168, 85, 247, 0.5)', // purple glow
      green: 'rgba(16, 185, 129, 0.5)', // green glow
      orange: 'rgba(249, 115, 22, 0.5)', // orange glow
    },
  },
  
  // Additional theme properties for MDM presentation
  effects: {
    glassMorphism: {
      background: 'rgba(30, 41, 59, 0.5)', // slate-800 with opacity
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(71, 85, 105, 0.5)', // slate-600 with opacity
    },
    gradient: {
      blue: 'linear-gradient(to right, #3B82F6, #2563EB)',
      purple: 'linear-gradient(to right, #A855F7, #9333EA)',
      green: 'linear-gradient(to right, #10B981, #059669)',
      orange: 'linear-gradient(to right, #F97316, #EA580C)',
      teal: 'linear-gradient(to right, #14B8A6, #0D9488)',
      indigo: 'linear-gradient(to right, #6366F1, #4F46E5)',
      red: 'linear-gradient(to right, #EF4444, #DC2626)',
    },
  },
  
  // Animation durations from slides
  animations: {
    fast: '200ms',
    normal: '500ms',
    slow: '1000ms',
    autoAdvance: '3000ms', // for auto-advancing slides
  },
};

export type MDMTheme = typeof mdmTheme;