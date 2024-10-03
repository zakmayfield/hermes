"use client";
import React from "react";
import { Children, StyleProps, WrapperElements } from "@/tw-styled/types";
import { styleHooks, useStyleResolver } from "@/tw-styled";
import { uiHooks } from "../hooks";

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
  const { style, ...rest } = props;

  const styles = styleHooks.useWrapperStyles({ style });
  const classes = useStyleResolver({ ...styles });
  const ui = uiHooks.useWrapperUi({ ...rest, classes });

  const Wrapper = ui.Wrapper;

  return <Wrapper />;
};
