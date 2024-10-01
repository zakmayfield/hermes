import { useStyleMaps } from "@/tw-styled/style-resolver/hooks";
import { ComponentStyleProp, StylePropKeys } from "@/tw-styled/types";
import { merge } from "@/tw-styled/utils/class-merge";
import { useMemo } from "react";

const isValidObject = (obj: ComponentStyleProp, key: string) => {
  return Object.keys(obj[key]).length !== 0;
};

const typeNarrowHandler = (styleKey: StylePropKeys, styleValue: string) => {
  const { getAllStyleMaps } = useStyleMaps();

  const styleMaps = useMemo(() => {
    return getAllStyleMaps();
  }, []);

  let map;

  switch (styleKey) {
    // LAYOUT
    case "width":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "height":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "maxHeight":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "border":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "rounded":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "display":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "position":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];

    // PADDING
    case "padding":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "paddingX":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "paddingY":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "paddingTop":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "paddingBottom":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "paddingLeft":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "paddingRight":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];

    // MARGIN
    case "margin":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "marginX":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "marginY":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "marginTop":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "marginBottom":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "marginLeft":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "marginRight":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];

    // ALIGNMENT
    case "flex":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "flexSpacing":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "flexWrap":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "flexSize":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "gap":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "place":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "flexRowPosition":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "flexColPosition":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];

    // TYPOGRAPHY
    case "fontSize":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "fontWeight":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "textColor":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "textOpacity":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "textDecoration":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "textAlign":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "lineHeight":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "letterSpacing":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];

    // BACKGROUND
    case "bgColor":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "bgOpacity":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];

    // ANIMATIONS
    case "animate":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];

    // BUTTON
    case "buttonSize":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "buttonWidth":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "buttonHeight":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];

    // LOADER
    case "loaderWidth":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];

    // OTHER
    case "cursor":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];
    case "opacity":
      map = styleMaps[styleKey];
      return map[styleValue as keyof typeof map];

    // CLASSNAME
    case "className":
      return styleValue === "none" ? "" : styleValue;
  }
};

export const useClassNameResolver = (styleProp: ComponentStyleProp) => {
  const result: Record<string, string> = {};

  for (const stylePropKey in styleProp) {
    if (isValidObject(styleProp, stylePropKey)) {
      const classes = [];
      result[stylePropKey] = "";

      for (const key in styleProp[stylePropKey]) {
        const styleKey = key as StylePropKeys;
        const styleValue = styleProp[stylePropKey][styleKey] || "none";

        classes.push(typeNarrowHandler(styleKey, styleValue));
      }

      result[stylePropKey] = merge(classes.join(" ").trim());
    }
  }

  return result;
};
