import React from "react";
import { Children, BaseStyleProps, HeadingElements } from "@/tw-styled/types";
import { useStyleResolver } from "@/tw-styled/tools";
import { defaultStyles } from "./Heading.defaultStyles";
import { useHeadingUi } from "./Heading.ui";

export type HeadingProps = {
  children?: Children;
  as?: HeadingElements;
  text?: string;
  style?: {
    parentWrapper?: BaseStyleProps;
    heading?: BaseStyleProps;
    childrenWrapper?: BaseStyleProps;
  };
};

export const Heading = (props: HeadingProps) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const { Heading } = useHeadingUi({ ...rest, classes });

  return <Heading />;
};
