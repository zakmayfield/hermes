"use client";

import { FC, FormEvent } from "react";
import { Heading, Wrapper } from "../containers";
import { Btn } from "../buttons";
import { utilityHooks } from "@/shared/hooks";
import { IStyles } from "@/types/Styles";

export type TFormStyleProps = {
  classList?: {
    formClassName?: string;
    headingClassName?: string;
    buttonClassName?: string;
  };
  style?: {
    form?: IStyles;
    heading?: IStyles;
    button?: IStyles;
  };
};

type FormProps = TFormStyleProps & {
  children?: React.ReactNode;
  title?: string;
  buttonText?: string;
  isPending?: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const Form: FC<FormProps> = (props) => {
  const { children, title, onSubmit, buttonText = "Submit", isPending, style } = props;
  const classes = utilityHooks.useClassNames({ ...props.style });

  return (
    <form
      className={classes.form}
      onSubmit={onSubmit}
    >
      {title && (
        <Heading
          className={classes.heading}
          as="h3"
          content={title}
        />
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
          style={{
            button: {
              width: "full",
              buttonHeight: "md",
              rounded: "md"
            }
          }}
          classList={{
            buttonClassName: classes.button
          }}
        />
      </Wrapper>
    </form>
  );
};
