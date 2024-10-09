import { PartialStyleProps } from "@/tw-styled/types";
import { TextProps } from "./Text";

export const defaultStyles = (style?: PartialStyleProps) => {
  return {
    parentWrapper: {
      ...style?.parentWrapper
    }
  } satisfies TextProps["style"];
};
