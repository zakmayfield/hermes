import * as buckets from "./buckets";
import { Keyof, Styles } from "./types";

export const extractClassName = (styleKey: keyof Styles, styleValue: string) => {
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
      return buckets.spacingBucket[styleKey][
        styleValue as Keyof<(typeof buckets.spacingBucket)["padding"]>
      ];

    case "width":
    case "minWidth":
    case "maxWidth":
    case "height":
    case "minHeight":
    case "maxHeight":
      return buckets.dimensionBucket[styleKey][
        styleValue as Keyof<(typeof buckets.dimensionBucket)["width"]>
      ];

    case "backgroundColor":
    case "textColor":
    case "borderColor":
      return buckets.colorBucket[styleKey][
        styleValue as Keyof<(typeof buckets.colorBucket)["backgroundColor"]>
      ];

    case "opacity":
      return buckets.opacityBucket[styleKey][
        styleValue as Keyof<(typeof buckets.opacityBucket)["opacity"]>
      ];

    case "fontSize":
      return buckets.fontSizeBucket[styleValue as Keyof<typeof buckets.fontSizeBucket>];
    case "fontWeight":
      return buckets.fontWeightBucket[
        styleValue as Keyof<typeof buckets.fontWeightBucket>
      ];
    case "textAlign":
      return buckets.textAlignBucket[styleValue as Keyof<typeof buckets.textAlignBucket>];
    case "textDecoration":
      return buckets.textDecorationBucket[
        styleValue as Keyof<typeof buckets.textDecorationBucket>
      ];
    case "lineHeight":
      return buckets.lineHeightBucket[
        styleValue as Keyof<typeof buckets.lineHeightBucket>
      ];
    case "letterSpacing":
      return buckets.letterSpacingBucket[
        styleValue as Keyof<typeof buckets.letterSpacingBucket>
      ];

    case "display":
      return buckets.displayBucket[styleValue as Keyof<typeof buckets.displayBucket>];
    case "position":
      return buckets.positionBucket[styleValue as Keyof<typeof buckets.positionBucket>];
    case "place":
      return buckets.placeBucket[styleValue as Keyof<typeof buckets.placeBucket>];
    case "border":
      return buckets.borderBucket[styleValue as Keyof<typeof buckets.borderBucket>];
    case "borderRadius":
      return buckets.borderRadiusBucket[
        styleValue as Keyof<typeof buckets.borderRadiusBucket>
      ];

    case "flexRowPosition":
    case "flexColPosition":
      return buckets.flexPositionBucket[styleKey][
        styleValue as Keyof<(typeof buckets.flexPositionBucket)["flexRowPosition"]>
      ];

    case "flexSpacing":
      return buckets.flexSpacingBucket[
        styleValue as Keyof<typeof buckets.flexSpacingBucket>
      ];
    case "flexWrap":
      return buckets.flexWrapBucket[styleValue as Keyof<typeof buckets.flexWrapBucket>];
    case "flexSize":
      return buckets.flexSizeBucket[styleValue as Keyof<typeof buckets.flexSizeBucket>];

    case "animation":
      return buckets.animationBucket[styleValue as Keyof<typeof buckets.animationBucket>];

    case "cursor":
      return buckets.cursorBucket[styleValue as Keyof<typeof buckets.cursorBucket>];

    case "buttonSize":
      return buckets.buttonSizeBucket[
        styleValue as Keyof<typeof buckets.buttonSizeBucket>
      ];
    case "buttonWidth":
      return buckets.buttonWidthBucket[
        styleValue as Keyof<typeof buckets.buttonWidthBucket>
      ];
    case "buttonHeight":
      return buckets.buttonHeightBucket[
        styleValue as Keyof<typeof buckets.buttonHeightBucket>
      ];
    case "buttonVariant":
      return buckets.buttonVariantBucket[
        styleValue as Keyof<typeof buckets.buttonVariantBucket>
      ];

    case "className":
      return styleValue;
  }
};
