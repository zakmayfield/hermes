"use client";
import { IconType } from "react-icons";
import { BtnVariants, ButtonStyleProps, DefaultStyleProps } from "@/tw-styled/types";
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
    buttonStyles?: ButtonStyleProps;
    contentWrapperStyles?: DefaultStyleProps;
    textStyles?: DefaultStyleProps;
    iconStyles?: DefaultStyleProps;
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
