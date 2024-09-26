import { HTMLAttributes } from "react";
import { Text } from "./Text";

type TFieldErrorProps = HTMLAttributes<HTMLParagraphElement> & {
  message?: string;
  described_by?: string;
  is_error_hidden?: boolean;
  className?: string;
};

export const FormFieldError = (props: TFieldErrorProps) => {
  const { message, is_error_hidden, described_by, className = "" } = props;

  const defaultClassName = `text-red-300 italic pt-1 ${className}`;

  return (
    <Text
      described_by={described_by}
      is_hidden={is_error_hidden}
      style={{
        wrapper: {
          className: defaultClassName
        }
      }}
    >
      {message}
    </Text>
  );
};
