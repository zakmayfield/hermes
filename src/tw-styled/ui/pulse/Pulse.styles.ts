import { StyleToClassProps } from "@/tw-styled/types";
import { PulseProps } from "./Pulse";

export const usePulseStyles = (style?: StyleToClassProps) => {
  return {
    parentWrapper: {
      animation: "pulse",
      borderRadius: "lg",
      display: "flex-col",
      gap: "sm",
      padding: "md",
      backgroundColor: "accent",
      ...style?.parentWrapper
    },
    childrenWrapper: {
      display: "flex-row",
      gap: "sm",
      ...style?.childrenWrapper
    },
    children: {
      animation: "pulse",
      padding: "md",
      borderRadius: "xl",
      backgroundColor: "tertiary",
      ...style?.children
    }
  } satisfies PulseProps["style"];
};
