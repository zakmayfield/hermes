import { Styles, StyleToClassProps } from "@/tw-styled/types";
import { PulseProps } from "./Pulse";

export const usePulseStyles = (
  style?: StyleToClassProps,
  theme?: PulseProps["theme"]
) => {
  const themes = {
    light: {
      parentTheme: "accent",
      childrenTheme: "tertiary"
    },
    dark: {
      parentTheme: "accent",
      childrenTheme: "tertiary"
    }
  };

  return {
    parentWrapper: {
      animation: "pulse",
      borderRadius: "lg",
      display: "flex-col",
      gap: "sm",
      padding: "md",
      backgroundColor: themes[theme || "dark"].parentTheme as Styles["backgroundColor"],
      className: themes[theme || "dark"].parentTheme,
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
      backgroundColor: themes[theme || "dark"].childrenTheme as Styles["backgroundColor"],
      ...style?.children
    }
  } satisfies PulseProps["style"];
};
