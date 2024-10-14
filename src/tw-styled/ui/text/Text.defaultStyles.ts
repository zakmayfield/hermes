import { StyleToClassProps } from "@/tw-styled/types";
import { TextProps } from "./Text";

export const defaultStyles = (style?: StyleToClassProps) => {
  return {
    parentWrapper: {
      ...style?.parentWrapper
    }
  } satisfies TextProps["style"];
};
