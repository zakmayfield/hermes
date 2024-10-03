import React from "react";
import { Children, HeadingElements, StyleProps } from "@/tw-styled/types";
import { useStyleResolver, styleHooks } from "@/tw-styled";
import { uiHooks } from "../hooks";

export type HeadingProps = {
  children?: Children;
  as?: HeadingElements;
  text?: string;
  style?: {
    parentWrapper?: StyleProps;
    heading?: StyleProps;
    childrenWrapper?: StyleProps;
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
