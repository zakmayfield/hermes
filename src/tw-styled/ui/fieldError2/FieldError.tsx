import { useStyleToClass } from "@/tw-styled/tools";
import { BaseStyles } from "@/tw-styled/types";
import React from "react";

export type FieldErrorProps = {
  errorMessage?: string;
  described_by?: string;
  error_hidden?: boolean;
  style?: {
    parentWrapper?: BaseStyles;
  };
};

export const FieldError2 = (props: FieldErrorProps) => {
  const { style, errorMessage, described_by, error_hidden } = props;

  const styles = {
    parentWrapper: {
      ...style?.parentWrapper
    }
  } satisfies FieldErrorProps["style"];

  const classes = useStyleToClass(styles);

  const FieldError = React.useMemo(() => {
    return (
      <p
        aria-describedby={described_by}
        hidden={error_hidden}
        className={classes.get("parentWrapper")}
      >
        {errorMessage}
      </p>
    );
  }, [errorMessage, described_by, error_hidden, classes]);

  return FieldError;
};
