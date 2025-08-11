import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#ecf9f8",
          100: "#d1f1ee",
          200: "#a4e3dc",
          300: "#76d4ca",
          400: "#59c9bc",
          500: "#3cbdae",
          600: "#2f978c",
          700: "#22716a",
          800: "#154b48",
          900: "#082526",
        },
      },
    },
  },
  plugins: [],
};

export default config;
