import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mono:  ["var(--font-mono)", "monospace"],
        syne:  ["var(--font-syne)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
