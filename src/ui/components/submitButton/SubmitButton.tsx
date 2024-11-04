import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { SubmitButtonProps } from "./SubmitButton.types";

export const SubmitButton = (props: SubmitButtonProps) => {
  const { options, style } = props;

  const classes = useStyleToClass({
    button: { buttonVariant: options?.variant, ...style }
  });

  return (
    <button
      type="submit"
      className={classes.get("button")}
    >
      {options?.text || "Submit"}
    </button>
  );
};
