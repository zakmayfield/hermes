import { PartialStyleProp } from "@/tw-styled/types";
import { PulseProps } from "./Pulse";

export const defaultStyles = (style?: PartialStyleProp, theme?: PulseProps["theme"]) => {
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
      animate: "pulse",
      rounded: "lg",
      width: "md",
      flex: "col",
      gap: "sm",
      padding: "sm",
      className: themes[theme || "dark"].parentTheme,
      ...style?.parentWrapper
    },
    childrenWrapper: {
      flex: "row",
      gap: "sm",
      ...style?.childrenWrapper
    },
    children: {
      animate: "pulse",
      padding: "md",
      rounded: "xl",
      className: themes[theme || "dark"].childrenTheme,
      ...style?.children
    }
  } satisfies PulseProps["style"];
};
