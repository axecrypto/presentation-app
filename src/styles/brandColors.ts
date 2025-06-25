// Corporate Brand Color System
// Conservative palette with proper contrast ratios

export const brandColors = {
  // Primary Colors
  primary: {
    main: '#0066CC',      // Corporate Blue
    light: '#3384D6',
    dark: '#004C99',
    contrast: '#FFFFFF'
  },
  
  // Secondary Colors (Limited)
  secondary: {
    orange: '#FF6B35',    // Accent Orange (used sparingly)
    green: '#00A86B',     // Success Green
    red: '#DC3545',       // Error/Alert Red
    gray: '#6C757D'       // Neutral Gray
  },
  
  // Background Colors
  backgrounds: {
    dark: {
      primary: '#0F172A',
      secondary: '#1E293B',
      tertiary: '#334155',
      surface: '#475569'
    },
    light: {
      primary: '#FFFFFF',
      secondary: '#F8F9FA',
      tertiary: '#E9ECEF',
      surface: '#DEE2E6'
    }
  },
  
  // Text Colors
  text: {
    dark: {
      primary: '#FFFFFF',
      secondary: '#E2E8F0',
      muted: '#94A3B8'
    },
    light: {
      primary: '#1A202C',
      secondary: '#2D3748',
      muted: '#718096'
    }
  },
  
  // Status Colors (Conservative)
  status: {
    success: {
      bg: '#D4EDDA',
      text: '#155724',
      border: '#C3E6CB'
    },
    warning: {
      bg: '#FFF3CD',
      text: '#856404',
      border: '#FFEAA7'
    },
    error: {
      bg: '#F8D7DA',
      text: '#721C24',
      border: '#F5C6CB'
    },
    info: {
      bg: '#D1ECF1',
      text: '#0C5460',
      border: '#BEE5EB'
    }
  }
};

// Semantic color mappings
export const semanticColors = {
  // For dark theme
  dark: {
    cardBg: brandColors.backgrounds.dark.secondary,
    cardBorder: brandColors.backgrounds.dark.tertiary,
    activeCardBg: brandColors.primary.dark,
    activeCardBorder: brandColors.primary.main,
    
    headingText: brandColors.text.dark.primary,
    bodyText: brandColors.text.dark.secondary,
    mutedText: brandColors.text.dark.muted,
    
    accentPrimary: brandColors.primary.main,
    accentSecondary: brandColors.secondary.orange,
    accentSuccess: brandColors.secondary.green,
    accentDanger: brandColors.secondary.red
  },
  
  // For light theme
  light: {
    cardBg: brandColors.backgrounds.light.primary,
    cardBorder: brandColors.backgrounds.light.surface,
    activeCardBg: brandColors.primary.main,
    activeCardBorder: brandColors.primary.dark,
    
    headingText: brandColors.text.light.primary,
    bodyText: brandColors.text.light.secondary,
    mutedText: brandColors.text.light.muted,
    
    accentPrimary: brandColors.primary.main,
    accentSecondary: brandColors.secondary.orange,
    accentSuccess: brandColors.secondary.green,
    accentDanger: brandColors.secondary.red
  }
};

// Utility function to ensure text contrast
export const getContrastText = (backgroundColor: string): string => {
  // For orange backgrounds, always use white
  if (backgroundColor === brandColors.secondary.orange) {
    return '#FFFFFF';
  }
  
  // For primary blue, use white
  if (backgroundColor === brandColors.primary.main || 
      backgroundColor === brandColors.primary.dark) {
    return '#FFFFFF';
  }
  
  // Default logic for other colors
  return '#FFFFFF';
};