import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BaseStyles } from "@/tw-styled/types";

type FieldErrorProps = {
  message: string;
  style?: BaseStyles;
};

export const FieldError = (props: FieldErrorProps) => {
  const { message, style } = props;
  const styles = { fieldError: { ...style } };
  const classes = useStyleToClass(styles);

  return <span className={classes.get("fieldError")}>{message}</span>;
};
