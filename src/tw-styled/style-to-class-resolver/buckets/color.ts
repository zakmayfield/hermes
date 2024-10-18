import { Keyof, MultiBucket } from "../types";

export enum Color {
  background = "background",
  foreground = "foreground",
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  accent = "accent",
  success = "success",
  warning = "warning",
  caution = "caution",
  ghost = "ghost"
}

export const colorBucket = {
  backgroundColor: {
    [Color.background]: "bg-background",
    [Color.foreground]: "bg-foreground",
    [Color.primary]: "bg-primary",
    [Color.secondary]: "bg-secondary",
    [Color.tertiary]: "bg-tertiary",
    [Color.accent]: "bg-accent",
    [Color.success]: "bg-success",
    [Color.warning]: "bg-warning",
    [Color.caution]: "bg-caution",
    [Color.ghost]: "bg-ghost"
  },
  textColor: {
    [Color.background]: "text-background",
    [Color.foreground]: "text-foreground",
    [Color.primary]: "text-primary",
    [Color.secondary]: "text-secondary",
    [Color.tertiary]: "text-tertiary",
    [Color.accent]: "text-accent",
    [Color.success]: "text-success",
    [Color.warning]: "text-warning",
    [Color.caution]: "text-caution",
    [Color.ghost]: "text-ghost"
  },
  borderColor: {
    [Color.background]: "border-background",
    [Color.foreground]: "border-foreground",
    [Color.primary]: "border-primary",
    [Color.secondary]: "border-secondary",
    [Color.tertiary]: "border-tertiary",
    [Color.accent]: "border-accent",
    [Color.success]: "border-success",
    [Color.warning]: "border-warning",
    [Color.caution]: "border-caution",
    [Color.ghost]: "border-ghost"
  }
} satisfies MultiBucket<Keyof<typeof Color>>;
