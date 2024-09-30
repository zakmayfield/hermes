import React from "react";
import { styleHooks, useClassNames } from "@/tw-styled/hooks";
import { IStyles } from "@/tw-styled/Styles";
import { Children, HeadingElements } from "@/tw-styled/types";

export type HeadingProps = {
  as?: HeadingElements;
  children?: Children;
  style?: {
    parentWrapper?: IStyles;
    childrenWrapper?: IStyles;
  };
};

export const Heading = (props: HeadingProps) => {
  const { as = "h1", children, style } = props;

  const styles = styleHooks.useHeadingStyles({
    ...style
  });
  const classes = useClassNames(styles);

  const ChildrenWrapper = <div className={classes.childrenWrapper}>{children}</div>;
  return React.createElement(as, { className: classes.parentWrapper }, ChildrenWrapper);
};
