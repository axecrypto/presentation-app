import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { PresentationProvider } from './contexts/PresentationContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { Home } from './pages/Home';
import { PresentationView } from './pages/PresentationView';
import { InformaticaThemeTest } from './components/InformaticaThemeTest';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <GlobalStyles />
        <PresentationProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation/:id" element={<PresentationView />} />
            <Route path="/theme-test" element={<InformaticaThemeTest />} />
          </Routes>
        </PresentationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
