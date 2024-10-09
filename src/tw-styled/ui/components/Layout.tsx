"use client";
import React from "react";
import { Children, BaseStyleProps, HeadingElements } from "@/tw-styled/types";
import { useStyleResolver } from "@/tw-styled/tools";
import { defaultStyles } from "./Layout.defaultStyles";
import { useLayoutUi } from "./Layout.ui";

export type LayoutProps = {
  children?: Children;
  title?: string;
  headingAs?: HeadingElements;
  headingChildren?: Children;
  style?: {
    parentWrapper?: BaseStyleProps;
    headingWrapper?: BaseStyleProps;
    heading?: BaseStyleProps;
    headingChildren?: BaseStyleProps;
    childrenWrapper?: BaseStyleProps;
    children?: BaseStyleProps;
  };
};

export const Layout = (props: LayoutProps) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const Layout = useLayoutUi({ classes, ...rest });

  return Layout;
};
