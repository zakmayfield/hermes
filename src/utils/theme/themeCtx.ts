type ThemeBuckets = "colors" | "spacing" | "fontSize" | "size" | "height";

type ThemeCtx = Record<ThemeBuckets, Record<string, string>>;

const themeCtx = {
  colors: {
    background: "rgb(var(--background))",
    foreground: "rgb(var(--foreground))",

    ghost: "rgb(var(--ghost))",

    "theme-primary": "rgb(var(--theme-primary))",
    "theme-secondary": "rgb(var(--theme-secondary))",
    "theme-tertiary": "rgb(var(--theme-tertiary))",
    "theme-accent": "rgb(var(--theme-accent))",

    "theme-blue-light": "rgb(var(--theme-blue-light))",
    "theme-blue": "rgb(var(--theme-blue-base))",
    "theme-blue-dark": "rgb(var(--theme-blue-light))",

    "theme-red-light": "rgb(var(--theme-red-light))",
    "theme-red": "rgb(var(--theme-red-base))",
    "theme-red-dark": "rgb(var(--theme-red-light))",

    "theme-green-light": "rgb(var(--theme-green-light))",
    "theme-green": "rgb(var(--theme-green-base))",
    "theme-green-dark": "rgb(var(--theme-green-light))"
  },
  spacing: {
    none: "var(--space-none)",
    xs: "var(--space-xs)",
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
    none: "var(--size-none)",
    "4xs": "var(--size-4xs)",
    "3xs": "var(--size-3xs)",
    "2xs": "var(--size-2xs)",
    xs: "var(--size-xs)",
    sm: "var(--size-sm)",
    md: "var(--size-md)",
    lg: "var(--size-lg)",
    xl: "var(--size-xl)",
    "2xl": "var(--size-2xl)",
    "3xl": "var(--size-3xl)",
    full: "var(--size-full)",
    "1/2": "var(--size-half)",
    "1/3": "var(--size-third)",
    "2/3": "var(--size-two-thirds)"
  },
  height: {
    screen: "var(--size-screen)"
  }
};

export { themeCtx };
export type { ThemeBuckets, ThemeCtx };
