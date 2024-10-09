import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { CSSRuleObject } from "tailwindcss/types/config";

type TwPluginRules = CSSRuleObject | CSSRuleObject[];

const useRgb = (variable: string, opacity?: number) =>
  opacity ? `rgb(var(${variable}) / ${opacity})` : `rgb(var(${variable}))`;

const testComponents: TwPluginRules = {
  ".demo": {
    padding: "1.5rem",
    borderRadius: "0.375rem",
    borderWidth: "1px"
  },
  ".demo-col": {
    padding: "1.5rem",
    borderRadius: "0.375rem",
    borderWidth: "1px",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  ".demo-row": {
    padding: "1.5rem",
    borderRadius: "0.375rem",
    borderWidth: "1px",
    display: "flex",
    flexDirection: "row",
    gap: "0.75rem"
  }
};

const buttonComponents: TwPluginRules = {
  ".btn": {
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    "&:hover": {
      filter: "brightness(1.15)"
    },
    "&:disabled": {
      filter: "brightness(1)",
      opacity: "0.7"
    }
  },
  ".btn-ghost": {
    borderWidth: "1px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: useRgb("--btn-ghost-bg")
    },
    "&:disabled": {
      backgroundColor: "transparent"
    }
  },
  ".btn-primary": {
    backgroundColor: useRgb("--btn-primary-bg")
  },
  ".btn-warning": {
    backgroundColor: useRgb("--btn-warning-bg")
  },
  ".btn-sm": {
    maxWidth: "10rem",
    width: "100%",
    minHeight: "2.63rem"
  },
  ".btn-md": {
    maxWidth: "15rem",
    width: "100%",
    minHeight: "2.75rem"
  },
  ".btn-lg": {
    maxWidth: "20rem",
    width: "100%",
    minHeight: "2.87rem"
  }
};

const utilities: TwPluginRules = {
  ".element-disabled": {
    filter: "brightness(1)",
    opacity: "0.6"
  },
  ".element-hovered": {
    filter: "brightness(1.15)"
  },
  ".btn-w-sm": {
    maxWidth: "10rem",
    width: "100%"
  },
  ".btn-w-md": {
    maxWidth: "15rem",
    width: "100%"
  },
  ".btn-w-lg": {
    maxWidth: "20rem",
    width: "100%"
  },
  ".btn-w-full": {
    width: "100%"
  }
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/tw-styled/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: useRgb("--background-color"),
        "background-disabled": useRgb("--background-color-disabled"),
        foreground: useRgb("--foreground-color"),
        "foreground-disabled": useRgb("--foreground-color-disabled")
      },
      backgroundColor: {
        primary: useRgb("--primary-color"),
        secondary: useRgb("--secondary-color"),
        tertiary: useRgb("--tertiary-color"),
        accent: useRgb("--accent-color")
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        ...utilities
      }),
        addComponents({
          ...testComponents,
          ...buttonComponents
        });
    })
  ]
};
export default config;
