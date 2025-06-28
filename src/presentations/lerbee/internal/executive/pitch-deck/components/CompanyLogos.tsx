import React from 'react';

interface CompanyLogoProps {
  company: string;
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ company, className = '' }) => {
  const getLogoStyle = () => {
    switch (company.toLowerCase()) {
      case 'tesla':
        return 'text-red-600 dark:text-red-500';
      case 'linkedin':
        return 'text-blue-600 dark:text-blue-500';
      case 'coinbase':
        return 'text-blue-700 dark:text-blue-400';
      case 'informatica':
        return 'text-orange-600 dark:text-orange-500';
      case 'stanford':
        return 'text-red-700 dark:text-red-500';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="flex items-center justify-center px-3 py-2">
      <span className={`font-bold text-lg ${getLogoStyle()} ${className}`}>
        {company}
      </span>
    </div>
  );
};

