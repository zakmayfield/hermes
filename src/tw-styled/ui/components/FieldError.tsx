import { useStyleResolver, useStyles } from "@/tw-styled";
import { StyleProps } from "@/tw-styled/types";
import { useMemo } from "react";

export type FieldErrorProps = {
  message?: string;
  described_by?: string;
  is_error_hidden?: boolean;
  style?: {
    parentWrapper: StyleProps;
  };
};

export const FieldError = (props: FieldErrorProps) => {
  const { message, is_error_hidden, described_by, style } = props;

  const styles = useStyles({
    key: "fieldError",
    style
  });
  const classes = useStyleResolver({ ...styles });

  const FieldError = useMemo(() => {
    return (
      <p
        aria-describedby={described_by}
        hidden={is_error_hidden}
        className={classes.parentWrapper}
      >
        {message}
      </p>
    );
  }, [described_by, is_error_hidden, message, classes]);

  return FieldError;
};
