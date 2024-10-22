import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BaseStyles } from "@/tw-styled/types";

type LabelProps = {
  options?: {
    text: string;
    htmlFor: string;
    visuallyHidden?: boolean;
  };
  style?: BaseStyles;
};

export const Label = (props: LabelProps) => {
  const { options, style } = props;
  const styles = { label: { ...style } };
  const classes = useStyleToClass(styles);

  return (
    <label
      htmlFor={options?.htmlFor}
      hidden={options?.visuallyHidden}
      className={classes.get("label")}
    >
      {options?.text}
    </label>
  );
};
