/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackGround : {
          DEFAULT: '#cbd5e1'
        }
      }
    },
  },
  plugins: [],
}

