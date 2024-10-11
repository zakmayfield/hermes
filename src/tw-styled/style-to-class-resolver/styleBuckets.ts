type BucketType<T extends string, K> = Record<T, K>;

/*
  --- COLOR KEYS
*/
export type ColorKeys =
  | "none"
  | "background"
  | "foreground"
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent";

/*
  --- BACKGROUND COLOR
*/
enum BackgroundColorBucketValues {
  none = "",
  background = "bg-[var(--background)]",
  foreground = "bg-[var(--foreground)]",
  primary = "bg-[var(--primary)]",
  secondary = "bg-[var(--secondary)]",
  tertiary = "bg-[var(--tertiary)]",
  accent = "bg-[var(--accent)]"
}

export const backgroundColorBucket = {
  none: BackgroundColorBucketValues.none,
  background: BackgroundColorBucketValues.background,
  foreground: BackgroundColorBucketValues.foreground,
  primary: BackgroundColorBucketValues.primary,
  secondary: BackgroundColorBucketValues.secondary,
  tertiary: BackgroundColorBucketValues.tertiary,
  accent: BackgroundColorBucketValues.accent
} satisfies BucketType<ColorKeys, BackgroundColorBucketValues>;

/*
  --- TEXT COLOR
*/
enum TextColorBucketValues {
  none = "",
  background = "text-[color:var(--background)]",
  foreground = "text-[color:var(--foreground)]",
  primary = "text-[color:var(--primary)]",
  secondary = "text-[color:var(--secondary)]",
  tertiary = "text-[color:var(--tertiary)]",
  accent = "text-[color:var(--accent)]"
}

export const textColorBucket = {
  none: TextColorBucketValues.none,
  background: TextColorBucketValues.background,
  foreground: TextColorBucketValues.foreground,
  primary: TextColorBucketValues.primary,
  secondary: TextColorBucketValues.secondary,
  tertiary: TextColorBucketValues.tertiary,
  accent: TextColorBucketValues.accent
} satisfies BucketType<ColorKeys, TextColorBucketValues>;

/*
  --- SPACING KEYS
*/
export type SpacingKeys = "none" | "sm" | "md" | "lg" | "xl" | "2xl";

/*
  --- SPACE
*/
enum SpaceXBucketValues {
  none = "",
  sm = `space-x-[var(--space-sm)]`,
  md = `space-x-[var(--space-md)]`,
  lg = `space-x-[var(--space-lg)]`,
  xl = `space-x-[var(--space-xl)]`,
  "2xl" = `space-x-[var(--space-2xl)]`
}

export const spaceXBucket = {
  none: SpaceXBucketValues.none,
  sm: SpaceXBucketValues.sm,
  md: SpaceXBucketValues.md,
  lg: SpaceXBucketValues.lg,
  xl: SpaceXBucketValues.xl,
  "2xl": SpaceXBucketValues["2xl"]
} satisfies BucketType<SpacingKeys, SpaceXBucketValues>;

enum SpaceYBucketValues {
  none = "",
  sm = `space-y-[var(--space-sm)]`,
  md = `space-y-[var(--space-md)]`,
  lg = `space-y-[var(--space-lg)]`,
  xl = `space-y-[var(--space-xl)]`,
  "2xl" = `space-y-[var(--space-2xl)]`
}

export const spaceYBucket = {
  none: SpaceYBucketValues.none,
  sm: SpaceYBucketValues.sm,
  md: SpaceYBucketValues.md,
  lg: SpaceYBucketValues.lg,
  xl: SpaceYBucketValues.xl,
  "2xl": SpaceYBucketValues["2xl"]
} satisfies BucketType<SpacingKeys, SpaceYBucketValues>;

/*
  --- PADDING
*/
enum PaddingBucketValues {
  none = "",
  sm = `p-[var(--space-sm)]`,
  md = `p-[var(--space-md)]`,
  lg = `p-[var(--space-lg)]`,
  xl = `p-[var(--space-xl)]`,
  "2xl" = `p-[var(--space-2xl)]`
}

export const paddingBucket = {
  none: PaddingBucketValues.none,
  sm: PaddingBucketValues.sm,
  md: PaddingBucketValues.md,
  lg: PaddingBucketValues.lg,
  xl: PaddingBucketValues.xl,
  "2xl": PaddingBucketValues["2xl"]
} satisfies BucketType<SpacingKeys, PaddingBucketValues>;

enum PaddingXBucketValues {
  none = "",
  sm = `px-[var(--space-sm)]`,
  md = `px-[var(--space-md)]`,
  lg = `px-[var(--space-lg)]`,
  xl = `px-[var(--space-xl)]`,
  "2xl" = `px-[var(--space-2xl)]`
}

export const paddingXBucket = {
  none: PaddingXBucketValues.none,
  sm: PaddingXBucketValues.sm,
  md: PaddingXBucketValues.md,
  lg: PaddingXBucketValues.lg,
  xl: PaddingXBucketValues.xl,
  "2xl": PaddingXBucketValues["2xl"]
} satisfies BucketType<SpacingKeys, PaddingXBucketValues>;

enum PaddingYBucketValues {
  none = "",
  sm = `py-[var(--space-sm)]`,
  md = `py-[var(--space-md)]`,
  lg = `py-[var(--space-lg)]`,
  xl = `py-[var(--space-xl)]`,
  "2xl" = `py-[var(--space-2xl)]`
}

export const paddingYBucket = {
  none: PaddingYBucketValues.none,
  sm: PaddingYBucketValues.sm,
  md: PaddingYBucketValues.md,
  lg: PaddingYBucketValues.lg,
  xl: PaddingYBucketValues.xl,
  "2xl": PaddingYBucketValues["2xl"]
} satisfies BucketType<SpacingKeys, PaddingYBucketValues>;

/*
  --- MARGIN
*/
enum MarginBucketValues {
  none = "",
  sm = `m-[var(--space-sm)]`,
  md = `m-[var(--space-md)]`,
  lg = `m-[var(--space-lg)]`,
  xl = `m-[var(--space-xl)]`,
  "2xl" = `m-[var(--space-2xl)]`
}

export const marginBucket = {
  none: MarginBucketValues.none,
  sm: MarginBucketValues.sm,
  md: MarginBucketValues.md,
  lg: MarginBucketValues.lg,
  xl: MarginBucketValues.xl,
  "2xl": MarginBucketValues["2xl"]
} satisfies BucketType<SpacingKeys, MarginBucketValues>;

enum MarginXBucketValues {
  none = "",
  sm = `mx-[var(--space-sm)]`,
  md = `mx-[var(--space-md)]`,
  lg = `mx-[var(--space-lg)]`,
  xl = `mx-[var(--space-xl)]`,
  "2xl" = `mx-[var(--space-2xl)]`
}

export const marginXBucket = {
  none: MarginXBucketValues.none,
  sm: MarginXBucketValues.sm,
  md: MarginXBucketValues.md,
  lg: MarginXBucketValues.lg,
  xl: MarginXBucketValues.xl,
  "2xl": MarginXBucketValues["2xl"]
} satisfies BucketType<SpacingKeys, MarginXBucketValues>;

enum MarginYBucketValues {
  none = "",
  sm = `my-[var(--space-sm)]`,
  md = `my-[var(--space-md)]`,
  lg = `my-[var(--space-lg)]`,
  xl = `my-[var(--space-xl)]`,
  "2xl" = `my-[var(--space-2xl)]`
}

export const marginYBucket = {
  none: MarginYBucketValues.none,
  sm: MarginYBucketValues.sm,
  md: MarginYBucketValues.md,
  lg: MarginYBucketValues.lg,
  xl: MarginYBucketValues.xl,
  "2xl": MarginYBucketValues["2xl"]
} satisfies BucketType<SpacingKeys, MarginYBucketValues>;

/*
  --- FONT
*/
enum FontSizeBucketValues {
  none = "",
  sm = `text-[length:var(--font-sm)]`,
  md = `text-[length:var(--font-md)]`,
  lg = `text-[length:var(--font-lg)]`,
  xl = `text-[length:var(--font-xl)]`,
  "2xl" = `text-[length:var(--font-2xl)]`,
  "3xl" = `text-[length:var(--font-3xl)]`,
  "4xl" = `text-[length:var(--font-4xl)]`
}

export const fontSizeBucket = {
  none: FontSizeBucketValues.none,
  sm: FontSizeBucketValues.sm,
  md: FontSizeBucketValues.md,
  lg: FontSizeBucketValues.lg,
  xl: FontSizeBucketValues.xl,
  "2xl": FontSizeBucketValues["2xl"],
  "3xl": FontSizeBucketValues["3xl"],
  "4xl": FontSizeBucketValues["4xl"]
} satisfies BucketType<string, FontSizeBucketValues>;

export type FontSizeKeys = keyof typeof fontSizeBucket;

/*
  --- SIZE KEYS
*/
export type SizeKeys = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

/*
  --- WIDTH
*/
enum WidthBucketValues {
  none = "",
  xs = `w-[var(--size-xs)]`,
  sm = `w-[var(--size-sm)]`,
  md = `w-[var(--size-md)]`,
  lg = `w-[var(--size-lg)]`,
  xl = `w-[var(--size-xl)]`,
  full = `w-[var(--size-full)]`
}

export const widthBucket = {
  none: WidthBucketValues.none,
  xs: WidthBucketValues.xs,
  sm: WidthBucketValues.sm,
  md: WidthBucketValues.md,
  lg: WidthBucketValues.lg,
  xl: WidthBucketValues.xl,
  full: WidthBucketValues.full
} satisfies BucketType<SizeKeys, WidthBucketValues>;

enum MaxWidthBucketValues {
  none = "",
  xs = `max-w-[var(--size-xs)]`,
  sm = `max-w-[var(--size-sm)]`,
  md = `max-w-[var(--size-md)]`,
  lg = `max-w-[var(--size-lg)]`,
  xl = `max-w-[var(--size-xl)]`,
  full = `max-w-[var(--size-full)]`
}

export const maxWidthBucket = {
  none: MaxWidthBucketValues.none,
  xs: MaxWidthBucketValues.xs,
  sm: MaxWidthBucketValues.sm,
  md: MaxWidthBucketValues.md,
  lg: MaxWidthBucketValues.lg,
  xl: MaxWidthBucketValues.xl,
  full: MaxWidthBucketValues.full
} satisfies BucketType<SizeKeys, MaxWidthBucketValues>;

/*
  --- HEIGHT
*/
enum HeightBucketValues {
  none = "",
  xs = `h-[var(--size-xs)]`,
  sm = `h-[var(--size-sm)]`,
  md = `h-[var(--size-md)]`,
  lg = `h-[var(--size-lg)]`,
  xl = `h-[var(--size-xl)]`,
  full = `h-[var(--size-full)]`
}

export const heightBucket = {
  none: HeightBucketValues.none,
  xs: HeightBucketValues.xs,
  sm: HeightBucketValues.sm,
  md: HeightBucketValues.md,
  lg: HeightBucketValues.lg,
  xl: HeightBucketValues.xl,
  full: HeightBucketValues.full
} satisfies BucketType<SizeKeys, HeightBucketValues>;

enum MaxHeightBucketValues {
  none = "",
  xs = `max-h-[var(--size-xs)]`,
  sm = `max-h-[var(--size-sm)]`,
  md = `max-h-[var(--size-md)]`,
  lg = `max-h-[var(--size-lg)]`,
  xl = `max-h-[var(--size-xl)]`,
  full = `max-h-[var(--size-full)]`
}

export const maxHeightBucket = {
  none: MaxHeightBucketValues.none,
  xs: MaxHeightBucketValues.xs,
  sm: MaxHeightBucketValues.sm,
  md: MaxHeightBucketValues.md,
  lg: MaxHeightBucketValues.lg,
  xl: MaxHeightBucketValues.xl,
  full: MaxHeightBucketValues.full
} satisfies BucketType<SizeKeys, MaxHeightBucketValues>;
