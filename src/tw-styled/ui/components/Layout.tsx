"use client";
import React from "react";
import { styleHooks, useStyleResolver } from "@/tw-styled";
import { Children, HeadingElements, StyleProps } from "@/tw-styled/types";
import { uiHooks } from "../hooks";

export type LayoutProps = {
  children?: Children;
  title?: string;
  headingAs?: HeadingElements;
  headingChildren?: Children;
  style?: {
    parentWrapper?: StyleProps;
    headingWrapper?: StyleProps;
    heading?: StyleProps;
    headingChildren?: StyleProps;
    childrenWrapper?: StyleProps;
    children?: StyleProps;
  };
};

export const Layout = (props: LayoutProps) => {
  const { style, ...rest } = props;

  const styles = styleHooks.useLayoutStyles({ style });
  const classes = useStyleResolver({ ...styles });
  const { Layout } = uiHooks.useLayoutUi({ classes, ...rest });

  return <Layout />;
};
