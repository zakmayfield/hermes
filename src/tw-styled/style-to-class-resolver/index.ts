import {
  colorBucket,
  dimensionBucket,
  displayBucket,
  flexPositionBucket,
  flexSizeBucket,
  flexSpacingBucket,
  flexWrapBucket,
  fontSizeBucket,
  spacingBucket
} from "./buckets";
import { Keyof } from "./types";

type SpacingKeys = Keyof<(typeof spacingBucket)["padding"]>;
type DimensionKeys = Keyof<(typeof dimensionBucket)["width"]>;
type ColorKeys = Keyof<(typeof colorBucket)["backgroundColor"]>;
type FlexPositionKeys = Keyof<(typeof flexPositionBucket)["flexRowPosition"]>;
type DisplayKeys = Keyof<typeof displayBucket>;
type FontSizeKeys = Keyof<typeof fontSizeBucket>;
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

  display: DisplayKeys;

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

    case "display":
      return displayBucket[styleValue as DisplayKeys];

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
