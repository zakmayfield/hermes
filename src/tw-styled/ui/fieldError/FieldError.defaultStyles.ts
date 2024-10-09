import { PartialStyleProps } from "@/tw-styled/types";
import { FieldErrorProps } from "./FieldError";

export const defaultStyles = (style?: PartialStyleProps) => {
  return {
    parentWrapper: {
      ...style?.parentWrapper
    }
  } satisfies FieldErrorProps["style"];
};
