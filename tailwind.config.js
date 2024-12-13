/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#326fd1",
        secondary: '#000000',
        outlineWhite: "#525252"

      },
    },
  },
  plugins: [],
}

