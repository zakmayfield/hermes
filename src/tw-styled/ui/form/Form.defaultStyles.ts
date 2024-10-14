import { StyleToClassProps } from "@/tw-styled/types";
import { FormProps } from "./Form";

export const defaultStyles = (style?: StyleToClassProps) => {
  return {
    formStyles: {
      border: "sm",
      borderRadius: "md",
      width: "md",
      padding: "md",
      spaceY: "lg",
      paddingY: "lg",
      ...style?.formStyles
    },
    titleStyles: {
      ...style?.titleStyles
    },
    childrenWrapperStyles: {
      display: "flex-col",
      gap: "md",
      ...style?.childrenWrapperStyles
    },
    childrenStyles: {
      ...style?.childrenStyles
    },
    buttonStyles: {
      ...style?.buttonStyles
    }
  } satisfies FormProps["style"];
};
