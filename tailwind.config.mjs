import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "code:not(pre code)": {
              backgroundColor: "#c9c7c79c !important",
              color: "#1f2937 !important",
            },
          },
        },
        invert: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "code:not(pre code)": {
              backgroundColor: "#636a7554 !important",
              color: "#f5f5f5 !important",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
