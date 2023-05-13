/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: 'var(--font-ibm)',
        jetbrains: 'var(--font-jetbrains)',
      },

      keyframes: {
        blink: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },

      animation: {
        blink: 'blink 700ms infinite alternate',
      },
      
    },
  },
  plugins: [],
}
