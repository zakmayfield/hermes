type BaseSizes = "sm" | "md" | "lg";
type ExtendedSizes = BaseSizes | "xl" | "2xl" | "3xl";
type BaseSizesWithZero = BaseSizes | "zero";

type FlexDir = "row" | "col";
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
type Borders = BaseSizes;

type FontSizes = BaseSizes;
type FontWeights = "light" | "normal" | "bold";
type BgOpacity = "light" | "medium" | "dark";

type Place = "left" | "center" | "right";

export type Children = React.ReactNode;
export type THeadings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// base
type TPadding = BaseSizesWithZero;
type TPaddingX = BaseSizesWithZero;
type TPaddingY = BaseSizesWithZero;
type TMargin = BaseSizesWithZero;
type TMarginX = BaseSizesWithZero;
type TMarginY = BaseSizesWithZero;
type TPlace = Place;
type TWidth = ExtendedSizes | "full";
type THeight = BaseSizes | "screen" | "full";
type TMaxHeight = BaseSizes;
type TButtonHeight = BaseSizes;

// flex
type TFlexDir = FlexDir;
type TFlexPosition = FlexPositions;
type TGap = BaseSizes;

// other
type TRounded = BaseSizes;
type TFontSize = FontSizes;
type TFontWeight = FontWeights;
type TBgOpacity = BgOpacity;

interface IBaseStyles {
  width?: TWidth;
  height?: THeight;
  maxHeight?: TMaxHeight;
  buttonHeight?: TButtonHeight;
  padding?: TPadding;
  paddingX?: TPaddingX;
  paddingY?: TPaddingY;
  margin?: TMargin;
  marginX?: TMarginX;
  marginY?: TMarginY;
  place?: Place;
  rounded?: TRounded;
  border?: Borders;
}

interface IFlexStyles {
  flex?: TFlexDir;
  flexPosition?: TFlexPosition;
  gap?: TGap;
}

interface IOtherStyles {
  rounded?: TRounded;
  bg?: string;
  bgOpacity?: TBgOpacity;
  fontSize?: TFontSize;
  fontWeight?: TFontWeight;
}

export type IStyles = IBaseStyles & IFlexStyles & IOtherStyles;
