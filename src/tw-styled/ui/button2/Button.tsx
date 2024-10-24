"use client";

import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BaseStyles, FullStyles } from "@/tw-styled/types";
import { useButtonUi } from "./Button.ui";
import { useButtonStyles } from "./Button.styles";

export type ButtonProps = {
  options?: {
    type?: "button" | "reset" | "submit";
    isDisabled?: boolean;
    variant?: FullStyles["buttonVariant"];
    size?: FullStyles["buttonSize"];
  };
  style?: {
    button?: BaseStyles;
    text?: BaseStyles;
  };
  text?: string;
  handleClick?: () => void;
};

export const Button2 = (props: ButtonProps) => {
  const { style, options, ...rest } = props;

  const styles = useButtonStyles({ style, options });
  const classes = useStyleToClass(styles);
  const Button = useButtonUi({ classes, options, ...rest });

  return Button;
};
