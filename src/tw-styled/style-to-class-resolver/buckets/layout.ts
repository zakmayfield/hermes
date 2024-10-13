import { Keyof, SingleBucket } from "../types";

enum DisplayBucket {
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
  none: DisplayBucket.none,
  block: DisplayBucket.block,
  inline: DisplayBucket.inline,
  "inline-block": DisplayBucket["inline-block"],
  "inline-flex": DisplayBucket["inline-flex"],
  hidden: DisplayBucket.hidden,
  "flex-row": DisplayBucket["flex-row"],
  "flex-col": DisplayBucket["flex-col"]
} satisfies SingleBucket<Keyof<typeof DisplayBucket>, DisplayBucket>;

enum PositionBucket {
  none = "",
  relative = "relative",
  absolute = "absolute",
  fixed = "fixed",
  sticky = "sticky",
  static = "static"
}

export const positionBucket = {
  none: PositionBucket.none,
  relative: PositionBucket.relative,
  absolute: PositionBucket.absolute,
  fixed: PositionBucket.fixed,
  sticky: PositionBucket.sticky,
  static: PositionBucket.static
} satisfies SingleBucket<Keyof<typeof PositionBucket>, PositionBucket>;

enum PlaceBucket {
  none = "",
  left = "mr-auto",
  center = "mx-auto",
  right = "ml-auto"
}

export const placeBucket = {
  none: PlaceBucket.none,
  left: PlaceBucket.left,
  center: PlaceBucket.center,
  right: PlaceBucket.right
} satisfies SingleBucket<Keyof<typeof PlaceBucket>, PlaceBucket>;

enum BorderBucket {
  none = "",
  sm = "border border-foreground",
  md = "border-2 border-foreground",
  lg = "border-4 border-foreground"
}

export const borderBucket = {
  none: BorderBucket.none,
  sm: BorderBucket.sm,
  md: BorderBucket.md,
  lg: BorderBucket.lg
} satisfies SingleBucket<Keyof<typeof BorderBucket>, BorderBucket>;

enum BorderRadiusBucket {
  none = "",
  sm = "rounded",
  md = "rounded-md",
  lg = "rounded-lg",
  xl = "rounded-3xl"
}

export const borderRadiusBucket = {
  none: BorderRadiusBucket.none,
  sm: BorderRadiusBucket.sm,
  md: BorderRadiusBucket.md,
  lg: BorderRadiusBucket.lg,
  xl: BorderRadiusBucket.xl
} satisfies SingleBucket<Keyof<typeof BorderRadiusBucket>, BorderRadiusBucket>;
