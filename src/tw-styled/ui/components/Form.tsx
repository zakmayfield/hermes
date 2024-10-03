"use client";

import React, { FormEvent } from "react";
import { StyleProps } from "@/tw-styled/types";
import { styleHooks, uiHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";

export type FormProps = {
  children?: React.ReactNode;
  titleText?: string;
  buttonText?: string;
  isPending?: boolean;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  style?: {
    formStyles?: StyleProps;
    titleStyles?: StyleProps;
    childrenWrapperStyles?: StyleProps;
    childrenStyles?: StyleProps;
    buttonStyles?: StyleProps;
  };
};

export const Form = (props: FormProps) => {
  const { style, ...rest } = props;

  const styles = styleHooks.useFormStyles({ style });
  const classes = useStyleResolver({ ...styles });
  const { Form } = uiHooks.useFormUi({ classes, ...rest });

  return <Form />;
};
