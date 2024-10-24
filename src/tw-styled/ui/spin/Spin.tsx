import { useIcons, useStyleToClass } from "@/tw-styled/tools";
import { BaseStyles } from "@/tw-styled/types";

export type SpinProps = {
  style?: {
    parentWrapper?: BaseStyles;
    icon?: BaseStyles;
  };
};

export const Spin = (props: SpinProps) => {
  const { style } = props;

  const styles = {
    parentWrapper: {
      ...style?.parentWrapper
    },
    icon: {
      place: "center",
      fontSize: "lg",
      animation: "spin",
      ...style?.icon
    }
  } satisfies SpinProps["style"];

  const classes = useStyleToClass(styles);

  const icons = useIcons({
    names: ["spin"]
  });

  const icon = <icons.spin className={classes.get("icon")} />;
  const Spin = <div className={classes.get("parentWrapper")}>{icon}</div>;

  return Spin;
};
