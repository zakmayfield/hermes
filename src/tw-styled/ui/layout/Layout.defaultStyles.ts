import { StyleToClassProps } from "@/tw-styled/types";
import { LayoutProps } from "./Layout";

export const defaultStyles = (style?: StyleToClassProps) => {
  return {
    parentWrapper: {
      ...style?.parentWrapper
    },
    titleWrapper: {
      ...style?.titleWrapper
    },
    title: {
      ...style?.title
    },
    childrenWrapper: {
      ...style?.childrenWrapper
    },
    children: {
      ...style?.children
    }
  } satisfies LayoutProps["style"];
};
