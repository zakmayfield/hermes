import { useStyleToClass } from "@/tw-styled/tools";
import { BaseStyles, Themes } from "@/tw-styled/types";
import { usePulseStyles } from "./Pulse.styles";
import { usePulseUi } from "./Pulse.ui";

export type PulseProps = {
  size?: "sm" | "md" | "lg";
  style?: {
    parentWrapper?: BaseStyles;
    childrenWrapper?: BaseStyles;
    children?: BaseStyles;
  };
};

export const Pulse = (props: PulseProps) => {
  const { style, ...rest } = props;

  const styles = usePulseStyles(style);
  const classes = useStyleToClass(styles);
  const Pulse = usePulseUi({ classes, ...rest });

  return Pulse;
};

export const usePulse = (props: PulseProps) => {
  const Loader = () => <Pulse {...props} />;
  return { Pulse: Loader };
};
