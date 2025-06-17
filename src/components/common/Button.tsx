import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '../../styles/theme';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const buttonVariants = (theme: Theme) => ({
  primary: css`
    background-color: ${theme.colors.primary};
    color: white;
    
    &:hover:not(:disabled) {
      background-color: ${theme.colors.primaryDark};
    }
  `,
  secondary: css`
    background-color: ${theme.colors.secondary};
    color: white;
    
    &:hover:not(:disabled) {
      background-color: ${theme.colors.secondaryDark};
    }
  `,
  outline: css`
    background-color: transparent;
    border: 2px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    
    &:hover:not(:disabled) {
      background-color: ${theme.colors.primary};
      color: white;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${theme.colors.text};
    
    &:hover:not(:disabled) {
      background-color: ${theme.colors.surfaceLight};
    }
  `,
});

const buttonSizes = (theme: Theme) => ({
  sm: css`
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: ${theme.typography.fontSize.sm};
  `,
  md: css`
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.typography.fontSize.base};
  `,
  lg: css`
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    font-size: ${theme.typography.fontSize.lg};
  `,
});

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  outline: none;
  border: none;
  
  ${({ theme, variant = 'primary' }) => buttonVariants(theme)[variant]};
  ${({ theme, size = 'md' }) => buttonSizes(theme)[size]};
  ${({ fullWidth }) => fullWidth && css`width: 100%;`};
  
  &:focus-visible {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight}40;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;