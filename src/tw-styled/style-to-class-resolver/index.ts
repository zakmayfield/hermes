import {
  borderBucket,
  borderRadiusBucket,
  colorBucket,
  dimensionBucket,
  displayBucket,
  flexPositionBucket,
  flexSizeBucket,
  flexSpacingBucket,
  flexWrapBucket,
  fontSizeBucket,
  fontWeightBucket,
  letterSpacingBucket,
  lineHeightBucket,
  placeBucket,
  positionBucket,
  spacingBucket,
  textAlignBucket,
  textDecorationBucket
} from "./buckets";
import { Keyof } from "./types";

type SpacingKeys = Keyof<(typeof spacingBucket)["padding"]>;
type DimensionKeys = Keyof<(typeof dimensionBucket)["width"]>;
type ColorKeys = Keyof<(typeof colorBucket)["backgroundColor"]>;
type FlexPositionKeys = Keyof<(typeof flexPositionBucket)["flexRowPosition"]>;

type DisplayKeys = Keyof<typeof displayBucket>;
type PositionKeys = Keyof<typeof positionBucket>;
type PlaceKeys = Keyof<typeof placeBucket>;
type BorderKeys = Keyof<typeof borderBucket>;
type BorderRadiusKeys = Keyof<typeof borderRadiusBucket>;

type FontSizeKeys = Keyof<typeof fontSizeBucket>;
type FontWeightKeys = Keyof<typeof fontWeightBucket>;
type TextAlignKeys = Keyof<typeof textAlignBucket>;
type TextDecorationKeys = Keyof<typeof textDecorationBucket>;
type LineHeightKeys = Keyof<typeof lineHeightBucket>;
type LetterSpacingKeys = Keyof<typeof letterSpacingBucket>;

type FlexSpacingKeys = Keyof<typeof flexSpacingBucket>;
type FlexWrapKeys = Keyof<typeof flexWrapBucket>;
type FlexSizeKeys = Keyof<typeof flexSizeBucket>;

export type Styles = {
  padding: SpacingKeys;
  paddingX: SpacingKeys;
  paddingY: SpacingKeys;
  margin: SpacingKeys;
  marginX: SpacingKeys;
  marginY: SpacingKeys;
  spaceX: SpacingKeys;
  spaceY: SpacingKeys;
  gap: SpacingKeys;

  width: DimensionKeys;
  minWidth: DimensionKeys;
  maxWidth: DimensionKeys;
  height: DimensionKeys;
  minHeight: DimensionKeys;
  maxHeight: DimensionKeys;

  backgroundColor: ColorKeys;
  textColor: ColorKeys;
  borderColor: ColorKeys;

  fontSize: FontSizeKeys;
  fontWeight: FontWeightKeys;
  textAlign: TextAlignKeys;
  textDecoration: TextDecorationKeys;
  lineHeight: LineHeightKeys;
  letterSpacing: LetterSpacingKeys;
  border: BorderKeys;
  borderRadius: BorderRadiusKeys;

  display: DisplayKeys;
  position: PositionKeys;
  place: PlaceKeys;

  flexRowPosition: FlexPositionKeys;
  flexColPosition: FlexPositionKeys;

  flexSpacing: FlexSpacingKeys;
  flexWrap: FlexWrapKeys;
  flexSize: FlexSizeKeys;
};

type PartialStyleProps = Partial<Styles>;
type StyleToClassProps = Record<string, PartialStyleProps>;

function extractClassName(styleKey: keyof Styles, styleValue: string) {
  switch (styleKey) {
    case "padding":
    case "paddingX":
    case "paddingY":
    case "margin":
    case "marginX":
    case "marginY":
    case "spaceX":
    case "spaceY":
    case "gap":
      return spacingBucket[styleKey][styleValue as SpacingKeys];

    case "width":
    case "minWidth":
    case "maxWidth":
    case "height":
    case "minHeight":
    case "maxHeight":
      return dimensionBucket[styleKey][styleValue as DimensionKeys];

    case "backgroundColor":
    case "textColor":
    case "borderColor":
      return colorBucket[styleKey][styleValue as ColorKeys];

    case "fontSize":
      return fontSizeBucket[styleValue as FontSizeKeys];
    case "fontWeight":
      return fontWeightBucket[styleValue as FontWeightKeys];
    case "textAlign":
      return textAlignBucket[styleValue as TextAlignKeys];
    case "textDecoration":
      return textDecorationBucket[styleValue as TextDecorationKeys];
    case "lineHeight":
      return lineHeightBucket[styleValue as LineHeightKeys];
    case "letterSpacing":
      return letterSpacingBucket[styleValue as LetterSpacingKeys];

    case "display":
      return displayBucket[styleValue as DisplayKeys];
    case "position":
      return positionBucket[styleValue as PositionKeys];
    case "place":
      return placeBucket[styleValue as PlaceKeys];
    case "border":
      return borderBucket[styleValue as BorderKeys];
    case "borderRadius":
      return borderRadiusBucket[styleValue as BorderRadiusKeys];

    case "flexRowPosition":
    case "flexColPosition":
      return flexPositionBucket[styleKey][styleValue as FlexPositionKeys];

    case "flexSpacing":
      return flexSpacingBucket[styleValue as FlexSpacingKeys];
    case "flexWrap":
      return flexWrapBucket[styleValue as FlexWrapKeys];
    case "flexSize":
      return flexSizeBucket[styleValue as FlexSizeKeys];
  }
}

export const styleToClass = (style: StyleToClassProps) => {
  const ResultMap = new Map();

  for (const propKey in style) {
    const value = style[propKey];

    ResultMap.set(
      propKey,
      Object.keys(value)
        .map((key) => {
          const styleKey = key as keyof Styles;
          const styleValue = value[styleKey] || "none";
          return extractClassName(styleKey, styleValue);
        })
        .join(" ")
        .trim()
    );
  }

  return ResultMap;
};
