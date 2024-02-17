/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'patriarch': '#6A0171',
        'tiffany-blue': '#04AFBC',
        'mystic': '#D64E86',
        'base-1': '#000000',
        'base-2': '#1F1F1F',
        'base-3': '#3D3D3D',
        'mid-1': '#5C5C5C',
        'mid-2': '#7A7A7A',
        'mid-3': '#999999',
        'contrast-1': '#B8B8B8',
        'contrast-2': '#D6D6D6',
        'contrast-3': '#F5F5F5',
      },
    },
  },
  plugins: [],
}

