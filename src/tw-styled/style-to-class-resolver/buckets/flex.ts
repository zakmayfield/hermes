import { Keyof, MultiBucket, SingleBucket } from "../types";

export enum FlexPosition {
  start = "start",
  center = "center",
  end = "end"
}

export const flexPosition = {
  flexAlign: {
    [FlexPosition.start]: "items-start",
    [FlexPosition.center]: "items-center",
    [FlexPosition.end]: "items-end"
  },
  flexJustify: {
    [FlexPosition.start]: "justify-start",
    [FlexPosition.center]: "justify-center",
    [FlexPosition.end]: "justify-end"
  }
} satisfies MultiBucket<Keyof<typeof FlexPosition>>;

export enum FlexDirPosition {
  "top-left" = "top-left",
  "top-center" = "top-center",
  "top-right" = "top-right",

  "center-left" = "center-left",
  "center-center" = "center-center",
  "center-right" = "center-right",
  "bottom-left" = "bottom-left",

  "bottom-center" = "bottom-center",
  "bottom-right" = "bottom-right"
}

export const flexDirPositionBucket = {
  flexRowPosition: {
    [FlexDirPosition["top-left"]]: "items-start",
    [FlexDirPosition["top-center"]]: "items-start justify-center",
    [FlexDirPosition["top-right"]]: "items-start justify-end",

    [FlexDirPosition["center-left"]]: "items-center justify-start",
    [FlexDirPosition["center-center"]]: "items-center justify-center",
    [FlexDirPosition["center-right"]]: "items-center justify-end",

    [FlexDirPosition["bottom-left"]]: "items-end",
    [FlexDirPosition["bottom-center"]]: "items-end justify-center",
    [FlexDirPosition["bottom-right"]]: "items-end justify-end"
  },
  flexColPosition: {
    [FlexDirPosition["top-left"]]: "justify-start",
    [FlexDirPosition["top-center"]]: "items-center justify-start",
    [FlexDirPosition["top-right"]]: "items-end justify-start",

    [FlexDirPosition["center-left"]]: "justify-center",
    [FlexDirPosition["center-center"]]: "items-center justify-center",
    [FlexDirPosition["center-right"]]: "items-end justify-center",

    [FlexDirPosition["bottom-left"]]: "justify-end",
    [FlexDirPosition["bottom-center"]]: "items-center justify-end",
    [FlexDirPosition["bottom-right"]]: "items-end justify-end"
  }
} satisfies MultiBucket<Keyof<typeof FlexDirPosition>>;

export enum FlexSpacing {
  "space-between" = "space-between",
  "space-evenly" = "space-evenly",
  "space-around" = "space-around"
}

export const flexSpacingBucket = {
  [FlexSpacing["space-between"]]: "justify-between",
  [FlexSpacing["space-evenly"]]: "justify-evenly",
  [FlexSpacing["space-around"]]: "justify-around"
} satisfies SingleBucket<Keyof<typeof FlexSpacing>, string>;

export enum FlexWrap {
  wrap = "wrap",
  nowrap = "nowrap"
}

export const flexWrapBucket = {
  [FlexWrap.wrap]: "flex-wrap",
  [FlexWrap.nowrap]: "flex-nowrap"
} satisfies SingleBucket<Keyof<typeof FlexWrap>, string>;

export enum FlexSize {
  grow = "grow",
  shrink = "shrink",
  nogrow = "nogrow",
  noshrink = "noshrink",
  remaining = "remaining"
}

export const flexSizeBucket = {
  [FlexSize.grow]: "flex-grow",
  [FlexSize.shrink]: "flex-shrink",
  [FlexSize.nogrow]: "flex-grow-0",
  [FlexSize.noshrink]: "flex-shrink-0",
  [FlexSize.remaining]: "flex-1"
} satisfies SingleBucket<Keyof<typeof FlexSize>, string>;
