import { Keyof, SingleBucket } from "../types";

export enum OpacityBucket {
  light = "light",
  medium = "medium",
  dark = "dark",
  opaque = "opaque"
}

export const opacityBucket = {
  [OpacityBucket.light]: "opacity-30",
  [OpacityBucket.medium]: "opacity-60",
  [OpacityBucket.dark]: "opacity-90",
  [OpacityBucket.opaque]: "opacity-100"
} satisfies SingleBucket<Keyof<typeof OpacityBucket>, string>;
