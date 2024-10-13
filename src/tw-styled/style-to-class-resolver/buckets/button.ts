import { Keyof, SingleBucket } from "../types";

enum ButtonSizeBucket {
  sm = "btn-sm",
  md = "btn-md",
  lg = "btn-lg"
}

export const buttonSizeBucket = {
  sm: ButtonSizeBucket.sm,
  md: ButtonSizeBucket.md,
  lg: ButtonSizeBucket.lg
} satisfies SingleBucket<Keyof<typeof ButtonSizeBucket>, ButtonSizeBucket>;

enum ButtonWidthBucket {
  sm = "btn-w-sm",
  md = "btn-w-md",
  lg = "btn-w-lg",
  full = "btn-w-full"
}

export const buttonWidthBucket = {
  sm: ButtonWidthBucket.sm,
  md: ButtonWidthBucket.md,
  lg: ButtonWidthBucket.lg,
  full: ButtonWidthBucket.full
} satisfies SingleBucket<Keyof<typeof ButtonWidthBucket>, ButtonWidthBucket>;

enum ButtonHeightBucket {
  sm = "min-h-[2.63rem]",
  md = "min-h-[2.75rem]",
  lg = "min-h-[2.87rem]"
}

export const buttonHeightBucket = {
  sm: ButtonHeightBucket.sm,
  md: ButtonHeightBucket.md,
  lg: ButtonHeightBucket.lg
} satisfies SingleBucket<Keyof<typeof ButtonHeightBucket>, ButtonHeightBucket>;

enum ButtonVariantBucket {
  ghost = "btn-ghost",
  primary = "btn-primary",
  warning = "btn-warning"
}

export const buttonVariantBucket = {
  ghost: ButtonVariantBucket.ghost,
  primary: ButtonVariantBucket.primary,
  warning: ButtonVariantBucket.warning
} satisfies SingleBucket<Keyof<typeof ButtonVariantBucket>, ButtonVariantBucket>;
