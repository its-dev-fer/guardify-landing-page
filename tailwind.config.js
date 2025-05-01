/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Reddit Sans"]
    },
    extend: {
      colors: {
        'guardify':'#89D7B5',
        'guardify-dark':'#338680',
      },
      screens: {
        'smd': '700px'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}

