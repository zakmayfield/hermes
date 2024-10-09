import { useStyleResolver } from "@/tw-styled/tools";
import { BaseStyleProps } from "@/tw-styled/types";
import { defaultStyles } from "./FieldError.defaultStyles";
import { useFieldErrorUi } from "./FieldError.ui";

export type FieldErrorProps = {
  errorMessage?: string;
  described_by?: string;
  error_hidden?: boolean;
  style?: {
    parentWrapper?: BaseStyleProps;
  };
};

export const FieldError = (props: FieldErrorProps) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const { FieldError } = useFieldErrorUi({ classes, ...rest });

  return <FieldError />;
};
