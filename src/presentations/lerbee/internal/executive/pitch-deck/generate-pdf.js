const puppeteer = require('puppeteer');
const path = require('path');

async function generatePitchDeckPDF() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set viewport to 16:9 aspect ratio
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2 // Higher quality
  });

  // Navigate to your local development server
  // Make sure npm start is running first
  await page.goto('http://localhost:3000/lerbee/pitch-deck', {
    waitUntil: 'networkidle0'
  });

  // Generate PDF for each slide
  const slides = await page.evaluate(() => {
    return document.querySelectorAll('[data-slide]').length;
  });

  const pdfs = [];

  for (let i = 0; i < slides; i++) {
    // Navigate to specific slide
    await page.evaluate((slideIndex) => {
      window.location.hash = `#slide-${slideIndex}`;
    }, i);

    await page.waitForTimeout(500); // Wait for animations

    // Generate PDF for this slide
    const pdf = await page.pdf({
      path: `slide-${i + 1}.pdf`,
      format: 'A4',
      landscape: true,
      printBackground: true,
      scale: 0.8,
      margin: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      }
    });

    pdfs.push(pdf);
  }

  // Generate full deck PDF
  await page.pdf({
    path: path.join(__dirname, 'LerBee-Pitch-Deck.pdf'),
    format: 'A4',
    landscape: true,
    printBackground: true,
    scale: 0.8,
    margin: {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0'
    }
  });

  await browser.close();
  console.log('PDF generated successfully!');
}

generatePitchDeckPDF().catch(console.error);