/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        text: {
          primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
          white: 'rgb(var(--color-text-white) / <alpha-value>)',
          dark: 'rgb(var(--color-dark-text) / <alpha-value>)',
        },
        background: {
          primary: 'rgb(var(--color-bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-bg-secondary) / <alpha-value>)',
          dark: 'rgb(var(--color-dark-background) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          hover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
        },
        success: { 
        DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
        hover: 'rgb(var(--color-success-hover) / <alpha-value>)',
        },
        card: {
          bg: 'rgb(var(--color-card-bg) / <alpha-value>)',
          border: 'rgb(var(--color-card-border) / <alpha-value>)',
        },
        custom: {
          white: 'rgb(var(--color-custom-white) / <alpha-value>)',
          whiteDarker: 'rgb(var(--color-custom-white-darker) / <alpha-value>)',
          nav: 'rgb(var(--color-custom-nav) / <alpha-value>)',
          navDark: 'rgb(var(--color-custom-nav-dark) / <alpha-value>)',
          black: 'rgb(var(--color-custom-black) / <alpha-value>)',
          active: 'rgb(var(--color-active) / <alpha-value>)',
          hover: 'rgb(var(--color-hover) / <alpha-value>)',
        },
        status: {
          hover: 'rgb(var(--color-success-hover) / <alpha-value>)',
          warning: 'rgb(var(--color-warning) / <alpha-value>)',
          error: 'rgb(var(--color-error) / <alpha-value>)',
        },
        column: {
          todo: 'rgb(var(--color-column-todo) / <alpha-value>)',
          progress: 'rgb(var(--color-column-progress) / <alpha-value>)',
          review: 'rgb(var(--color-column-review) / <alpha-value>)',
          done: 'rgb(var(--color-column-done) / <alpha-value>)',
        },
        primary: {
          100: '#E0F2FE',
          500: '#3B82F6',
          700: '#1D4ED8',
        },
        grey: {
          50: '#f9fafb',
          100: '#f3f4f6', 
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      button: {
        primary: 'bg-accent text-button-text hover:bg-accent-hover',
        success: 'bg-success text-button-text hover:bg-success-hover',
        accent: 'bg-accent text-button-text hover:bg-accent-hover',
      },
      backgroundImage: {
        'kanban-light': 'linear-gradient(to bottom, #FFFFFF, #f3f4f6)',
        'kanban-dark': 'linear-gradient(to bottom, #1f2937, #111827)',
        'card-light': 'linear-gradient(145deg, #ffffff, #f8fafc)',
        'card-dark': 'linear-gradient(145deg, #1f2937, #374151)',
      },
      boxShadow: {
        kanban: '0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
        card: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        cardHover: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideIn: { '0%': { transform: 'translateY(-10px)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};