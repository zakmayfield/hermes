import { UiProps } from "@/tw-styled/types";
import { HeadingProps } from "./Heading";
import React from "react";

export const useHeadingUi = (props: UiProps<HeadingProps>) => {
  const { as = "h1", text = "", children, classes } = props;

  const ChildrenWrapper = React.useMemo(() => {
    return <div className={classes.childrenWrapper}>{children}</div>;
  }, [children, classes]);

  const HeadingElement = React.useMemo(() => {
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
};
