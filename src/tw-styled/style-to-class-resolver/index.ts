import { extractClassName } from "./extractClassName";
import { Styles, StyleToClassProps } from "./types";

export const styleToClass = (style: StyleToClassProps) => {
  const ResultMap = new Map();

  for (const propKey in style) {
    const value = style[propKey];

    ResultMap.set(
      propKey,
      Object.keys(value)
        .map((key) => {
          const styleKey = key as keyof Styles;
          const styleValue = value[styleKey] || "none";
          return extractClassName(styleKey, styleValue);
        })
        .join(" ")
        .trim()
    );
  }

  return ResultMap;
};
