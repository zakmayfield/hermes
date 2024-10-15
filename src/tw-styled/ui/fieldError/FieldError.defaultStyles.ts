import { StyleToClassProps } from "@/tw-styled/types";
import { FieldErrorProps } from "./FieldError";

export const defaultStyles = (style?: StyleToClassProps) => {
  return {
    parentWrapper: {
      ...style?.parentWrapper
    }
  } satisfies FieldErrorProps["style"];
};
