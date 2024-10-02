import React, { useMemo } from "react";
import { Children, HeadingElements, StyleProps } from "@/tw-styled/types";
import { useStyleResolver, useStyles } from "@/tw-styled";
import { hooks } from "../hooks";

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

  const styles = useStyles({ key: "heading", style });
  const classes = useStyleResolver({ ...styles });
  const ui = hooks.useHeadingUi({ ...rest, classes });

  const Heading = ui.Heading;

  return <Heading />;
};
