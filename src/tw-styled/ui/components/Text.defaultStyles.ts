import { PartialStyleProp } from "@/tw-styled/types";
import { TextProps } from "./Text";

export const defaultStyles = (style?: PartialStyleProp) => {
  return {
    parentWrapper: {
      ...style?.parentWrapper
    }
  } satisfies TextProps["style"];
};
