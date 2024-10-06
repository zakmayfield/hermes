"use client";
import { IconType } from "react-icons";
import { BtnVariants, DefaultStyleProps, IButton } from "@/tw-styled/types";
import { styleHooks, uiHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";

export type BtnProps = {
  Icon?: IconType;
  type?: "button" | "reset" | "submit";
  text?: string;
  handleClick?(): void;
  isDisabled?: boolean;
  variant?: BtnVariants;
  buttonWidth?: IButton["buttonWidth"];
  buttonHeight?: IButton["buttonHeight"];
  buttonSize?: IButton["buttonSize"];
  mouseActions?: {
    onMouseEnter?(): void;
    onMouseLeave?(): void;
  };
  style?: {
    buttonStyles?: DefaultStyleProps;
    contentWrapperStyles?: DefaultStyleProps;
    textStyles?: DefaultStyleProps;
    iconStyles?: DefaultStyleProps;
  };
};

export const Btn = (props: BtnProps) => {
  const { style, ...rest } = props;
  const { isDisabled, variant, buttonWidth, buttonHeight, buttonSize } = rest;

  const styles = styleHooks.useBtnStyles({
    style,
    options: {
      state: {
        isDisabled
      },
      btn: {
        variant,
        buttonWidth,
        buttonHeight,
        buttonSize
      }
    }
  });
  const classes = useStyleResolver({ ...styles });
  const { Btn } = uiHooks.useBtnUi({ classes, ...rest });

  return <Btn />;
};
