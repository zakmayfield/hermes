import { UiClassesProp } from "@/tw-styled/types";
import { WrapperProps } from "./Wrapper";
import React from "react";

export const useWrapperUi = (props: UiClassesProp<WrapperProps>) => {
  const { as = "div", children, classes } = props;

  const childrenWrapperClasses = classes.get("childrenWrapper");
  const parentWrapperClasses = classes.get("parentWrapper");

  const ChildrenWrapper = React.useMemo(() => {
    return <div className={childrenWrapperClasses}>{children}</div>;
  }, [children, childrenWrapperClasses]);

  const Wrapper = React.useMemo(() => {
    return React.createElement(as, { className: parentWrapperClasses }, ChildrenWrapper);
  }, [as, ChildrenWrapper, parentWrapperClasses]);

  return Wrapper;
};
