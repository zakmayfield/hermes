"use client";

import React from "react";
import { Children, BaseStyles, FullStyles, Styles } from "@/tw-styled/types";
import { useStyleToClass } from "@/tw-styled/tools";
import { defaultStyles } from "./Form.defaultStyles";
import { useFormUi } from "./Form.ui";
import { useDefaultStyles } from "../hooks";

export type FormProps = {
  children?: Children;
  titleText?: string;
  isPending?: boolean;
  submitHandler?: (e?: React.BaseSyntheticEvent) => Promise<void>;
  buttonProps?: {
    text?: string;
    variant?: Styles["buttonVariant"];
    size?: Styles["buttonSize"];
  };
  style?: {
    formStyles?: BaseStyles;
    titleStyles?: BaseStyles;
    childrenWrapperStyles?: BaseStyles;
    childrenStyles?: BaseStyles;
    buttonStyles?: FullStyles;
  };
};

export const Form = (props: FormProps) => {
  const { style, ...rest } = props;

  const styles = useDefaultStyles(style, defaultStyles);
  const classes = useStyleToClass(styles);
  const Form = useFormUi({ classes, ...rest });

  return Form;
};
