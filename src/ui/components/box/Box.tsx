"use client";
import React from "react";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BoxProps } from "./Box.types";

export const Box = (props: BoxProps) => {
  const { as = "div", style, children } = props;

  const classes = useStyleToClass({
    wrapper: { ...style }
  });

  const Box = React.useMemo(() => {
    return React.createElement(as, { className: classes.get("wrapper") }, children);
  }, [as, classes, children]);

  return Box;
};
