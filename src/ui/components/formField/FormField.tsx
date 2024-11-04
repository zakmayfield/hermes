import React from "react";
import { useStyleToClass } from "@/tw-styled/tools";
import { FormFieldProps } from "./FormField.types";
import { useIcons, useTooltip } from "@/shared/hooks";
import { FieldError } from "@/ui/components";

export const FormField: React.FC<FormFieldProps<any>> = (props) => {
  const {
    style,
    errorMessage,
    name,
    inputType,
    labelText,
    hiddenElements: { error_hidden, label_hidden } = {},
    register
  } = props;

  const classes = useStyleToClass({
    parentWrapper: {
      display: "flex-col",
      gap: "sm",
      ...style?.parentWrapper
    },
    label: {
      ...style?.label
    },
    input: {
      flexSize: "grow",
      ...style?.input
    },
    fieldError: {
      className: "italic text-red-300",
      ...style?.fieldError
    },
    labelInputWrapper: {
      display: "flex-col",
      gap: "sm",
      ...style?.labelInputWrapper
    },
    errorIcon: {
      position: "absolute",
      fontSize: "lg",
      className: "text-red-500 right-2 h-full",
      ...style?.errorIcon
    },
    errorInputWrapper: {
      display: "flex-row",
      width: "full",
      position: "relative",
      ...style?.errorInputWrapper
    }
  });

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
        message={errorMessage}
        described_by={name as string}
        error_hidden={error_hidden}
        style={{ className: fieldErrorClasses }}
      />
    );
  }, [errorMessage, name, error_hidden, fieldErrorClasses]);

  const ErrorIcon = errorMessage && (
    <icons.error
      id={`${name as string}_error_icon`}
      className={errorIconClasses}
    />
  );

  return (
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
};
