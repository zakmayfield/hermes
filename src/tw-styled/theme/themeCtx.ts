type ThemeBuckets = "colors";

type ColorBucketKeys =
  | "background"
  | "foreground"
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent";

enum ColorBucketValues {
  background = "--background",
  foreground = "--foreground",
  primary = "--primary",
  secondary = "--secondary",
  tertiary = "--tertiary",
  accent = "--accent"
}

type ThemeCtx = Record<ThemeBuckets, Record<ColorBucketKeys, ColorBucketValues>>;

const useVar = (str: string) => {
  return `var(${str})` as ColorBucketValues;
};

const themeCtx = {
  colors: {
    background: useVar(ColorBucketValues.background),
    foreground: useVar(ColorBucketValues.foreground),
    primary: useVar(ColorBucketValues.primary),
    secondary: useVar(ColorBucketValues.secondary),
    tertiary: useVar(ColorBucketValues.tertiary),
    accent: useVar(ColorBucketValues.accent)
  }
} satisfies ThemeCtx;

export { themeCtx };
export type { ThemeBuckets, ThemeCtx };
