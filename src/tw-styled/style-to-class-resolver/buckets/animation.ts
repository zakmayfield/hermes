import { Keyof, SingleBucket } from "../types";

enum AnimationBucket {
  none = "",
  spin = "animate-spin",
  pulse = "animate-pulse"
}

export const animationBucket = {
  none: AnimationBucket.none,
  spin: AnimationBucket.spin,
  pulse: AnimationBucket.pulse
} satisfies SingleBucket<Keyof<typeof AnimationBucket>, AnimationBucket>;
