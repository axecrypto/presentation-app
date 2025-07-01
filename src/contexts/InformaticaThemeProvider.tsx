import React, { createContext, useContext, useEffect, useState } from 'react';
import { informaticaBrandColors } from '../styles/informaticaBrandColors';

interface InformaticaTheme {
  isDark: boolean;
  colors: {
    // Primary colors
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    accent: string;
    error: string;
    
    // Text colors
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    textInverse: string;
    
    // Background colors
    bgPrimary: string;
    bgSecondary: string;
    bgTertiary: string;
    bgSurface: string;
    
    // Border colors
    borderDefault: string;
    borderLight: string;
    borderDark: string;
    
    // Special colors
    success: string;
    warning: string;
    info: string;
  };
}

const InformaticaThemeContext = createContext<{
  theme: InformaticaTheme;
  toggleTheme: () => void;
  isDark: boolean;
} | undefined>(undefined);

export const useInformaticaTheme = () => {
  const context = useContext(InformaticaThemeContext);
  if (!context) {
    throw new Error('useInformaticaTheme must be used within InformaticaThemeProvider');
  }
  return context;
};

const lightTheme: InformaticaTheme = {
  isDark: false,
  colors: {
    // Primary colors - Informatica brand
    primary: informaticaBrandColors.primary.darkOrange,
    primaryLight: informaticaBrandColors.extended.orangeLight,
    primaryDark: informaticaBrandColors.extended.orangeDark,
    secondary: informaticaBrandColors.primary.blue,
    secondaryLight: informaticaBrandColors.extended.blueLight,
    secondaryDark: informaticaBrandColors.extended.blueDark,
    accent: informaticaBrandColors.primary.red,
    error: informaticaBrandColors.semantic.error,
    
    // Text colors for light theme
    textPrimary: informaticaBrandColors.text.light.primary,
    textSecondary: informaticaBrandColors.text.light.secondary,
    textMuted: informaticaBrandColors.text.light.muted,
    textInverse: '#FFFFFF',
    
    // Background colors for light theme
    bgPrimary: informaticaBrandColors.backgrounds.light.primary,
    bgSecondary: informaticaBrandColors.backgrounds.light.secondary,
    bgTertiary: informaticaBrandColors.backgrounds.light.tertiary,
    bgSurface: informaticaBrandColors.backgrounds.light.surface,
    
    // Border colors
    borderDefault: informaticaBrandColors.extended.grayLighter,
    borderLight: informaticaBrandColors.extended.grayLightest,
    borderDark: informaticaBrandColors.extended.grayLight,
    
    // Semantic colors
    success: informaticaBrandColors.semantic.success,
    warning: informaticaBrandColors.semantic.warning,
    info: informaticaBrandColors.semantic.info,
  }
};

const darkTheme: InformaticaTheme = {
  isDark: true,
  colors: {
    // Primary colors - Informatica brand (adjusted for dark mode)
    primary: informaticaBrandColors.primary.orange, // Lighter orange for dark mode
    primaryLight: informaticaBrandColors.extended.orangeLighter,
    primaryDark: informaticaBrandColors.primary.darkOrange,
    secondary: informaticaBrandColors.extended.blueLight, // Lighter blue for dark mode
    secondaryLight: informaticaBrandColors.extended.blueLighter,
    secondaryDark: informaticaBrandColors.primary.blue,
    accent: informaticaBrandColors.primary.red,
    error: informaticaBrandColors.semantic.error,
    
    // Text colors for dark theme
    textPrimary: informaticaBrandColors.text.dark.primary,
    textSecondary: informaticaBrandColors.text.dark.secondary,
    textMuted: informaticaBrandColors.text.dark.muted,
    textInverse: informaticaBrandColors.primary.gray,
    
    // Background colors for dark theme
    bgPrimary: informaticaBrandColors.backgrounds.dark.primary,
    bgSecondary: informaticaBrandColors.backgrounds.dark.secondary,
    bgTertiary: informaticaBrandColors.backgrounds.dark.tertiary,
    bgSurface: informaticaBrandColors.backgrounds.dark.surface,
    
    // Border colors (adjusted for dark theme)
    borderDefault: informaticaBrandColors.extended.grayDark,
    borderLight: informaticaBrandColors.extended.grayMedium,
    borderDark: informaticaBrandColors.backgrounds.dark.primary,
    
    // Semantic colors (same but may need adjustment for contrast)
    success: informaticaBrandColors.semantic.success,
    warning: informaticaBrandColors.semantic.warning,
    info: '#668AFF', // Lighter blue for better contrast on dark
  }
};

export const InformaticaThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Start with dark mode by default
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply all theme colors as CSS variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--informatica-${key}`, value);
    });
    
    // Apply specific mappings for existing accent colors (preserve exact brand colors)
    root.style.setProperty('--color-accent-orange', informaticaBrandColors.primary.darkOrange);
    root.style.setProperty('--color-accent-orange-light', informaticaBrandColors.primary.orange);
    root.style.setProperty('--color-accent-blue', informaticaBrandColors.primary.blue);
    root.style.setProperty('--color-accent-red', informaticaBrandColors.primary.red);
    root.style.setProperty('--color-accent-gray', informaticaBrandColors.primary.gray);
    
    // Update theme-aware classes
    root.style.setProperty('--color-text-primary', theme.colors.textPrimary);
    root.style.setProperty('--color-text-secondary', theme.colors.textSecondary);
    root.style.setProperty('--color-text-muted', theme.colors.textMuted);
    root.style.setProperty('--color-bg-primary', theme.colors.bgPrimary);
    root.style.setProperty('--color-bg-surface', theme.colors.bgSurface);
    root.style.setProperty('--color-border', theme.colors.borderDefault);
    
    // Add theme class to body
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [theme, isDark]);

  return (
    <InformaticaThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </InformaticaThemeContext.Provider>
  );
};