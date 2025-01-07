/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#17BF63',
        dark: '#0D1B2A',
        light: '#EAF6FF',
      },
    },
  },
  plugins: [],
}
