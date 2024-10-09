import { UiProps } from "@/tw-styled/types";
import { SpinProps } from "./Spin";
import { useIcons } from "@/tw-styled/tools";

export const useSpinUi = (props: UiProps<SpinProps>) => {
  const { classes } = props;

  const icons = useIcons({
    names: ["spin"]
  });

  const icon = <icons.spin className={classes.icon} />;
  const Spin = <div className={classes.parentWrapper}>{icon}</div>;

  return Spin;
};
