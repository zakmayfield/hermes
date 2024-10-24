import { Keyof, MultiBucket } from "../types";

export enum Width {
  "3xs" = "3xs",
  "2xs" = "2xs",
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
  "3xl" = "3xl",
  full = "full",
  half = "half",
  third = "third"
}

export enum Height {
  "3xs" = "3xs",
  "2xs" = "2xs",
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  screen = "screen",
  full = "full"
}

export const widthtBucket = {
  width: {
    [Width["3xs"]]: "w-3xs",
    [Width["2xs"]]: "w-2xs",
    [Width.xs]: "w-xs",
    [Width.sm]: "w-sm",
    [Width.md]: "w-md",
    [Width.lg]: "w-lg",
    [Width.xl]: "w-xl",
    [Width["2xl"]]: "w-2xl",
    [Width["3xl"]]: "w-3xl",
    [Width.full]: "w-full",
    [Width.half]: "w-half",
    [Width.third]: "w-third"
  },
  minWidth: {
    [Width["3xs"]]: "min-w-3xs",
    [Width["2xs"]]: "min-w-2xs",
    [Width.xs]: "min-w-xs",
    [Width.sm]: "min-w-sm",
    [Width.md]: "min-w-md",
    [Width.lg]: "min-w-lg",
    [Width.xl]: "min-w-xl",
    [Width["2xl"]]: "min-w-2xl",
    [Width["3xl"]]: "min-w-3xl",
    [Width.full]: "min-w-full",
    [Width.half]: "min-w-half",
    [Width.third]: "min-w-third"
  },
  maxWidth: {
    [Width["3xs"]]: "max-w-3xs",
    [Width["2xs"]]: "max-w-2xs",
    [Width.xs]: "max-w-xs",
    [Width.sm]: "max-w-sm",
    [Width.md]: "max-w-md",
    [Width.lg]: "max-w-lg",
    [Width.xl]: "max-w-xl",
    [Width["2xl"]]: "max-w-2xl",
    [Width["3xl"]]: "max-w-3xl",
    [Width.full]: "max-w-full",
    [Width.half]: "max-w-half",
    [Width.third]: "max-w-third"
  }
} satisfies MultiBucket<Keyof<typeof Width>>;

export const heightBucket = {
  height: {
    [Height["3xs"]]: "h-3xs",
    [Height["2xs"]]: "h-2xs",
    [Height.xs]: "h-xs",
    [Height.sm]: "h-sm",
    [Height.md]: "h-md",
    [Height.lg]: "h-lg",
    [Height.xl]: "h-xl",
    [Height.screen]: "h-screen",
    [Height.full]: "h-full"
  },
  minHeight: {
    [Height["3xs"]]: "min-h-3xs",
    [Height["2xs"]]: "min-h-2xs",
    [Height.xs]: "min-h-xs",
    [Height.sm]: "min-h-sm",
    [Height.md]: "min-h-md",
    [Height.lg]: "min-h-lg",
    [Height.xl]: "min-h-xl",
    [Height.screen]: "min-h-screen",
    [Height.full]: "min-h-full"
  },
  maxHeight: {
    [Height["3xs"]]: "max-h-3xs",
    [Height["2xs"]]: "max-h-2xs",
    [Height.xs]: "max-h-xs",
    [Height.sm]: "max-h-sm",
    [Height.md]: "max-h-md",
    [Height.lg]: "max-h-lg",
    [Height.xl]: "max-h-xl",
    [Height.screen]: "max-h-screen",
    [Height.full]: "max-h-full"
  }
} satisfies MultiBucket<Keyof<typeof Height>>;
