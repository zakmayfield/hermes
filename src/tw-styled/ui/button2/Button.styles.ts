import { StyleToClassProps } from "@/tw-styled/types";
import { ButtonProps } from "./Button";
import React from "react";

type UseButtonStyleProps = Pick<ButtonProps, "style" | "options">;

export const useButtonStyles = (props: UseButtonStyleProps) => {
  const { style, options } = props;

  const defaultStyles = React.useMemo(() => {
    return {
      button: {
        buttonVariant: options?.variant,
        buttonSize: options?.size
      },
      text: {}
    } satisfies StyleToClassProps;
  }, [options]);

  const compiledStyles = React.useMemo(() => {
    return {
      button: {
        ...defaultStyles.button,
        ...style?.button
      },
      text: {
        ...defaultStyles.text,
        ...style?.text
      }
    } satisfies StyleToClassProps;
  }, [style, defaultStyles]);

  return compiledStyles;
};
