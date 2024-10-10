import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";
import { components, useRgb, utilities } from "./src/tw-styled/tailwind";
import { themeCtx } from "./src/tw-styled/theme/themeCtx";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/tw-styled/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/tw-styled/**/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: useRgb(themeCtx.colors.background),
        foreground: useRgb(themeCtx.colors.foreground),
        primary: useRgb(themeCtx.colors.primary),
        secondary: useRgb(themeCtx.colors.secondary),
        tertiary: useRgb(themeCtx.colors.tertiary),
        accent: useRgb(themeCtx.colors.accent)
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        ...utilities
      }),
        addComponents({
          ...components
        });
    })
  ]
};
export default config;
