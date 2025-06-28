// Informatica Brand Theme Configuration
export const informaticaTheme = {
  name: 'Informatica',
  
  // Brand Colors
  colors: {
    primary: {
      orange: '#FF4D00',      // Informatica Orange
      blue: '#0066FF',        // Informatica Blue
    },
    secondary: {
      teal: '#00C896',
      purple: '#8B5CF6',
      green: '#10B981',
    },
    neutral: {
      white: '#FFFFFF',
      gray100: '#F3F4F6',
      gray200: '#E5E7EB',
      gray300: '#D1D5DB',
      gray400: '#9CA3AF',
      gray500: '#6B7280',
      gray600: '#4B5563',
      gray700: '#374151',
      gray800: '#1F2937',
      gray900: '#111827',
      black: '#000000',
    }
  },
  
  // Typography
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Open Sans', sans-serif",
    mono: "'Fira Code', monospace",
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
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  // Brand Assets
  assets: {
    logo: '/assets/informatica/logo.svg',
    logoWhite: '/assets/informatica/logo-white.svg',
    favicon: '/assets/informatica/favicon.ico',
  },
  
  // Presentation Defaults
  presentation: {
    aspectRatio: '16:9',
    transition: 'slide',
    duration: 300,
  }
};

// Helper function to apply theme to CSS variables
export const applyInformaticaTheme = () => {
  const root = document.documentElement;
  
  // Set primary colors
  root.style.setProperty('--color-accent-orange', informaticaTheme.colors.primary.orange);
  root.style.setProperty('--color-accent-blue', informaticaTheme.colors.primary.blue);
  
  // Set fonts
  root.style.setProperty('--font-heading', informaticaTheme.fonts.heading);
  root.style.setProperty('--font-body', informaticaTheme.fonts.body);
};