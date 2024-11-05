import { useClassNameResolver } from "@/ui";
import { LabelProps } from "./Label.types";

export const Label = (props: LabelProps) => {
  const { options, style } = props;
  const classes = useClassNameResolver({ label: { ...style } });

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
