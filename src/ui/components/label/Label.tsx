import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { LabelProps } from "./Label.types";

export const Label = (props: LabelProps) => {
  const { options, style } = props;
  const classes = useStyleToClass({ label: { ...style } });

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
