import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
  padding?: boolean;
}

const maxWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ maxWidth = 'lg' }) => maxWidths[maxWidth]};
  ${({ centered = true }) => centered && css`
    margin-left: auto;
    margin-right: auto;
  `}
  ${({ padding = true, theme }) => padding && css`
    padding-left: ${theme.spacing.md};
    padding-right: ${theme.spacing.md};
  `}
`;