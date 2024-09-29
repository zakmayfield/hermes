"use client";

import React, { FC, FormEvent } from "react";
import { IStyles } from "@/tw-styled/Styles";
import { Btn } from "../btns";
import { styleHooks } from "@/tw-styled/hooks";
import { useClassNames } from "@/tw-styled/hooks/useClassNames";

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

  const styles = styleHooks.useFormStyles(style);
  const classes = useClassNames(styles);

  const heading = title && <h3 className={classes.heading}>{title}</h3>;

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
