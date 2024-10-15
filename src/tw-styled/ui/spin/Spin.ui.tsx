import { UiClassesProp } from "@/tw-styled/types";
import { SpinProps } from "./Spin";
import { useIcons } from "@/tw-styled/tools";

export const useSpinUi = (props: UiClassesProp<SpinProps>) => {
  const { classes } = props;

  const iconClasses = classes.get("icon");
  const parentWrapper = classes.get("parentWrapper");

  const icons = useIcons({
    names: ["spin"]
  });

  const icon = <icons.spin className={iconClasses} />;
  const Spin = <div className={parentWrapper}>{icon}</div>;

  return Spin;
};
