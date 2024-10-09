import { useStyleResolver } from "@/tw-styled/tools";
import { BaseStyleProps } from "@/tw-styled/types";
import { defaultStyles } from "./Spin.defaultStyles";
import { useSpinUi } from "./Spin.ui";

export type SpinProps = {
  style?: {
    parentWrapper?: BaseStyleProps;
    icon?: BaseStyleProps;
  };
};

export const Spin = (props: SpinProps) => {
  const { style } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const Spin = useSpinUi({ classes });

  return Spin;
};
