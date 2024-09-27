export type StyleObj = Record<string, IStyles>;
export type Children = React.ReactNode;
export type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type Themes = "light" | "dark";
export type WrapperElements =
  | "div"
  | "sectin"
  | "article"
  | "aside"
  | "footer"
  | "nav"
  | "header"
  | "main"
  | "ol"
  | "ul";
export type TextElements = "p" | "span" | "li" | "figure" | "a" | "i" | "em" | "strong";
export type BtnVariants = "primary" | "warning" | "ghost";
export type IStyles = IDimensions &
  ISpacing &
  IAlignment &
  ITypography &
  IOther & {
    className?: string;
  };

interface IDimensions {
  width?: SizesWithFull | ExtendedSizes;
  height?: SizesWithFull | "screen";
  maxHeight?: Sizes;
  buttonSize?: SizesWithFull;
  buttonHeight?: Sizes;
}

interface ISpacing {
  padding?: SizesWithZero;
  paddingX?: SizesWithZero;
  paddingY?: SizesWithZero;
  margin?: SizesWithZero;
  marginX?: SizesWithZero;
  marginY?: SizesWithZero;
}

interface IAlignment {
  flex?: FlexDirections;
  flexPosition?: FlexPositions;
  flexSpacing?: FlexSpacing;
  flexWrap?: FlexWrap;
  flexSize?: FlexSize;
  gap?: Sizes;
  place?: Places;
}

interface ITypography {
  fontSize?: Sizes;
  fontWeight?: FontWeights;
}

interface IOther {
  bg?: string;
  rounded?: Sizes | "xl";
  border?: Sizes | None;
  bgOpacity?: Opacities | None;
  textOpacity?: Opacities | None;
  display?: Displays;
  pulseLoaderWidth?: SizesWithFull;
  animate?: Animations;
}

type None = "none";
export type Sizes = "sm" | "md" | "lg";
type ExtendedSizes = "xl" | "2xl" | "3xl";
type SizesWithZero = Sizes | "zero";
type SizesWithFull = Sizes | "full";
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
