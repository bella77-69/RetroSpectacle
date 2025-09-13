/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        sm: '640px',
        //md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        // Light mode
        customWhite: '#FFFFFF',
        customWhiteDarker: '#A8A6A1',
        customNav: '#3A5A5A',
        customNavDark: '#7A8E8E',
        textWhite: '#F8F6F3',
        active: '#1D3131',
        hover: '#4A5E5E',
        customBlack: '#121212',

        // Dark mode
        darkBackground: '#0A0D12',
        darkNav: '#131920',
        darkText: '#F5F5F5',
        cardLight: '#7A8E8E',

        // Status colors
        success: { DEFAULT: '#22c55e' },
        warning: { DEFAULT: '#f59e0b' },
        error: { DEFAULT: '#ef4444' },

        // Kanban columns
        column: {
          todo: '#2563eb',
          progress: '#d97706',
          review: '#7c3aed',
          done: '#059669',
        },
        // Additional colors
        grey: {
          50: '#f9fafb',
          100: '#f3f4f6', 
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
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
