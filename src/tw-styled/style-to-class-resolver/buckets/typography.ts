import { Keyof, SingleBucket } from "../types";

enum FontSizeBucket {
  none = "",
  sm = `text-[length:var(--font-sm)]`,
  md = `text-[length:var(--font-md)]`,
  lg = `text-[length:var(--font-lg)]`,
  xl = `text-[length:var(--font-xl)]`,
  "2xl" = `text-[length:var(--font-2xl)]`,
  "3xl" = `text-[length:var(--font-3xl)]`,
  "4xl" = `text-[length:var(--font-4xl)]`
}

export const fontSizeBucket = {
  none: FontSizeBucket.none,
  sm: FontSizeBucket.sm,
  md: FontSizeBucket.md,
  lg: FontSizeBucket.lg,
  xl: FontSizeBucket.xl,
  "2xl": FontSizeBucket["2xl"],
  "3xl": FontSizeBucket["3xl"],
  "4xl": FontSizeBucket["4xl"]
} satisfies SingleBucket<Keyof<typeof FontSizeBucket>, FontSizeBucket>;
