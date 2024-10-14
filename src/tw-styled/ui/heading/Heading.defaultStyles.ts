import { StyleToClassProps } from "@/tw-styled/types";
import { HeadingProps } from "./Heading";

export const defaultStyles = (style?: StyleToClassProps) => {
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
