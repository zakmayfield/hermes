"use client";

import React, { FC, FormEvent } from "react";
import { IStyles } from "@/tw-styled/Styles";
import { useClassNames } from "@/tw-styled";
import { Heading } from "./Heading";
import { Btn } from "../btns";
import { styleHooks } from "@/tw-styled/hooks";

export type FormProps = {
  children?: React.ReactNode;
  title?: string;
  buttonText?: string;
  isPending?: boolean;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  style?: {
    form?: IStyles;
    heading?: IStyles;
    contentWrapper?: IStyles;
    button?: IStyles;
  };
};

export const Form: FC<FormProps> = (props) => {
  const { children, title, onSubmit, buttonText = "Submit", isPending, style } = props;
  const defaultStyles = styleHooks.useDefaultForm();

  const styles: FormProps["style"] = {
    ...style,
    form: {
      ...defaultStyles.form,
      ...style?.form
    },
    heading: {
      ...defaultStyles.heading,
      ...style?.heading
    },
    button: {
      ...defaultStyles.button,
      ...style?.button
    },
    contentWrapper: {
      ...defaultStyles.contentWrapper,
      ...style?.contentWrapper
    }
  };

  const classes = useClassNames({ ...styles });

  const heading = title && (
    <Heading
      as="h3"
      style={{ wrapper: { className: classes.heading } }}
    >
      {title}
    </Heading>
  );

  const button = (
    <Btn
      type="submit"
      text={buttonText}
      isDisabled={isPending}
      isLoading={isPending}
      variant="ghost"
      style={{
        button: {
          className: classes.button
        }
      }}
    />
  );

  return (
    <form
      className={classes.form}
      onSubmit={onSubmit}
    >
      {heading}
      <div className={classes.contentWrapper}>
        {children}
        {button}
      </div>
    </form>
  );
};
