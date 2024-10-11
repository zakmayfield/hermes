import {
  backgroundColorBucket,
  type ColorKeys,
  fontSizeBucket,
  type FontSizeKeys,
  heightBucket,
  marginBucket,
  marginXBucket,
  marginYBucket,
  maxHeightBucket,
  maxWidthBucket,
  paddingBucket,
  paddingXBucket,
  paddingYBucket,
  type SizeKeys,
  spaceXBucket,
  spaceYBucket,
  type SpacingKeys,
  textColorBucket,
  widthBucket
} from "./styleBuckets";

type Styles = {
  padding: SpacingKeys;
  paddingX: SpacingKeys;
  paddingY: SpacingKeys;
  margin: SpacingKeys;
  marginX: SpacingKeys;
  marginY: SpacingKeys;
  spaceX: SpacingKeys;
  spaceY: SpacingKeys;

  width: SizeKeys;
  maxWidth: SizeKeys;
  height: SizeKeys;
  maxHeight: SizeKeys;

  backgroundColor: ColorKeys;
  textColor: ColorKeys;
  fontSize: FontSizeKeys;
};

type PartialStyleProps = Partial<Styles>;
type StyleToClassProps = Record<string, PartialStyleProps>;

export const styleToClass = (props: StyleToClassProps) => {
  const result: Record<string, string> = {};

  for (const propKey in props) {
    const propValue = props[propKey];

    result[propKey] = Object.keys(propValue)
      .map((style) => {
        const styleKey = style as keyof Styles;
        const styleValue = propValue[styleKey] || "none";

        switch (styleKey) {
          case "padding":
            return paddingBucket[styleValue as SpacingKeys];
          case "paddingX":
            return paddingXBucket[styleValue as SpacingKeys];
          case "paddingY":
            return paddingYBucket[styleValue as SpacingKeys];

          case "margin":
            return marginBucket[styleValue as SpacingKeys];
          case "marginX":
            return marginXBucket[styleValue as SpacingKeys];
          case "marginY":
            return marginYBucket[styleValue as SpacingKeys];

          case "spaceX":
            return spaceXBucket[styleValue as SpacingKeys];
          case "spaceY":
            return spaceYBucket[styleValue as SpacingKeys];

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
        }
      })
      .join(" ");
  }

  return result;
};
