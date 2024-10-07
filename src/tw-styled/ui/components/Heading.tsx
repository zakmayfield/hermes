import React from "react";
import { Children, DefaultStyleProps, HeadingElements } from "@/tw-styled/types";
import { uiHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";
import { defaultStyles } from "./Heading.defaultStyles";

export type HeadingProps = {
  children?: Children;
  as?: HeadingElements;
  text?: string;
  style?: {
    parentWrapper?: DefaultStyleProps;
    heading?: DefaultStyleProps;
    childrenWrapper?: DefaultStyleProps;
  };
};

export const Heading = (props: HeadingProps) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const ui = uiHooks.useHeadingUi({ ...rest, classes });

  const Heading = ui.Heading;

  return <Heading />;
};
