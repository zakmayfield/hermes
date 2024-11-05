import { Keyof, SingleBucket } from "../../types";

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

export enum ButtonVariant {
  ghost = "ghost",
  primary = "primary",
  warning = "warning",
  caution = "caution"
}

export const buttonVariantBucket = {
  [ButtonVariant.ghost]: "btn-ghost",
  [ButtonVariant.primary]: "btn-primary",
  [ButtonVariant.warning]: "btn-warning",
  [ButtonVariant.caution]: "btn-caution"
} satisfies SingleBucket<Keyof<typeof ButtonVariant>, string>;
