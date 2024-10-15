import { UiClassesProp } from "@/tw-styled/types";
import { HeadingProps } from "./Heading";
import React from "react";

export const useHeadingUi = (props: UiClassesProp<HeadingProps>) => {
  const { as = "h1", text = "", children, classes } = props;

  const childrenWrapperClasses = classes.get("childrenWrapper");
  const headingClasses = classes.get("heading");
  const parentWrapperClasses = classes.get("parentWrapper");

  const ChildrenWrapper = React.useMemo(() => {
    return <div className={childrenWrapperClasses}>{children}</div>;
  }, [children, childrenWrapperClasses]);

  const HeadingElement = React.useMemo(() => {
    return React.createElement(as, { className: headingClasses }, text);
  }, [as, text, headingClasses]);

  const Heading = (
    <div className={parentWrapperClasses}>
      {HeadingElement}
      {ChildrenWrapper}
    </div>
  );

  return Heading;
};
