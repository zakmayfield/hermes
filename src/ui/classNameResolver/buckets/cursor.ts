import { Keyof, SingleBucket } from "../../types";

enum CursorBucket {
  pointer = "cursor-pointer",
  "not-allowed" = "cursor-not-allowed"
}

export const cursorBucket = {
  pointer: CursorBucket.pointer,
  "not-allowed": CursorBucket["not-allowed"]
} satisfies SingleBucket<Keyof<typeof CursorBucket>, CursorBucket>;
