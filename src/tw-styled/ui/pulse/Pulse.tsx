import { useStyleToClass } from "@/tw-styled/tools";
import { BaseStyles, Sizes, Themes } from "@/tw-styled/types";
import { usePulseStyles } from "./Pulse.styles";
import { usePulseUi } from "./Pulse.ui";

export type PulseProps = {
  theme?: Themes;
  size?: Sizes;
  style?: {
    parentWrapper?: BaseStyles;
    childrenWrapper?: BaseStyles;
    children?: BaseStyles;
  };
};

export const Pulse = (props: PulseProps) => {
  const { style, theme, ...rest } = props;

  const styles = usePulseStyles(style, theme);
  const classes = useStyleToClass(styles);
  const Pulse = usePulseUi({ classes, ...rest });

  return Pulse;
};

export const usePulse = (props: PulseProps) => {
  const Loader = () => <Pulse {...props} />;
  return { Pulse: Loader };
};
