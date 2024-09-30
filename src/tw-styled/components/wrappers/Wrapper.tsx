"use client";
import React from "react";
import { styleHooks, useClassNames } from "@/tw-styled/hooks";
import { IStyles } from "@/tw-styled/Styles";
import { Children, WrapperElements } from "@/tw-styled/types";

export type WrapperProps = {
  as?: WrapperElements;
  children?: Children;
  style?: {
    parentWrapper?: IStyles;
    childrenWrapper?: IStyles;
  };
};

export const Wrapper = (props: WrapperProps) => {
  const { as = "div", children, style } = props;

  const styles = styleHooks.useWrapperStyles(style);
  const classes = useClassNames(styles);

  const ChildrenWrapper = <div className={classes.childrenWrapper}>{children}</div>;
  return React.createElement(as, { className: classes.parentWrapper }, ChildrenWrapper);
};
