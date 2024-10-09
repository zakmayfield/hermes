"use client";
import React from "react";
import { Children, BaseStyleProps, WrapperElements } from "@/tw-styled/types";
import { useStyleResolver } from "@/tw-styled/tools";
import { defaultStyles } from "./Wrapper.defaultStyles";
import { useWrapperUi } from "./Wrapper.ui";

export type WrapperProps = {
  children?: Children;
  as?: WrapperElements;
  style?: {
    parentWrapper?: BaseStyleProps;
    childrenWrapper?: BaseStyleProps;
    children?: BaseStyleProps;
  };
};

export const Wrapper = (props: WrapperProps) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const ui = useWrapperUi({ ...rest, classes });

  const Wrapper = ui.Wrapper;

  return <Wrapper />;
};
