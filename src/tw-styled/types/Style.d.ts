export type StyleProps = ILayout &
  IPadding &
  IMargin &
  IAlignment &
  ITypography &
  IBackground &
  IAnimations &
  IButton &
  ILoader &
  IOther;

export type StylePropKeys = keyof StyleProps;

interface ILayout {
  width?: Sizes | ExtendedSizes | Full;
  height?: Sizes | Screen | Full;
  maxHeight?: Sizes;
  border?: Sizes;
  rounded?: Sizes | "xl";
  display?: Displays;
  position?: Positions;
}

interface IPadding {
  padding?: Sizes | Zero;
  paddingX?: Sizes | Zero;
  paddingY?: Sizes | Zero;
  paddingTop?: Sizes | Zero;
  paddingBottom?: Sizes | Zero;
  paddingLeft?: Sizes | Zero;
  paddingRight?: Sizes | Zero;
}

interface IMargin {
  margin?: Sizes | Zero;
  marginX?: Sizes | Zero;
  marginY?: Sizes | Zero;
  marginTop?: Sizes | Zero;
  marginBottom?: Sizes | Zero;
  marginLeft?: Sizes | Zero;
  marginRight?: Sizes | Zero;
}

interface IAlignment {
  flex?: FlexDirections;
  flexRowPosition?: FlexPositions;
  flexColPosition?: FlexPositions;
  flexSpacing?: FlexSpacing;
  flexWrap?: FlexWrap;
  flexSize?: FlexSize;
  gap?: Sizes;
  place?: Places;
}

interface ITypography {
  fontSize?: Sizes;
  fontWeight?: FontWeight;
  textOpacity?: Opacities;
  textColor?: TextColor;
  textDecoration?: TextDecorations;
  textAlign?: TextAlign;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
}

interface IBackground {
  bgColor?: BgColor;
  bgOpacity?: Opacities;
}

interface IAnimations {
  animate?: Animations;
}

interface IButton {
  buttonSize?: Sizes | Full;
  buttonWidth?: Sizes | Full;
  buttonHeight?: Sizes;
}

interface ILoader {
  loaderWidth?: Sizes | Full;
}

interface IOther {
  opacity?: Opacities;
  cursor?: Cursors;
  className?: string;
}

export type Sizes = "sm" | "md" | "lg";
type ExtendedSizes = "xl" | "2xl" | "3xl";
type None = "none";
type Full = "full";
type Screen = "screen";
type Zero = "zero";

type Displays = "block" | "inline" | "inline-block" | "inline-flex" | "hidden";

type Positions = "relative" | "absolute" | "fixed" | "sticky" | "static";

type FlexDirections = "row" | "col";
type FlexPositions =
  | "top-left"
  | "center-left"
  | "bottom-left"
  | "top-center"
  | "center-center"
  | "bottom-center"
  | "top-right"
  | "center-right"
  | "bottom-right";
type FlexSpacing = "space-between" | "space-evenly" | "space-around";
type FlexSize = "grow" | "shrink" | "nogrow" | "noshrink";
type FlexWrap = "wrap" | "nowrap";
type FontWeights = "light" | "normal" | "bold";
type Places = "left" | "center" | "right";

type Animations = "spin" | "pulse";

type FontWeight = "light" | "normal" | "bold";
type TextColor = "white" | "light" | "medium" | "dark" | "black";
type TextDecorations = "underline" | "line-through";
type TextAlign = "left" | "center" | "right" | "justify";
type LineHeight = "tight" | "normal" | "loose";
type LetterSpacing = "tight" | "normal" | "wide";

type Opacities = "light" | "medium" | "dark" | "opaque";

type BgColor = "white" | "lighter" | "light" | "medium" | "dark" | "darker" | "black";

type Cursors = "pointer" | "not-allowed";
