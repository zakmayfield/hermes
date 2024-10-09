import { PartialStyleProp, StylePropKeys } from "@/tw-styled/types";
import { isValidObject } from "../utils";
import { merge } from "@/tw-styled/tools";
import { useTypeNarrower } from "./useTypeNarrower";

export const useStyleResolver = (styleProp: PartialStyleProp) => {
  const { handleTypeNarrow } = useTypeNarrower();
  const result: Record<string, string> = {};

  for (const stylePropKey in styleProp) {
    if (isValidObject(styleProp, stylePropKey)) {
      result[stylePropKey] = merge(
        Object.keys(styleProp[stylePropKey])
          .map((key) => {
            const styleKey = key as StylePropKeys;
            const styleValue = styleProp[stylePropKey][styleKey] || "none";
            return handleTypeNarrow(styleKey, styleValue);
          })
          .join(" ")
      );
    }
  }

  return result;
};
