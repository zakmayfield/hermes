import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { components, utilities } from "./src/utils/tailwind/index";
import { themeCtx } from "./src/utils/theme/themeCtx";

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
      margin: {
        ...themeCtx.spacing
      },
      padding: {
        ...themeCtx.spacing
      },
      space: {
        ...themeCtx.spacing
      },
      gap: {
        ...themeCtx.spacing
      },
      fontSize: {
        ...themeCtx.fontSize
      },
      maxWidth: {
        ...themeCtx.size
      },
      minWidth: {
        ...themeCtx.size
      },
      width: {
        ...themeCtx.size
      },
      maxHeight: {
        ...themeCtx.size,
        ...themeCtx.height
      },
      minHeight: {
        ...themeCtx.size,
        ...themeCtx.height
      },
      height: {
        ...themeCtx.size,
        ...themeCtx.height
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
