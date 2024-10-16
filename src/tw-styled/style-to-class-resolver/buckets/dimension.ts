import { Keyof, MultiBucket } from "../types";

enum WidthBucket {
  xs = `w-xs`,
  sm = `w-sm`,
  md = `w-md`,
  lg = `w-lg`,
  xl = `w-xl`,
  full = `w-full`
}

enum MinWidthBucket {
  xs = `min-w-xs`,
  sm = `min-w-sm`,
  md = `min-w-md`,
  lg = `min-w-lg`,
  xl = `min-w-xl`,
  full = `min-w-full`
}

enum MaxWidthBucket {
  xs = `max-w-xs`,
  sm = `max-w-sm`,
  md = `max-w-md`,
  lg = `max-w-lg`,
  xl = `max-w-xl`,
  full = `max-w-full`
}

export const widthtBucket = {
  width: {
    xs: WidthBucket.xs,
    sm: WidthBucket.sm,
    md: WidthBucket.md,
    lg: WidthBucket.lg,
    xl: WidthBucket.xl,
    full: WidthBucket.full
  },
  minWidth: {
    xs: MinWidthBucket.xs,
    sm: MinWidthBucket.sm,
    md: MinWidthBucket.md,
    lg: MinWidthBucket.lg,
    xl: MinWidthBucket.xl,
    full: MinWidthBucket.full
  },
  maxWidth: {
    xs: MaxWidthBucket.xs,
    sm: MaxWidthBucket.sm,
    md: MaxWidthBucket.md,
    lg: MaxWidthBucket.lg,
    xl: MaxWidthBucket.xl,
    full: MaxWidthBucket.full
  }
} satisfies MultiBucket<Keyof<typeof WidthBucket>>;

enum HeightBucket {
  xs = `h-xs`,
  sm = `h-sm`,
  md = `h-md`,
  lg = `h-lg`,
  xl = `h-xl`,
  screen = "h-screen",
  full = `h-full`
}

enum MinHeightBucket {
  xs = `min-h-xs`,
  sm = `min-h-sm`,
  md = `min-h-md`,
  lg = `min-h-lg`,
  xl = `min-h-xl`,
  screen = "min-h-screen",
  full = `min-h-full`
}

enum MaxHeightBucket {
  xs = `max-h-xs`,
  sm = `max-h-sm`,
  md = `max-h-md`,
  lg = `max-h-lg`,
  xl = `max-h-xl`,
  screen = "max-h-screen",
  full = `max-h-full`
}

export const heightBucket = {
  height: {
    xs: HeightBucket.xs,
    sm: HeightBucket.sm,
    md: HeightBucket.md,
    lg: HeightBucket.lg,
    xl: HeightBucket.xl,
    screen: HeightBucket.screen,
    full: HeightBucket.full
  },
  minHeight: {
    xs: MinHeightBucket.xs,
    sm: MinHeightBucket.sm,
    md: MinHeightBucket.md,
    lg: MinHeightBucket.lg,
    xl: MinHeightBucket.xl,
    screen: MinHeightBucket.screen,
    full: MinHeightBucket.full
  },
  maxHeight: {
    xs: MaxHeightBucket.xs,
    sm: MaxHeightBucket.sm,
    md: MaxHeightBucket.md,
    lg: MaxHeightBucket.lg,
    xl: MaxHeightBucket.xl,
    screen: MaxHeightBucket.screen,
    full: MaxHeightBucket.full
  }
} satisfies MultiBucket<Keyof<typeof HeightBucket>>;
