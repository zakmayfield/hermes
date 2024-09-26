import { merge, useClassNames } from "@/tw-styled";
import { IStyles, StyleObj } from "@/tw-styled/Styles";
import { PiSpinnerGap } from "react-icons/pi";

export type SpinLoaderProps = {
  style?: {
    wrapper?: IStyles;
    icon?: IStyles;
  };
};

export const SpinLoader = (props: SpinLoaderProps) => {
  const styles: StyleObj = {
    ...props.style,
    icon: {
      place: "center",
      fontSize: "lg",
      ...props.style?.icon
    }
  };

  const classes = useClassNames(styles);

  return (
    <div className={classes.wrapper}>
      <PiSpinnerGap className={merge(`animate-spin ${classes.icon}`)} />
    </div>
  );
};

export const useSpinLoader = (props: SpinLoaderProps) => {
  const Loader = () => <SpinLoader {...props} />;
  return { SpinLoader: Loader };
};
