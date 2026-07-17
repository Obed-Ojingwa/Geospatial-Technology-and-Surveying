/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d47a1', // deep blue
        secondary: '#1565c0',
        accent: '#ffb300', // amber
        background: '#f5f5f5',
      },
    },
  },
  plugins: [],
}