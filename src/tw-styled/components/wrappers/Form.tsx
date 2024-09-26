"use client";

import { FC, FormEvent } from "react";
import { IStyles } from "@/tw-styled/Styles";
import { useClassNames } from "@/tw-styled";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import { Btn } from "../btns";

type FormProps = {
  children?: React.ReactNode;
  title?: string;
  buttonText?: string;
  isPending?: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  style?: {
    form?: IStyles;
    heading?: IStyles;
    button?: IStyles;
  };
};

export const Form: FC<FormProps> = (props) => {
  const { children, title, onSubmit, buttonText = "Submit", isPending } = props;
  const classes = useClassNames({ ...props.style });

  return (
    <form
      className={classes.form}
      onSubmit={onSubmit}
    >
      {title && (
        <Heading
          as="h3"
          style={{
            wrapper: {
              className: classes.heading
            }
          }}
        >
          {title}
        </Heading>
      )}

      <Wrapper
        style={{
          wrapper: { flex: "col", gap: "lg" }
        }}
      >
        {children}

        <Btn
          type="submit"
          text={buttonText}
          isDisabled={isPending}
          isLoading={isPending}
          variant="ghost"
          style={{
            button: {
              width: "full",
              className: classes.button
            }
          }}
        />
      </Wrapper>
    </form>
  );
};
