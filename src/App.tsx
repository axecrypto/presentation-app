import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { PresentationProvider } from './contexts/PresentationContext';
import { InformaticaThemeProvider } from './contexts/InformaticaThemeProvider';
import { InformaticaThemeBridge } from './components/InformaticaThemeBridge';
import { GlobalStyles } from './styles/GlobalStyles';
import { Home } from './pages/Home';
import { PresentationView } from './pages/PresentationView';
import { InformaticaThemeTest } from './components/InformaticaThemeTest';
import { PDFView } from './presentations/lerbee/internal/executive/pitch-deck/components/PDFView';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <InformaticaThemeProvider>
          <GlobalStyles />
          <PresentationProvider>
            <InformaticaThemeBridge />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/presentation/:id" element={<PresentationView />} />
              <Route path="/theme-test" element={<InformaticaThemeTest />} />
              <Route path="/lerbee-pdf" element={<PDFView />} />
            </Routes>
          </PresentationProvider>
        </InformaticaThemeProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
