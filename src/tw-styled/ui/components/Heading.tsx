import React from "react";
import { Children, DefaultStyleProps, HeadingElements } from "@/tw-styled/types";
import { uiHooks, styleHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";

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

  const styles = styleHooks.useHeadingStyles({ style });
  const classes = useStyleResolver({ ...styles });
  const ui = uiHooks.useHeadingUi({ ...rest, classes });

  const Heading = ui.Heading;

  return <Heading />;
};
