import { UiClassesProp } from "@/tw-styled/types";
import { PulseProps } from "./Pulse";
import { mergeClasses } from "@/tw-styled/tools";

export const usePulseUi = (props: UiClassesProp<PulseProps>) => {
  const { classes, size } = props;

  const parentWrapper = classes.get("parentWrapper");
  const childrenWrapper = classes.get("childrenWrapper");
  const children = classes.get("children");

  switch (size) {
    default:
      return (
        <div className={parentWrapper}>
          <div className={childrenWrapper}>
            <div className={children} />
            <div className={mergeClasses("w-full " + children)} />
          </div>
        </div>
      );
    case "md":
      return (
        <div className={parentWrapper}>
          <div className={childrenWrapper}>
            <div className={mergeClasses("w-1/3 " + children)} />
            <div className={mergeClasses("flex-grow " + children)} />
          </div>

          <div className={childrenWrapper}>
            <div className={mergeClasses("flex-grow " + children + " p-10")} />
            <div className={mergeClasses("w-1/3 " + children)} />
          </div>
        </div>
      );
    case "lg":
      return (
        <div className={parentWrapper}>
          <div className={childrenWrapper}>
            <div className={mergeClasses("w-1/3 " + children + " p-6")} />
            <div className={mergeClasses("flex-grow " + children + " p-6")} />
          </div>

          <div className={childrenWrapper}>
            <div className={mergeClasses("w-2/3 " + children + " p-20")} />

            <div className={"flex-grow " + childrenWrapper + " flex-col"}>
              <div className={mergeClasses(children + " p-6")} />
              <div className={mergeClasses("flex-grow " + children + " p-6")} />
            </div>
          </div>

          <div className={childrenWrapper}>
            <div className={mergeClasses("flex-grow " + children + " p-12")} />
            <div className={mergeClasses("flex-grow " + children + " p-12")} />
          </div>
        </div>
      );
  }
};
