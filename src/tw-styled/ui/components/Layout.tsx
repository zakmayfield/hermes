"use client";
import React from "react";
import { Children, DefaultStyleProps, HeadingElements } from "@/tw-styled/types";
import { useStyleResolver } from "@/tw-styled/tools";
import { styleHooks, uiHooks } from "../hooks";

export type LayoutProps = {
  children?: Children;
  title?: string;
  headingAs?: HeadingElements;
  headingChildren?: Children;
  style?: {
    parentWrapper?: DefaultStyleProps;
    headingWrapper?: DefaultStyleProps;
    heading?: DefaultStyleProps;
    headingChildren?: DefaultStyleProps;
    childrenWrapper?: DefaultStyleProps;
    children?: DefaultStyleProps;
  };
};

export const Layout = (props: LayoutProps) => {
  const { style, ...rest } = props;

  const styles = styleHooks.useLayoutStyles({ style });
  const classes = useStyleResolver({ ...styles });
  const { Layout } = uiHooks.useLayoutUi({ classes, ...rest });

  return <Layout />;
};
