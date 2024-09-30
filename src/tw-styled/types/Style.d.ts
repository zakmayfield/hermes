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
  width?: string;
  height?: string;
  maxHeight?: string;
  border?: string;
  rounded?: string;
  display?: string;
  position?: string;
}

interface IPadding {
  padding?: string;
  paddingX?: string;
  paddingY?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

interface IMargin {
  margin?: string;
  marginX?: string;
  marginY?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

interface IAlignment {
  flex?: string;
  flexPosition?: string;
  flexSpacing?: string;
  flexWrap?: string;
  fleSize?: string;
  gap?: string;
  place?: string;
}

interface ITypography {
  fontSize?: string;
  fontWeight?: string;
  textOpacity?: string;
  textColor?: string;
  textDecoration?: string;
  textAlign?: string;
  lineHeight?: string;
  letterSpacing?: string;
}

interface IBackground {
  bgColor?: string;
  bgOpacity?: string;
  bgImage?: string;
  bgPosition?: string;
}

interface IAnimations {
  animate?: string;
}

interface IButton {
  buttonSize?: string;
  buttonWidth?: string;
  buttonHeight?: string;
}

interface ILoader {
  loaderWidth?: string;
}

interface IOther {
  opacity: string;
  cursor: string;
  className?: string;
}

export type Sizes = "sm" | "md" | "lg";
type ExtendedSizes = "xl" | "2xl" | "3xl";
type SizesWithZero = Sizes | "zero";
type SizesWithFull = Sizes | "full";
type None = "none";
type Full = "full";
type Screen = "screen";
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
type Opacities = "light" | "medium" | "dark" | "opaque";
type Places = "left" | "center" | "right";
type Displays =
  | "relative"
  | "absolute"
  | "fixed"
  | "sticky"
  | "inline"
  | "inline-block"
  | "inline-flex"
  | "hidden";
type Animations = "spin" | "pulse";
