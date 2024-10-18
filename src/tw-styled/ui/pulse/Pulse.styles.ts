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
      backgroundColor: "tertiary",
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
      backgroundColor: "secondary",
      ...style?.children
    }
  } satisfies PulseProps["style"];
};
