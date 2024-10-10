import { UiProps } from "@/tw-styled/types";
import { PulseProps } from "./Pulse";
import { mergeClasses } from "@/tw-styled/tools";

export const usePulseUi = (props: UiProps<PulseProps>) => {
  const { classes, size } = props;

  switch (size) {
    default:
      return (
        <div className={classes.parentWrapper}>
          <div className={classes.childrenWrapper}>
            <div className={classes.children} />
            <div className={mergeClasses("w-full " + classes.children)} />
          </div>
        </div>
      );
    case "md":
      return (
        <div className={classes.parentWrapper}>
          <div className={classes.childrenWrapper}>
            <div className={mergeClasses("w-1/3 " + classes.children)} />
            <div className={mergeClasses("flex-grow " + classes.children)} />
          </div>

          <div className={classes.childrenWrapper}>
            <div className={mergeClasses("flex-grow " + classes.children + " p-10")} />
            <div className={mergeClasses("w-1/3 " + classes.children)} />
          </div>
        </div>
      );
    case "lg":
      return (
        <div className={classes.parentWrapper}>
          <div className={classes.childrenWrapper}>
            <div className={mergeClasses("w-1/3 " + classes.children + " p-6")} />
            <div className={mergeClasses("flex-grow " + classes.children + " p-6")} />
          </div>

          <div className={classes.childrenWrapper}>
            <div className={mergeClasses("w-2/3 " + classes.children + " p-20")} />

            <div className={"flex-grow " + classes.childrenWrapper + " flex-col"}>
              <div className={mergeClasses(classes.children + " p-6")} />
              <div className={mergeClasses("flex-grow " + classes.children + " p-6")} />
            </div>
          </div>

          <div className={classes.childrenWrapper}>
            <div className={mergeClasses("flex-grow " + classes.children + " p-12")} />
            <div className={mergeClasses("flex-grow " + classes.children + " p-12")} />
          </div>
        </div>
      );
  }
};
