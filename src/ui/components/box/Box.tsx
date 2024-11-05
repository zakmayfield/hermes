"use client";
import React from "react";
import { useClassNameResolver } from "@/ui";
import { BoxProps } from "./Box.types";

export const Box = (props: BoxProps) => {
  const { as = "div", style, children } = props;

  const classes = useClassNameResolver({
    wrapper: { ...style }
  });

  const Box = React.useMemo(() => {
    return React.createElement(as, { className: classes.get("wrapper") }, children);
  }, [as, classes, children]);

  return Box;
};
