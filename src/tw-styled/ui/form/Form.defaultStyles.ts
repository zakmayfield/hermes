import { StyleToClassProps } from "@/tw-styled/types";
import { FormProps } from "./Form";

export const defaultStyles = (style?: StyleToClassProps) => {
  return {
    formStyles: {
      borderRadius: "lg",
      width: "md",
      spaceY: "lg",
      paddingX: "lg",
      paddingY: "2xl",
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
