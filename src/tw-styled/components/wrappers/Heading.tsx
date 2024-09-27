import React from "react";
import { styleHooks, useClassNames } from "@/tw-styled/hooks/";
import { Children, Headings, IStyles } from "@/tw-styled/Styles";

export type HeadingProps = {
  as?: Headings;
  children?: Children;
  style?: {
    wrapper?: IStyles;
    childrenWrapper?: IStyles;
  };
};

export const Heading = (props: HeadingProps) => {
  const { as = "h1", children, style } = props;

  const defaultStyles = styleHooks.useDefaultHeading();

  const styles: HeadingProps["style"] = {
    wrapper: {
      ...defaultStyles.wrapper,
      ...style?.wrapper
    },
    childrenWrapper: {
      ...defaultStyles.childrenWrapper,
      ...style?.childrenWrapper
    }
  };

  const classes = useClassNames({ ...styles });

  const ChildrenWrapper = <div className={classes.childrenWrapper}>{children}</div>;
  return React.createElement(as, { className: classes.wrapper }, ChildrenWrapper);
};
