import { StyleToClassProps } from "@/tw-styled/types";
import { WrapperProps } from "./Wrapper";

export const defaultStyles = (style?: StyleToClassProps) => {
  return {
    parentWrapper: {
      ...style?.parentWrapper
    },
    childrenWrapper: {
      ...style?.childrenWrapper
    }
  } satisfies WrapperProps["style"];
};
