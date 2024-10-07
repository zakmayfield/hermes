"use client";
import { IconType } from "react-icons";
import { DefaultStyleProps, IButton } from "@/tw-styled/types";
import { styleHooks, uiHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";

export type BtnProps = {
  handleClick?(): void;
  Icon?: IconType;
  type?: "button" | "reset" | "submit";
  text?: string;
  isDisabled?: boolean;
  mouseActions?: {
    onMouseEnter?(): void;
    onMouseLeave?(): void;
  };
  initialButtonProps?: {
    variant?: IButton["buttonVariant"];
    width?: IButton["buttonWidth"];
    height?: IButton["buttonHeight"];
    size?: IButton["buttonSize"];
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
  const { isDisabled, initialButtonProps } = rest;

  const styles = styleHooks.useBtnStyles({
    style,
    options: {
      state: {
        isDisabled
      },
      btn: { ...initialButtonProps }
    }
  });
  const classes = useStyleResolver({ ...styles });
  const { Btn } = uiHooks.useBtnUi({ classes, ...rest });

  return <Btn />;
};
