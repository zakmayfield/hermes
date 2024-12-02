import { Keyof, MultiBucket } from "../../types";

export enum Color {
  background = "background",
  foreground = "foreground",

  ghost = "ghost",

  "theme-primary" = "theme-primary",
  "theme-secondary" = "theme-secondary",
  "theme-tertiary" = "theme-tertiary",
  "theme-accent" = "theme-accent",

  "theme-blue-light" = "theme-blue-light",
  "theme-blue" = "theme-blue",
  "theme-blue-dark" = "theme-blue-dark",

  "theme-red-light" = "theme-red-light",
  "theme-red" = "theme-red",
  "theme-red-dark" = "theme-red-dark",

  "theme-green-light" = "theme-green-light",
  "theme-green" = "theme-green",
  "theme-green-dark" = "theme-green-dark"
}

export const colorBucket = {
  backgroundColor: {
    [Color.background]: "bg-background",
    [Color.foreground]: "bg-foreground",

    [Color.ghost]: "bg-ghost",

    [Color["theme-primary"]]: "bg-theme-primary",
    [Color["theme-secondary"]]: "bg-theme-secondary",
    [Color["theme-tertiary"]]: "bg-theme-tertiary",
    [Color["theme-accent"]]: "bg-theme-accent",

    [Color["theme-blue-light"]]: "bg-theme-blue-light",
    [Color["theme-blue"]]: "bg-theme-blue",
    [Color["theme-blue-dark"]]: "bg-theme-blue-dark",

    [Color["theme-red-light"]]: "bg-theme-red-light",
    [Color["theme-red"]]: "bg-theme-red",
    [Color["theme-red-dark"]]: "bg-theme-red-dark",

    [Color["theme-green-light"]]: "bg-theme-green-light",
    [Color["theme-green"]]: "bg-theme-green",
    [Color["theme-green-dark"]]: "bg-theme-green-dark"
  },
  textColor: {
    [Color.background]: "text-background",
    [Color.foreground]: "text-foreground",

    [Color.ghost]: "text-ghost",

    [Color["theme-primary"]]: "text-theme-primary",
    [Color["theme-secondary"]]: "text-theme-secondary",
    [Color["theme-tertiary"]]: "text-theme-tertiary",
    [Color["theme-accent"]]: "text-theme-accent",

    [Color["theme-blue-light"]]: "text-theme-blue-light",
    [Color["theme-blue"]]: "text-theme-blue",
    [Color["theme-blue-dark"]]: "text-theme-blue-dark",

    [Color["theme-red-light"]]: "text-theme-red-light",
    [Color["theme-red"]]: "text-theme-red",
    [Color["theme-red-dark"]]: "text-theme-red-dark",

    [Color["theme-green-light"]]: "text-theme-green-light",
    [Color["theme-green"]]: "text-theme-green",
    [Color["theme-green-dark"]]: "text-theme-green-dark"
  },
  borderColor: {
    [Color.background]: "border-background",
    [Color.foreground]: "border-foreground",

    [Color.ghost]: "border-ghost",

    [Color["theme-primary"]]: "border-theme-primary",
    [Color["theme-secondary"]]: "border-theme-secondary",
    [Color["theme-tertiary"]]: "border-theme-tertiary",
    [Color["theme-accent"]]: "border-theme-accent",

    [Color["theme-blue-light"]]: "border-theme-blue-light",
    [Color["theme-blue"]]: "border-theme-blue",
    [Color["theme-blue-dark"]]: "border-theme-blue-dark",

    [Color["theme-red-light"]]: "border-theme-red-light",
    [Color["theme-red"]]: "border-theme-red",
    [Color["theme-red-dark"]]: "border-theme-red-dark",

    [Color["theme-green-light"]]: "border-theme-green-light",
    [Color["theme-green"]]: "border-theme-green",
    [Color["theme-green-dark"]]: "border-theme-green-dark"
  }
} satisfies MultiBucket<Keyof<typeof Color>>;
