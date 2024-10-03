import { ComponentStyleProp, StylePropKeys } from "@/tw-styled/types";
import { isValidObject, typeNarrowHandler } from "../utils";
import { merge } from "@/tw-styled/tools";

export const useStyleResolver = (styleProp: ComponentStyleProp) => {
  const result: Record<string, string> = {};

  for (const stylePropKey in styleProp) {
    if (isValidObject(styleProp, stylePropKey)) {
      result[stylePropKey] = merge(
        Object.keys(styleProp[stylePropKey])
          .map((key) => {
            const styleKey = key as StylePropKeys;
            const styleValue = styleProp[stylePropKey][styleKey] || "none";
            return typeNarrowHandler(styleKey, styleValue);
          })
          .join(" ")
      );
    }
  }

  return result;
};
