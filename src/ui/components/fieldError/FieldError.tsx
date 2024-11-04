import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { FieldErrorProps } from "./FieldError.types";

export const FieldError = (props: FieldErrorProps) => {
  const { message, style } = props;

  const classes = useStyleToClass({
    fieldError: {
      paddingY: "xs",
      textColor: "warning-light",
      fontStyle: "italic",
      ...style
    }
  });

  return <span className={classes.get("fieldError")}>{message}</span>;
};
