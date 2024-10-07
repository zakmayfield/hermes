"use client";

import React from "react";
import { Children, DefaultStyleProps, IButton } from "@/tw-styled/types";
import { uiHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";
import { defaultStyles } from "./Form.defaultStyles";

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
    formStyles?: DefaultStyleProps;
    titleStyles?: DefaultStyleProps;
    childrenWrapperStyles?: DefaultStyleProps;
    childrenStyles?: DefaultStyleProps;
    buttonStyles?: DefaultStyleProps;
  };
};

export const Form = (props: FormProps) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const { Form } = uiHooks.useFormUi({ classes, ...rest });

  return <Form />;
};
