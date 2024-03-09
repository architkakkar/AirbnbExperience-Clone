/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      "md": {"max": "767px"},
      // => @media (max-width: 767px) { ... }

      "sm": {"max": "510px"},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
};
