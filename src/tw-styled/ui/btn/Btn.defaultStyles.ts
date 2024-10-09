import { PartialStyleProps } from "@/tw-styled/types";
import { BtnProps } from "./Btn";

export const defaultStyles = (
  style?: PartialStyleProps,
  options?: BtnProps["options"]
) => {
  return {
    buttonStyles: {
      padding: "sm",
      paddingX: "md",
      rounded: "md",
      buttonWidth: options?.width || "none",
      buttonHeight: options?.height || "none",
      buttonSize: options?.size || "none",
      buttonVariant: options?.variant || "ghost",
      ...style?.buttonStyles
    },
    contentWrapperStyles: {
      flex: "row",
      flexRowPosition: "center-center",
      ...style?.contentWrapperStyles
    },
    textStyles: {
      ...style?.textStyles
    },
    iconStyles: {
      ...style?.iconStyles
    }
  } satisfies BtnProps["style"];
};
