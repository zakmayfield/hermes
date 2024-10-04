import { useStyleResolver } from "@/tw-styled/tools";
import { DefaultStyleProps } from "@/tw-styled/types";
import { styleHooks, uiHooks } from "../hooks";

export type SpinProps = {
  style?: {
    parentWrapper?: DefaultStyleProps;
    icon?: DefaultStyleProps;
  };
};

export const Spin = (props: SpinProps) => {
  const { style } = props;

  const styles = styleHooks.useSpinStyles({ style });
  const classes = useStyleResolver({ ...styles });
  const { Spin } = uiHooks.useSpinUi({ classes });

  return <Spin />;
};
