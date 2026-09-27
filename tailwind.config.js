/** @type {import('tailwindcss').Config} */
const BOOK_ANTIQUA = [
  '"Book Antiqua"',
  '"Palatino Linotype"',
  'Palatino',
  '"URW Palladio L"',
  '"TeX Gyre Pagella"',
  'Georgia',
  'serif',
]

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Book Antiqua is a licensed Monotype face that can't be served as a
      // webfont, so this is a local-first stack: Book Antiqua on Windows,
      // Palatino on Apple platforms, then the closest free clones, then
      // Georgia. One stack for headings and body alike.
      fontFamily: {
        sans: BOOK_ANTIQUA,
        serif: BOOK_ANTIQUA,
        display: BOOK_ANTIQUA,
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
        // Nudges the badge-wall arrow along its own axis, up and to the left.
        'sparky-nudge': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-14px, -12px)' },
        },
        // Runs the G-bus down the route and back, turning around during the
        // dwell at each end. Callers set --gbus-travel to (track - bus) width.
        // Idle drift for the theme bubbles — decorative only, no encoding.
        'bubble-drift': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        'gbus-shuttle': {
          '0%, 6%': { transform: 'translateX(0) scaleX(1)' },
          '44%': { transform: 'translateX(var(--gbus-travel)) scaleX(1)' },
          '50%': { transform: 'translateX(var(--gbus-travel)) scaleX(-1)' },
          '94%': { transform: 'translateX(0) scaleX(-1)' },
          '100%': { transform: 'translateX(0) scaleX(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'sparky-nudge': 'sparky-nudge 1.8s ease-in-out infinite',
        'gbus-shuttle': 'gbus-shuttle 7s ease-in-out infinite',
        'bubble-drift': 'bubble-drift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
