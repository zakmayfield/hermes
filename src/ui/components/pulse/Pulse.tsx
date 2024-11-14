import { useClassNameResolver } from "@/ui";
import { PulseProps } from "./Pulse.types";
import { mergeClasses } from "@/utils/core/mergeClasses";

export const Pulse = (props: PulseProps) => {
  const { style, size } = props;

  const classes = useClassNameResolver({
    parentWrapper: {
      animation: "pulse",
      borderRadius: "lg",
      display: "flex-col",
      gap: "sm",
      padding: "md",
      backgroundColor: "tertiary",
      ...style?.parentWrapper
    },
    childrenWrapper: {
      display: "flex-row",
      gap: "sm",
      ...style?.childrenWrapper
    },
    children: {
      animation: "pulse",
      padding: "md",
      borderRadius: "xl",
      backgroundColor: "secondary",
      ...style?.children
    }
  });

  switch (size) {
    default:
      return (
        <div className={classes.get("parentWrapper")}>
          <div className={classes.get("childrenWrapper")}>
            <div className={classes.get("children")} />
            <div className={mergeClasses("w-full " + classes.get("children"))} />
          </div>
        </div>
      );
    case "md":
      return (
        <div className={classes.get("parentWrapper")}>
          <div className={classes.get("childrenWrapper")}>
            <div className={mergeClasses("w-1/3 " + classes.get("children"))} />
            <div className={mergeClasses("flex-grow " + classes.get("children"))} />
          </div>

          <div className={classes.get("childrenWrapper")}>
            <div
              className={mergeClasses("flex-grow " + classes.get("children") + " p-10")}
            />
            <div className={mergeClasses("w-1/3 " + classes.get("children"))} />
          </div>
        </div>
      );
    case "lg":
      return (
        <div className={classes.get("parentWrapper")}>
          <div className={classes.get("childrenWrapper")}>
            <div className={mergeClasses("w-1/3 " + classes.get("children") + " p-6")} />
            <div
              className={mergeClasses("flex-grow " + classes.get("children") + " p-6")}
            />
          </div>

          <div className={classes.get("childrenWrapper")}>
            <div className={mergeClasses("w-2/3 " + classes.get("children") + " p-20")} />

            <div className={"flex-grow " + classes.get("childrenWrapper") + " flex-col"}>
              <div className={mergeClasses(classes.get("children") + " p-6")} />
              <div
                className={mergeClasses("flex-grow " + classes.get("children") + " p-6")}
              />
            </div>
          </div>

          <div className={classes.get("childrenWrapper")}>
            <div
              className={mergeClasses("flex-grow " + classes.get("children") + " p-12")}
            />
            <div
              className={mergeClasses("flex-grow " + classes.get("children") + " p-12")}
            />
          </div>
        </div>
      );
  }
};
