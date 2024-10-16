import { Keyof, MultiBucket } from "../types";

enum WidthBucket {
  "3xs" = `w-3xs`,
  "2xs" = `w-2xs`,
  xs = `w-xs`,
  sm = `w-sm`,
  md = `w-md`,
  lg = `w-lg`,
  xl = `w-xl`,
  full = `w-full`
}

enum MinWidthBucket {
  "3xs" = `min-w-3xs`,
  "2xs" = `min-w-2xs`,
  xs = `min-w-xs`,
  sm = `min-w-sm`,
  md = `min-w-md`,
  lg = `min-w-lg`,
  xl = `min-w-xl`,
  full = `min-w-full`
}

enum MaxWidthBucket {
  "3xs" = `max-w-3xs`,
  "2xs" = `max-w-2xs`,
  xs = `max-w-xs`,
  sm = `max-w-sm`,
  md = `max-w-md`,
  lg = `max-w-lg`,
  xl = `max-w-xl`,
  full = `max-w-full`
}

export const widthtBucket = {
  width: {
    "3xs": WidthBucket["3xs"],
    "2xs": WidthBucket["2xs"],
    xs: WidthBucket.xs,
    sm: WidthBucket.sm,
    md: WidthBucket.md,
    lg: WidthBucket.lg,
    xl: WidthBucket.xl,
    full: WidthBucket.full
  },
  minWidth: {
    "3xs": MinWidthBucket["3xs"],
    "2xs": MinWidthBucket["2xs"],
    xs: MinWidthBucket.xs,
    sm: MinWidthBucket.sm,
    md: MinWidthBucket.md,
    lg: MinWidthBucket.lg,
    xl: MinWidthBucket.xl,
    full: MinWidthBucket.full
  },
  maxWidth: {
    "3xs": MaxWidthBucket["3xs"],
    "2xs": MaxWidthBucket["2xs"],
    xs: MaxWidthBucket.xs,
    sm: MaxWidthBucket.sm,
    md: MaxWidthBucket.md,
    lg: MaxWidthBucket.lg,
    xl: MaxWidthBucket.xl,
    full: MaxWidthBucket.full
  }
} satisfies MultiBucket<Keyof<typeof WidthBucket>>;

enum HeightBucket {
  "3xs" = `h-3xs`,
  "2xs" = `h-2xs`,
  xs = `h-xs`,
  sm = `h-sm`,
  md = `h-md`,
  lg = `h-lg`,
  xl = `h-xl`,
  screen = "h-screen",
  full = `h-full`
}

enum MinHeightBucket {
  "3xs" = `min-h-3xs`,
  "2xs" = `min-h-2xs`,
  xs = `min-h-xs`,
  sm = `min-h-sm`,
  md = `min-h-md`,
  lg = `min-h-lg`,
  xl = `min-h-xl`,
  screen = "min-h-screen",
  full = `min-h-full`
}

enum MaxHeightBucket {
  "3xs" = `max-h-3xs`,
  "2xs" = `max-h-2xs`,
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
    "3xs": HeightBucket["3xs"],
    "2xs": HeightBucket["2xs"],
    xs: HeightBucket.xs,
    sm: HeightBucket.sm,
    md: HeightBucket.md,
    lg: HeightBucket.lg,
    xl: HeightBucket.xl,
    screen: HeightBucket.screen,
    full: HeightBucket.full
  },
  minHeight: {
    "3xs": MinHeightBucket["3xs"],
    "2xs": MinHeightBucket["2xs"],
    xs: MinHeightBucket.xs,
    sm: MinHeightBucket.sm,
    md: MinHeightBucket.md,
    lg: MinHeightBucket.lg,
    xl: MinHeightBucket.xl,
    screen: MinHeightBucket.screen,
    full: MinHeightBucket.full
  },
  maxHeight: {
    "3xs": MaxHeightBucket["3xs"],
    "2xs": MaxHeightBucket["2xs"],
    xs: MaxHeightBucket.xs,
    sm: MaxHeightBucket.sm,
    md: MaxHeightBucket.md,
    lg: MaxHeightBucket.lg,
    xl: MaxHeightBucket.xl,
    screen: MaxHeightBucket.screen,
    full: MaxHeightBucket.full
  }
} satisfies MultiBucket<Keyof<typeof HeightBucket>>;
