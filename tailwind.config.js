/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#3d2e5f',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#a8556c',
          foreground: '#ffffff',
        },
        accent: '#f5e6d3',
        background: '#fdfbf7',
        'background-alt': '#e8dff5',
        foreground: '#1a1a1a',
        'text-light': '#5a4a6a',
        border: '#3d2e5f',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
