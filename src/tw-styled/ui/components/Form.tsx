"use client";

import React, { FormEvent } from "react";
import { BtnVariants, ButtonStyleProps, DefaultStyleProps } from "@/tw-styled/types";
import { styleHooks, uiHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";

export type FormProps = {
  children?: React.ReactNode;
  titleText?: string;
  isPending?: boolean;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  button?: {
    buttonText?: string;
    buttonVariant?: BtnVariants;
    buttonWidth?: ButtonStyleProps["buttonWidth"];
  };
  style?: {
    formStyles?: DefaultStyleProps;
    titleStyles?: DefaultStyleProps;
    childrenWrapperStyles?: DefaultStyleProps;
    childrenStyles?: DefaultStyleProps;
    buttonStyles?: ButtonStyleProps;
  };
};

export const Form = (props: FormProps) => {
  const { style, ...rest } = props;

  const styles = styleHooks.useFormStyles({ style });
  const classes = useStyleResolver({ ...styles });
  const { Form } = uiHooks.useFormUi({ classes, ...rest });

  return <Form />;
};
