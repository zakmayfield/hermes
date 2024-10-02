"use client";
import React from "react";
import { Children, StyleProps, WrapperElements } from "@/tw-styled/types";
import { useStyleResolver, useStyles } from "@/tw-styled";
import { hooks } from "../hooks";

export type WrapperProps = {
  children?: Children;
  as?: WrapperElements;
  style?: {
    parentWrapper?: StyleProps;
    childrenWrapper?: StyleProps;
    children?: StyleProps;
  };
};

export const Wrapper = (props: WrapperProps) => {
  const { as = "div", children, style } = props;

  const styles = useStyles({
    key: "wrapper",
    style
  });

  const classes = useStyleResolver({ ...styles });

  const ui = hooks.useWrapperUi({
    as,
    children,
    classes
  });

  const Wrapper = ui.ParentWrapper;
  const ChildrenWrapper = ui.ChildrenWrapper;

  return <Wrapper>{ChildrenWrapper}</Wrapper>;
};
