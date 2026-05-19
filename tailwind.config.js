/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#FFB6C1',
        'primary-light': '#FFE4E9',
        'primary-dark': '#FF69B4',
        'secondary': '#FFFFFF',
        'accent': '#FF1493',
      },
    },
  },
  plugins: [],
}
