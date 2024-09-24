import { utilityHooks } from "@/shared/hooks";
import { IStyles } from "@/types/Styles";
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
  const classes = utilityHooks.useClassNames({ ...props.style });

  return (
    <div className={classes.wrapper}>
      <PiSpinnerGap className={classes.icon} />
    </div>
  );
};

export const useSpinLoader = (props: SpinLoaderProps) => {
  const Loader = () => <SpinLoader {...props} />;
  return { SpinLoader: Loader };
};
