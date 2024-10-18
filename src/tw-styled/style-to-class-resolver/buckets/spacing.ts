import { Keyof, MultiBucket } from "../types";

export enum Spacing {
  none = "none",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl"
}

export const spacingBucket = {
  padding: {
    [Spacing.none]: "p-0",
    [Spacing.sm]: "p-sm",
    [Spacing.md]: "p-md",
    [Spacing.lg]: "p-lg",
    [Spacing.xl]: "p-xl",
    [Spacing["2xl"]]: "p-2xl"
  },
  paddingX: {
    [Spacing.none]: "px-0",
    [Spacing.sm]: "px-sm",
    [Spacing.md]: "px-md",
    [Spacing.lg]: "px-lg",
    [Spacing.xl]: "px-xl",
    [Spacing["2xl"]]: "px-2xl"
  },
  paddingY: {
    [Spacing.none]: "py-0",
    [Spacing.sm]: "py-sm",
    [Spacing.md]: "py-md",
    [Spacing.lg]: "py-lg",
    [Spacing.xl]: "py-xl",
    [Spacing["2xl"]]: "py-2xl"
  },
  margin: {
    [Spacing.none]: "m-0",
    [Spacing.sm]: "m-sm",
    [Spacing.md]: "m-md",
    [Spacing.lg]: "m-lg",
    [Spacing.xl]: "m-xl",
    [Spacing["2xl"]]: "m-2xl"
  },
  marginX: {
    [Spacing.none]: "mx-0",
    [Spacing.sm]: "mx-sm",
    [Spacing.md]: "mx-md",
    [Spacing.lg]: "mx-lg",
    [Spacing.xl]: "mx-xl",
    [Spacing["2xl"]]: "mx-2xl"
  },
  marginY: {
    [Spacing.none]: "my-0",
    [Spacing.sm]: "my-sm",
    [Spacing.md]: "my-md",
    [Spacing.lg]: "my-lg",
    [Spacing.xl]: "my-xl",
    [Spacing["2xl"]]: "my-2xl"
  },
  spaceX: {
    [Spacing.none]: "space-x-0",
    [Spacing.sm]: "space-x-sm",
    [Spacing.md]: "space-x-md",
    [Spacing.lg]: "space-x-lg",
    [Spacing.xl]: "space-x-xl",
    [Spacing["2xl"]]: "space-x-2xl"
  },
  spaceY: {
    [Spacing.none]: "space-y-0",
    [Spacing.sm]: "space-y-sm",
    [Spacing.md]: "space-y-md",
    [Spacing.lg]: "space-y-lg",
    [Spacing.xl]: "space-y-xl",
    [Spacing["2xl"]]: "space-y-2xl"
  },
  gap: {
    [Spacing.none]: "gap-0",
    [Spacing.sm]: "gap-[var(--space-sm)]",
    [Spacing.md]: "gap-[var(--space-md)]",
    [Spacing.lg]: "gap-[var(--space-lg)]",
    [Spacing.xl]: "gap-[var(--space-xl)]",
    [Spacing["2xl"]]: "gap-[var(--space-2xl)]"
  }
} satisfies MultiBucket<Keyof<typeof Spacing>>;
