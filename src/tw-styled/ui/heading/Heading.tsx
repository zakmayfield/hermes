import { Children, HeadingElements, BaseStyles } from "@/tw-styled/types";
import { useStyleToClass } from "@/tw-styled/tools";
import { defaultStyles } from "./Heading.defaultStyles";
import { useHeadingUi } from "./Heading.ui";
import { useDefaultStyles } from "../hooks";

export type HeadingProps = {
  children?: Children;
  as?: HeadingElements;
  text?: string;
  style?: {
    parentWrapper?: BaseStyles;
    heading?: BaseStyles;
    childrenWrapper?: BaseStyles;
  };
};

export const Heading = (props: HeadingProps) => {
  const { style, ...rest } = props;

  const styles = useDefaultStyles(style, defaultStyles);
  const classes = useStyleToClass(styles);
  const Heading = useHeadingUi({ ...rest, classes });

  return Heading;
};
