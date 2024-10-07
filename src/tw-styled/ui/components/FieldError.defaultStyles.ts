import { PartialStyleProp } from "@/tw-styled/types";
import { FieldErrorProps } from "./FieldError";

export const defaultStyles = (style?: PartialStyleProp) => {
  return {
    parentWrapper: {
      ...style?.parentWrapper
    }
  } satisfies FieldErrorProps["style"];
};
