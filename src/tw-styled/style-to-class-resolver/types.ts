import * as buckets from "./buckets";

export type MultiBucket<Keys extends string> = Partial<
  Record<keyof Styles, Record<Keys, string>>
>;

export type SingleBucket<T extends string, K> = Record<T, K>;

export type Keyof<T extends object> = keyof T;

export type Styles = {
  boxSizing: Keyof<typeof buckets.BoxSizing>;

  padding: Keyof<typeof buckets.Spacing>;
  paddingX: Keyof<typeof buckets.Spacing>;
  paddingY: Keyof<typeof buckets.Spacing>;
  paddingL: Keyof<typeof buckets.Spacing>;
  paddingR: Keyof<typeof buckets.Spacing>;
  margin: Keyof<typeof buckets.Spacing>;
  marginX: Keyof<typeof buckets.Spacing>;
  marginY: Keyof<typeof buckets.Spacing>;
  spaceX: Keyof<typeof buckets.Spacing>;
  spaceY: Keyof<typeof buckets.Spacing>;
  gap: Keyof<typeof buckets.Spacing>;

  width: Keyof<typeof buckets.Width>;
  minWidth: Keyof<typeof buckets.Width>;
  maxWidth: Keyof<typeof buckets.Width>;

  height: Keyof<typeof buckets.Height>;
  minHeight: Keyof<typeof buckets.Height>;
  maxHeight: Keyof<typeof buckets.Height>;

  backgroundColor: Keyof<typeof buckets.Color>;
  textColor: Keyof<typeof buckets.Color>;
  borderColor: Keyof<typeof buckets.Color>;

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

  flexRowPosition: Keyof<typeof buckets.FlexDirPosition>;
  flexColPosition: Keyof<typeof buckets.FlexDirPosition>;

  flexAlign: Keyof<typeof buckets.FlexPosition>;
  flexJustify: Keyof<typeof buckets.FlexPosition>;

  flexSpacing: Keyof<typeof buckets.FlexSpacing>;
  flexWrap: Keyof<typeof buckets.FlexWrap>;
  flexSize: Keyof<typeof buckets.FlexSize>;

  animation: Keyof<typeof buckets.animationBucket>;

  cursor: Keyof<typeof buckets.cursorBucket>;

  buttonSize: Keyof<typeof buckets.buttonSizeBucket>;
  buttonVariant: Keyof<typeof buckets.ButtonVariant>;

  className: string;
};

type ButtonStyles = "buttonSize" | "buttonWidth" | "buttonHeight" | "buttonVariant";

export type BaseStyles = Partial<Omit<Styles, ButtonStyles>>;
export type FullStyles = Partial<Styles>;

type PartialStyleProps = Partial<Styles>;
export type StyleToClassProps = Record<string, PartialStyleProps>;

export type UiClassesProp<T> = Omit<T, "style"> & { classes: Map<string, string> };
