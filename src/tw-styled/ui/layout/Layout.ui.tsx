import { UiClassesProp } from "@/tw-styled/types";
import { LayoutProps } from "./Layout";
import React from "react";

export const useLayoutUi = (props: UiClassesProp<LayoutProps>) => {
  const { children, classes, headingAs = "h1", title, headingChildren } = props;

  const parentWrapperClasses = classes.get("parentWrapper");
  const headingWrapperClasses = classes.get("headingWrapper");
  const headingClasses = classes.get("heading");
  const headingChildrenClasses = classes.get("headingChildren");
  const childrenWrapperClasses = classes.get("childrenWrapper");
  const childrenClasses = classes.get("children");

  const Children = React.useMemo(() => {
    const childs = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.createElement(
          child.type,
          { ...child.props, key: child.key, className: childrenClasses },
          child.props.children
        );
      } else {
        return <div className={childrenClasses}>{child}</div>;
      }
    });

    return childs;
  }, [children, childrenClasses]);

  const ChildrenWrapper = <div className={childrenWrapperClasses}>{Children}</div>;

  const HeadingChildren = React.useMemo(() => {
    return React.Children.map(headingChildren, (child) => {
      if (React.isValidElement(child)) {
        return React.createElement(
          child.type,
          { ...child.props, key: child.key, className: headingChildrenClasses },
          child.props.children
        );
      } else {
        return <div className={headingChildrenClasses}>{child}</div>;
      }
    });
  }, [headingChildren, headingChildrenClasses]);

  const HeadingElement = React.useMemo(() => {
    return React.createElement(headingAs, { className: headingClasses }, title);
  }, [headingAs, title, headingClasses]);

  const HeadingWrapper = (
    <div className={headingWrapperClasses}>
      {HeadingElement} {HeadingChildren}
    </div>
  );

  const Layout = (
    <div className={parentWrapperClasses}>
      {HeadingWrapper} {ChildrenWrapper}
    </div>
  );

  return Layout;
};
