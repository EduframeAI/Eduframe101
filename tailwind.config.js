/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        gaming: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        gaming: {
          primary: '#FF3E3E',
          secondary: '#4CAF50',
          accent: '#FFD700',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'neon-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 5px theme(colors.gaming.accent), 0 0 10px theme(colors.gaming.primary)' 
          },
          '50%': { 
            boxShadow: '0 0 15px theme(colors.gaming.accent), 0 0 30px theme(colors.gaming.primary)' 
          },
        },
      },
      boxShadow: {
        neon: '0 0 10px theme(colors.gaming.accent), 0 0 20px theme(colors.gaming.primary)',
      },
    },
  },
  plugins: [],
};