const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Use `src` directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#021315",
        light: "#F6E7E0",
        primary: "#204C4A", 
        primaryDark: "#46B8AD", 
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, rgba(246, 231, 224, 1) 5px, rgba(246, 231, 224, 1) 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, rgb(2, 19, 21) 8px, rgb(2, 19, 21) 100px);',
        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, rgba(246, 231, 224, 1) 5px, rgba(246, 231, 224, 1) 80px);',
        circularDarkLg: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, rgb(2, 19, 21) 8px, rgb(2, 19, 21) 80px);',
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px)
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px)
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px)
  
      md: { max: "767px" },
      // => @media (max-width: 767px)
  
      sm: { max: "639px" },
      // => @media (max-width: 639px)
  
      xs: { max: "479px" },
      // => @media (max-width: 479px)
    },
  },
  plugins: [],
}