import { Keyof, MultiBucket } from "../types";

enum BackgroundColorBucket {
  background = "bg-background",
  foreground = "bg-foreground",
  primary = "bg-primary",
  secondary = "bg-secondary",
  tertiary = "bg-tertiary",
  accent = "bg-accent"
}

enum TextColorBucket {
  background = "text-background",
  foreground = "text-foreground",
  primary = "text-primary",
  secondary = "text-secondary",
  tertiary = "text-tertiary",
  accent = "text-accent"
}

enum BorderColorBucket {
  background = "border-background",
  foreground = "border-foreground",
  primary = "border-primary",
  secondary = "border-secondary",
  tertiary = "border-teritary",
  accent = "border-accent"
}

export const colorBucket = {
  backgroundColor: {
    background: BackgroundColorBucket.background,
    foreground: BackgroundColorBucket.foreground,
    primary: BackgroundColorBucket.primary,
    secondary: BackgroundColorBucket.secondary,
    tertiary: BackgroundColorBucket.tertiary,
    accent: BackgroundColorBucket.accent
  },
  textColor: {
    background: TextColorBucket.background,
    foreground: TextColorBucket.foreground,
    primary: TextColorBucket.primary,
    secondary: TextColorBucket.secondary,
    tertiary: TextColorBucket.tertiary,
    accent: TextColorBucket.accent
  },
  borderColor: {
    background: BorderColorBucket.background,
    foreground: BorderColorBucket.foreground,
    primary: BorderColorBucket.primary,
    secondary: BorderColorBucket.secondary,
    tertiary: BorderColorBucket.tertiary,
    accent: BorderColorBucket.accent
  }
} satisfies MultiBucket<Keyof<typeof BackgroundColorBucket>>;
