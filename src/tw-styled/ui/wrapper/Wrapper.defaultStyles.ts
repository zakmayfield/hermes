import { StyleToClassProps } from "@/tw-styled/types";
import { WrapperProps } from "./Wrapper";

export const defaultStyles = (style?: StyleToClassProps) => {
  return {
    parentWrapper: {
      ...style?.parentWrapper
    },
    childrenWrapper: {
      display: "flex-col",
      gap: "sm",
      ...style?.childrenWrapper
    },
    children: {
      ...style?.children
    }
  } satisfies WrapperProps["style"];
};
