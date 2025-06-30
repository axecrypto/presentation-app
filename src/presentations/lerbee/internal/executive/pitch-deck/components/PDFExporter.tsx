import React, { useState } from 'react';
import { Download } from 'lucide-react';
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
  { component: SlideTitle, name: 'Title' },
  { component: SlideTraction, name: 'Traction' },
  { component: SlideProblem, name: 'Problem' },
  { component: SlideMarketOpportunity, name: 'Market Opportunity' },
  { component: SlideWhatWeDo, name: 'What We Do' },
  { component: SlideHowItWorks, name: 'How It Works' },
  { component: SlideShopperStory, name: 'Shopper Story' },
  { component: SlideTeam, name: 'Team' },
  { component: SlideProductMarketFit, name: 'Product Market Fit' },
  { component: SlideBusinessModel, name: 'Business Model' },
  { component: SlideWhyNow, name: 'Why Now' },
  { component: SlideAI, name: 'AI' },
  { component: SlideCompetitiveLandscape, name: 'Competitive Landscape' },
  { component: SlideForecast, name: '2025 Forecast' },
  { component: SlideRoadmap, name: 'Roadmap' },
  { component: SlideSeedRound, name: 'Seed Round' },
  { component: SlideWhyWeExist, name: 'Mission' },
];

export const PDFExporter: React.FC = () => {
  const [isPreparing, setIsPreparing] = useState(false);

  const handleExportPDF = async () => {
    setIsPreparing(true);

    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to export PDF');
      setIsPreparing(false);
      return;
    }

    // Build the HTML content with all slides
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>LerBee Pitch Deck</title>
          <meta charset="utf-8">
          <link href="${window.location.origin}/static/css/main.css" rel="stylesheet">
          <style>
            @page {
              size: A4 landscape;
              margin: 0;
            }
            
            body {
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .slide-container {
              width: 297mm;
              height: 210mm;
              page-break-after: always;
              page-break-inside: avoid;
              position: relative;
              overflow: hidden;
            }
            
            .slide-container:last-child {
              page-break-after: auto;
            }
            
            /* Ensure backgrounds print */
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            
            /* Hide any interactive elements */
            button, .no-print {
              display: none !important;
            }

            /* Wait for load indicator */
            .loading {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 24px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="loading">Preparing PDF...</div>
          <div id="slides-root"></div>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();

    // Wait for styles to load
    await new Promise(resolve => {
      printWindow.onload = resolve;
      setTimeout(resolve, 2000); // Fallback timeout
    });

    // Inject React and render slides
    const script = printWindow.document.createElement('script');
    script.textContent = `
      // Remove loading indicator
      document.querySelector('.loading').style.display = 'none';
      
      // Auto-trigger print after a short delay
      setTimeout(() => {
        window.print();
        
        // Close window after print dialog
        window.onafterprint = function() {
          window.close();
        };
      }, 1000);
    `;
    printWindow.document.body.appendChild(script);

    setIsPreparing(false);
  };

  const handleSimplePrint = () => {
    // Add print-specific styles temporarily
    const style = document.createElement('style');
    style.id = 'print-styles';
    style.textContent = `
      @media print {
        body * {
          visibility: hidden;
        }
        
        .print-container, .print-container * {
          visibility: visible;
        }
        
        .print-container {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        
        .slide-page {
          page-break-after: always;
          width: 297mm;
          height: 210mm;
        }
        
        .slide-page:last-child {
          page-break-after: auto;
        }
      }
    `;
    document.head.appendChild(style);

    // Create container with all slides
    const printContainer = document.createElement('div');
    printContainer.className = 'print-container';
    printContainer.style.position = 'fixed';
    printContainer.style.top = '0';
    printContainer.style.left = '0';
    printContainer.style.width = '100%';
    printContainer.style.zIndex = '99999';
    printContainer.style.background = 'white';

    // Render each slide
    slides.forEach((slide, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'slide-page';
      slideDiv.innerHTML = `<div id="slide-${index}"></div>`;
      printContainer.appendChild(slideDiv);
    });

    document.body.appendChild(printContainer);

    // Trigger print
    setTimeout(() => {
      window.print();
      
      // Cleanup after print
      setTimeout(() => {
        document.body.removeChild(printContainer);
        document.head.removeChild(style);
      }, 100);
    }, 500);
  };

  return (
    <button
      onClick={handleSimplePrint}
      disabled={isPreparing}
      className="fixed bottom-4 right-4 bg-lerbee-yellow text-black px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-lerbee-orange transition-colors no-print z-50"
    >
      <Download size={20} />
      {isPreparing ? 'Preparing...' : 'Export PDF'}
    </button>
  );
};