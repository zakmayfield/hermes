enum ThemeBuckets {
  COLORS = "colors"
}

export type ThemeBucketKeys = ThemeBuckets.COLORS;

export type ThemeCtx = Record<ThemeBucketKeys, Record<string, string>>;

export const themeCtx = {
  colors: {
    primary: "--primary-color",
    secondary: "--secondary-color",
    tertiary: "--tertiary-color",
    accent: "--accent-color"
  }
} satisfies ThemeCtx;
