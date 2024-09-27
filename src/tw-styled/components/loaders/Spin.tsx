import { merge, useClassNames } from "@/tw-styled";
import { styleHooks } from "@/tw-styled/hooks";
import { IStyles } from "@/tw-styled/Styles";
import { PiSpinnerGap } from "react-icons/pi";

export type SpinProps = {
  style?: {
    wrapper?: IStyles;
    icon?: IStyles;
  };
};

export const Spin = (props: SpinProps) => {
  const { style } = props;

  const styles = styleHooks.useSpinStyles({ style });
  const classes = useClassNames({ ...styles });

  return (
    <div className={classes.wrapper}>
      <PiSpinnerGap className={merge(classes.icon)} />
    </div>
  );
};

export const useSpin = (props: SpinProps) => {
  const Loader = () => <Spin {...props} />;
  return { SpinLoader: Loader };
};
