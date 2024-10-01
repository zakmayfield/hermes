import { Sizes, StyleProps, Themes } from "@/tw-styled/types";
import { merge, useClassNameResolver, useStyles } from "@/tw-styled";

export type PulseProps = {
  theme?: Themes;
  size?: Sizes;
  style?: {
    parentWrapper?: StyleProps;
    childrenWrapper?: StyleProps;
    children?: StyleProps;
  };
};

export const Pulse = (props: PulseProps) => {
  const { size, theme, style } = props;

  const styles = useStyles({
    key: "pulse",
    style,
    options: {
      theme
    }
  });
  const classes = useClassNameResolver({ ...styles });

  switch (size) {
    default:
      return (
        <div className={classes.parentWrapper}>
          <div className={classes.childrenWrapper}>
            <div className={classes.children} />
            <div className={merge("w-full " + classes.children)} />
          </div>
        </div>
      );
    case "md":
      return (
        <div className={classes.parentWrapper}>
          <div className={classes.childrenWrapper}>
            <div className={merge("w-1/3 " + classes.children)} />
            <div className={merge("flex-grow " + classes.children)} />
          </div>

          <div className={classes.childrenWrapper}>
            <div className={merge("flex-grow " + classes.children + " p-10")} />
            <div className={merge("w-1/3 " + classes.children)} />
          </div>
        </div>
      );
    case "lg":
      return (
        <div className={classes.parentWrapper}>
          <div className={classes.childrenWrapper}>
            <div className={merge("w-1/3 " + classes.children + " p-6")} />
            <div className={merge("flex-grow " + classes.children + " p-6")} />
          </div>

          <div className={classes.childrenWrapper}>
            <div className={merge("w-2/3 " + classes.children + " p-20")} />

            <div className={"flex-grow " + classes.childrenWrapper + " flex-col"}>
              <div className={merge(classes.children + " p-6")} />
              <div className={merge("flex-grow " + classes.children + " p-6")} />
            </div>
          </div>

          <div className={classes.childrenWrapper}>
            <div className={merge("flex-grow " + classes.children + " p-12")} />
            <div className={merge("flex-grow " + classes.children + " p-12")} />
          </div>
        </div>
      );
  }
};

export const usePulse = (props: PulseProps) => {
  const Loader = () => <Pulse {...props} />;
  return { Pulse: Loader };
};
