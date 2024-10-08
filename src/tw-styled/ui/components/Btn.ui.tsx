import { UiProps } from "@/tw-styled/types";
import { BtnProps } from "./Btn";
import React from "react";

export const useBtnUi = (props: UiProps<BtnProps>) => {
  const {
    classes,
    type = "button",
    text = "Submit",
    mouseActions,
    isDisabled = false,
    Icon,
    handleClick
  } = props;

  const { buttonStyles, contentWrapperStyles, textStyles, iconStyles } = classes;

  const IconElement = () =>
    React.useMemo(() => {
      return Icon && <Icon className={iconStyles} />;
    }, [Icon, iconStyles]);

  const TextElement = () =>
    React.useMemo(() => {
      return <span className={textStyles}>{text}</span>;
    }, [text, textStyles]);

  const ContentWrapper = () => (
    <div className={contentWrapperStyles}>
      <IconElement />
      <TextElement />
    </div>
  );

  const Button = () =>
    React.useMemo(() => {
      return (
        <button
          type={type}
          className={buttonStyles}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          onClick={handleClick}
          {...mouseActions}
        >
          <ContentWrapper />
        </button>
      );
    }, [type, isDisabled, buttonStyles, handleClick]);

  const Btn = () => <Button />;

  return { Btn };
};
