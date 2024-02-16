/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalnia: [
          "Kalnia", "serif"
        ],
        poppins: [
          "Poppins", "sans-serif"
        ]
      },
      colors: {
        'patriarch': '#6A0171',
        'tiffany-blue': '#04AFBC',
        'mystic': '#D64E86',
      },
    },
  },
  plugins: [],
}

