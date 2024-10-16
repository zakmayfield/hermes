import { Keyof, MultiBucket } from "../types";

enum PaddingBucket {
  sm = `p-sm`,
  md = `p-md`,
  lg = `p-lg`,
  xl = `p-xl`,
  "2xl" = `p-2xl`
}

enum PaddingXBucket {
  sm = `px-sm`,
  md = `px-md`,
  lg = `px-lg`,
  xl = `px-xl`,
  "2xl" = `px-2xl`
}

enum PaddingYBucket {
  sm = `py-sm`,
  md = `py-md`,
  lg = `py-lg`,
  xl = `py-xl`,
  "2xl" = `py-2xl`
}

enum MarginBucket {
  sm = `m-sm`,
  md = `m-md`,
  lg = `m-lg`,
  xl = `m-xl`,
  "2xl" = `m-2xl`
}

enum MarginXBucket {
  sm = `mx-sm`,
  md = `mx-md`,
  lg = `mx-lg`,
  xl = `mx-xl`,
  "2xl" = `mx-2xl`
}

enum MarginYBucket {
  sm = `my-sm`,
  md = `my-md`,
  lg = `my-lg`,
  xl = `my-xl`,
  "2xl" = `my-2xl`
}

enum SpaceXBucket {
  sm = `space-x-sm`,
  md = `space-x-md`,
  lg = `space-x-lg`,
  xl = `space-x-xl`,
  "2xl" = `space-x-2xl`
}

enum SpaceYBucket {
  sm = `space-y-sm`,
  md = `space-y-md`,
  lg = `space-y-lg`,
  xl = `space-y-xl`,
  "2xl" = `space-y-2xl`
}

enum GapBucket {
  sm = `gap-[var(--space-sm)]`,
  md = `gap-[var(--space-md)]`,
  lg = `gap-[var(--space-lg)]`,
  xl = `gap-[var(--space-xl)]`,
  "2xl" = `gap-[var(--space-2xl)]`
}

export const spacingBucket = {
  padding: {
    sm: PaddingBucket.sm,
    md: PaddingBucket.md,
    lg: PaddingBucket.lg,
    xl: PaddingBucket.xl,
    "2xl": PaddingBucket["2xl"]
  },
  paddingX: {
    sm: PaddingXBucket.sm,
    md: PaddingXBucket.md,
    lg: PaddingXBucket.lg,
    xl: PaddingXBucket.xl,
    "2xl": PaddingXBucket["2xl"]
  },
  paddingY: {
    sm: PaddingYBucket.sm,
    md: PaddingYBucket.md,
    lg: PaddingYBucket.lg,
    xl: PaddingYBucket.xl,
    "2xl": PaddingYBucket["2xl"]
  },
  margin: {
    sm: MarginBucket.sm,
    md: MarginBucket.md,
    lg: MarginBucket.lg,
    xl: MarginBucket.xl,
    "2xl": MarginBucket["2xl"]
  },
  marginX: {
    sm: MarginXBucket.sm,
    md: MarginXBucket.md,
    lg: MarginXBucket.lg,
    xl: MarginXBucket.xl,
    "2xl": MarginXBucket["2xl"]
  },
  marginY: {
    sm: MarginYBucket.sm,
    md: MarginYBucket.md,
    lg: MarginYBucket.lg,
    xl: MarginYBucket.xl,
    "2xl": MarginYBucket["2xl"]
  },
  spaceX: {
    sm: SpaceXBucket.sm,
    md: SpaceXBucket.md,
    lg: SpaceXBucket.lg,
    xl: SpaceXBucket.xl,
    "2xl": SpaceXBucket["2xl"]
  },
  spaceY: {
    sm: SpaceYBucket.sm,
    md: SpaceYBucket.md,
    lg: SpaceYBucket.lg,
    xl: SpaceYBucket.xl,
    "2xl": SpaceYBucket["2xl"]
  },
  gap: {
    sm: GapBucket.sm,
    md: GapBucket.md,
    lg: GapBucket.lg,
    xl: GapBucket.xl,
    "2xl": GapBucket["2xl"]
  }
} satisfies MultiBucket<Keyof<typeof PaddingBucket>>;
