/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
        Barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        "blue-rgba": "rgba(21, 89, 166, 0.9)",
        "bg-grayrgba": "rgba(21, 89, 166, 0.05)",
      },
      screens: {
        sm: { min: "350px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1109px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1110px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      container: {
        screens: {
          sm: "640px",
          md: "728px",
          lg: "1024px",
          xl: "1110px",
        },
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [],
};
