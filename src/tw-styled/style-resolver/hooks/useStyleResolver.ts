import { PartialStyleProp, StylePropKeys } from "@/tw-styled/types";
import { isValidObject, useTypeNarrower } from "../utils";
import { merge } from "@/tw-styled/tools";

export const useStyleResolver = (styleProp: PartialStyleProp) => {
  const result: Record<string, string> = {};

  for (const stylePropKey in styleProp) {
    if (isValidObject(styleProp, stylePropKey)) {
      result[stylePropKey] = merge(
        Object.keys(styleProp[stylePropKey])
          .map((key) => {
            const styleKey = key as StylePropKeys;
            const styleValue = styleProp[stylePropKey][styleKey] || "none";
            return useTypeNarrower(styleKey, styleValue);
          })
          .join(" ")
      );
    }
  }

  return result;
};
