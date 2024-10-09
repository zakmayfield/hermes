"use client";
import { IconType } from "react-icons";
import { BaseStyleProps, IButton } from "@/tw-styled/types";
import { useStyleResolver } from "@/tw-styled/tools";
import { defaultStyles } from "./Btn.defaultStyles";
import { useBtnUi } from "./Btn.ui";

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
  options?: {
    variant?: IButton["buttonVariant"];
    width?: IButton["buttonWidth"];
    height?: IButton["buttonHeight"];
    size?: IButton["buttonSize"];
  };
  style?: {
    buttonStyles?: BaseStyleProps;
    contentWrapperStyles?: BaseStyleProps;
    textStyles?: BaseStyleProps;
    iconStyles?: BaseStyleProps;
  };
};

export const Btn = (props: BtnProps) => {
  const { style, options, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style, options) });
  const Btn = useBtnUi({ classes, ...rest });

  return Btn;
};
