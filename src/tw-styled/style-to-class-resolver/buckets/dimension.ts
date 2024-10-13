import { Keyof, MultiBucket } from "../types";

enum WidthBucket {
  none = "",
  xs = `w-[var(--size-xs)]`,
  sm = `w-[var(--size-sm)]`,
  md = `w-[var(--size-md)]`,
  lg = `w-[var(--size-lg)]`,
  xl = `w-[var(--size-xl)]`,
  full = `w-[var(--size-full)]`
}

enum MinWidthBucket {
  none = "",
  xs = `min-w-[var(--size-xs)]`,
  sm = `min-w-[var(--size-sm)]`,
  md = `min-w-[var(--size-md)]`,
  lg = `min-w-[var(--size-lg)]`,
  xl = `min-w-[var(--size-xl)]`,
  full = `min-w-[var(--size-full)]`
}

enum MaxWidthBucket {
  none = "",
  xs = `max-w-[var(--size-xs)]`,
  sm = `max-w-[var(--size-sm)]`,
  md = `max-w-[var(--size-md)]`,
  lg = `max-w-[var(--size-lg)]`,
  xl = `max-w-[var(--size-xl)]`,
  full = `max-w-[var(--size-full)]`
}

enum HeightBucket {
  none = "",
  xs = `h-[var(--size-xs)]`,
  sm = `h-[var(--size-sm)]`,
  md = `h-[var(--size-md)]`,
  lg = `h-[var(--size-lg)]`,
  xl = `h-[var(--size-xl)]`,
  full = `h-[var(--size-full)]`
}

enum MinHeightBucket {
  none = "",
  xs = `min-h-[var(--size-xs)]`,
  sm = `min-h-[var(--size-sm)]`,
  md = `min-h-[var(--size-md)]`,
  lg = `min-h-[var(--size-lg)]`,
  xl = `min-h-[var(--size-xl)]`,
  full = `min-h-[var(--size-full)]`
}

enum MaxHeightBucket {
  none = "",
  xs = `max-h-[var(--size-xs)]`,
  sm = `max-h-[var(--size-sm)]`,
  md = `max-h-[var(--size-md)]`,
  lg = `max-h-[var(--size-lg)]`,
  xl = `max-h-[var(--size-xl)]`,
  full = `max-h-[var(--size-full)]`
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
