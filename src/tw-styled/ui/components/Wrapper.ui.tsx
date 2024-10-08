import { UiProps } from "@/tw-styled/types";
import { WrapperProps } from "./Wrapper";
import React from "react";

export const useWrapperUi = (props: UiProps<WrapperProps>) => {
  const { as = "div", children, classes } = props;

  const getChilds = () =>
    React.useMemo(() => {
      const childs = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
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
    React.useMemo(() => {
      return React.createElement(
        as,
        { className: classes.parentWrapper },
        getChildsWrapper()
      );
    }, [as, classes]);

  const Wrapper = () => getWrapper();

  return { Wrapper };
};
