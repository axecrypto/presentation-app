import { Global, css } from '@emotion/react';
import { theme } from './theme';

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html, body, #root {
        height: 100%;
        width: 100%;
      }

      body {
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.fontSize.base};
        color: ${theme.colors.text};
        background-color: ${theme.colors.background};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      h1, h2, h3, h4, h5, h6 {
        font-weight: ${theme.typography.fontWeight.bold};
        line-height: 1.2;
        margin-bottom: ${theme.spacing.md};
      }

      h1 {
        font-size: ${theme.typography.fontSize['5xl']};
      }

      h2 {
        font-size: ${theme.typography.fontSize['4xl']};
      }

      h3 {
        font-size: ${theme.typography.fontSize['3xl']};
      }

      h4 {
        font-size: ${theme.typography.fontSize['2xl']};
      }

      h5 {
        font-size: ${theme.typography.fontSize.xl};
      }

      h6 {
        font-size: ${theme.typography.fontSize.lg};
      }

      p {
        line-height: 1.6;
        margin-bottom: ${theme.spacing.md};
      }

      a {
        color: ${theme.colors.primary};
        text-decoration: none;
        transition: color ${theme.transitions.fast};

        &:hover {
          color: ${theme.colors.primaryLight};
        }
      }

      button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
        font-size: inherit;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      code {
        font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
        background-color: ${theme.colors.surfaceLight};
        padding: 2px 6px;
        border-radius: ${theme.borderRadius.sm};
        font-size: ${theme.typography.fontSize.sm};
      }

      pre {
        background-color: ${theme.colors.surface};
        padding: ${theme.spacing.md};
        border-radius: ${theme.borderRadius.md};
        overflow-x: auto;
        margin-bottom: ${theme.spacing.md};
      }

      pre code {
        background: none;
        padding: 0;
      }

      ::selection {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.text};
      }
    `}
  />
);