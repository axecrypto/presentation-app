import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Presentation } from '../types/presentation';

interface PresentationContextType {
  presentation: Presentation | null;
  currentSlideIndex: number;
  isPlaying: boolean;
  isFullscreen: boolean;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  previousSlide: () => void;
  togglePlay: () => void;
  toggleFullscreen: () => void;
  setPresentation: (presentation: Presentation) => void;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export const usePresentation = () => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentation must be used within a PresentationProvider');
  }
  return context;
};

interface PresentationProviderProps {
  children: React.ReactNode;
}

export const PresentationProvider: React.FC<PresentationProviderProps> = ({ children }) => {
  const [presentation, setPresentation] = useState<Presentation | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (presentation && index >= 0 && index < presentation.slides.length) {
      setCurrentSlideIndex(index);
    }
  }, [presentation]);

  const nextSlide = useCallback(() => {
    if (presentation) {
      const nextIndex = currentSlideIndex + 1;
      if (nextIndex < presentation.slides.length) {
        setCurrentSlideIndex(nextIndex);
      } else if (presentation.settings?.loop) {
        setCurrentSlideIndex(0);
      }
    }
  }, [presentation, currentSlideIndex]);

  const previousSlide = useCallback(() => {
    if (presentation) {
      const prevIndex = currentSlideIndex - 1;
      if (prevIndex >= 0) {
        setCurrentSlideIndex(prevIndex);
      } else if (presentation.settings?.loop) {
        setCurrentSlideIndex(presentation.slides.length - 1);
      }
    }
  }, [presentation, currentSlideIndex]);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          nextSlide();
          break;
        case 'ArrowLeft':
          previousSlide();
          break;
        case 'f':
          toggleFullscreen();
          break;
        case 'p':
          togglePlay();
          break;
        case 'Escape':
          if (isFullscreen) {
            toggleFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, previousSlide, toggleFullscreen, togglePlay, isFullscreen]);

  useEffect(() => {
    if (isPlaying && presentation?.settings?.autoPlay) {
      const interval = setInterval(() => {
        nextSlide();
      }, presentation.settings.autoPlayInterval || 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, presentation, nextSlide]);

  return (
    <PresentationContext.Provider
      value={{
        presentation,
        currentSlideIndex,
        isPlaying,
        isFullscreen,
        goToSlide,
        nextSlide,
        previousSlide,
        togglePlay,
        toggleFullscreen,
        setPresentation,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};