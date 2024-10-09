import { useCallback } from "react";
import { useStyleMaps } from "./useStyleMaps";
import { StylePropKeys } from "@/tw-styled/types";
import { StyleGroups } from "../utils";

export const useTypeNarrower = () => {
  const { handleMapValue } = useStyleMaps();

  const handleTypeNarrow = useCallback(
    (styleKey: StylePropKeys, styleValue: string) => {
      const payload = {
        styleKey,
        styleValue
      };

      switch (styleKey) {
        // DIMENSIONS
        case "width":
        case "height":
        case "maxHeight":
          return handleMapValue({ group: StyleGroups.DIMENSIONS, ...payload });

        // LAYOUT
        case "border":
        case "rounded":
        case "display":
        case "position":
        case "place":
          return handleMapValue({ group: StyleGroups.LAYOUT, ...payload });

        // SPACE
        case "space":
        case "spaceX":
        case "spaceY":
          return handleMapValue({ group: StyleGroups.SPACE, ...payload });

        // PADDING
        case "padding":
        case "paddingX":
        case "paddingY":
        case "paddingTop":
        case "paddingBottom":
        case "paddingLeft":
        case "paddingRight":
          return handleMapValue({ group: StyleGroups.PADDING, ...payload });

        // MARGIN
        case "margin":
        case "marginX":
        case "marginY":
        case "marginTop":
        case "marginBottom":
        case "marginLeft":
        case "marginRight":
          return handleMapValue({ group: StyleGroups.MARGIN, ...payload });

        // ALIGNMENT
        case "flex":
        case "flexSpacing":
        case "flexWrap":
        case "flexSize":
        case "gap":
        case "flexRowPosition":
        case "flexColPosition":
          return handleMapValue({ group: StyleGroups.ALIGNMENT, ...payload });

        // TYPOGRAPHY
        case "fontSize":
        case "fontWeight":
        case "textColor":
        case "textOpacity":
        case "textDecoration":
        case "textAlign":
        case "lineHeight":
        case "letterSpacing":
          return handleMapValue({ group: StyleGroups.TYPOGRAPHY, ...payload });

        // ANIMATION
        case "animate":
          return handleMapValue({ group: StyleGroups.ANIMATION, ...payload });

        // BUTTON
        case "buttonSize":
        case "buttonWidth":
        case "buttonHeight":
        case "buttonVariant":
          return handleMapValue({ group: StyleGroups.BUTTON, ...payload });

        // BACKGROUND
        case "bgColor":
        case "bgOpacity":
          return handleMapValue({ group: StyleGroups.BACKGROUND, ...payload });

        // OTHER
        case "cursor":
        case "opacity":
          return handleMapValue({ group: StyleGroups.OTHER, ...payload });

        // CLASSNAME
        case "className":
          return styleValue === "none" ? "" : styleValue;
      }
    },
    [handleMapValue]
  );

  return { handleTypeNarrow };
};
