import { Keyof, SingleBucket } from "../types";

enum AnimationBucket {
  spin = "animate-spin",
  pulse = "animate-pulse"
}

export const animationBucket = {
  spin: AnimationBucket.spin,
  pulse: AnimationBucket.pulse
} satisfies SingleBucket<Keyof<typeof AnimationBucket>, AnimationBucket>;
