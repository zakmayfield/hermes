import { UiProps } from "@/tw-styled/types";
import { HeadingProps } from "./Heading";
import React from "react";

export const useHeadingUi = (props: UiProps<HeadingProps>) => {
  const { as = "h1", text = "", children, classes } = props;
  const { childrenWrapper, heading, parentWrapper } = classes;

  const ChildrenWrapper = React.useMemo(() => {
    return <div className={childrenWrapper}>{children}</div>;
  }, [children, childrenWrapper]);

  const HeadingElement = React.useMemo(() => {
    return React.createElement(as, { className: heading }, text);
  }, [as, text, heading]);

  const Heading = (
    <div className={parentWrapper}>
      {HeadingElement}
      {ChildrenWrapper}
    </div>
  );

  return Heading;
};
