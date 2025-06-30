const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  console.log('Starting PDF generation...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport to 16:9 presentation size
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2
    });

    // Navigate to the presentation
    console.log('Loading presentation...');
    await page.goto('http://localhost:3000/#/presentations/lerbee-pitch-deck', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for slides to load
    await page.waitForSelector('.min-h-screen', { timeout: 10000 });
    
    // Add CSS to ensure all slides are visible for PDF
    await page.addStyleTag({
      content: `
        /* Force all slides to be visible */
        .slick-slider { display: block !important; }
        .slick-list { overflow: visible !important; height: auto !important; }
        .slick-track { position: static !important; transform: none !important; }
        .slick-slide { 
          display: block !important; 
          float: none !important; 
          page-break-after: always;
          height: 100vh !important;
          width: 100vw !important;
        }
        .slick-slide:last-child { page-break-after: auto; }
        
        /* Hide navigation */
        .slick-dots, .slick-arrow, button { display: none !important; }
        
        /* Ensure backgrounds print */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      `
    });

    // Generate the PDF
    console.log('Generating PDF...');
    const pdfPath = path.join(__dirname, '..', 'LerBee-Pitch-Deck.pdf');
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      preferCSSPageSize: false,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      }
    });

    console.log(`✅ PDF generated successfully: ${pdfPath}`);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
  } finally {
    await browser.close();
  }
}

// Check if server is running
const http = require('http');
http.get('http://localhost:3000', (res) => {
  generatePDF();
}).on('error', (err) => {
  console.error('❌ Error: Development server is not running!');
  console.log('Please run "npm start" in another terminal first.');
  process.exit(1);
});