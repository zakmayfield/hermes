import { HTMLAttributes } from "react";
import { Text } from "../containers";

type TFieldErrorProps = HTMLAttributes<HTMLParagraphElement> & {
  message?: string;
  described_by?: string;
  is_error_hidden?: boolean;
};

export const FormFieldError = (props: TFieldErrorProps) => {
  const { message, is_error_hidden, described_by } = props;
  return (
    <Text
      described_by={described_by}
      hidden={is_error_hidden}
    >
      {message}
    </Text>
  );
};
