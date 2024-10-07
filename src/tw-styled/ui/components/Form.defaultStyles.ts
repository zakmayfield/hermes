import { PartialStyleProp } from "@/tw-styled/types";
import { FormProps } from "./Form";

export const defaultStyles = (style?: PartialStyleProp) => {
  return {
    formStyles: {
      border: "sm",
      rounded: "md",
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
      flex: "col",
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
