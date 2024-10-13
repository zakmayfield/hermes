import { Keyof, MultiBucket } from "../types";

enum BackgroundColorBucket {
  none = "",
  background = "bg-[var(--background)]",
  foreground = "bg-[var(--foreground)]",
  primary = "bg-[var(--primary)]",
  secondary = "bg-[var(--secondary)]",
  tertiary = "bg-[var(--tertiary)]",
  accent = "bg-[var(--accent)]"
}

enum TextColorBucket {
  none = "",
  background = "text-[color:var(--background)]",
  foreground = "text-[color:var(--foreground)]",
  primary = "text-[color:var(--primary)]",
  secondary = "text-[color:var(--secondary)]",
  tertiary = "text-[color:var(--tertiary)]",
  accent = "text-[color:var(--accent)]"
}

enum BorderColorBucket {
  none = "",
  background = "border-[color:var(--background)]",
  foreground = "border-[color:var(--foreground)]",
  primary = "border-[color:var(--primary)]",
  secondary = "border-[color:var(--secondary)]",
  tertiary = "border-[color:var(--tertiary)]",
  accent = "border-[color:var(--accent)]"
}

export const colorBucket = {
  backgroundColor: {
    none: BackgroundColorBucket.none,
    background: BackgroundColorBucket.background,
    foreground: BackgroundColorBucket.foreground,
    primary: BackgroundColorBucket.primary,
    secondary: BackgroundColorBucket.secondary,
    tertiary: BackgroundColorBucket.tertiary,
    accent: BackgroundColorBucket.accent
  },
  textColor: {
    none: TextColorBucket.none,
    background: TextColorBucket.background,
    foreground: TextColorBucket.foreground,
    primary: TextColorBucket.primary,
    secondary: TextColorBucket.secondary,
    tertiary: TextColorBucket.tertiary,
    accent: TextColorBucket.accent
  },
  borderColor: {
    none: BorderColorBucket.none,
    background: BorderColorBucket.background,
    foreground: BorderColorBucket.foreground,
    primary: BorderColorBucket.primary,
    secondary: BorderColorBucket.secondary,
    tertiary: BorderColorBucket.tertiary,
    accent: BorderColorBucket.accent
  }
} satisfies MultiBucket<Keyof<typeof BackgroundColorBucket>>;
