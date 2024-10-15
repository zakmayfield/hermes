import { UiClassesProp } from "@/tw-styled/types";
import { WrapperProps } from "./Wrapper";
import React from "react";

export const useWrapperUi = (props: UiClassesProp<WrapperProps>) => {
  const { as = "div", children, classes } = props;

  const childrenClasses = classes.get("children");
  const childrenWrapperClasses = classes.get("childrenWrapper");
  const parentWrapperClasses = classes.get("parentWrapper");

  const Children = React.useMemo(() => {
    const childs = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.createElement(
          child.type,
          {
            ...child.props,
            key: child.key,
            className: childrenClasses
          },
          child.props.children
        );
      } else {
        return <div className={childrenClasses}>{children}</div>;
      }
    });

    return childs;
  }, [children, childrenClasses]);

  const ChildrenWrapper = React.useMemo(() => {
    return <div className={childrenWrapperClasses}>{Children}</div>;
  }, [Children, childrenWrapperClasses]);

  const Wrapper = React.useMemo(() => {
    return React.createElement(as, { className: parentWrapperClasses }, ChildrenWrapper);
  }, [as, ChildrenWrapper, parentWrapperClasses]);

  return Wrapper;
};
