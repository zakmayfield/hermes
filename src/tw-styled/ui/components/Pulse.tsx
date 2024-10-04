import { useStyleResolver } from "@/tw-styled/tools";
import { DefaultStyleProps, Sizes, Themes } from "@/tw-styled/types";
import { styleHooks, uiHooks } from "../hooks";

export type PulseProps = {
  theme?: Themes;
  size?: Sizes;
  style?: {
    parentWrapper?: DefaultStyleProps;
    childrenWrapper?: DefaultStyleProps;
    children?: DefaultStyleProps;
  };
};

export const Pulse = (props: PulseProps) => {
  const { style, ...rest } = props;

  const styles = styleHooks.usePulseStyles({ style, options: { theme: rest.theme } });
  const classes = useStyleResolver({ ...styles });
  const Pulse = uiHooks.usePulseUi({ classes, ...rest });

  return <Pulse />;
};

export const usePulse = (props: PulseProps) => {
  const Loader = () => <Pulse {...props} />;
  return { Pulse: Loader };
};
