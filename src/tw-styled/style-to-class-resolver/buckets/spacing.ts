import { Keyof, MultiBucket } from "../types";

enum PaddingBucket {
  none = "",
  sm = `p-[var(--space-sm)]`,
  md = `p-[var(--space-md)]`,
  lg = `p-[var(--space-lg)]`,
  xl = `p-[var(--space-xl)]`,
  "2xl" = `p-[var(--space-2xl)]`
}

enum PaddingXBucket {
  none = "",
  sm = `px-[var(--space-sm)]`,
  md = `px-[var(--space-md)]`,
  lg = `px-[var(--space-lg)]`,
  xl = `px-[var(--space-xl)]`,
  "2xl" = `px-[var(--space-2xl)]`
}

enum PaddingYBucket {
  none = "",
  sm = `py-[var(--space-sm)]`,
  md = `py-[var(--space-md)]`,
  lg = `py-[var(--space-lg)]`,
  xl = `py-[var(--space-xl)]`,
  "2xl" = `py-[var(--space-2xl)]`
}

enum MarginBucket {
  none = "",
  sm = `m-[var(--space-sm)]`,
  md = `m-[var(--space-md)]`,
  lg = `m-[var(--space-lg)]`,
  xl = `m-[var(--space-xl)]`,
  "2xl" = `m-[var(--space-2xl)]`
}

enum MarginXBucket {
  none = "",
  sm = `mx-[var(--space-sm)]`,
  md = `mx-[var(--space-md)]`,
  lg = `mx-[var(--space-lg)]`,
  xl = `mx-[var(--space-xl)]`,
  "2xl" = `mx-[var(--space-2xl)]`
}

enum MarginYBucket {
  none = "",
  sm = `my-[var(--space-sm)]`,
  md = `my-[var(--space-md)]`,
  lg = `my-[var(--space-lg)]`,
  xl = `my-[var(--space-xl)]`,
  "2xl" = `my-[var(--space-2xl)]`
}

enum SpaceXBucket {
  none = "",
  sm = `space-x-[var(--space-sm)]`,
  md = `space-x-[var(--space-md)]`,
  lg = `space-x-[var(--space-lg)]`,
  xl = `space-x-[var(--space-xl)]`,
  "2xl" = `space-x-[var(--space-2xl)]`
}

enum SpaceYBucket {
  none = "",
  sm = `space-y-[var(--space-sm)]`,
  md = `space-y-[var(--space-md)]`,
  lg = `space-y-[var(--space-lg)]`,
  xl = `space-y-[var(--space-xl)]`,
  "2xl" = `space-y-[var(--space-2xl)]`
}

enum GapBucket {
  none = "",
  sm = `gap-[var(--space-sm)]`,
  md = `gap-[var(--space-md)]`,
  lg = `gap-[var(--space-lg)]`,
  xl = `gap-[var(--space-xl)]`,
  "2xl" = `gap-[var(--space-2xl)]`
}

export const spacingBucket = {
  padding: {
    none: "",
    sm: PaddingBucket.sm,
    md: PaddingBucket.md,
    lg: PaddingBucket.lg,
    xl: PaddingBucket.xl,
    "2xl": PaddingBucket["2xl"]
  },
  paddingX: {
    none: "",
    sm: PaddingXBucket.sm,
    md: PaddingXBucket.md,
    lg: PaddingXBucket.lg,
    xl: PaddingXBucket.xl,
    "2xl": PaddingXBucket["2xl"]
  },
  paddingY: {
    none: "",
    sm: PaddingYBucket.sm,
    md: PaddingYBucket.md,
    lg: PaddingYBucket.lg,
    xl: PaddingYBucket.xl,
    "2xl": PaddingYBucket["2xl"]
  },
  margin: {
    none: "",
    sm: MarginBucket.sm,
    md: MarginBucket.md,
    lg: MarginBucket.lg,
    xl: MarginBucket.xl,
    "2xl": MarginBucket["2xl"]
  },
  marginX: {
    none: "",
    sm: MarginXBucket.sm,
    md: MarginXBucket.md,
    lg: MarginXBucket.lg,
    xl: MarginXBucket.xl,
    "2xl": MarginXBucket["2xl"]
  },
  marginY: {
    none: "",
    sm: MarginYBucket.sm,
    md: MarginYBucket.md,
    lg: MarginYBucket.lg,
    xl: MarginYBucket.xl,
    "2xl": MarginYBucket["2xl"]
  },
  spaceX: {
    none: "",
    sm: SpaceXBucket.sm,
    md: SpaceXBucket.md,
    lg: SpaceXBucket.lg,
    xl: SpaceXBucket.xl,
    "2xl": SpaceXBucket["2xl"]
  },
  spaceY: {
    none: "",
    sm: SpaceYBucket.sm,
    md: SpaceYBucket.md,
    lg: SpaceYBucket.lg,
    xl: SpaceYBucket.xl,
    "2xl": SpaceYBucket["2xl"]
  },
  gap: {
    none: "",
    sm: GapBucket.sm,
    md: GapBucket.md,
    lg: GapBucket.lg,
    xl: GapBucket.xl,
    "2xl": GapBucket["2xl"]
  }
} satisfies MultiBucket<Keyof<typeof PaddingBucket>>;
