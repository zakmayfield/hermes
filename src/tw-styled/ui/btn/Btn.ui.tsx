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

  const IconElement = React.useMemo(() => {
    return Icon && <Icon className={iconStyles} />;
  }, [Icon, iconStyles]);

  const TextElement = React.useMemo(() => {
    return <span className={textStyles}>{text}</span>;
  }, [text, textStyles]);

  const ContentWrapper = React.useMemo(() => {
    return (
      <div className={contentWrapperStyles}>
        {IconElement}
        {TextElement}
      </div>
    );
  }, [contentWrapperStyles, IconElement, TextElement]);

  const Btn = React.useMemo(() => {
    return (
      <button
        type={type}
        className={buttonStyles}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        onClick={handleClick}
        {...mouseActions}
      >
        {ContentWrapper}
      </button>
    );
  }, [type, isDisabled, buttonStyles, mouseActions, handleClick, ContentWrapper]);

  return Btn;
};
