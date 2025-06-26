import React from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from '../../types/presentation';

interface SlideContainerProps {
  slide: Slide;
  isActive: boolean;
}

const slideVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { x: 1000, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -1000, opacity: 0 },
  },
  zoom: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 },
  },
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
};

const Container = styled(motion.div)<{ background?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xxl};
  overflow: auto;
  
  &.gradient-dark {
    background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-surface) 100%);
  }
`;

const ContentWrapper = styled.div<{ layout?: string; hasTitle?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${({ layout, hasTitle }) => {
    switch (layout) {
      case 'centered':
        return `
          align-items: center;
          justify-content: center;
          text-align: center;
        `;
      case 'split':
        return `
          flex-direction: row;
          gap: 2rem;
          > * {
            flex: 1;
          }
        `;
      case 'full':
        return `
          padding: 0;
          margin: ${hasTitle ? '-1rem -3rem -3rem -3rem' : '-3rem'};
        `;
      default:
        return '';
    }
  }}
`;

export const SlideContainer: React.FC<SlideContainerProps> = ({ slide, isActive }) => {
  const transitionType = slide.transition?.type || 'fade';
  const duration = slide.transition?.duration || 0.5;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <Container
          key={slide.id}
          background={slide.background}
          className={`bg-primary ${slide.background === 'gradient-dark' ? 'gradient-dark' : ''}`}
          variants={slideVariants[transitionType]}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration }}
        >
          {slide.title && (
            <h1 className="text-4xl font-bold text-primary mb-8 z-10">{slide.title}</h1>
          )}
          <ContentWrapper layout={slide.layout} hasTitle={!!slide.title}>
            {slide.content}
          </ContentWrapper>
        </Container>
      )}
    </AnimatePresence>
  );
};