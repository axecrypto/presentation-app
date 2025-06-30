import React from 'react';
import { ThemeProvider } from '../../../../../../contexts/ThemeContext';
import { SlideTikTokStats } from '../slides/SlideTikTokStats';
import { SlideTitle } from '../slides/SlideTitle';
import { SlideTraction } from '../slides/SlideTraction';
import { SlideProblem } from '../slides/SlideProblem';
import { SlideMarketOpportunity } from '../slides/SlideMarketOpportunity';
import { SlideWhatWeDo } from '../slides/SlideWhatWeDo';
import { SlideHowItWorks } from '../slides/SlideHowItWorks';
import { SlideShopperStory } from '../slides/SlideShopperStory';
import { SlideTeam } from '../slides/SlideTeam';
import { SlideProductMarketFit } from '../slides/SlideProductMarketFit';
import { SlideBusinessModel } from '../slides/SlideBusinessModel';
import { SlideWhyNow } from '../slides/SlideWhyNow';
import { SlideAI } from '../slides/SlideAI';
import { SlideCompetitiveLandscape } from '../slides/SlideCompetitiveLandscape';
import { SlideForecast } from '../slides/SlideForecast';
import { SlideRoadmap } from '../slides/SlideRoadmap';
import { SlideSeedRound } from '../slides/SlideSeedRound';
import { SlideWhyWeExist } from '../slides/SlideWhyWeExist';

const slides = [
  SlideTikTokStats,
  SlideTitle,
  SlideTraction,
  SlideProblem,
  SlideMarketOpportunity,
  SlideWhatWeDo,
  SlideHowItWorks,
  SlideShopperStory,
  SlideTeam,
  SlideProductMarketFit,
  SlideBusinessModel,
  SlideWhyNow,
  SlideAI,
  SlideCompetitiveLandscape,
  SlideForecast,
  SlideRoadmap,
  SlideSeedRound,
  SlideWhyWeExist,
];

export const PDFView: React.FC = () => {
  const [forceLight, setForceLight] = React.useState(true);
  const [isPrinting, setIsPrinting] = React.useState(false);
  
  React.useEffect(() => {
    // Add print styles
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        .pdf-slide {
          page-break-after: always;
          page-break-inside: avoid;
          min-height: 100vh;
          width: 100vw;
        }
        
        .pdf-slide:last-child {
          page-break-after: auto;
        }
        
        @page {
          size: A4 landscape;
          margin: 0;
        }
        
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        
        /* Force colors in dark mode */
        .dark .bg-primary {
          background-color: #0f172a !important;
        }
        
        .dark .text-primary {
          color: #f1f5f9 !important;
        }
        
        .dark .text-secondary {
          color: #94a3b8 !important;
        }
        
        .no-print {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Don't auto-trigger print if user is choosing theme
    if (!isPrinting) {
      return;
    }
    
    // Auto-trigger print after a delay
    setTimeout(() => {
      window.print();
      
      // Close window after print
      window.addEventListener('afterprint', () => {
        window.close();
      }, { once: true });
    }, 1000);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [isPrinting]);
  
  return (
    <ThemeProvider>
      <div className={forceLight ? '' : 'dark'}>
        <div className="bg-primary min-h-screen">
          <div className="no-print text-center p-4 bg-yellow-100 dark:bg-gray-800 border-b border-yellow-300 dark:border-gray-600">
            {!isPrinting ? (
              <>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Choose PDF Theme</p>
                <div className="flex gap-4 justify-center mb-4">
                  <button
                    onClick={() => setForceLight(true)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      forceLight 
                        ? 'bg-white text-gray-900 shadow-lg ring-2 ring-yellow-400' 
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    ☀️ Light Mode (Recommended)
                  </button>
                  <button
                    onClick={() => setForceLight(false)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      !forceLight 
                        ? 'bg-gray-800 text-white shadow-lg ring-2 ring-yellow-400' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    🌙 Dark Mode
                  </button>
                </div>
                <button
                  onClick={() => setIsPrinting(true)}
                  className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors"
                >
                  Generate PDF
                </button>
              </>
            ) : (
              <>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Preparing PDF... The print dialog will open automatically.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Make sure to select "Save as PDF" and landscape orientation.</p>
              </>
            )}
          </div>
        
          {slides.map((SlideComponent, index) => (
            <div key={index} className="pdf-slide">
              <SlideComponent />
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};