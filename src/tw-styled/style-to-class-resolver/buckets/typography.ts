import { Keyof, SingleBucket } from "../types";

enum FontSizeBucket {
  sm = `text-sm`,
  md = `text-md`,
  lg = `text-lg`,
  xl = `text-xl`,
  "2xl" = `text-2xl`,
  "3xl" = `text-3xl`,
  "4xl" = `text-4xl`
}

export const fontSizeBucket = {
  sm: FontSizeBucket.sm,
  md: FontSizeBucket.md,
  lg: FontSizeBucket.lg,
  xl: FontSizeBucket.xl,
  "2xl": FontSizeBucket["2xl"],
  "3xl": FontSizeBucket["3xl"],
  "4xl": FontSizeBucket["4xl"]
} satisfies SingleBucket<Keyof<typeof FontSizeBucket>, FontSizeBucket>;

enum FontWeightBucket {
  light = "font-light",
  normal = "font-normal",
  semibold = "font-semibold",
  bold = "font-bold"
}

export const fontWeightBucket = {
  light: FontWeightBucket.light,
  normal: FontWeightBucket.normal,
  semibold: FontWeightBucket.semibold,
  bold: FontWeightBucket.bold
} satisfies SingleBucket<Keyof<typeof FontWeightBucket>, FontWeightBucket>;

enum TextAlignBucket {
  left = "text-left",
  center = "text-center",
  right = "text-right",
  justify = "text-justify"
}

export const textAlignBucket = {
  left: TextAlignBucket.left,
  center: TextAlignBucket.center,
  right: TextAlignBucket.right,
  justify: TextAlignBucket.justify
} satisfies SingleBucket<Keyof<typeof TextAlignBucket>, TextAlignBucket>;

enum TextDecorationBucket {
  underline = "underline",
  "line-through" = "line-through"
}

export const textDecorationBucket = {
  underline: TextDecorationBucket.underline,
  "line-through": TextDecorationBucket["line-through"]
} satisfies SingleBucket<Keyof<typeof TextDecorationBucket>, TextDecorationBucket>;

enum LineHeightBucket {
  tight = "leading-tight",
  normal = "leading-normal",
  loose = "leading-loose"
}

export const lineHeightBucket = {
  tight: LineHeightBucket.tight,
  normal: LineHeightBucket.normal,
  loose: LineHeightBucket.loose
} satisfies SingleBucket<Keyof<typeof LineHeightBucket>, LineHeightBucket>;

enum LetterSpacingBucket {
  tight = "tracking-tight",
  normal = "tracking-normal",
  wide = "tracking-wide"
}

export const letterSpacingBucket = {
  tight: LetterSpacingBucket.tight,
  normal: LetterSpacingBucket.normal,
  wide: LetterSpacingBucket.wide
} satisfies SingleBucket<Keyof<typeof LetterSpacingBucket>, LetterSpacingBucket>;

export enum FontStyle {
  italic = "italic"
}

export const fontStyleBucket = {
  [FontStyle.italic]: "italic"
} satisfies SingleBucket<Keyof<typeof FontStyle>, string>;
