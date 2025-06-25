// Official Informatica Brand Colors
// Source: https://www.brandcolorcode.com/informatica

export const informaticaBrandColors = {
  // Primary Brand Colors
  primary: {
    darkOrange: '#FF4D00',    // Primary Informatica orange (darker)
    orange: '#FF7D00',        // Secondary Informatica orange (lighter)
    red: '#E23400',           // Informatica red
    blue: '#001AFF',          // Informatica blue
    gray: '#373737'           // Informatica dark gray
  },
  
  // Extended Palette for UI
  extended: {
    // Orange variations
    orangeLight: '#FFB366',   // 40% lighter than primary orange
    orangeLighter: '#FFD4B3', // 60% lighter
    orangeDark: '#CC3D00',    // 20% darker
    orangeDarker: '#992E00',  // 40% darker
    
    // Blue variations
    blueLight: '#668AFF',     // 40% lighter than primary blue
    blueLighter: '#B3C5FF',   // 60% lighter
    blueDark: '#0015CC',      // 20% darker
    blueDarker: '#001099',    // 40% darker
    
    // Neutral grays
    grayDark: '#1F1F1F',      // Darker than primary gray
    grayMedium: '#5C5C5C',    // Medium gray
    grayLight: '#8B8B8B',     // Light gray
    grayLighter: '#C4C4C4',   // Lighter gray
    grayLightest: '#F5F5F5'   // Almost white
  },
  
  // Semantic Colors for UI
  semantic: {
    success: '#00A86B',       // Green - keeping our existing
    warning: '#FF7D00',       // Using Informatica orange
    error: '#E23400',         // Using Informatica red
    info: '#001AFF'           // Using Informatica blue
  },
  
  // Backgrounds for light/dark themes
  backgrounds: {
    dark: {
      primary: '#0A0A0A',     // Near black
      secondary: '#1A1A1A',   // Slightly lighter
      tertiary: '#2A2A2A',    // Card backgrounds
      surface: '#373737'      // Using Informatica gray
    },
    light: {
      primary: '#FFFFFF',     // White
      secondary: '#F5F5F5',   // Light gray
      tertiary: '#EEEEEE',    // Slightly darker
      surface: '#E0E0E0'      // Card backgrounds
    }
  },
  
  // Text colors for contrast
  text: {
    dark: {
      primary: '#FFFFFF',     // White on dark
      secondary: '#E0E0E0',   // Light gray
      muted: '#B0B0B0'        // Muted gray
    },
    light: {
      primary: '#373737',     // Informatica gray on light
      secondary: '#5C5C5C',   // Medium gray
      muted: '#8B8B8B'        // Light gray
    }
  }
};

// Usage Guidelines
export const informaticaColorGuidelines = {
  primary: {
    usage: "Dark Orange (#FF4D00) for primary CTAs, key highlights",
    avoid: "Don't use for large backgrounds - too intense"
  },
  secondary: {
    usage: "Orange (#FF7D00) for secondary actions, hover states",
    avoid: "Don't mix with red - too similar"
  },
  accent: {
    usage: "Blue (#001AFF) for links, selected states, complementary accent",
    avoid: "Don't use for error states"
  },
  neutral: {
    usage: "Gray (#373737) for text, borders, subtle backgrounds",
    avoid: "Don't use as primary background in dark theme - too light"
  },
  ratios: {
    recommended: "60% neutral, 30% primary/secondary, 10% accent",
    avoid: "Don't use more than 2 bright colors on same screen"
  }
};