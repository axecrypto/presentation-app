// Theme configuration for MDM presentation
export const mdmPresentationTheme = {
  // Use conservative, professional colors
  colors: {
    // Backgrounds
    backgroundDark: 'bg-gray-900', // Instead of bg-slate-900
    backgroundMedium: 'bg-gray-800', // Instead of bg-slate-800
    backgroundLight: 'bg-gray-700', // Instead of bg-slate-700
    
    // High contrast surfaces for important content
    surfaceContrast: 'bg-white', // White background for high contrast
    surfaceContrastAlt: 'bg-gray-100', // Light gray for slight variation
    
    // Text colors for contrast
    textOnDark: 'text-white',
    textOnLight: 'text-gray-900', // Dark text on light backgrounds
    textSecondaryOnDark: 'text-gray-300',
    textSecondaryOnLight: 'text-gray-700',
    
    // Professional accent colors
    accentOrange: 'bg-orange-600', // Informatica orange
    accentBlue: 'bg-blue-600',
    accentGreen: 'bg-green-600',
    accentPurple: 'bg-purple-700',
  },
  
  // High contrast color combinations
  contrastPairs: {
    orangeOnDark: {
      bg: 'bg-orange-600',
      text: 'text-white',
      hover: 'hover:bg-orange-700',
    },
    blueOnDark: {
      bg: 'bg-blue-600', 
      text: 'text-white',
      hover: 'hover:bg-blue-700',
    },
    greenOnDark: {
      bg: 'bg-green-600',
      text: 'text-white', 
      hover: 'hover:bg-green-700',
    },
    purpleOnDark: {
      bg: 'bg-purple-700',
      text: 'text-white',
      hover: 'hover:bg-purple-800',
    },
    // High contrast cards
    whiteCard: {
      bg: 'bg-white',
      text: 'text-gray-900',
      secondary: 'text-gray-600',
      border: 'border-gray-200',
    },
    darkCard: {
      bg: 'bg-gray-800',
      text: 'text-white',
      secondary: 'text-gray-300',
      border: 'border-gray-700',
    },
  },
};