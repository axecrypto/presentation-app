import { theme as baseTheme } from '../theme';

// Informatica-inspired professional theme with Material Design principles
export const informaticaTheme = {
  ...baseTheme,
  colors: {
    // Primary - Informatica Orange (more muted for professionalism)
    primary: '#E55A2B', // Informatica orange
    primaryDark: '#C94820', // Darker orange
    primaryLight: '#FF7043', // Lighter orange
    
    // Secondary - Professional Blue
    secondary: '#1976D2', // Material blue
    secondaryDark: '#1565C0',
    secondaryLight: '#42A5F5',
    
    // Backgrounds - Dark theme for presentations
    background: '#0A0A0A', // Near black
    backgroundLight: '#1A1A1A', // Slightly lighter
    surface: '#2D2D2D', // Card backgrounds
    surfaceLight: '#3D3D3D', // Hover states
    
    // Text - High contrast for readability
    text: '#FFFFFF', // Pure white for main text
    textSecondary: '#E0E0E0', // Light gray
    textMuted: '#9E9E9E', // Muted gray
    
    // Accent colors - Muted for professional look
    purple: '#7B3F99', // Informatica purple (muted)
    purpleDark: '#6A1B9A',
    blue: '#2196F3', // Material blue
    blueDark: '#1976D2',
    green: '#4CAF50', // Material green
    greenDark: '#388E3C',
    teal: '#00ACC1', // Material cyan
    tealDark: '#0097A7',
    
    // Status colors - Material Design
    error: '#F44336',
    success: '#4CAF50',
    warning: '#FF9800',
    info: '#2196F3',
    
    // Special effects - Subtle glows
    glow: {
      orange: 'rgba(229, 90, 43, 0.3)', // Softer glow
      blue: 'rgba(25, 118, 210, 0.3)',
      purple: 'rgba(123, 63, 153, 0.3)',
      green: 'rgba(76, 175, 80, 0.3)',
    },
    
    // High contrast surfaces for important content
    contrast: {
      surface: '#FFFFFF', // White background
      text: '#000000', // Black text
      surfaceAlt: '#F5F5F5', // Light gray background
      textAlt: '#212121', // Dark gray text
    },
  },
  
  // Professional gradients - more subtle
  effects: {
    glassMorphism: {
      background: 'rgba(45, 45, 45, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #E55A2B 0%, #C94820 100%)',
      secondary: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
      purple: 'linear-gradient(135deg, #7B3F99 0%, #6A1B9A 100%)',
      dark: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
      // Subtle gradients for backgrounds
      subtle: {
        orange: 'linear-gradient(135deg, rgba(229, 90, 43, 0.1) 0%, rgba(229, 90, 43, 0.05) 100%)',
        blue: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(25, 118, 210, 0.05) 100%)',
      },
    },
  },
  
  // Material Design shadows
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
};

export type InformaticaTheme = typeof informaticaTheme;