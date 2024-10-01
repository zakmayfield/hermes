"use client";
import React from "react";
import {
  Children,
  HeadingElements,
  StyleProps,
  TextElements,
  WrapperElements
} from "@/tw-styled/types";
import { useClassNameResolver, useStyles } from "@/tw-styled";

export type WrapperProps = {
  children?: Children;
  as?: WrapperElements | TextElements | HeadingElements;
  style?: {
    parentWrapper?: StyleProps;
    childrenWrapper?: StyleProps;
  };
};

export const Wrapper = (props: WrapperProps) => {
  const { as = "div", children, style } = props;

  const styles = useStyles({
    key: "wrapper",
    style
  });

  const classes = useClassNameResolver({ ...styles });

  const ChildrenWrapper = <div className={classes.childrenWrapper}>{children}</div>;
  return React.createElement(as, { className: classes.parentWrapper }, ChildrenWrapper);
};
