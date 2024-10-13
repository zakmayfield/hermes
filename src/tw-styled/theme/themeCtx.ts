type ThemeBuckets = "colors" | "spacing" | "fontSize";

type ThemeCtx = Record<ThemeBuckets, Record<string, string>>;

const themeCtx = {
  colors: {
    background: "rgb(var(--background))",
    foreground: "rgb(var(--foreground))",
    primary: "rgb(var(--primary))",
    secondary: "rgb(var(--secondary))",
    tertiary: "rgb(var(--tertiary))",
    accent: "rgb(var(--accent))"
  },
  spacing: {
    sm: "var(--space-sm)",
    md: "var(--space-md)",
    lg: "var(--space-lg)",
    xl: "var(--space-xl)",
    "2xl": "var(--space-2xl)"
  },
  fontSize: {
    sm: "var(--font-sm)",
    md: "var(--font-md)",
    lg: "var(--font-lg)",
    xl: "var(--font-xl)",
    "2xl": "var(--font-2xl)",
    "3xl": "var(--font-3xl)",
    "4xl": "var(--font-4xl)"
  },
  size: {
    xs: "var(--size-xs)",
    sm: "var(--size-sm)",
    md: "var(--size-md)",
    lg: "var(--size-lg)",
    xl: "var(--size-xl)",
    full: "var(--size-full)"
  }
};

export { themeCtx };
export type { ThemeBuckets, ThemeCtx };
