import {
  backgroundColorBucket,
  type ColorKeys,
  displayBucket,
  type DisplayKeys,
  FlexColPositionBucket,
  type FlexPositionKeys,
  FlexRowPositionBucket,
  fontSizeBucket,
  type FontSizeKeys,
  heightBucket,
  maxHeightBucket,
  maxWidthBucket,
  type SizeKeys,
  spacingBucket,
  type SpacingKeys,
  textColorBucket,
  widthBucket
} from "./styleBuckets";

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

  width: SizeKeys;
  maxWidth: SizeKeys;
  height: SizeKeys;
  maxHeight: SizeKeys;

  backgroundColor: ColorKeys;
  textColor: ColorKeys;
  fontSize: FontSizeKeys;

  display: DisplayKeys;

  flexRowPosition: FlexPositionKeys;
  flexColPosition: FlexPositionKeys;
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
      return widthBucket[styleValue as SizeKeys];
    case "maxWidth":
      return maxWidthBucket[styleValue as SizeKeys];

    case "height":
      return heightBucket[styleValue as SizeKeys];
    case "maxHeight":
      return maxHeightBucket[styleValue as SizeKeys];

    case "backgroundColor":
      return backgroundColorBucket[styleValue as ColorKeys];
    case "textColor":
      return textColorBucket[styleValue as ColorKeys];

    case "fontSize":
      return fontSizeBucket[styleValue as FontSizeKeys];

    case "display":
      return displayBucket[styleValue as DisplayKeys];

    case "flexRowPosition":
      return FlexRowPositionBucket[styleValue as FlexPositionKeys];
    case "flexColPosition":
      return FlexColPositionBucket[styleValue as FlexPositionKeys];
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
