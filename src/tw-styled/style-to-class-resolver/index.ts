import React from "react";
import { extractClassName } from "./extractClassName";
import { Styles, StyleToClassProps } from "./types";

const styleToClass = (style: StyleToClassProps) => {
  const ResultMap = new Map();

  for (const propKey in style) {
    const value = style[propKey];

    const classes = Object.keys(value).map((key) => {
      const styleKey = key as keyof Styles;
      const styleValue = value[styleKey];

      // Do not evoke `extractClassName` if no styleValue
      if (styleValue) {
        return extractClassName(styleKey, styleValue);
      }
    });

    ResultMap.set(propKey, classes);
  }

  const deleteEntry = (key: string, map: Map<any, any>) => {
    map.delete(key);
  };

  const setValue = (value: string, key: string, map: Map<any, any>) => {
    map.set(key, value);
  };

  const processMapResult = (value: string[], key: string, map: Map<any, any>) => {
    const formattedValue = value.join(" ").trim();

    !formattedValue ? deleteEntry(key, map) : setValue(formattedValue, key, map);
  };

  ResultMap.forEach(processMapResult);

  return ResultMap;
};

const useStyleToClass = (styles: StyleToClassProps) => {
  return React.useMemo(() => {
    return styleToClass(styles);
  }, [styles]);
};

export { styleToClass, useStyleToClass };
