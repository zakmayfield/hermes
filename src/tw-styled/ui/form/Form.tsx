"use client";

import React from "react";
import { Children, BaseStyleProps, IButton } from "@/tw-styled/types";
import { useStyleResolver } from "@/tw-styled/tools";
import { defaultStyles } from "./Form.defaultStyles";
import { useFormUi } from "./Form.ui";

export type FormProps = {
  children?: Children;
  titleText?: string;
  isPending?: boolean;
  submitHandler?: (e?: React.BaseSyntheticEvent) => Promise<void>;
  buttonProps?: {
    text?: string;
    variant?: IButton["buttonVariant"];
    width?: IButton["buttonWidth"];
    height?: IButton["buttonHeight"];
    size?: IButton["buttonSize"];
  };
  style?: {
    formStyles?: BaseStyleProps;
    titleStyles?: BaseStyleProps;
    childrenWrapperStyles?: BaseStyleProps;
    childrenStyles?: BaseStyleProps;
    buttonStyles?: BaseStyleProps;
  };
};

export const Form = (props: FormProps) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const Form = useFormUi({ classes, ...rest });

  return Form;
};
