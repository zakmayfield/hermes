import { Keyof, MultiBucket, SingleBucket } from "../types";

enum FlexRowPositionBucket {
  "top-left" = "items-start",
  "center-left" = "items-center justify-start",
  "bottom-left" = "items-end",
  "top-center" = "items-start justify-center",
  "center-center" = "items-center justify-center",
  "bottom-center" = "items-end justify-center",
  "top-right" = "items-start justify-end",
  "center-right" = "items-center justify-end",
  "bottom-right" = "items-end justify-end"
}

enum FlexColPositionBucket {
  "top-left" = "justify-start",
  "top-center" = "items-center justify-start",
  "top-right" = "items-end justify-start",
  "center-left" = "justify-center",
  "center-center" = "items-center justify-center",
  "center-right" = "items-end justify-center",
  "bottom-left" = "justify-end",
  "bottom-center" = "items-center justify-end",
  "bottom-right" = "items-end justify-end"
}

export const flexPositionBucket = {
  flexRowPosition: {
    "top-left": FlexRowPositionBucket["top-left"],
    "top-center": FlexRowPositionBucket["top-center"],
    "top-right": FlexRowPositionBucket["top-right"],

    "center-left": FlexRowPositionBucket["center-left"],
    "center-center": FlexRowPositionBucket["center-center"],
    "center-right": FlexRowPositionBucket["center-right"],

    "bottom-left": FlexRowPositionBucket["bottom-left"],
    "bottom-center": FlexRowPositionBucket["bottom-center"],
    "bottom-right": FlexRowPositionBucket["bottom-right"]
  },
  flexColPosition: {
    "top-left": FlexColPositionBucket["top-left"],
    "top-center": FlexColPositionBucket["top-center"],
    "top-right": FlexColPositionBucket["top-right"],

    "center-left": FlexColPositionBucket["center-left"],
    "center-center": FlexColPositionBucket["center-center"],
    "center-right": FlexColPositionBucket["center-right"],

    "bottom-left": FlexColPositionBucket["bottom-left"],
    "bottom-center": FlexColPositionBucket["bottom-center"],
    "bottom-right": FlexColPositionBucket["bottom-right"]
  }
} satisfies MultiBucket<Keyof<typeof FlexRowPositionBucket>>;

enum FlexSpacingBucket {
  "space-between" = "justify-between",
  "space-evenly" = "justify-evenly",
  "space-around" = "justify-around"
}

enum FlexWrapBucket {
  wrap = "flex-wrap",
  nowrap = "flex-nowrap"
}

enum FlexSizeBucket {
  grow = "flex-grow",
  shrink = "flex-shrink",
  nogrow = "flex-grow-0",
  noshrink = "flex-shrink-0"
}

export const flexSpacingBucket = {
  "space-between": FlexSpacingBucket["space-between"],
  "space-evenly": FlexSpacingBucket["space-evenly"],
  "space-around": FlexSpacingBucket["space-around"]
} satisfies SingleBucket<Keyof<typeof FlexSpacingBucket>, FlexSpacingBucket>;

export const flexWrapBucket = {
  wrap: FlexWrapBucket.wrap,
  nowrap: FlexWrapBucket.nowrap
} satisfies SingleBucket<Keyof<typeof FlexWrapBucket>, FlexWrapBucket>;

export const flexSizeBucket = {
  grow: FlexSizeBucket.grow,
  shrink: FlexSizeBucket.shrink,
  nogrow: FlexSizeBucket.nogrow,
  noshrink: FlexSizeBucket.grow
} satisfies SingleBucket<Keyof<typeof FlexSizeBucket>, FlexSizeBucket>;
