import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";
import { components, utilities } from "./src/tw-styled/tailwind";
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
        ...themeCtx.colors
      },
      padding: {
        ...themeCtx.spacing
      },
      margin: {
        ...themeCtx.spacing
      },
      space: {
        ...themeCtx.spacing
      },
      fontSize: {
        ...themeCtx.fontSize
      },
      maxWidth: {
        ...themeCtx.size
      },
      width: {
        ...themeCtx.size
      },
      maxHeight: {
        ...themeCtx.size
      },
      height: {
        ...themeCtx.size
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
