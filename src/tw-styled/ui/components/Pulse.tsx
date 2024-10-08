import { useStyleResolver } from "@/tw-styled/tools";
import { DefaultStyleProps, Sizes, Themes } from "@/tw-styled/types";
import { defaultStyles } from "./Pulse.defaultStyles";
import { usePulseUi } from "./Pulse.ui";

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
  const { style, theme, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style, theme) });
  const Pulse = usePulseUi({ classes, ...rest });

  return <Pulse />;
};

export const usePulse = (props: PulseProps) => {
  const Loader = () => <Pulse {...props} />;
  return { Pulse: Loader };
};
