import { StyleToClassProps } from "@/tw-styled/types";
import { PulseProps } from "./Pulse";

export const usePulseStyles = (
  style?: StyleToClassProps,
  theme?: PulseProps["theme"]
) => {
  const themes = {
    light: {
      parentTheme: "bg-slate-100",
      childrenTheme: "bg-slate-300"
    },
    dark: {
      parentTheme: "bg-slate-600",
      childrenTheme: "bg-slate-700"
    }
  };

  return {
    parentWrapper: {
      animation: "pulse",
      borderRadius: "lg",
      display: "flex-col",
      gap: "sm",
      padding: "md",
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
      className: themes[theme || "dark"].childrenTheme,
      ...style?.children
    }
  } satisfies PulseProps["style"];
};
