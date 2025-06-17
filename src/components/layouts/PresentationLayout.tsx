import React from 'react';
import styled from '@emotion/styled';
import { usePresentation } from '../../contexts/PresentationContext';
import { SlideContainer } from '../slides/SlideContainer';
import { Button } from '../common';

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

const Controls = styled.div`
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
    nextSlide,
    previousSlide,
    isPlaying,
    togglePlay,
    toggleFullscreen,
  } = usePresentation();

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

  return (
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

      <Controls>
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
      </Controls>
    </LayoutContainer>
  );
};