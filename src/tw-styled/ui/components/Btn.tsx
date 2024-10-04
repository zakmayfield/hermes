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
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: BtnVariants;
  mouseActions?: {
    onMouseEnter?(): void;
    onMouseLeave?(): void;
  };
  style?: {
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
        isLoading: rest.isLoading,
        isDisabled: rest.isDisabled
      },
      btn: {
        variant: rest.variant || "ghost"
      }
    }
  });
  const classes = useStyleResolver({ ...styles });
  const { Btn } = uiHooks.useBtnUi({ classes, ...rest });

  return <Btn />;
};
