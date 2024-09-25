export type StyleObj = Record<string, IStyles>;
export type Children = React.ReactNode;
export type THeadings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type BtnVariants = "primary" | "warning" | "ghost";
export type IStyles = IDimensions & ISpacing & IAlignment & ITypography & IOther;

interface IDimensions {
  width?: SizesWithFull | ExtendedSizes;
  height?: SizesWithFull | "screen";
  maxHeight?: Sizes;
  buttonSize?: SizesWithFull;
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
  gap?: Sizes;
  place?: Places;
}

interface ITypography {
  fontSize?: Sizes;
  fontWeight?: FontWeights;
}

interface IOther {
  bg?: string;
  rounded?: Sizes;
  border?: Sizes;
  bgOpacity?: Opacities;
}

type Sizes = "sm" | "md" | "lg";
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
type FontWeights = "light" | "normal" | "bold";
type Opacities = "light" | "medium" | "dark";
type Places = "left" | "center" | "right";
