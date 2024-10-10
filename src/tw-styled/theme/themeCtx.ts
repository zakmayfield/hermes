enum ThemeBuckets {
  COLORS = "colors"
}

type ThemeBucketKeys = ThemeBuckets.COLORS;

type ThemeCtx = Record<ThemeBucketKeys, Record<string, string>>;

const themeCtx = {
  colors: {
    background: "--background-color",
    foreground: "--foreground-color",
    primary: "--primary-color",
    secondary: "--secondary-color",
    tertiary: "--tertiary-color",
    accent: "--accent-color"
  }
} satisfies ThemeCtx;

export { themeCtx };
export type { ThemeBucketKeys, ThemeCtx };
