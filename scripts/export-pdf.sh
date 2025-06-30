#!/bin/bash

# Export LerBee Pitch Deck to PDF

echo "🐝 LerBee Pitch Deck PDF Exporter"
echo "================================="
echo ""

# Check if the server is running
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "❌ Error: The presentation app is not running!"
    echo "Please run 'npm start' in another terminal first."
    exit 1
fi

echo "✓ Presentation app is running"
echo ""
echo "📄 To export the pitch deck as PDF:"
echo ""
echo "1. Open your browser and go to:"
echo "   http://localhost:3000/#/presentations/lerbee-pitch-deck"
echo ""
echo "2. Once the presentation loads, press:"
echo "   • Mac: Cmd + P"
echo "   • Windows/Linux: Ctrl + P"
echo ""
echo "3. In the print dialog:"
echo "   • Destination: Save as PDF"
echo "   • Layout: Landscape"
echo "   • Paper size: A4 or Letter"
echo "   • Margins: None"
echo "   • Options: ✓ Background graphics"
echo ""
echo "4. Click 'Save' and choose a location"
echo ""
echo "💡 Tip: For best results, use Chrome or Edge browser"
echo ""

# Open the presentation in the default browser
echo "Opening presentation in your browser..."
open "http://localhost:3000/#/presentations/lerbee-pitch-deck" 2>/dev/null || \
xdg-open "http://localhost:3000/#/presentations/lerbee-pitch-deck" 2>/dev/null || \
start "http://localhost:3000/#/presentations/lerbee-pitch-deck" 2>/dev/null

echo "✅ Browser opened. Follow the steps above to export PDF."