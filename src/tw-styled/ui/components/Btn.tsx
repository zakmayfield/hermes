"use client";
import { IconType } from "react-icons";
import { DefaultStyleProps, IButton } from "@/tw-styled/types";
import { uiHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";
import { defaultStyles } from "./Btn.defaultStyles";

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
  const { style, initialButtonProps, ...rest } = props;
  const classes = useStyleResolver({ ...defaultStyles(style, initialButtonProps) });

  const { Btn } = uiHooks.useBtnUi({ classes, ...rest });

  return <Btn />;
};
