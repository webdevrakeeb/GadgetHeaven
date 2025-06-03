/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Sora: ["Sora", "sans-serif"],
      },
       textColor: {
        '0f': '#09080F',
        'muted': 'rgba(9, 8, 15, 0.60)'
      },
      backgroundColor: {
        'brand': '#9538E2'
      }
    },
  },
  plugins: [],
}

