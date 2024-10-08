import { UiProps } from "@/tw-styled/types";
import { LayoutProps } from "./Layout";
import React from "react";

export const useLayoutUi = (props: UiProps<LayoutProps>) => {
  const { children, classes, headingAs = "h1", title, headingChildren } = props;

  const {
    parentWrapper: parentWrapperClasses,
    headingWrapper: headingWrapperClasses,
    heading: headingClasses,
    headingChildren: headingChildrenClasses,
    childrenWrapper: childrenWrapperClasses,
    children: childrenClasses
  } = classes;

  const getChilds = () =>
    React.useMemo(() => {
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

  const getChildrenWrapper = () => (
    <div className={childrenWrapperClasses}>{getChilds()}</div>
  );

  const getHeadingChilds = () =>
    React.useMemo(() => {
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

  const getHeadingElement = () =>
    React.useMemo(() => {
      return React.createElement(headingAs, { className: headingClasses }, title);
    }, [headingAs, title, headingClasses]);

  const getHeadingWrapper = () => (
    <div className={headingWrapperClasses}>
      {getHeadingElement()} {getHeadingChilds()}
    </div>
  );

  const getLayout = () => {
    return (
      <div className={parentWrapperClasses}>
        {getHeadingWrapper()} {getChildrenWrapper()}
      </div>
    );
  };

  const Layout = () => getLayout();
  return { Layout };
};
