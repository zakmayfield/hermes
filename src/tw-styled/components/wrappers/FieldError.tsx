import { merge } from "@/tw-styled/utils/class-merge";
import { HTMLAttributes } from "react";

type TFieldErrorProps = HTMLAttributes<HTMLParagraphElement> & {
  message?: string;
  described_by?: string;
  is_error_hidden?: boolean;
  className?: string;
};

export const FormFieldError = (props: TFieldErrorProps) => {
  const { message, is_error_hidden, described_by, className = "" } = props;

  const classes = `text-red-300 italic pt-1 ${className}`;

  return (
    <p
      aria-describedby={described_by}
      hidden={is_error_hidden}
      className={merge(classes)}
    >
      {message}
    </p>
  );
};
