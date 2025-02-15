import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "code": {
              fontWeight: "normal",
              backgroundColor: `${theme("colors.gray.100")} !important`,
              padding: "0.2em 0.4em",
              borderRadius: theme("borderRadius.sm"),
              color: theme("colors.gray.800"),
            },
          },
        },
        dark: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "code": {
              fontWeight: "normal",
              backgroundColor: `${theme("colors.gray.800")} !important`,
              padding: "0.2em 0.4em",
              borderRadius: theme("borderRadius.sm"),
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
