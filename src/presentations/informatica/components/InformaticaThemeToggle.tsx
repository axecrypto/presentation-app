import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useInformaticaTheme } from '../../../contexts/InformaticaThemeProvider';

export const InformaticaThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isDark } = useInformaticaTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: theme.colors.bgSurface,
        border: `2px solid ${theme.colors.borderDefault}`,
        color: theme.colors.textPrimary,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun size={24} style={{ color: theme.colors.primary }} />
      ) : (
        <Moon size={24} style={{ color: theme.colors.secondary }} />
      )}
    </button>
  );
};