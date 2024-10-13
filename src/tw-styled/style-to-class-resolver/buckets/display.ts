import { Keyof, SingleBucket } from "../types";

enum DisplayBucket {
  none = "",
  block = `block`,
  inline = `inline`,
  "inline-block" = `inline-block`,
  "inline-flex" = `inline-flex`,
  "hidden" = `hidden`,
  "flex-row" = "flex flex-row",
  "flex-col" = "flex flex-col"
}

export const displayBucket = {
  none: DisplayBucket.none,
  block: DisplayBucket.block,
  inline: DisplayBucket.inline,
  "inline-block": DisplayBucket["inline-block"],
  "inline-flex": DisplayBucket["inline-flex"],
  hidden: DisplayBucket.hidden,
  "flex-row": DisplayBucket["flex-row"],
  "flex-col": DisplayBucket["flex-col"]
} satisfies SingleBucket<Keyof<typeof DisplayBucket>, DisplayBucket>;
