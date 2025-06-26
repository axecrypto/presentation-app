/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
        surface: 'var(--color-bg-surface)',
        elevated: 'var(--color-bg-elevated)',
        'accent-orange': 'var(--color-accent-orange)',
        'accent-blue': 'var(--color-accent-blue)',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        surface: 'var(--color-bg-surface)',
        elevated: 'var(--color-bg-elevated)',
        muted: 'var(--color-bg-muted)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
    },
  },
  plugins: [],
}