import { StyleToClassProps } from "@/tw-styled/types";
import { LayoutProps } from "./Layout";

export const defaultStyles = (style?: StyleToClassProps) => {
  return {
    parentWrapper: {
      padding: "lg",
      spaceY: "lg",
      ...style?.parentWrapper
    },
    headingWrapper: {
      spaceY: "sm",
      ...style?.headingWrapper
    },
    heading: {
      ...style?.heading
    },
    headingChildren: {
      ...style?.headingChildren
    },
    childrenWrapper: {
      padding: "md",
      display: "flex-col",
      gap: "lg",
      ...style?.childrenWrapper
    },
    children: {
      ...style?.children
    }
  } satisfies LayoutProps["style"];
};
