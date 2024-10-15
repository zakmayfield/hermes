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
