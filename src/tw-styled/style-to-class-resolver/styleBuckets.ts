import { Styles } from ".";

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
  --- SPACING
*/
export type SpacingKeys = "none" | "sm" | "md" | "lg" | "xl" | "2xl";

enum PaddingBucket {
  none = "",
  sm = `p-[var(--space-sm)]`,
  md = `p-[var(--space-md)]`,
  lg = `p-[var(--space-lg)]`,
  xl = `p-[var(--space-xl)]`,
  "2xl" = `p-[var(--space-2xl)]`
}

enum PaddingXBucket {
  none = "",
  sm = `px-[var(--space-sm)]`,
  md = `px-[var(--space-md)]`,
  lg = `px-[var(--space-lg)]`,
  xl = `px-[var(--space-xl)]`,
  "2xl" = `px-[var(--space-2xl)]`
}

enum PaddingYBucket {
  none = "",
  sm = `py-[var(--space-sm)]`,
  md = `py-[var(--space-md)]`,
  lg = `py-[var(--space-lg)]`,
  xl = `py-[var(--space-xl)]`,
  "2xl" = `py-[var(--space-2xl)]`
}

enum MarginBucket {
  none = "",
  sm = `m-[var(--space-sm)]`,
  md = `m-[var(--space-md)]`,
  lg = `m-[var(--space-lg)]`,
  xl = `m-[var(--space-xl)]`,
  "2xl" = `m-[var(--space-2xl)]`
}

enum MarginXBucket {
  none = "",
  sm = `mx-[var(--space-sm)]`,
  md = `mx-[var(--space-md)]`,
  lg = `mx-[var(--space-lg)]`,
  xl = `mx-[var(--space-xl)]`,
  "2xl" = `mx-[var(--space-2xl)]`
}

enum MarginYBucket {
  none = "",
  sm = `my-[var(--space-sm)]`,
  md = `my-[var(--space-md)]`,
  lg = `my-[var(--space-lg)]`,
  xl = `my-[var(--space-xl)]`,
  "2xl" = `my-[var(--space-2xl)]`
}

enum SpaceXBucket {
  none = "",
  sm = `space-x-[var(--space-sm)]`,
  md = `space-x-[var(--space-md)]`,
  lg = `space-x-[var(--space-lg)]`,
  xl = `space-x-[var(--space-xl)]`,
  "2xl" = `space-x-[var(--space-2xl)]`
}

enum SpaceYBucket {
  none = "",
  sm = `space-y-[var(--space-sm)]`,
  md = `space-y-[var(--space-md)]`,
  lg = `space-y-[var(--space-lg)]`,
  xl = `space-y-[var(--space-xl)]`,
  "2xl" = `space-y-[var(--space-2xl)]`
}

enum GapBucket {
  none = "",
  sm = `gap-[var(--space-sm)]`,
  md = `gap-[var(--space-md)]`,
  lg = `gap-[var(--space-lg)]`,
  xl = `gap-[var(--space-xl)]`,
  "2xl" = `gap-[var(--space-2xl)]`
}

export const spacingBucket = {
  padding: {
    none: "",
    sm: PaddingBucket.sm,
    md: PaddingBucket.md,
    lg: PaddingBucket.lg,
    xl: PaddingBucket.xl,
    "2xl": PaddingBucket["2xl"]
  },
  paddingX: {
    none: "",
    sm: PaddingXBucket.sm,
    md: PaddingXBucket.md,
    lg: PaddingXBucket.lg,
    xl: PaddingXBucket.xl,
    "2xl": PaddingXBucket["2xl"]
  },
  paddingY: {
    none: "",
    sm: PaddingYBucket.sm,
    md: PaddingYBucket.md,
    lg: PaddingYBucket.lg,
    xl: PaddingYBucket.xl,
    "2xl": PaddingYBucket["2xl"]
  },
  margin: {
    none: "",
    sm: MarginBucket.sm,
    md: MarginBucket.md,
    lg: MarginBucket.lg,
    xl: MarginBucket.xl,
    "2xl": MarginBucket["2xl"]
  },
  marginX: {
    none: "",
    sm: MarginXBucket.sm,
    md: MarginXBucket.md,
    lg: MarginXBucket.lg,
    xl: MarginXBucket.xl,
    "2xl": MarginXBucket["2xl"]
  },
  marginY: {
    none: "",
    sm: MarginYBucket.sm,
    md: MarginYBucket.md,
    lg: MarginYBucket.lg,
    xl: MarginYBucket.xl,
    "2xl": MarginYBucket["2xl"]
  },
  spaceX: {
    none: "",
    sm: SpaceXBucket.sm,
    md: SpaceXBucket.md,
    lg: SpaceXBucket.lg,
    xl: SpaceXBucket.xl,
    "2xl": SpaceXBucket["2xl"]
  },
  spaceY: {
    none: "",
    sm: SpaceYBucket.sm,
    md: SpaceYBucket.md,
    lg: SpaceYBucket.lg,
    xl: SpaceYBucket.xl,
    "2xl": SpaceYBucket["2xl"]
  },
  gap: {
    none: "",
    sm: GapBucket.sm,
    md: GapBucket.md,
    lg: GapBucket.lg,
    xl: GapBucket.xl,
    "2xl": GapBucket["2xl"]
  }
} satisfies Partial<Record<keyof Styles, Record<SpacingKeys, string>>>;

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

/*
  --- DISPLAY
*/

enum DisplayBucketValues {
  none = "",
  block = `block`,
  inline = `inline`,
  "inline-block" = `inline-block`,
  "inline-flex" = `inline-flex`,
  "hidden" = `hidden`,
  "flex-row" = "flex flex-row",
  "flex-col" = "flex flex-col"
}

export const displayBucket = {
  none: DisplayBucketValues.none,
  block: DisplayBucketValues.block,
  inline: DisplayBucketValues.inline,
  "inline-block": DisplayBucketValues["inline-block"],
  "inline-flex": DisplayBucketValues["inline-flex"],
  hidden: DisplayBucketValues.hidden,
  "flex-row": DisplayBucketValues["flex-row"],
  "flex-col": DisplayBucketValues["flex-col"]
} satisfies BucketType<string, DisplayBucketValues>;

export type DisplayKeys = keyof typeof displayBucket;

/*
  --- FLEX
*/

export type FlexPositionKeys =
  | "none"
  | "top-left"
  | "center-left"
  | "bottom-left"
  | "top-center"
  | "center-center"
  | "bottom-center"
  | "top-right"
  | "center-right"
  | "bottom-right";

enum FlexRowPositionBucketValues {
  none = "none",
  "top-left" = "items-start",
  "center-left" = "items-center justify-start",
  "bottom-left" = "items-end",
  "top-center" = "items-start justify-center",
  "center-center" = "items-center justify-center",
  "bottom-center" = "items-end justify-center",
  "top-right" = "items-start justify-end",
  "center-right" = "items-center justify-end",
  "bottom-right" = "items-end justify-end"
}

export const FlexRowPositionBucket = {
  none: FlexRowPositionBucketValues.none,

  "top-left": FlexRowPositionBucketValues["top-left"],
  "top-center": FlexRowPositionBucketValues["top-center"],
  "top-right": FlexRowPositionBucketValues["top-right"],

  "center-left": FlexRowPositionBucketValues["center-left"],
  "center-center": FlexRowPositionBucketValues["center-center"],
  "center-right": FlexRowPositionBucketValues["center-right"],

  "bottom-left": FlexRowPositionBucketValues["bottom-left"],
  "bottom-center": FlexRowPositionBucketValues["bottom-center"],
  "bottom-right": FlexRowPositionBucketValues["bottom-right"]
} satisfies BucketType<FlexPositionKeys, FlexRowPositionBucketValues>;

enum FlexColPositionBucketValues {
  none = "none",
  "top-left" = "justify-start",
  "center-left" = "justify-center",
  "bottom-left" = "justify-end",
  "top-center" = "items-center justify-start",
  "center-center" = "items-center justify-center",
  "bottom-center" = "items-center justify-end",
  "top-right" = "items-end justify-start",
  "center-right" = "items-end justify-end",
  "bottom-right" = "items-end justify-end"
}

export const FlexColPositionBucket = {
  none: FlexColPositionBucketValues.none,

  "top-left": FlexColPositionBucketValues["top-left"],
  "top-center": FlexColPositionBucketValues["top-center"],
  "top-right": FlexColPositionBucketValues["top-right"],

  "center-left": FlexColPositionBucketValues["center-left"],
  "center-center": FlexColPositionBucketValues["center-center"],
  "center-right": FlexColPositionBucketValues["center-right"],

  "bottom-left": FlexColPositionBucketValues["bottom-left"],
  "bottom-center": FlexColPositionBucketValues["bottom-center"],
  "bottom-right": FlexColPositionBucketValues["bottom-right"]
} satisfies BucketType<FlexPositionKeys, FlexColPositionBucketValues>;
