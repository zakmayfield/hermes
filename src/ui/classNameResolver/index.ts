import React from "react";
import { extractClassName } from "./extractClassName";
import { Styles, StyleToClassProps } from "../types";

/*
  STYLE PROP EXAMPLE:

  style: {
    foo: { width: "full" }
    bar: { border: "sm" }
  }

  Extract classNames with *.get("foo") syntax

  ** 
    Note that `classNameResolver` expects a prop type of `Record<string, Record<string, Partial<Styles>>>` 
    See: src/tw-styled/style-to-class-resolver/types.ts
  **
*/

const classNameResolver = (style: StyleToClassProps) => {
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

const useClassNameResolver = (styles: StyleToClassProps) => {
  return React.useMemo(() => {
    return classNameResolver(styles);
  }, [styles]);
};

export { classNameResolver, useClassNameResolver };
