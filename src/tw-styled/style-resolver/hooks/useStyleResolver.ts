import { PartialStyleProps, StylePropKeys } from "@/tw-styled/types";
import { isValidObject } from "../utils";
import { mergeClasses } from "@/tw-styled/tools";
import { useTypeNarrower } from "./useTypeNarrower";

export const useStyleResolver = (styleProp: PartialStyleProps) => {
  const { handleTypeNarrow } = useTypeNarrower();
  const result: Record<string, string> = {};

  for (const stylePropKey in styleProp) {
    if (isValidObject(styleProp, stylePropKey)) {
      result[stylePropKey] = mergeClasses(
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
