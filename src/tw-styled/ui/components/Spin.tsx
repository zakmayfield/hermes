import { useStyleResolver } from "@/tw-styled/tools";
import { DefaultStyleProps } from "@/tw-styled/types";
import { defaultStyles } from "./Spin.defaultStyles";
import { useSpinUi } from "./Spin.ui";

export type SpinProps = {
  style?: {
    parentWrapper?: DefaultStyleProps;
    icon?: DefaultStyleProps;
  };
};

export const Spin = (props: SpinProps) => {
  const { style } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const { Spin } = useSpinUi({ classes });

  return <Spin />;
};
