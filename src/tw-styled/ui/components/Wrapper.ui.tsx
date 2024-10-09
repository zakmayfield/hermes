import { UiProps } from "@/tw-styled/types";
import { WrapperProps } from "./Wrapper";
import React from "react";

export const useWrapperUi = (props: UiProps<WrapperProps>) => {
  const { as = "div", children, classes } = props;

  const { children: childrenStyles, childrenWrapper, parentWrapper } = classes;

  const Children = React.useMemo(() => {
    const childs = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.createElement(
          child.type,
          {
            ...child.props,
            key: child.key,
            className: childrenStyles
          },
          child.props.children
        );
      } else {
        return <div className={childrenStyles}>{children}</div>;
      }
    });

    return childs;
  }, [children, childrenStyles]);

  const ChildrenWrapper = React.useMemo(() => {
    return <div className={childrenWrapper}>{Children}</div>;
  }, [Children, childrenWrapper]);

  const Wrapper = React.useMemo(() => {
    return React.createElement(as, { className: parentWrapper }, ChildrenWrapper);
  }, [as, ChildrenWrapper, parentWrapper]);

  return Wrapper;
};
