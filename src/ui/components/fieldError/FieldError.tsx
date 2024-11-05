import { useClassNameResolver } from "@/ui";
import { FieldErrorProps } from "./FieldError.types";

export const FieldError = (props: FieldErrorProps) => {
  const { message, style } = props;

  const classes = useClassNameResolver({
    fieldError: {
      paddingY: "xs",
      textColor: "warning-light",
      fontStyle: "italic",
      ...style
    }
  });

  return <span className={classes.get("fieldError")}>{message}</span>;
};
