import React from 'react';
import { Download } from 'lucide-react';

export const ExportPDF: React.FC = () => {
  const handleExport = () => {
    // Simple approach using window.print()
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        body { margin: 0; }
        .no-print { display: none !important; }
        .slide-wrapper { 
          page-break-after: always;
          width: 100vw;
          height: 100vh;
        }
        @page {
          size: landscape;
          margin: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    window.print();
    
    // Clean up
    setTimeout(() => {
      document.head.removeChild(style);
    }, 100);
  };

  return (
    <button
      onClick={handleExport}
      className="fixed bottom-4 right-4 bg-lerbee-yellow text-black px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-lerbee-orange transition-colors no-print"
    >
      <Download size={20} />
      Export PDF
    </button>
  );
};