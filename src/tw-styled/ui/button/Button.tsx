import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BaseStyles, Children, FullStyles, Styles } from "@/tw-styled/types";

type ButtonProps = {
  children?: Children;
  handleClick?: () => void;
  options?: {
    variant?: Styles["buttonVariant"];
    type?: "button" | "submit";
    isDisabled?: boolean;
  };
  style: BaseStyles;
};

export const Button = (props: ButtonProps) => {
  const { children, handleClick, options, style } = props;

  const styles = {
    button: { buttonVariant: options?.variant, ...style } satisfies FullStyles
  };

  const classes = useStyleToClass(styles);

  return (
    <button
      onClick={handleClick}
      type={options?.type || "button"}
      disabled={options?.isDisabled}
      aria-disabled={options?.isDisabled}
      className={classes.get("button")}
    >
      {children}
    </button>
  );
};
