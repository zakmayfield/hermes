"use client";
import React from "react";
import { Children, DefaultStyleProps, WrapperElements } from "@/tw-styled/types";
import { styleHooks, uiHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";

export type WrapperProps = {
  children?: Children;
  as?: WrapperElements;
  style?: {
    parentWrapper?: DefaultStyleProps;
    childrenWrapper?: DefaultStyleProps;
    children?: DefaultStyleProps;
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
