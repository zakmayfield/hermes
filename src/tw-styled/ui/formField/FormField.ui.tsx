import { UiClassesProp } from "@/tw-styled/types";
import { FormFieldProps } from "./FormField";
import { useIcons } from "@/tw-styled/tools";
import { FieldError } from "../fieldError/FieldError";
import React from "react";
import { useTooltip } from "@/shared/hooks";

export const useFormFieldUi = (props: UiClassesProp<FormFieldProps<any>>) => {
  const {
    classes,
    inputType = "text",
    name,
    labelText,
    errorMessage,
    hiddenElements: { error_hidden, label_hidden } = {},
    register
  } = props;

  const parentWrapperClasses = classes.get("parentWrapper");
  const labelClasses = classes.get("label");
  const inputClasses = classes.get("input");
  const fieldErrorClasses = classes.get("fieldError");
  const labelInputWrapperClasses = classes.get("labelInputWrapper");
  const errorIconClasses = classes.get("errorIcon");
  const errorInputWrapperClasses = classes.get("errorInputWrapper");

  const icons = useIcons({
    names: ["error"]
  });

  const Tooltip = useTooltip({
    content: errorMessage,
    anchorSelect: `#${name as string}_error_icon`,
    place: "top-end",
    variant: "error"
  });

  const Label = (
    <label
      htmlFor={name as string}
      hidden={label_hidden}
      className={labelClasses}
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
        className={inputClasses}
      />
    );
  }, [errorMessage, name, inputType, labelText, register, inputClasses]);

  const Error = React.useMemo(() => {
    return (
      <FieldError
        errorMessage={errorMessage}
        described_by={name as string}
        error_hidden={error_hidden}
        style={{ parentWrapper: { className: fieldErrorClasses } }}
      />
    );
  }, [errorMessage, name, error_hidden, fieldErrorClasses]);

  const ErrorIcon = errorMessage && (
    <icons.error
      id={`${name as string}_error_icon`}
      className={errorIconClasses}
    />
  );

  const FormField = (
    <div className={parentWrapperClasses}>
      <div className={labelInputWrapperClasses}>
        {Label}

        <div className={errorInputWrapperClasses}>
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
