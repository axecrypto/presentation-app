import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { usePresentation } from '../../contexts/PresentationContext';
import { SlideContainer } from '../slides/SlideContainer';
import { Button } from '../common';
import { ThemeWrapper } from '../ThemeWrapper';
import { Download } from 'lucide-react';

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Controls = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 100;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.surfaceLight};
  z-index: 100;
`;

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => `${progress}%`};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: width ${({ theme }) => theme.transitions.normal};
`;

const SlideNumber = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  z-index: 100;
`;

export const PresentationLayout: React.FC = () => {
  const {
    presentation,
    currentSlideIndex,
    currentTheme,
    nextSlide,
    previousSlide,
    isPlaying,
    togglePlay,
    toggleFullscreen,
    toggleTheme,
  } = usePresentation();

  const [controlsVisible, setControlsVisible] = useState(true);
  const [isHoveringControls, setIsHoveringControls] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-hide controls after 3 seconds of inactivity
  useEffect(() => {
    const showControls = () => {
      setControlsVisible(true);
      
      // Clear existing timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      
      // Don't hide if hovering over controls
      if (!isHoveringControls) {
        hideTimeoutRef.current = setTimeout(() => {
          setControlsVisible(false);
        }, 3000);
      }
    };

    // Show controls on mouse movement
    const handleMouseMove = () => {
      showControls();
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial timeout
    showControls();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [isHoveringControls]);

  if (!presentation) {
    return (
      <LayoutContainer>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <p>No presentation loaded</p>
        </div>
      </LayoutContainer>
    );
  }

  const progress = ((currentSlideIndex + 1) / presentation.slides.length) * 100;
  const currentSlide = presentation.slides[currentSlideIndex];

  // PDF Export functionality
  const exportToPDF = () => {
    // Check if this is the LerBee pitch deck
    if (presentation.id === 'lerbee-pitch-deck') {
      // Open PDF view in new window
      window.open('/lerbee-pdf', '_blank');
    } else {
      // Generic print for other presentations
      window.print();
    }
  };

  return (
    <ThemeWrapper>
      <LayoutContainer>
        {presentation.settings?.showProgress && (
          <ProgressBar>
            <ProgressFill progress={progress} />
          </ProgressBar>
        )}

        {presentation.settings?.showSlideNumbers && (
          <SlideNumber>
            {currentSlideIndex + 1} / {presentation.slides.length}
          </SlideNumber>
        )}

        <SlideWrapper>
          <SlideContainer slide={currentSlide} isActive={true} />
        </SlideWrapper>

        <Controls 
          isVisible={controlsVisible}
          onMouseEnter={() => setIsHoveringControls(true)}
          onMouseLeave={() => setIsHoveringControls(false)}
        >
          <Button size="sm" variant="ghost" onClick={previousSlide}>
            ←
          </Button>
          <Button size="sm" variant="ghost" onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </Button>
          <Button size="sm" variant="ghost" onClick={nextSlide}>
            →
          </Button>
          <Button size="sm" variant="ghost" onClick={toggleFullscreen}>
            ⛶
          </Button>
          {presentation.settings?.availableThemes && presentation.settings.availableThemes.length > 1 && (
            <Button size="sm" variant="ghost" onClick={toggleTheme}>
              {currentTheme === 'dark' ? '☀️' : '🌙'}
            </Button>
          )}
          <Button size="sm" variant="ghost" onClick={exportToPDF} title="Export to PDF">
            <Download size={16} />
          </Button>
        </Controls>
      </LayoutContainer>
    </ThemeWrapper>
  );
};