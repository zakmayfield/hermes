import { PartialStyleProp } from "@/tw-styled/types";
import { HeadingProps } from "./Heading";

export const defaultStyles = (style?: PartialStyleProp) => {
  return {
    parentWrapper: {
      ...style?.parentWrapper
    },
    heading: {
      ...style?.heading
    },
    childrenWrapper: {
      ...style?.childrenWrapper
    }
  } satisfies HeadingProps["style"];
};
