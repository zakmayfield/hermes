import { useStyleToClass } from "@/tw-styled/tools";
import { BaseStyles } from "@/tw-styled/types";
import { defaultStyles } from "./FieldError.defaultStyles";
import { useFieldErrorUi } from "./FieldError.ui";
import { useDefaultStyles } from "../hooks";

export type FieldErrorProps = {
  errorMessage?: string;
  described_by?: string;
  error_hidden?: boolean;
  style?: {
    parentWrapper?: BaseStyles;
  };
};

export const FieldError = (props: FieldErrorProps) => {
  const { style, ...rest } = props;

  const styles = useDefaultStyles(style, defaultStyles);
  const classes = useStyleToClass(styles);
  const FieldError = useFieldErrorUi({ classes, ...rest });

  return FieldError;
};
