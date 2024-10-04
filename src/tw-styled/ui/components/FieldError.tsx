import { useStyleResolver } from "@/tw-styled/tools";
import { DefaultStyleProps } from "@/tw-styled/types";
import { styleHooks, uiHooks } from "../hooks";

export type FieldErrorProps = {
  message?: string;
  described_by?: string;
  is_error_hidden?: boolean;
  style?: {
    parentWrapper: DefaultStyleProps;
  };
};

export const FieldError = (props: FieldErrorProps) => {
  const { style, ...rest } = props;

  const styles = styleHooks.useFieldErrorStyles({ style });
  const classes = useStyleResolver({ ...styles });
  const { FieldError } = uiHooks.useFieldErrorUi({ classes, ...rest });

  return <FieldError />;
};
