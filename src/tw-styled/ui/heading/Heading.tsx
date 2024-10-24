import { Children, HeadingElements, BaseStyles } from "@/tw-styled/types";
import { useStyleToClass } from "@/tw-styled/tools";
import React from "react";

export type HeadingProps = {
  children?: Children;
  as?: HeadingElements;
  text?: string;
  style?: {
    parentWrapper?: BaseStyles;
    heading?: BaseStyles;
    childrenWrapper?: BaseStyles;
  };
};

export const Heading = (props: HeadingProps) => {
  const { style, as = "h1", text = "", children } = props;

  const styles = {
    parentWrapper: {
      ...style?.parentWrapper
    },
    heading: {
      ...style?.heading
    },
    childrenWrapper: {
      ...style?.childrenWrapper
    }
  } satisfies HeadingProps["style"];

  const classes = useStyleToClass(styles);

  const childrenWrapperClasses = classes.get("childrenWrapper");
  const headingClasses = classes.get("heading");
  const parentWrapperClasses = classes.get("parentWrapper");

  const ChildrenWrapper = React.useMemo(() => {
    return <div className={childrenWrapperClasses}>{children}</div>;
  }, [children, childrenWrapperClasses]);

  const HeadingElement = React.useMemo(() => {
    return React.createElement(as, { className: headingClasses }, text);
  }, [as, text, headingClasses]);

  return (
    <div className={parentWrapperClasses}>
      {HeadingElement}
      {ChildrenWrapper}
    </div>
  );
};
