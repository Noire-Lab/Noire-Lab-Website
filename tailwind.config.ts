import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#855CFF",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 80s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": {
            transform: "translateX(-200px) rotate(-3.41deg)",
          },
          "50%": {
            transform: "translateX(-110%) rotate(-3.41deg)",
          },
          "100%": {
            transform: "translateX(-200px) rotate(-3.41deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
