/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1279px) { ... }
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1037px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "500px" },
        // => @media (max-width: 639px) { ... }
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
        },
        hand: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "10%": {
            transform: "rotate(14deg)",
          },
          "20%": {
            transform: "rotate(-8deg)",
          },
          "30%": {
            transform: "rotate(14deg)",
          },
          "40%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
          "60%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        blob: "blob 2.5s linear infinite",
        hand: "hand 2s",
      },
    },
  },
  plugins: [],
};
