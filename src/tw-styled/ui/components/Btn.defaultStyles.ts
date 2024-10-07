import { PartialStyleProp } from "@/tw-styled/types";
import { BtnProps } from "./Btn";

export const defaultStyles = (
  style?: PartialStyleProp,
  initialButtonProps?: BtnProps["initialButtonProps"]
) => {
  return {
    buttonStyles: {
      padding: "sm",
      paddingX: "md",
      rounded: "md",
      buttonWidth: initialButtonProps?.width || "none",
      buttonHeight: initialButtonProps?.height || "none",
      buttonSize: initialButtonProps?.size || "none",
      buttonVariant: initialButtonProps?.variant || "ghost",
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
