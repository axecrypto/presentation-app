import React, { useEffect } from 'react';
import { usePresentation } from '../contexts/PresentationContext';
import { useInformaticaTheme } from '../contexts/InformaticaThemeProvider';

// This component bridges the PresentationContext theme toggle with InformaticaThemeProvider
export const InformaticaThemeBridge: React.FC = () => {
  const { currentTheme } = usePresentation();
  const { isDark, toggleTheme } = useInformaticaTheme();
  
  useEffect(() => {
    // Sync the themes when PresentationContext theme changes
    const shouldBeDark = currentTheme === 'dark';
    if (shouldBeDark !== isDark) {
      toggleTheme();
    }
  }, [currentTheme, isDark, toggleTheme]);
  
  return null;
};