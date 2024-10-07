import { PartialStyleProp } from "@/tw-styled/types";
import { WrapperProps } from "./Wrapper";

export const defaultStyles = (style?: PartialStyleProp) => {
  return {
    parentWrapper: {
      ...style?.parentWrapper
    },
    childrenWrapper: {
      flex: "col",
      gap: "sm",
      ...style?.childrenWrapper
    },
    children: {
      ...style?.children
    }
  } satisfies WrapperProps["style"];
};
