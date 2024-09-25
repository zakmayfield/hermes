import { useClassNames } from "@/tw-styled";
import { IStyles, StyleObj } from "@/tw-styled/Styles";
import { PiSpinnerGap } from "react-icons/pi";

export type SpinLoaderProps = {
  classList?: {
    containerClassName?: string;
    spinnerClassName?: string;
  };
  style?: {
    wrapper?: IStyles;
    icon?: IStyles;
  };
};

export const SpinLoader = (props: SpinLoaderProps) => {
  const styles: StyleObj = {
    ...props.style,

    wrapper: {
      ...props.style?.wrapper
    },
    icon: {
      place: "center",
      ...props.style?.icon
    }
  };

  const classes = useClassNames(styles);

  return (
    <div className={classes.wrapper}>
      <PiSpinnerGap className={`${classes.icon} animate-spin`} />
    </div>
  );
};

export const useSpinLoader = (props: SpinLoaderProps) => {
  const Loader = () => <SpinLoader {...props} />;
  return { SpinLoader: Loader };
};
