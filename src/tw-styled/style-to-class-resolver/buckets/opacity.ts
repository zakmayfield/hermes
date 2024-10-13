import { Keyof, MultiBucket } from "../types";

enum OpacityBucket {
  none = "",
  light = "opacity-30",
  medium = "opacity-60",
  dark = "opacity-90",
  opaque = "opacity-100"
}

export const opacityBucket = {
  opacity: {
    none: OpacityBucket.none,
    light: OpacityBucket.light,
    medium: OpacityBucket.medium,
    dark: OpacityBucket.dark,
    opaque: OpacityBucket.opaque
  }
} satisfies MultiBucket<Keyof<typeof OpacityBucket>>;
