import { merge, useClassNameResolver, useStyles } from "@/tw-styled";
import { StyleProps } from "@/tw-styled/types";
import { PiSpinnerGap } from "react-icons/pi";

export type SpinProps = {
  style?: {
    parentWrapper?: StyleProps;
    icon?: StyleProps;
  };
};

export const Spin = (props: SpinProps) => {
  const { style } = props;

  const styles = useStyles({
    key: "spin",
    style
  });
  const classes = useClassNameResolver({ ...styles });

  return (
    <div className={classes.parentWrapper}>
      <PiSpinnerGap className={merge(classes.icon)} />
    </div>
  );
};

export const useSpin = (props: SpinProps) => {
  const Loader = () => <Spin {...props} />;
  return { SpinLoader: Loader };
};
