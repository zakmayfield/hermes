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
export type TPadding = BaseSizesWithZero;
export type TPaddingX = BaseSizesWithZero;
export type TPaddingY = BaseSizesWithZero;
export type TMargin = BaseSizesWithZero;
export type TMarginX = BaseSizesWithZero;
export type TMarginY = BaseSizesWithZero;
export type TPlace = Place;
export type TWidth = ExtendedSizes | "full";
export type THeight = BaseSizes | "screen" | "full";
export type TMaxHeight = BaseSizes;

// flex
export type TFlexDir = FlexDir;
export type TFlexPosition = FlexPositions;
export type TGap = BaseSizes;

// other
export type TRounded = BaseSizes;
export type TFontSize = FontSizes;
export type TFontWeight = FontWeights;
export type TBgOpacity = BgOpacity;

export interface IBaseStyles {
  width?: TWidth;
  height?: THeight;
  maxHeight?: TMaxHeight;
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

export interface IFlexStyles {
  flex?: TFlexDir;
  flexPosition?: TFlexPosition;
  gap?: TGap;
}

export interface IOtherStyles {
  rounded?: TRounded;
  bg?: string;
  bgOpacity?: TBgOpacity;
  fontSize?: TFontSize;
  fontWeight?: TFontWeight;
}
