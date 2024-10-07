"use client";
import React from "react";
import { Children, DefaultStyleProps, WrapperElements } from "@/tw-styled/types";
import { uiHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";
import { defaultStyles } from "./Wrapper.defaultStyles";

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

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const ui = uiHooks.useWrapperUi({ ...rest, classes });

  const Wrapper = ui.Wrapper;

  return <Wrapper />;
};
