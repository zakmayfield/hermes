import React, { isValidElement, useMemo, useRef } from "react";
import { WrapperProps } from "@/tw-styled/components";
import { ResolvedClasses } from "@/tw-styled/types";
import { HeadingProps } from "../components";

type BaseHookProps = {
  classes: ResolvedClasses;
};

export const hooks = {
  useWrapperUi: (props: BaseHookProps & Pick<WrapperProps, "as" | "children">) => {
    const { as = "div", children, classes } = props;

    const ParentWrapper = useMemo(() => {
      const parent = (props: React.ComponentProps<typeof as>) => {
        const { children } = props;
        return React.createElement(
          as,
          { ...props, className: classes.parentWrapper },
          children
        );
      };

      return parent;
    }, [as, classes]);

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
          }
        });

        return childs;
      }, [children, classes]);

    const ChildrenWrapper = <div className={classes.childrenWrapper}>{getChilds()}</div>;

    return { ParentWrapper, ChildrenWrapper };
  },

  useHeadingUi: (
    props: BaseHookProps & Pick<HeadingProps, "as" | "text" | "children">
  ) => {
    const { as = "h1", text = "", children, classes } = props;

    const ChildrenWrapper = useMemo(() => {
      return <div className={classes.childrenWrapper}>{children}</div>;
    }, []);

    const HeadingElement = useMemo(() => {
      return React.createElement(as, { className: classes.heading }, text);
    }, [as, text]);

    const Heading = () => (
      <div className={classes.parentWrapper}>
        {HeadingElement}
        {ChildrenWrapper}
      </div>
    );

    return {
      Heading
    };
  }
};
