import { UiClassesProp } from "@/tw-styled/types";
import { LayoutProps } from "./Layout";
import React from "react";

export const useLayoutUi = (props: UiClassesProp<LayoutProps>) => {
  const { classes, options, children } = props;

  const { as = "div", titleAs = "h1", titleText } = options || {};

  const parentWrapperClasses = classes.get("parentWrapper");
  const titleWrapperClasses = classes.get("titleWrapper");
  const titleClasses = classes.get("title");
  const childrenWrapperClasses = classes.get("childrenWrapper");
  const childrenClasses = classes.get("children");

  const Title = React.useMemo(() => {
    return React.createElement(titleAs, { className: titleClasses }, titleText);
  }, [titleAs, titleClasses, titleText]);

  const TitleWrapper = React.useMemo(() => {
    return (
      titleText && (
        <div
          key={0}
          className={titleWrapperClasses}
        >
          {Title}
        </div>
      )
    );
  }, [titleWrapperClasses, titleText, Title]);

  const Children = React.useMemo(() => {
    return React.Children.map(children, (child) => {
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
  }, [children, childrenClasses]);

  const ChildrenWrapper = React.useMemo(() => {
    return (
      <div
        key={1}
        className={childrenWrapperClasses}
      >
        {Children}
      </div>
    );
  }, [childrenWrapperClasses, Children]);

  const Layout = React.useMemo(() => {
    return React.createElement(as, { className: parentWrapperClasses }, [
      TitleWrapper,
      ChildrenWrapper
    ]);
  }, [as, parentWrapperClasses, TitleWrapper, ChildrenWrapper]);

  return Layout;
};
