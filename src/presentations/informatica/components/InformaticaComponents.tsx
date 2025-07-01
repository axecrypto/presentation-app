import React from 'react';
import { useInformaticaTheme } from '../../../contexts/InformaticaThemeProvider';

// Slide wrapper with proper Informatica theming
export const InformaticaSlideWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useInformaticaTheme();
  
  return (
    <div 
      className="min-h-screen p-8 transition-colors duration-300"
      style={{ 
        backgroundColor: theme.colors.bgPrimary,
        color: theme.colors.textPrimary 
      }}
    >
      {children}
    </div>
  );
};

// Header component with Informatica styling
export const InformaticaHeader: React.FC<{ 
  title: string; 
  subtitle?: string;
  accentColor?: 'primary' | 'secondary';
}> = ({ title, subtitle, accentColor = 'primary' }) => {
  const { theme } = useInformaticaTheme();
  
  const color = accentColor === 'primary' ? theme.colors.primary : theme.colors.secondary;
  
  return (
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
        {title.split(' ').map((word, index, array) => {
          // Highlight the last word or specific keywords
          const shouldHighlight = index === array.length - 1 || 
            ['Execution', 'Survey', 'Analysis', 'Workshop', 'Pilot'].includes(word);
          
          return shouldHighlight ? (
            <span key={index} style={{ color }}> {word}</span>
          ) : (
            <span key={index}> {word}</span>
          );
        })}
      </h1>
      {subtitle && (
        <p className="text-xl" style={{ color: theme.colors.textSecondary }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Card component with Informatica theming
export const InformaticaCard: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'error';
  className?: string;
}> = ({ children, variant = 'default', className = '' }) => {
  const { theme } = useInformaticaTheme();
  
  const variants = {
    default: {
      backgroundColor: theme.colors.bgSurface,
      borderColor: theme.colors.borderDefault,
      color: theme.colors.textPrimary,
    },
    primary: {
      backgroundColor: `${theme.colors.primary}20`, // 20% opacity
      borderColor: `${theme.colors.primary}50`, // 50% opacity
      color: theme.colors.textPrimary,
    },
    secondary: {
      backgroundColor: `${theme.colors.secondary}20`,
      borderColor: `${theme.colors.secondary}50`,
      color: theme.colors.textPrimary,
    },
    error: {
      backgroundColor: `${theme.colors.error}20`,
      borderColor: `${theme.colors.error}50`,
      color: theme.colors.textPrimary,
    }
  };
  
  const styles = variants[variant];
  
  return (
    <div 
      className={`rounded-xl p-6 border-2 transition-all duration-300 ${className}`}
      style={{
        backgroundColor: styles.backgroundColor,
        borderColor: styles.borderColor,
        color: styles.color,
      }}
    >
      {children}
    </div>
  );
};

// Badge component
export const InformaticaBadge: React.FC<{
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}> = ({ children, color = 'primary', size = 'md' }) => {
  const { theme } = useInformaticaTheme();
  
  const bgColor = color === 'primary' ? theme.colors.primary : theme.colors.secondary;
  const textColor = '#FFFFFF'; // Always white text on badges
  
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <span 
      className={`inline-flex items-center gap-2 rounded-full font-bold ${sizes[size]}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </span>
  );
};

// Progress indicator for timeline
export const InformaticaProgress: React.FC<{
  current: number;
  total: number;
}> = ({ current, total }) => {
  const { theme } = useInformaticaTheme();
  const percentage = (current / total) * 100;
  
  return (
    <div 
      className="w-full h-2 rounded-full overflow-hidden"
      style={{ backgroundColor: theme.colors.borderLight }}
    >
      <div 
        className="h-full transition-all duration-500"
        style={{ 
          width: `${percentage}%`,
          backgroundColor: theme.colors.primary 
        }}
      />
    </div>
  );
};

// Icon container with theme colors
export const InformaticaIconBox: React.FC<{
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
}> = ({ children, color = 'primary', size = 'md' }) => {
  const { theme } = useInformaticaTheme();
  
  const colors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    error: theme.colors.error,
    success: theme.colors.success,
  };
  
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
  
  return (
    <div 
      className={`${sizes[size]} rounded-lg flex items-center justify-center`}
      style={{ 
        backgroundColor: `${colors[color]}20`,
        color: colors[color]
      }}
    >
      {children}
    </div>
  );
};