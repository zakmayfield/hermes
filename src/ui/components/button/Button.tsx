"use client";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps) => {
  const { children, handleClick, options, style } = props;

  const classes = useStyleToClass({
    button: { buttonVariant: options?.variant, ...style }
  });

  return (
    <button
      onClick={handleClick}
      type={options?.type || "button"}
      disabled={options?.isDisabled}
      aria-disabled={options?.isDisabled}
      className={classes.get("button")}
    >
      {children}
    </button>
  );
};
