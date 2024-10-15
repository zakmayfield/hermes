import { useStyleToClass } from "@/tw-styled/tools";
import { BaseStyles } from "@/tw-styled/types";
import { useSpinStyles } from "./Spin.styles";
import { useSpinUi } from "./Spin.ui";

export type SpinProps = {
  style?: {
    parentWrapper?: BaseStyles;
    icon?: BaseStyles;
  };
};

export const Spin = (props: SpinProps) => {
  const { style } = props;

  const styles = useSpinStyles(style);
  const classes = useStyleToClass(styles);
  const Spin = useSpinUi({ classes });

  return Spin;
};
