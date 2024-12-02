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
  green = "green",
  red = "red",
  blue = "blue"
}

export const buttonVariantBucket = {
  [ButtonVariant.ghost]: "btn-ghost",
  [ButtonVariant.green]: "btn-green",
  [ButtonVariant.red]: "btn-red",
  [ButtonVariant.blue]: "btn-blue"
} satisfies SingleBucket<Keyof<typeof ButtonVariant>, string>;
