import { useClassNameResolver } from "@/ui";
import { SpinProps } from "./Spin.types";
import { useIcons } from "@/shared/hooks";

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

  const icons = useIcons({
    names: ["spin"]
  });

  const icon = <icons.spin className={classes.get("icon")} />;
  const Spin = <div className={classes.get("parentWrapper")}>{icon}</div>;

  return Spin;
};
