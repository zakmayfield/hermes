import { UiProps } from "@/tw-styled/types";
import { TextProps } from "./Text";
import React from "react";

export const useTextUi = (props: UiProps<TextProps>) => {
  const { as = "p", children, described_by, is_hidden, classes } = props;

  const Text = () =>
    React.useMemo(() => {
      return React.createElement(
        as,
        {
          "aria-describedby": described_by,
          hidden: is_hidden,
          className: classes.parentWrapper
        },
        children
      );
    }, [as, children, described_by, is_hidden, classes]);

  return { Text };
};
