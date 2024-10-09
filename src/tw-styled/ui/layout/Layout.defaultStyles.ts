import { PartialStyleProps } from "@/tw-styled/types";
import { LayoutProps } from "./Layout";

export const defaultStyles = (style?: PartialStyleProps) => {
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
      flex: "col",
      gap: "lg",
      ...style?.childrenWrapper
    },
    children: {
      ...style?.children
    }
  } satisfies LayoutProps["style"];
};
