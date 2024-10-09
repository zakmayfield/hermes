import { useStyleMaps } from "./useStyleMaps";
import { StylePropKeys } from "@/tw-styled/types";

export const useTypeNarrower = (styleKey: StylePropKeys, styleValue: string) => {
  const { getStyleMapFromGroup } = useStyleMaps();

  let map;

  switch (styleKey) {
    // DIMENSIONS
    case "width":
      map = getStyleMapFromGroup("dimensions", styleKey);
      return map[styleValue as keyof typeof map];
    case "height":
      map = getStyleMapFromGroup("dimensions", styleKey);
      return map[styleValue as keyof typeof map];
    case "maxHeight":
      map = getStyleMapFromGroup("dimensions", styleKey);
      return map[styleValue as keyof typeof map];

    // LAYOUT
    case "border":
      map = getStyleMapFromGroup("layout", styleKey);
      return map[styleValue as keyof typeof map];
    case "rounded":
      map = getStyleMapFromGroup("layout", styleKey);
      return map[styleValue as keyof typeof map];
    case "display":
      map = getStyleMapFromGroup("layout", styleKey);
      return map[styleValue as keyof typeof map];
    case "position":
      map = getStyleMapFromGroup("layout", styleKey);
      return map[styleValue as keyof typeof map];
    case "place":
      map = getStyleMapFromGroup("layout", styleKey);
      return map[styleValue as keyof typeof map];

    // SPACE
    case "space":
      map = getStyleMapFromGroup("space", styleKey);
      return map[styleValue as keyof typeof map];
    case "spaceX":
      map = getStyleMapFromGroup("space", styleKey);
      return map[styleValue as keyof typeof map];
    case "spaceY":
      map = getStyleMapFromGroup("space", styleKey);
      return map[styleValue as keyof typeof map];

    // PADDING
    case "padding":
      map = getStyleMapFromGroup("padding", styleKey);
      return map[styleValue as keyof typeof map];
    case "paddingX":
      map = getStyleMapFromGroup("padding", styleKey);
      return map[styleValue as keyof typeof map];
    case "paddingY":
      map = getStyleMapFromGroup("padding", styleKey);
      return map[styleValue as keyof typeof map];
    case "paddingTop":
      map = getStyleMapFromGroup("padding", styleKey);
      return map[styleValue as keyof typeof map];
    case "paddingBottom":
      map = getStyleMapFromGroup("padding", styleKey);
      return map[styleValue as keyof typeof map];
    case "paddingLeft":
      map = getStyleMapFromGroup("padding", styleKey);
      return map[styleValue as keyof typeof map];
    case "paddingRight":
      map = getStyleMapFromGroup("padding", styleKey);
      return map[styleValue as keyof typeof map];

    // MARGIN
    case "margin":
      map = getStyleMapFromGroup("margin", styleKey);
      return map[styleValue as keyof typeof map];
    case "marginX":
      map = getStyleMapFromGroup("margin", styleKey);
      return map[styleValue as keyof typeof map];
    case "marginY":
      map = getStyleMapFromGroup("margin", styleKey);
      return map[styleValue as keyof typeof map];
    case "marginTop":
      map = getStyleMapFromGroup("margin", styleKey);
      return map[styleValue as keyof typeof map];
    case "marginBottom":
      map = getStyleMapFromGroup("margin", styleKey);
      return map[styleValue as keyof typeof map];
    case "marginLeft":
      map = getStyleMapFromGroup("margin", styleKey);
      return map[styleValue as keyof typeof map];
    case "marginRight":
      map = getStyleMapFromGroup("margin", styleKey);
      return map[styleValue as keyof typeof map];

    // ALIGNMENT
    case "flex":
      map = getStyleMapFromGroup("alignment", styleKey);
      return map[styleValue as keyof typeof map];
    case "flexSpacing":
      map = getStyleMapFromGroup("alignment", styleKey);
      return map[styleValue as keyof typeof map];
    case "flexWrap":
      map = getStyleMapFromGroup("alignment", styleKey);
      return map[styleValue as keyof typeof map];
    case "flexSize":
      map = getStyleMapFromGroup("alignment", styleKey);
      return map[styleValue as keyof typeof map];
    case "gap":
      map = getStyleMapFromGroup("alignment", styleKey);
      return map[styleValue as keyof typeof map];
    case "flexRowPosition":
      map = getStyleMapFromGroup("alignment", styleKey);
      return map[styleValue as keyof typeof map];
    case "flexColPosition":
      map = getStyleMapFromGroup("alignment", styleKey);
      return map[styleValue as keyof typeof map];

    // TYPOGRAPHY
    case "fontSize":
      map = getStyleMapFromGroup("typography", styleKey);
      return map[styleValue as keyof typeof map];
    case "fontWeight":
      map = getStyleMapFromGroup("typography", styleKey);
      return map[styleValue as keyof typeof map];
    case "textColor":
      map = getStyleMapFromGroup("typography", styleKey);
      return map[styleValue as keyof typeof map];
    case "textOpacity":
      map = getStyleMapFromGroup("typography", styleKey);
      return map[styleValue as keyof typeof map];
    case "textDecoration":
      map = getStyleMapFromGroup("typography", styleKey);
      return map[styleValue as keyof typeof map];
    case "textAlign":
      map = getStyleMapFromGroup("typography", styleKey);
      return map[styleValue as keyof typeof map];
    case "lineHeight":
      map = getStyleMapFromGroup("typography", styleKey);
      return map[styleValue as keyof typeof map];
    case "letterSpacing":
      map = getStyleMapFromGroup("typography", styleKey);
      return map[styleValue as keyof typeof map];

    // ANIMATIONS
    case "animate":
      map = getStyleMapFromGroup("animations", styleKey);
      return map[styleValue as keyof typeof map];

    // BUTTON
    case "buttonSize":
      map = getStyleMapFromGroup("button", styleKey);
      return map[styleValue as keyof typeof map];
    case "buttonWidth":
      map = getStyleMapFromGroup("button", styleKey);
      return map[styleValue as keyof typeof map];
    case "buttonHeight":
      map = getStyleMapFromGroup("button", styleKey);
      return map[styleValue as keyof typeof map];
    case "buttonVariant":
      map = getStyleMapFromGroup("button", styleKey);
      return map[styleValue as keyof typeof map];

    // BACKGROUND
    case "bgColor":
      map = getStyleMapFromGroup("background", styleKey);
      return map[styleValue as keyof typeof map];
    case "bgOpacity":
      map = getStyleMapFromGroup("background", styleKey);
      return map[styleValue as keyof typeof map];

    // OTHER
    case "cursor":
      map = getStyleMapFromGroup("other", styleKey);
      return map[styleValue as keyof typeof map];
    case "opacity":
      map = getStyleMapFromGroup("other", styleKey);
      return map[styleValue as keyof typeof map];

    // CLASSNAME
    case "className":
      return styleValue === "none" ? "" : styleValue;
  }
};
