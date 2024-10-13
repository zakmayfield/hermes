import { Keyof, SingleBucket } from "../types";

enum CursorBucket {
  none = "",
  pointer = "cursor-pointer",
  "not-allowed" = "cursor-not-allowed"
}

export const cursorBucket = {
  none: CursorBucket.none,
  pointer: CursorBucket.pointer,
  "not-allowed": CursorBucket["not-allowed"]
} satisfies SingleBucket<Keyof<typeof CursorBucket>, CursorBucket>;
