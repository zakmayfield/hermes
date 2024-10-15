import { UiClassesProp } from "@/tw-styled/types";
import { TextProps } from "./Text";
import React from "react";

export const useTextUi = (props: UiClassesProp<TextProps>) => {
  const { as = "p", children, described_by, is_hidden, classes } = props;

  const parentWrapperClasses = classes.get("parentWrapper");

  const Text = React.useMemo(() => {
    return React.createElement(
      as,
      {
        "aria-describedby": described_by,
        hidden: is_hidden,
        className: parentWrapperClasses
      },
      children
    );
  }, [as, children, described_by, is_hidden, parentWrapperClasses]);

  return Text;
};
