// Lerbee Brand Theme Configuration
export const lerbeeTheme = {
  name: 'Lerbee',
  
  // Brand Colors - From Figma Design System
  colors: {
    // Primary Brand Colors (Yellow/Orange)
    brand: {
      yellow50: '#FFFDE6',   // rgb(255, 247, 233)
      yellow100: '#FFEA7F',  // rgb(255, 234, 109)
      yellow200: '#FFE89A',  // rgb(255, 216, 154)
      yellow300: '#FFE029',  // rgb(255, 205, 120)
      yellow400: '#FFCE49',  // rgb(255, 195, 73)
      yellow500: '#FFAF14',  // rgb(255, 175, 38)
      yellow600: '#FF9F22',  // rgb(242, 140, 34)
      yellow700: '#CF6108',  // rgb(199, 106, 26)
      yellow800: '#9E3611',  // rgb(150, 69, 17)
      yellow900: '#4A3400',  // rgb(74, 52, 14)
      yellow950: '#2B1A00',  // rgb(74, 52, 14)
    },
    
    // Neutral Colors (Grays)
    neutral: {
      gray0: '#FFFFFF',      // Pure white
      gray50: '#FAFBFC',     // rgb(253, 253, 253)
      gray100: '#F5F5F5',    // rgb(253, 253, 253)
      gray150: '#EEEEEE',    // rgb(244, 244, 244)
      gray200: '#E5E5E5',    // rgb(231, 231, 234)
      gray300: '#D4D4D4',    // rgb(217, 217, 220)
      gray400: '#A3A3A3',    // rgb(191, 192, 201)
      gray500: '#737373',    // rgb(141, 143, 153)
      gray600: '#525252',    // rgb(96, 98, 108)
      gray700: '#404040',    // rgb(72, 73, 81)
      gray800: '#262626',    // rgb(49, 50, 53)
      gray900: '#171717',    // rgb(21, 22, 24)
      gray1000: '#0A0A0A',   // Near black
    },
    
    // Semantic Colors
    semantic: {
      // Green (Success)
      green50: '#F0FDF4',    // rgb(124, 235, 177)
      green700: '#15803D',   // rgb(17, 81, 68)
      green700Alt: '#059669', // rgb(17, 81, 68)
      green900: '#14532D',   // rgb(17, 81, 68)
      
      // Orange (Warning)
      orange300: '#FDBA74',  // rgb(252, 235, 235)
      orange400: '#FB923C',  // rgb(236, 83, 50)
      orange700: '#C2410C',  // rgb(74, 52, 14)
      
      // Red scale
      red50: '#FEF2F2',
      red100: '#FEE2E2',
      red200: '#FECACA',
      red300: '#FCA5A5',
      red400: '#F87171',
      red500: '#EF4444',
      red600: '#DC2626',
      red700: '#B91C1C',
      red800: '#991B1B',
      red900: '#7F1D1D',
      red1000: '#450A0A',
    }
  },
  
  // Typography
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  
  // Font Sizes
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '5rem',
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
  // Brand Assets
  assets: {
    logo: '/assets/lerbee/logo.svg',
    logoWhite: '/assets/lerbee/logo-white.svg',
    favicon: '/assets/lerbee/favicon.ico',
  },
  
  // Presentation Defaults
  presentation: {
    aspectRatio: '16:9',
    transition: 'fade',
    duration: 400,
  }
};

// Light Theme Configuration
export const lerbeeThemeLight = {
  // Text colors
  textPrimary: lerbeeTheme.colors.neutral.gray900,        // Dark text on light bg
  textSecondary: lerbeeTheme.colors.neutral.gray600,      // Secondary text
  textDisabled: lerbeeTheme.colors.neutral.gray400,       // Disabled text
  
  // Background colors
  bgPrimary: lerbeeTheme.colors.neutral.gray0,            // White
  bgSecondary: lerbeeTheme.colors.neutral.gray50,         // Light gray
  bgSurface: lerbeeTheme.colors.neutral.gray0,            // Card backgrounds
  bgHover: lerbeeTheme.colors.neutral.gray100,            // Hover states
  
  // Border colors
  borderDefault: lerbeeTheme.colors.neutral.gray200,      // Default borders
  borderSecondary: lerbeeTheme.colors.neutral.gray150,    // Secondary borders
  
  // Brand colors
  primary: lerbeeTheme.colors.brand.yellow500,            // Primary brand
  primaryHover: lerbeeTheme.colors.brand.yellow600,       // Primary hover
  
  // Semantic colors
  success: lerbeeTheme.colors.semantic.green700,
  error: lerbeeTheme.colors.semantic.red600,
  warning: lerbeeTheme.colors.brand.yellow600,
};

// Dark Theme Configuration
export const lerbeeThemeDark = {
  // Text colors
  textPrimary: lerbeeTheme.colors.neutral.gray0,           // Pure white text on dark bg
  textSecondary: lerbeeTheme.colors.neutral.gray400,      // Secondary text
  textDisabled: lerbeeTheme.colors.neutral.gray600,       // Disabled text
  
  // Background colors
  bgPrimary: lerbeeTheme.colors.neutral.gray1000,         // Near black background (#0A0A0A)
  bgSecondary: lerbeeTheme.colors.neutral.gray900,        // Slightly lighter (#171717)
  bgSurface: lerbeeTheme.colors.neutral.gray900,          // Card backgrounds (#171717)
  bgHover: lerbeeTheme.colors.neutral.gray800,            // Hover states (#262626)
  
  // Border colors
  borderDefault: lerbeeTheme.colors.neutral.gray800,      // Default borders (#262626)
  borderSecondary: lerbeeTheme.colors.neutral.gray700,    // Secondary borders (#404040)
  
  // Brand colors - keep bright yellows for dark mode
  primary: lerbeeTheme.colors.brand.yellow500,            // Primary brand - keep bright (#FFAF14)
  primaryHover: lerbeeTheme.colors.brand.yellow600,       // Primary hover (#FF9F22)
  
  // Semantic colors
  success: lerbeeTheme.colors.semantic.green700Alt,
  error: lerbeeTheme.colors.semantic.red400,
  warning: lerbeeTheme.colors.brand.yellow500,
};

// Helper function to apply theme to CSS variables
export const applyLerbeeTheme = (isDark: boolean = false) => {
  const root = document.documentElement;
  const theme = isDark ? lerbeeThemeDark : lerbeeThemeLight;
  
  // Apply theme colors
  root.style.setProperty('--color-text-primary', theme.textPrimary);
  root.style.setProperty('--color-text-secondary', theme.textSecondary);
  root.style.setProperty('--color-text-disabled', theme.textDisabled);
  
  root.style.setProperty('--color-bg-primary', theme.bgPrimary);
  root.style.setProperty('--color-bg-secondary', theme.bgSecondary);
  root.style.setProperty('--color-bg-surface', theme.bgSurface);
  root.style.setProperty('--color-bg-hover', theme.bgHover);
  
  root.style.setProperty('--color-border-default', theme.borderDefault);
  root.style.setProperty('--color-border-secondary', theme.borderSecondary);
  
  root.style.setProperty('--color-accent-primary', theme.primary);
  root.style.setProperty('--color-accent-primary-hover', theme.primaryHover);
  
  root.style.setProperty('--color-success', theme.success);
  root.style.setProperty('--color-error', theme.error);
  root.style.setProperty('--color-warning', theme.warning);
  
  // Set fonts
  root.style.setProperty('--font-heading', lerbeeTheme.fonts.heading);
  root.style.setProperty('--font-body', lerbeeTheme.fonts.body);
  
  // Apply theme class for Tailwind
  if (isDark) {
    root.classList.add('dark-theme');
    root.classList.remove('light-theme');
  } else {
    root.classList.add('light-theme');
    root.classList.remove('dark-theme');
  }
};