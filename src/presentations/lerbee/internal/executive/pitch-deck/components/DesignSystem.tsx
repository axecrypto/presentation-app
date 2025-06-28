import React from 'react';

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