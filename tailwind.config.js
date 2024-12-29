/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        'center-bottom': '25% 30%',
      }
    },
  },
  plugins: [],
}

  