import { UiClassesProp } from "@/tw-styled/types";
import { FieldErrorProps } from "./FieldError";
import React from "react";

export const useFieldErrorUi = (props: UiClassesProp<FieldErrorProps>) => {
  const { errorMessage, described_by, error_hidden, classes } = props;

  const parentWrapper = classes.get("parentWrapper");

  const FieldError = React.useMemo(() => {
    return (
      <p
        aria-describedby={described_by}
        hidden={error_hidden}
        className={parentWrapper}
      >
        {errorMessage}
      </p>
    );
  }, [errorMessage, described_by, error_hidden, parentWrapper]);

  return FieldError;
};
