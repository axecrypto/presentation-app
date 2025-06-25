import React from 'react';
import { usePresentation } from '../contexts/PresentationContext';

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { currentTheme } = usePresentation();
  
  return (
    <div className={currentTheme === 'light' ? 'light-theme' : 'dark-theme'}>
      {children}
    </div>
  );
};