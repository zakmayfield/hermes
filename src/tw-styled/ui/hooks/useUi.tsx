import React, { isValidElement, useMemo } from "react";
import { WrapperProps, HeadingProps, LayoutProps } from "@/tw-styled/ui";
import { ResolvedClasses } from "@/tw-styled/types";

type Props<T> = { classes: ResolvedClasses } & Omit<T, "style">;

export const uiHooks = {
  useWrapperUi: (props: Props<WrapperProps>) => {
    const { as = "div", children, classes } = props;

    const getChilds = () =>
      useMemo(() => {
        const childs = React.Children.map(children, (child) => {
          if (isValidElement(child)) {
            return React.createElement(
              child.type,
              {
                ...child.props,
                key: child.key,
                className: classes.children
              },
              child.props.children
            );
          } else {
            return <div className={classes.children}>{children}</div>;
          }
        });

        return childs;
      }, [children, classes]);

    const getChildsWrapper = () => (
      <div className={classes.childrenWrapper}>{getChilds()}</div>
    );

    const getWrapper = () =>
      useMemo(() => {
        return React.createElement(
          as,
          { className: classes.parentWrapper },
          getChildsWrapper()
        );
      }, [as, classes]);

    const Wrapper = () => getWrapper();

    return { Wrapper };
  },

  useHeadingUi: (props: Props<HeadingProps>) => {
    const { as = "h1", text = "", children, classes } = props;

    // TODO: *** when updating styles via the style prop there is a runtime error stating that either more or fewer hooks were rendered ***

    const ChildrenWrapper = useMemo(() => {
      return <div className={classes.childrenWrapper}>{children}</div>;
    }, [children, classes]);

    const HeadingElement = useMemo(() => {
      return React.createElement(as, { className: classes.heading }, text);
    }, [as, text, classes]);

    const Heading = () => (
      <div className={classes.parentWrapper}>
        {HeadingElement}
        {ChildrenWrapper}
      </div>
    );

    return {
      Heading
    };
  },

  useLayoutUi: (props: Props<LayoutProps>) => {
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
      useMemo(() => {
        const childs = React.Children.map(children, (child) => {
          if (isValidElement(child)) {
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
      useMemo(() => {
        return React.Children.map(headingChildren, (child) => {
          if (isValidElement(child)) {
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
      useMemo(() => {
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
  }
};
