import { classHooks } from "@/shared/hooks";
import { PiSpinnerGap } from "react-icons/pi";

export type SpinLoaderProps = {
  classList?: {
    containerClassName?: string;
    spinnerClassName?: string;
  };
  style?: {
    size?: "sm" | "md" | "lg";
    width?: "full";
    position?: "left" | "center" | "right";
    padding?: "sm" | "md" | "lg";
    theme?: "light" | "dark";
  };
};

export const SpinLoader = (props: SpinLoaderProps) => {
  const classes = classHooks.useSpinLoaderClasses({ ...props });

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
