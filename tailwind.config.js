const { cyan } = require('tailwindcss/colors')

module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Update to match your project structure
  theme: {
    extend: {
      colors: {
        'neon-green': cyan[900],
      },
      dropShadow: {
        neon: '0 0 8px #39ff14, 0 0 16px #39ff14',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
};
