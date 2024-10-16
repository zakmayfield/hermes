import { UiClassesProp } from "@/tw-styled/types";
import { ButtonProps } from "./Button";
import React from "react";

export const useButtonUi = (props: UiClassesProp<ButtonProps>) => {
  const {
    text = "Submit",
    options: { type = "submit", isDisabled = false } = {},
    classes,
    handleClick
  } = props;

  const buttonClasses = classes.get("button");
  const textClasses = classes.get("text");

  const Text = React.useMemo(() => {
    return <span className={textClasses}>{text}</span>;
  }, [text, textClasses]);

  const Button = React.useMemo(() => {
    return (
      <button
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        className={buttonClasses}
        onClick={handleClick}
      >
        {Text}
      </button>
    );
  }, [type, isDisabled, buttonClasses, Text, handleClick]);

  return Button;
};
