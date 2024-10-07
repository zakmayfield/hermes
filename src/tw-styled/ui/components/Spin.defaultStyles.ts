import { PartialStyleProp } from "@/tw-styled/types";
import { SpinProps } from "./Spin";

export const defaultStyles = (style?: PartialStyleProp) => {
  return {
    parentWrapper: {
      ...style?.wrapper
    },
    icon: {
      place: "center",
      fontSize: "lg",
      animate: "spin",
      ...style?.icon
    }
  } satisfies SpinProps["style"];
};
