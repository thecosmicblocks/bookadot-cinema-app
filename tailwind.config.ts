import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#D45161",
        'dark': '#222222',
      },
      boxShadow: {
        'primary': '0px 4px 16px 0px rgba(255, 128, 54, 0.25)',
      }
    }
  },
  plugins: [],
});

export default config;
