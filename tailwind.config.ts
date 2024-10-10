import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { components, utilities } from "@/tw-styled/tailwind/config";
import { themeCtx } from "@/tw-styled/theme";

const useRgb = (variable: string, opacity?: number) =>
  opacity ? `rgb(var(${variable}) / ${opacity})` : `rgb(var(${variable}))`;

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/tw-styled/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/tw-styled/stories/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: useRgb("--background-color"),
        "background-disabled": useRgb("--background-color-disabled"),
        foreground: useRgb("--foreground-color"),
        "foreground-disabled": useRgb("--foreground-color-disabled")
      },
      backgroundColor: {
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
