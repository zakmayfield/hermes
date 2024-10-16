"use client";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BaseStyles, Children, WrapperElements } from "@/tw-styled/types";
import React from "react";

type BoxProps = {
  children?: Children;
  as?: WrapperElements;
  style?: {
    wrapper?: BaseStyles;
  };
};

// TODO: *** Replace `Wrapper` component with `Box` ***
export const Box = (props: BoxProps) => {
  const { as = "div", style, children } = props;

  const styles = {
    wrapper: { ...style?.wrapper }
  } satisfies BoxProps["style"];

  const classes = useStyleToClass(styles);

  const Box = React.useMemo(() => {
    return React.createElement(as, { className: classes.get("wrapper") }, children);
  }, [as, classes, children]);

  return Box;
};
