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
  width?: Sizes | ExtendedSizes | Full | None;
  height?: Sizes | Screen | Full | None;
  maxHeight?: Sizes | None;
  border?: Sizes | None;
  rounded?: Sizes | "xl" | None;
  display?: Displays | None;
  position?: Positions | None;
}

interface IPadding {
  padding?: Sizes | Zero | None;
  paddingX?: Sizes | Zero | None;
  paddingY?: Sizes | Zero | None;
  paddingTop?: Sizes | Zero | None;
  paddingBottom?: Sizes | Zero | None;
  paddingLeft?: Sizes | Zero | None;
  paddingRight?: Sizes | Zero | None;
}

interface IMargin {
  margin?: Sizes | Zero | None;
  marginX?: Sizes | Zero | None;
  marginY?: Sizes | Zero | None;
  marginTop?: Sizes | Zero | None;
  marginBottom?: Sizes | Zero | None;
  marginLeft?: Sizes | Zero | None;
  marginRight?: Sizes | Zero | None;
}

interface IAlignment {
  flex?: FlexDirections | None;
  flexRowPosition?: FlexPositions | None;
  flexColPosition?: FlexPositions | None;
  flexSpacing?: FlexSpacing | None;
  flexWrap?: FlexWrap | None;
  flexSize?: FlexSize | None;
  gap?: Sizes | None;
  place?: Places | None;
}

interface ITypography {
  fontSize?: Sizes | None;
  fontWeight?: FontWeight | None;
  textOpacity?: Opacities | None;
  textColor?: TextColor | None;
  textDecoration?: TextDecorations | None;
  textAlign?: TextAlign | None;
  lineHeight?: LineHeight | None;
  letterSpacing?: LetterSpacing | None;
}

interface IBackground {
  bgColor?: BgColor | None;
  bgOpacity?: Opacities | None;
}

interface IAnimations {
  animate?: Animations | None;
}

interface IButton {
  buttonSize?: Sizes | Full | None;
  buttonWidth?: Sizes | Full | None;
  buttonHeight?: Sizes | None;
}

interface ILoader {
  loaderWidth?: Sizes | Full | None;
}

interface IOther {
  opacity?: Opacities | None;
  cursor?: Cursors | None;
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
