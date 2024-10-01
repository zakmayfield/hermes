"use client";

import React, { FC, FormEvent } from "react";
import { Btn } from "../btns";
import { StyleProps } from "@/tw-styled/types";
import { useClassNameResolver, useStyles } from "@/tw-styled";

export type FormProps = {
  children?: React.ReactNode;
  title?: string;
  buttonText?: string;
  isPending?: boolean;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  style?: {
    form?: StyleProps;
    heading?: StyleProps;
    contentWrapper?: StyleProps;
    button?: StyleProps;
  };
};

export const Form: FC<FormProps> = (props) => {
  const { children, title, onSubmit, buttonText = "Submit", isPending, style } = props;

  const styles = useStyles({
    key: "form",
    style
  });
  const classes = useClassNameResolver({ ...styles });

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
