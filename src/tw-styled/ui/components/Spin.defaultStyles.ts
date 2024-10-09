import { PartialStyleProps } from "@/tw-styled/types";
import { SpinProps } from "./Spin";

export const defaultStyles = (style?: PartialStyleProps) => {
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
