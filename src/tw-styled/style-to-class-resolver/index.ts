import React from "react";
import { extractClassName } from "./extractClassName";
import { Styles, StyleToClassProps } from "./types";

const styleToClass = (style: StyleToClassProps) => {
  const ResultMap = new Map();

  for (const propKey in style) {
    const value = style[propKey];

    ResultMap.set(
      propKey,
      Object.keys(value).map((key) => {
        const styleKey = key as keyof Styles;
        const styleValue = value[styleKey] || "none";
        return extractClassName(styleKey, styleValue);
      })
    );
  }

  ResultMap.forEach((value, key, map) =>
    !value.length ? map.delete(key) : map.set(key, value.join(" ").trim())
  );

  return ResultMap;
};

const useStyleToClass = (styles: StyleToClassProps) => {
  return React.useMemo(() => {
    return styleToClass(styles);
  }, [styles]);
};

export { styleToClass, useStyleToClass };
