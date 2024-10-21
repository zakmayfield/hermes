import * as buckets from "./buckets";
import { Keyof, Styles } from "./types";

// TODO: *** Configure better enum structure, see `spacing` ***
export const extractClassName = (styleKey: keyof Styles, styleValue: string) => {
  switch (styleKey) {
    case "boxSizing":
      return buckets.boxSizingBucket[styleValue as Keyof<typeof buckets.BoxSizing>];

    case "padding":
    case "paddingX":
    case "paddingY":
    case "paddingL":
    case "paddingR":
    case "margin":
    case "marginX":
    case "marginY":
    case "spaceX":
    case "spaceY":
    case "gap":
      return buckets.spacingBucket[styleKey][styleValue as Keyof<typeof buckets.Spacing>];

    case "width":
    case "minWidth":
    case "maxWidth":
      return buckets.widthtBucket[styleKey][styleValue as Keyof<typeof buckets.Width>];

    case "height":
    case "minHeight":
    case "maxHeight":
      return buckets.heightBucket[styleKey][styleValue as Keyof<typeof buckets.Height>];

    case "backgroundColor":
    case "textColor":
    case "borderColor":
      return buckets.colorBucket[styleKey][styleValue as Keyof<typeof buckets.Color>];

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
      return buckets.flexDirPositionBucket[styleKey][
        styleValue as Keyof<typeof buckets.FlexDirPosition>
      ];

    case "flexAlign":
    case "flexJustify":
      return buckets.flexPosition[styleKey][
        styleValue as Keyof<typeof buckets.FlexPosition>
      ];

    case "flexSpacing":
      return buckets.flexSpacingBucket[styleValue as Keyof<typeof buckets.FlexSpacing>];
    case "flexWrap":
      return buckets.flexWrapBucket[styleValue as Keyof<typeof buckets.FlexWrap>];
    case "flexSize":
      return buckets.flexSizeBucket[styleValue as Keyof<typeof buckets.FlexSize>];

    case "animation":
      return buckets.animationBucket[styleValue as Keyof<typeof buckets.animationBucket>];

    case "cursor":
      return buckets.cursorBucket[styleValue as Keyof<typeof buckets.cursorBucket>];

    case "buttonSize":
      return buckets.buttonSizeBucket[
        styleValue as Keyof<typeof buckets.buttonSizeBucket>
      ];
    case "buttonVariant":
      return buckets.buttonVariantBucket[
        styleValue as Keyof<typeof buckets.ButtonVariant>
      ];

    case "className":
      return styleValue;
  }
};
