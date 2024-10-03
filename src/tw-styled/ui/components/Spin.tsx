import { useStyleResolver } from "@/tw-styled/tools";
import { StyleProps } from "@/tw-styled/types";
import { styleHooks, uiHooks } from "../hooks";

export type SpinProps = {
  style?: {
    parentWrapper?: StyleProps;
    icon?: StyleProps;
  };
};

export const Spin = (props: SpinProps) => {
  const { style } = props;

  const styles = styleHooks.useSpinStyles({ style });
  const classes = useStyleResolver({ ...styles });
  const { Spin } = uiHooks.useSpinUi({ classes });

  return <Spin />;
};
