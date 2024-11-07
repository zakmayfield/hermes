import { Icon, useClassNameResolver } from "@/ui";
import { SpinProps } from "./Spin.types";

export const Spin = (props: SpinProps) => {
  const { style } = props;

  const classes = useClassNameResolver({
    parentWrapper: {
      ...style?.parentWrapper
    },
    icon: {
      place: "center",
      fontSize: "lg",
      animation: "spin",
      ...style?.icon
    }
  });

  const icon = (
    <Icon
      name="spin"
      style={{ className: classes.get("icon") }}
    />
  );

  const Spin = <div className={classes.get("parentWrapper")}>{icon}</div>;

  return Spin;
};
