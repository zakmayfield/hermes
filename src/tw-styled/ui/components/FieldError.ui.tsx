import { UiProps } from "@/tw-styled/types";
import { FieldErrorProps } from "./FieldError";
import React from "react";

export const useFieldErrorUi = (props: UiProps<FieldErrorProps>) => {
  const { errorMessage, described_by, error_hidden, classes } = props;

  const FieldError = () =>
    React.useMemo(() => {
      return (
        <p
          aria-describedby={described_by}
          hidden={error_hidden}
          className={classes.parentWrapper}
        >
          {errorMessage}
        </p>
      );
    }, [errorMessage, described_by, error_hidden, classes]);

  return { FieldError };
};
