import type { Config } from "tailwindcss";

const useRgb = (variable: string, opacity?: number) =>
  opacity ? `rgb(var(${variable}) / ${opacity})` : `rgb(var(${variable}))`;

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/tw-styled/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: useRgb("--background-color"),
        foreground: useRgb("--foreground-color"),
        "foreground-disabled": useRgb("--foreground-color", 0.4),
        "background-disabled": useRgb("--background-color", 0.6)
      },
      backgroundColor: {
        primary: useRgb("--primary-color"),
        "primary-shimmer": useRgb("--primary-color", 0.5),

        secondary: useRgb("--secondary-color"),
        "secondary-shimmer": useRgb("--secondary-color", 0.5),

        tertiary: useRgb("--tertiary-color"),
        "tertiary-shimmer": useRgb("--tertiary-color", 0.5),

        accent: useRgb("--accent-color"),
        "accent-shimmer": useRgb("--accent-color", 0.5),

        "btn-disabled": useRgb("--btn-disabled"),

        "btn-ghost": useRgb("--btn-ghost-bg", 0.05),
        "btn-ghost-hover": useRgb("--btn-ghost-bg", 0.1),
        "btn-ghost-disabled": useRgb("--btn-ghost-bg", 0.1),

        "btn-primary": useRgb("--btn-primary-bg"),
        "btn-primary-hover": useRgb("--btn-primary-bg", 0.8),
        "btn-primary-disabled": useRgb("--btn-primary-bg", 0.5),

        "btn-warning": useRgb("--btn-warning-bg"),
        "btn-warning-hover": useRgb("--btn-warning-bg", 0.8),
        "btn-warning-disabled": useRgb("--btn-warning-bg", 0.5)
      }
    }
  },
  plugins: []
};
export default config;
