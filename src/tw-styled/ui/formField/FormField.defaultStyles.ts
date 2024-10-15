import { StyleToClassProps } from "@/tw-styled/types";
import { FormFieldProps } from "./FormField";

export const defaultStyles = (style?: StyleToClassProps) => {
  return {
    parentWrapper: {
      display: "flex-col",
      gap: "sm",
      ...style?.parentWrapper
    },
    label: {
      ...style?.label
    },
    input: {
      flexSize: "grow",
      ...style?.input
    },
    fieldError: {
      className: "italic text-red-300",
      ...style?.fieldError
    },
    labelInputWrapper: {
      display: "flex-col",
      gap: "sm",
      ...style?.labelInputWrapper
    },
    errorIcon: {
      position: "absolute",
      fontSize: "lg",
      className: "text-red-500 right-2 h-full",
      ...style?.errorIcon
    },
    errorInputWrapper: {
      display: "flex-row",
      width: "full",
      position: "relative",
      ...style?.errorInputWrapper
    }
  } satisfies FormFieldProps<any>["style"];
};
