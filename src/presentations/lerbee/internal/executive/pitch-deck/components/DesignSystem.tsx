import React from 'react';
// Import bee brand mark
import beeMark from '../assets/brand/bee-mark.png';

// Consistent spacing values
export const spacing = {
  xs: 'p-2',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-12',
  '2xl': 'p-16',
  
  margin: {
    xs: 'mb-2',
    sm: 'mb-4',
    md: 'mb-6',
    lg: 'mb-8',
    xl: 'mb-12',
    '2xl': 'mb-16',
  }
};

// Consistent text sizes
export const typography = {
  hero: 'text-6xl',
  title: 'text-5xl',
  subtitle: 'text-3xl',
  heading: 'text-2xl',
  large: 'text-xl',
  body: 'text-lg',
  small: 'text-sm',
  tiny: 'text-xs'
};

// Icon sizes with containers
export const iconSizes = {
  tiny: {
    container: 'w-8 h-8',
    icon: 16
  },
  small: {
    container: 'w-10 h-10',
    icon: 20
  },
  medium: {
    container: 'w-12 h-12',
    icon: 24
  },
  large: {
    container: 'w-14 h-14',
    icon: 28
  },
  xl: {
    container: 'w-20 h-20',
    icon: 40
  }
};

// Metric card sizes
export const metricSizes = {
  value: 'text-5xl',
  label: 'text-xl'
};

// Reusable components
export const SlideHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className={`text-center ${spacing.margin['2xl']}`}>
    <h1 className={`${typography.title} font-bold text-primary ${subtitle ? spacing.margin.sm : ''}`}>
      {title}
    </h1>
    {subtitle && (
      <p className={`${typography.subtitle} text-secondary`}>
        {subtitle}
      </p>
    )}
  </div>
);

export const IconContainer: React.FC<{ 
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xl';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}> = ({ size = 'medium', variant = 'primary', children, className = '' }) => {
  const sizeClass = iconSizes[size].container;
  const bgClass = variant === 'primary' ? 'bg-lerbee-yellow' : 'bg-surface border-2 border-lerbee-yellow';
  
  return (
    <div className={`${sizeClass} ${bgClass} rounded-full flex items-center justify-center mx-auto ${className}`}>
      {children}
    </div>
  );
};

export const MetricCard: React.FC<{
  value: string;
  label: string;
  icon: React.ReactNode;
}> = ({ value, label, icon }) => (
  <div className="flex flex-col items-center">
    {icon}
    <p className={`${metricSizes.value} font-bold text-primary mt-6 mb-2`}>
      {value}
    </p>
    <p className={`${metricSizes.label} text-secondary text-center`}>
      {label}
    </p>
  </div>
);

export const BottomTagline: React.FC<{
  line1: string;
  line2: string;
}> = ({ line1, line2 }) => (
  <div className={`text-center bg-primary border-2 border-lerbee-yellow rounded-xl ${spacing.lg}`}>
    <p className={`${typography.large} text-primary font-semibold ${spacing.margin.xs}`}>
      {line1}
    </p>
    <p className={`${typography.heading} text-primary font-bold`}>
      {line2}
    </p>
  </div>
);

export const QuoteBox: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className={`bg-surface rounded-xl ${spacing.md} border border-lerbee-yellow max-w-3xl mx-auto`}>
    <p className={`${typography.body} text-primary italic`}>
      {children}
    </p>
  </div>
);

// Brand pattern component - displays the bee cells background
export const BrandPattern: React.FC<{
  opacity?: number;
  position?: 'full' | 'corner' | 'side';
}> = ({ opacity = 0.3, position = 'corner' }) => {
  const positionStyles = {
    full: 'inset-0',
    corner: 'bottom-0 right-0 w-1/3 h-1/3',
    side: 'top-0 right-0 w-1/4 h-full'
  };
  
  if (position === 'corner') {
    return (
      <div className="absolute bottom-12 right-12 w-96 h-96 pointer-events-none">
        {/* Light mode - show the actual image to debug */}
        <img 
          src={beeMark} 
          alt="" 
          className="w-full h-full object-cover dark:hidden"
          style={{
            opacity: 0.5,
            filter: 'contrast(2) brightness(0.3)'
          }}
        />
        {/* Dark mode - yellow pattern */}
        <div 
          className="w-full h-full bg-lerbee-yellow hidden dark:block"
          style={{
            opacity: 0.15,
            maskImage: `url(${beeMark})`,
            WebkitMaskImage: `url(${beeMark})`,
            maskSize: 'cover',
            WebkitMaskSize: 'cover',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'bottom right',
            WebkitMaskPosition: 'bottom right'
          }}
        />
      </div>
    );
  }
  
  return (
    <div className={`absolute ${positionStyles[position]} pointer-events-none`}>
      <div 
        className="w-full h-full"
        style={{ 
          opacity,
          backgroundImage: `url(${beeMark})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
};

// Slide wrapper that includes the brand pattern
export const SlideWrapper: React.FC<{
  children: React.ReactNode;
  showBrandPattern?: boolean;
  patternPosition?: 'full' | 'corner' | 'side';
  patternOpacity?: number;
}> = ({ 
  children, 
  showBrandPattern = true,
  patternPosition = 'corner',
  patternOpacity = 0.3
}) => {
  return (
    <div className="min-h-screen bg-primary p-8 flex items-center relative overflow-hidden">
      {showBrandPattern && (
        <BrandPattern 
          position={patternPosition} 
          opacity={patternOpacity} 
        />
      )}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {children}
      </div>
    </div>
  );
};