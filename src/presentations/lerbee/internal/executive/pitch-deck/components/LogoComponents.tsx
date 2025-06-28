import React from 'react';
import teslaLogo from '../assets/logos/tesla.png';
import linkedInLogo from '../assets/logos/linkedin.png';
import coinbaseLogo from '../assets/logos/coinbase.png';
import informaticaLogo from '../assets/logos/informatica.png';
import stanfordLogo from '../assets/logos/stanford.png';

// Company logos using actual images

export const TeslaLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img 
    src={teslaLogo} 
    alt="Tesla" 
    className={`${className} opacity-80 dark:opacity-100 dark:brightness-0 dark:invert`} 
    style={{ height: '40px', width: 'auto' }} 
  />
);

export const LinkedInLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img 
    src={linkedInLogo} 
    alt="LinkedIn" 
    className={`${className} opacity-80 dark:opacity-100`} 
    style={{ height: '40px', width: 'auto' }} 
  />
);

export const CoinbaseLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img 
    src={coinbaseLogo} 
    alt="Coinbase" 
    className={`${className} opacity-80 dark:opacity-100`} 
    style={{ height: '40px', width: 'auto' }} 
  />
);

export const InformaticaLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img 
    src={informaticaLogo} 
    alt="Informatica" 
    className={`${className} opacity-80 dark:opacity-100`} 
    style={{ height: '40px', width: 'auto' }} 
  />
);

export const StanfordLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img 
    src={stanfordLogo} 
    alt="Stanford" 
    className={`${className} opacity-80 dark:opacity-100 dark:brightness-0 dark:invert`} 
    style={{ height: '40px', width: 'auto' }} 
  />
);