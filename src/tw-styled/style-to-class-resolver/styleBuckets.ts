import { Styles } from ".";

type BucketType2<T extends string, K> = Record<T, K>;
type BucketType<Keys extends string> = Partial<
  Record<keyof Styles, Record<Keys, string>>
>;

/*
  --- COLOR
*/
export type ColorKeys =
  | "none"
  | "background"
  | "foreground"
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent";

enum BackgroundColorBucket {
  none = "",
  background = "bg-[var(--background)]",
  foreground = "bg-[var(--foreground)]",
  primary = "bg-[var(--primary)]",
  secondary = "bg-[var(--secondary)]",
  tertiary = "bg-[var(--tertiary)]",
  accent = "bg-[var(--accent)]"
}

enum TextColorBucket {
  none = "",
  background = "text-[color:var(--background)]",
  foreground = "text-[color:var(--foreground)]",
  primary = "text-[color:var(--primary)]",
  secondary = "text-[color:var(--secondary)]",
  tertiary = "text-[color:var(--tertiary)]",
  accent = "text-[color:var(--accent)]"
}

enum BorderColorBucket {
  none = "",
  background = "border-[color:var(--background)]",
  foreground = "border-[color:var(--foreground)]",
  primary = "border-[color:var(--primary)]",
  secondary = "border-[color:var(--secondary)]",
  tertiary = "border-[color:var(--tertiary)]",
  accent = "border-[color:var(--accent)]"
}

export const colorBucket = {
  backgroundColor: {
    none: BackgroundColorBucket.none,
    background: BackgroundColorBucket.background,
    foreground: BackgroundColorBucket.foreground,
    primary: BackgroundColorBucket.primary,
    secondary: BackgroundColorBucket.secondary,
    tertiary: BackgroundColorBucket.tertiary,
    accent: BackgroundColorBucket.accent
  },
  textColor: {
    none: TextColorBucket.none,
    background: TextColorBucket.background,
    foreground: TextColorBucket.foreground,
    primary: TextColorBucket.primary,
    secondary: TextColorBucket.secondary,
    tertiary: TextColorBucket.tertiary,
    accent: TextColorBucket.accent
  },
  borderColor: {
    none: BorderColorBucket.none,
    background: BorderColorBucket.background,
    foreground: BorderColorBucket.foreground,
    primary: BorderColorBucket.primary,
    secondary: BorderColorBucket.secondary,
    tertiary: BorderColorBucket.tertiary,
    accent: BorderColorBucket.accent
  }
} satisfies BucketType<ColorKeys>;

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
} satisfies BucketType<SpacingKeys>;

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
} satisfies BucketType2<string, FontSizeBucketValues>;

export type FontSizeKeys = keyof typeof fontSizeBucket;

/*
  --- DIMENSION
*/
export type DimensionKeys = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

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
} satisfies BucketType<DimensionKeys>;

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
} satisfies BucketType2<string, DisplayBucketValues>;

export type DisplayKeys = keyof typeof displayBucket;

/*
  --- FLEX POSITION
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

enum FlexRowPositionBucket {
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

enum FlexColPositionBucket {
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

export const flexPositionBucket = {
  flexRowPosition: {
    none: FlexRowPositionBucket.none,

    "top-left": FlexRowPositionBucket["top-left"],
    "top-center": FlexRowPositionBucket["top-center"],
    "top-right": FlexRowPositionBucket["top-right"],

    "center-left": FlexRowPositionBucket["center-left"],
    "center-center": FlexRowPositionBucket["center-center"],
    "center-right": FlexRowPositionBucket["center-right"],

    "bottom-left": FlexRowPositionBucket["bottom-left"],
    "bottom-center": FlexRowPositionBucket["bottom-center"],
    "bottom-right": FlexRowPositionBucket["bottom-right"]
  },
  flexColPosition: {
    none: FlexColPositionBucket.none,

    "top-left": FlexColPositionBucket["top-left"],
    "top-center": FlexColPositionBucket["top-center"],
    "top-right": FlexColPositionBucket["top-right"],

    "center-left": FlexColPositionBucket["center-left"],
    "center-center": FlexColPositionBucket["center-center"],
    "center-right": FlexColPositionBucket["center-right"],

    "bottom-left": FlexColPositionBucket["bottom-left"],
    "bottom-center": FlexColPositionBucket["bottom-center"],
    "bottom-right": FlexColPositionBucket["bottom-right"]
  }
} satisfies BucketType<FlexPositionKeys>;
