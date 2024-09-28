"use client";

import React, { FC, FormEvent } from "react";
import { IStyles } from "@/tw-styled/Styles";
import { useClassNames } from "@/tw-styled";
import { Btn } from "../btns";
import { styleHooks, useStyles } from "@/tw-styled/hooks";

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

  // const styles = useStyles({
  //   key: "form",
  //   style
  // });
  const x = styleHooks.useFormStyles({ ...style });
  const classes = useClassNames({ ...x });

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
