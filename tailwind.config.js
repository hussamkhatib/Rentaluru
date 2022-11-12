/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          200: "#C1DBF2",
          300: "#4C91CD",
          400: "#21659E",
          500: "#123266",
          600: "#112B4B",
        },
        secondary: {
          600: "#153757",
          700: "#102B44",
          800: "#0D2337",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
