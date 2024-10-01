import { ComponentStyleProp, StylePropKeys } from "@/tw-styled/types";
import { merge } from "@/tw-styled";
import { isValidObject, typeNarrowHandler } from "@/tw-styled/style-resolver/utils";

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
