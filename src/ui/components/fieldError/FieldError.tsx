import { useClassNameResolver } from "@/ui";
import { FieldErrorProps } from "./FieldError.types";

export const FieldError = (props: FieldErrorProps) => {
  const { options, style } = props;

  const classes = useClassNameResolver({
    fieldError: {
      textColor: "theme-red",
      fontStyle: "italic",
      ...style
    }
  });

  return <span className={classes.get("fieldError")}>{options?.message}</span>;
};
