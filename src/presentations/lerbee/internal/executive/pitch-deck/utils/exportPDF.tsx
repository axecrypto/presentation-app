import React from 'react';

export const exportToPDF = () => {
  // Add CSS to show all slides at once for printing
  const printStyles = document.createElement('style');
  printStyles.id = 'pdf-export-styles';
  printStyles.innerHTML = `
    @media print {
      /* Reset any carousel/slider styles */
      .overflow-hidden { overflow: visible !important; }
      .relative { position: static !important; }
      .absolute { position: static !important; }
      
      /* Show all slides */
      [data-testid="slide"] {
        display: block !important;
        page-break-after: always;
        page-break-inside: avoid;
        min-height: 100vh;
        width: 100vw;
      }
      
      /* Remove last page break */
      [data-testid="slide"]:last-child {
        page-break-after: auto;
      }
      
      /* Hide navigation and controls */
      button, [role="navigation"], .fixed {
        display: none !important;
      }
      
      /* Page setup */
      @page {
        size: A4 landscape;
        margin: 0;
      }
      
      /* Ensure backgrounds print */
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      
      /* Fix dark mode for print */
      .dark {
        background: white !important;
        color: black !important;
      }
      
      .dark .bg-primary { background: white !important; }
      .dark .text-primary { color: black !important; }
      .dark .text-secondary { color: #666 !important; }
    }
    
    /* Temporarily show all slides for print preview */
    @media screen {
      body.preparing-pdf [data-testid="slide"] {
        display: block !important;
        page-break-after: always;
        min-height: 100vh;
      }
    }
  `;
  
  // Add styles to document
  document.head.appendChild(printStyles);
  
  // Add class to body to show all slides
  document.body.classList.add('preparing-pdf');
  
  // Small delay to ensure styles are applied
  setTimeout(() => {
    // Trigger print dialog
    window.print();
    
    // Clean up after print
    const cleanup = () => {
      document.body.classList.remove('preparing-pdf');
      const styles = document.getElementById('pdf-export-styles');
      if (styles) {
        document.head.removeChild(styles);
      }
    };
    
    // Clean up when print dialog closes
    window.addEventListener('afterprint', cleanup, { once: true });
    
    // Fallback cleanup after 2 seconds
    setTimeout(cleanup, 2000);
  }, 100);
};

// Simple PDF export button component
export const PDFExportButton: React.FC = () => {
  return (
    <button
      onClick={exportToPDF}
      className="fixed bottom-4 right-4 bg-lerbee-yellow text-black px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-lerbee-orange transition-colors no-print z-50"
      title="Export to PDF"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
      Export PDF
    </button>
  );
};