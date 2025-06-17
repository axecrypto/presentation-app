import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { PresentationProvider, usePresentation } from './contexts/PresentationContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { PresentationLayout } from './components/layouts/PresentationLayout';
import { samplePresentation } from './presentations/samplePresentation';

function PresentationApp() {
  const { setPresentation } = usePresentation();

  useEffect(() => {
    setPresentation(samplePresentation);
  }, [setPresentation]);

  return <PresentationLayout />;
}

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <PresentationProvider>
        <PresentationApp />
      </PresentationProvider>
    </ThemeProvider>
  );
}

export default App;
