"use client";
import React from "react";
import { useClassNames } from "@/tw-styled";
import { styleHooks, useStyles } from "@/tw-styled/hooks";
import { Children, IStyles, WrapperElements } from "@/tw-styled/Styles";

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

  // const styles = useStyles({
  //   key: "wrapper",
  //   style
  // });
  const x = styleHooks.useWrapperStyles({ ...style });
  const classes = useClassNames({ ...x });

  const ChildrenWrapper = <div className={classes.childrenWrapper}>{children}</div>;
  return React.createElement(as, { className: classes.parentWrapper }, ChildrenWrapper);
};
