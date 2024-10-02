import React, { isValidElement, useMemo } from "react";
import { WrapperProps } from "@/tw-styled/components";
import { ResolvedClasses } from "@/tw-styled/types";

export const hooks = {
  useWrapperUi: (props: {
    as: WrapperProps["as"];
    children: WrapperProps["children"];
    classes: ResolvedClasses;
  }) => {
    const { as = "div", children, classes } = props;

    const ParentWrapper = useMemo(() => {
      const parent = (props: React.ComponentProps<typeof as>) => {
        const { children, className } = props;
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

  useHeadingUi: () => {
    return { x: "123" };
  }
};
