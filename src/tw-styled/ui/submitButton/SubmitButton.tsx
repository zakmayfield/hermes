import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BaseStyles, FullStyles, Styles } from "@/tw-styled/types";

type SubmitButtonProps = {
  options?: {
    text?: string;
    variant?: Styles["buttonVariant"];
  };
  style?: BaseStyles;
};

export const SubmitButton = (props: SubmitButtonProps) => {
  const { options, style } = props;
  const styles = {
    button: { buttonVariant: options?.variant, ...style } satisfies FullStyles
  };
  const classes = useStyleToClass(styles);

  return (
    <button
      type="submit"
      className={classes.get("button")}
    >
      {options?.text || "Submit"}
    </button>
  );
};
