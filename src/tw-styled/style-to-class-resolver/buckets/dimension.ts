import { Keyof, MultiBucket } from "../types";

enum WidthBucket {
  none = "",
  xs = `w-xs`,
  sm = `w-sm`,
  md = `w-md`,
  lg = `w-lg`,
  xl = `w-xl`,
  full = `w-full`
}

enum MinWidthBucket {
  none = "",
  xs = `min-w-xs`,
  sm = `min-w-sm`,
  md = `min-w-md`,
  lg = `min-w-lg`,
  xl = `min-w-xl`,
  full = `min-w-full`
}

enum MaxWidthBucket {
  none = "",
  xs = `max-w-xs`,
  sm = `max-w-sm`,
  md = `max-w-md`,
  lg = `max-w-lg`,
  xl = `max-w-xl`,
  full = `max-w-full`
}

enum HeightBucket {
  none = "",
  xs = `h-xs`,
  sm = `h-sm`,
  md = `h-md`,
  lg = `h-lg`,
  xl = `h-xl`,
  full = `h-full`
}

enum MinHeightBucket {
  none = "",
  xs = `min-h-xs`,
  sm = `min-h-sm`,
  md = `min-h-md`,
  lg = `min-h-lg`,
  xl = `min-h-xl`,
  full = `min-h-full`
}

enum MaxHeightBucket {
  none = "",
  xs = `max-h-xs`,
  sm = `max-h-sm`,
  md = `max-h-md`,
  lg = `max-h-lg`,
  xl = `max-h-xl`,
  full = `max-h-full`
}

export const dimensionBucket = {
  width: {
    none: WidthBucket.none,
    xs: WidthBucket.xs,
    sm: WidthBucket.sm,
    md: WidthBucket.md,
    lg: WidthBucket.lg,
    xl: WidthBucket.xl,
    full: WidthBucket.full
  },
  minWidth: {
    none: MinWidthBucket.none,
    xs: MinWidthBucket.xs,
    sm: MinWidthBucket.sm,
    md: MinWidthBucket.md,
    lg: MinWidthBucket.lg,
    xl: MinWidthBucket.xl,
    full: MinWidthBucket.full
  },
  maxWidth: {
    none: MaxWidthBucket.none,
    xs: MaxWidthBucket.xs,
    sm: MaxWidthBucket.sm,
    md: MaxWidthBucket.md,
    lg: MaxWidthBucket.lg,
    xl: MaxWidthBucket.xl,
    full: MaxWidthBucket.full
  },
  height: {
    none: HeightBucket.none,
    xs: HeightBucket.xs,
    sm: HeightBucket.sm,
    md: HeightBucket.md,
    lg: HeightBucket.lg,
    xl: HeightBucket.xl,
    full: HeightBucket.full
  },
  minHeight: {
    none: MinHeightBucket.none,
    xs: MinHeightBucket.xs,
    sm: MinHeightBucket.sm,
    md: MinHeightBucket.md,
    lg: MinHeightBucket.lg,
    xl: MinHeightBucket.xl,
    full: MinHeightBucket.full
  },
  maxHeight: {
    none: MaxHeightBucket.none,
    xs: MaxHeightBucket.xs,
    sm: MaxHeightBucket.sm,
    md: MaxHeightBucket.md,
    lg: MaxHeightBucket.lg,
    xl: MaxHeightBucket.xl,
    full: MaxHeightBucket.full
  }
} satisfies MultiBucket<Keyof<typeof WidthBucket>>;
