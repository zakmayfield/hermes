"use client";
import { useClassNameResolver } from "@/ui";
import { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps) => {
  const { children, handleClick, options, style } = props;

  const classes = useClassNameResolver({
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
