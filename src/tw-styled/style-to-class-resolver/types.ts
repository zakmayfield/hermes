import * as buckets from "./buckets";

export type MultiBucket<Keys extends string> = Partial<
  Record<keyof Styles, Record<Keys, string>>
>;

export type SingleBucket<T extends string, K> = Record<T, K>;

export type Keyof<T extends object> = keyof T;

export type Styles = {
  boxSizing: Keyof<typeof buckets.boxSizingBucket>;

  padding: Keyof<(typeof buckets.spacingBucket)["padding"]>;
  paddingX: Keyof<(typeof buckets.spacingBucket)["padding"]>;
  paddingY: Keyof<(typeof buckets.spacingBucket)["padding"]>;
  margin: Keyof<(typeof buckets.spacingBucket)["padding"]>;
  marginX: Keyof<(typeof buckets.spacingBucket)["padding"]>;
  marginY: Keyof<(typeof buckets.spacingBucket)["padding"]>;
  spaceX: Keyof<(typeof buckets.spacingBucket)["padding"]>;
  spaceY: Keyof<(typeof buckets.spacingBucket)["padding"]>;
  gap: Keyof<(typeof buckets.spacingBucket)["padding"]>;

  width: Keyof<(typeof buckets.widthtBucket)["width"]>;
  minWidth: Keyof<(typeof buckets.widthtBucket)["width"]>;
  maxWidth: Keyof<(typeof buckets.widthtBucket)["width"]>;

  height: Keyof<(typeof buckets.heightBucket)["height"]>;
  minHeight: Keyof<(typeof buckets.heightBucket)["height"]>;
  maxHeight: Keyof<(typeof buckets.heightBucket)["height"]>;

  backgroundColor: Keyof<(typeof buckets.colorBucket)["backgroundColor"]>;
  textColor: Keyof<(typeof buckets.colorBucket)["backgroundColor"]>;
  borderColor: Keyof<(typeof buckets.colorBucket)["backgroundColor"]>;

  opacity: Keyof<(typeof buckets.opacityBucket)["opacity"]>;

  fontSize: Keyof<typeof buckets.fontSizeBucket>;
  fontWeight: Keyof<typeof buckets.fontWeightBucket>;
  textAlign: Keyof<typeof buckets.textAlignBucket>;
  textDecoration: Keyof<typeof buckets.textDecorationBucket>;
  lineHeight: Keyof<typeof buckets.lineHeightBucket>;
  letterSpacing: Keyof<typeof buckets.letterSpacingBucket>;

  display: Keyof<typeof buckets.displayBucket>;
  position: Keyof<typeof buckets.positionBucket>;
  place: Keyof<typeof buckets.placeBucket>;
  border: Keyof<typeof buckets.borderBucket>;
  borderRadius: Keyof<typeof buckets.borderRadiusBucket>;

  flexRowPosition: Keyof<(typeof buckets.flexPositionBucket)["flexRowPosition"]>;
  flexColPosition: Keyof<(typeof buckets.flexPositionBucket)["flexRowPosition"]>;

  flexSpacing: Keyof<typeof buckets.flexSpacingBucket>;
  flexWrap: Keyof<typeof buckets.flexWrapBucket>;
  flexSize: Keyof<typeof buckets.flexSizeBucket>;

  animation: Keyof<typeof buckets.animationBucket>;

  cursor: Keyof<typeof buckets.cursorBucket>;

  buttonSize: Keyof<typeof buckets.buttonSizeBucket>;
  buttonVariant: Keyof<typeof buckets.buttonVariantBucket>;

  className: string;
};

type ButtonStyles = "buttonSize" | "buttonWidth" | "buttonHeight" | "buttonVariant";

export type BaseStyles = Partial<Omit<Styles, ButtonStyles>>;
export type FullStyles = Partial<Styles>;

type PartialStyleProps = Partial<Styles>;
export type StyleToClassProps = Record<string, PartialStyleProps>;

export type UiClassesProp<T> = Omit<T, "style"> & { classes: Map<string, string> };
