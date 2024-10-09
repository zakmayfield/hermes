import { UiProps } from "@/tw-styled/types";
import { FormFieldProps } from "./FormField";
import { useIcons } from "@/tw-styled/tools";
import { utilityHooks } from "@/shared/hooks";
import { FieldError } from "../fieldError/FieldError";
import React from "react";

export const useFormFieldUi = (props: UiProps<FormFieldProps<any>>) => {
  const {
    classes: {
      parentWrapper,
      label,
      input,
      fieldError,
      labelInputWrapper,
      errorIcon,
      errorInputWrapper
    },
    inputType = "text",
    name,
    labelText,
    errorMessage,
    hiddenElements: { error_hidden, label_hidden } = {},
    register
  } = props;

  const icons = useIcons({
    names: ["error"]
  });

  const { Tooltip } = utilityHooks.useTooltip({
    content: errorMessage,
    anchorSelect: `#${name as string}_error_icon`,
    place: "top-end",
    variant: "error"
  });

  const Label = (
    <label
      htmlFor={name as string}
      hidden={label_hidden}
      className={label}
    >
      {labelText}
    </label>
  );

  const Input = React.useMemo(() => {
    return (
      <input
        {...register?.(name as string)}
        type={inputType}
        placeholder={labelText}
        aria-label={name as string}
        aria-invalid={!!errorMessage}
        className={input}
      />
    );
  }, [errorMessage, name, inputType, labelText, register, input]);

  const Error = React.useMemo(() => {
    return (
      <FieldError
        errorMessage={errorMessage}
        described_by={name as string}
        error_hidden={error_hidden}
        style={{ parentWrapper: { className: fieldError } }}
      />
    );
  }, [errorMessage, name, error_hidden, fieldError]);

  const ErrorIcon = errorMessage && (
    <icons.error
      id={`${name as string}_error_icon`}
      className={errorIcon}
    />
  );

  const FormField = (
    <div className={parentWrapper}>
      <div className={labelInputWrapper}>
        {Label}

        <div className={errorInputWrapper}>
          {Input}
          {ErrorIcon}
          {Tooltip}
        </div>
      </div>

      {Error}
    </div>
  );

  return FormField;
};
