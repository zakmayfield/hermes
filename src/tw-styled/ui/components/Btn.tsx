"use client";
import { IconType } from "react-icons";
import { BtnVariants, StyleProps } from "@/tw-styled/types";
import { styleHooks, uiHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";

export type BtnProps = {
  Icon?: IconType;
  type?: "button" | "reset" | "submit";
  text?: string;
  handleClick?(): void;
  isDisabled?: boolean;
  variant?: BtnVariants;
  mouseActions?: {
    onMouseEnter?(): void;
    onMouseLeave?(): void;
  };
  style?: {
    // Remove `buttonX` styles from general StyleProps and use `StyleProps & IButton`
    // this will allow the Btn componenent to take a `width` prop which maps the style
    // this will also remove the ability to select `buttonWidth` from elements like a `div`
    // or other elements that are not buttons, like textStyles for instance.
    // this same logic can be applied to all style props, allowing for granular control
    // over which styles are availble to use on the element.
    buttonStyles?: StyleProps;
    contentWrapperStyles?: StyleProps;
    textStyles?: StyleProps;
    iconStyles?: StyleProps;
  };
};

export const Btn = (props: BtnProps) => {
  const { style, ...rest } = props;

  const styles = styleHooks.useBtnStyles({
    style,
    options: {
      state: {
        isDisabled: rest.isDisabled
      },
      btn: {
        variant: rest.variant
      }
    }
  });
  const classes = useStyleResolver({ ...styles });
  const { Btn } = uiHooks.useBtnUi({ classes, ...rest });

  return <Btn />;
};
