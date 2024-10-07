import { useStyleResolver } from "@/tw-styled/tools";
import { DefaultStyleProps } from "@/tw-styled/types";
import { uiHooks } from "../hooks";
import { defaultStyles } from "./Spin.defaultStyles";

export type SpinProps = {
  style?: {
    parentWrapper?: DefaultStyleProps;
    icon?: DefaultStyleProps;
  };
};

export const Spin = (props: SpinProps) => {
  const { style } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const { Spin } = uiHooks.useSpinUi({ classes });

  return <Spin />;
};
