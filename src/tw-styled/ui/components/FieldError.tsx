import { useStyleResolver } from "@/tw-styled/tools";
import { DefaultStyleProps } from "@/tw-styled/types";
import { uiHooks } from "../hooks";
import { defaultStyles } from "./FieldError.defaultStyles";

export type FieldErrorProps = {
  errorMessage?: string;
  described_by?: string;
  error_hidden?: boolean;
  style?: {
    parentWrapper?: DefaultStyleProps;
  };
};

export const FieldError = (props: FieldErrorProps) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const { FieldError } = uiHooks.useFieldErrorUi({ classes, ...rest });

  return <FieldError />;
};
