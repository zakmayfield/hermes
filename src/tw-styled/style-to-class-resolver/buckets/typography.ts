import { Keyof, SingleBucket } from "../types";

enum FontSizeBucket {
  none = "",
  sm = `text-sm`,
  md = `text-md`,
  lg = `text-lg`,
  xl = `text-xl`,
  "2xl" = `text-2xl`,
  "3xl" = `text-3xl`,
  "4xl" = `text-4xl`
}

export const fontSizeBucket = {
  none: FontSizeBucket.none,
  sm: FontSizeBucket.sm,
  md: FontSizeBucket.md,
  lg: FontSizeBucket.lg,
  xl: FontSizeBucket.xl,
  "2xl": FontSizeBucket["2xl"],
  "3xl": FontSizeBucket["3xl"],
  "4xl": FontSizeBucket["4xl"]
} satisfies SingleBucket<Keyof<typeof FontSizeBucket>, FontSizeBucket>;

enum FontWeightBucket {
  none = "",
  light = "font-light",
  normal = "font-normal",
  semibold = "font-semibold",
  bold = "font-bold"
}

export const fontWeightBucket = {
  none: FontWeightBucket.none,
  light: FontWeightBucket.light,
  normal: FontWeightBucket.normal,
  semibold: FontWeightBucket.semibold,
  bold: FontWeightBucket.bold
} satisfies SingleBucket<Keyof<typeof FontWeightBucket>, FontWeightBucket>;

enum TextAlignBucket {
  none = "",
  left = "text-left",
  center = "text-center",
  right = "text-right",
  justify = "text-justify"
}

export const textAlignBucket = {
  none: TextAlignBucket.none,
  left: TextAlignBucket.left,
  center: TextAlignBucket.center,
  right: TextAlignBucket.right,
  justify: TextAlignBucket.justify
} satisfies SingleBucket<Keyof<typeof TextAlignBucket>, TextAlignBucket>;

enum TextDecorationBucket {
  none = "",
  underline = "underline",
  "line-through" = "line-through"
}

export const textDecorationBucket = {
  none: TextDecorationBucket.none,
  underline: TextDecorationBucket.underline,
  "line-through": TextDecorationBucket["line-through"]
} satisfies SingleBucket<Keyof<typeof TextDecorationBucket>, TextDecorationBucket>;

enum LineHeightBucket {
  none = "",
  tight = "leading-tight",
  normal = "leading-normal",
  loose = "leading-loose"
}

export const lineHeightBucket = {
  none: LineHeightBucket.none,
  tight: LineHeightBucket.tight,
  normal: LineHeightBucket.normal,
  loose: LineHeightBucket.loose
} satisfies SingleBucket<Keyof<typeof LineHeightBucket>, LineHeightBucket>;

enum LetterSpacingBucket {
  none = "",
  tight = "tracking-tight",
  normal = "tracking-normal",
  wide = "tracking-wide"
}

export const letterSpacingBucket = {
  none: LetterSpacingBucket.none,
  tight: LetterSpacingBucket.tight,
  normal: LetterSpacingBucket.normal,
  wide: LetterSpacingBucket.wide
} satisfies SingleBucket<Keyof<typeof LetterSpacingBucket>, LetterSpacingBucket>;
