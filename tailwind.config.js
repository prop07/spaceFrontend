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
        whatsappGreen: '#25D366',
        facebookBlue: '#1877F2',
        instagramPurple: '#C13584',
        read: "rgb(75 85 99)",
      },
    },
  },
  plugins: [],
}

