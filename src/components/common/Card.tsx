import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}


export const Card = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  ${({ variant = 'default', theme }) => {
    switch (variant) {
      case 'elevated':
        return css`
          box-shadow: ${theme.shadows.lg};
        `;
      case 'outlined':
        return css`
          border: 1px solid ${theme.colors.surfaceLight};
        `;
      default:
        return css`
          box-shadow: ${theme.shadows.md};
        `;
    }
  }}
  
  ${({ padding = 'md', theme }) => {
    const paddings = {
      none: '0',
      sm: theme.spacing.sm,
      md: theme.spacing.md,
      lg: theme.spacing.lg,
    };
    return css`
      padding: ${paddings[padding]};
    `;
  }}
  
  ${({ interactive, theme }) => interactive && css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.xl};
    }
  `}
`;