import { useClassNameResolver } from "@/ui";
import { SubmitButtonProps } from "./SubmitButton.types";

export const SubmitButton = (props: SubmitButtonProps) => {
  const { options, style } = props;

  const classes = useClassNameResolver({
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
