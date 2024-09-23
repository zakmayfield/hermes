"use client";

import { FC, FormEvent } from "react";
import { Heading, Wrapper } from "../containers";
import { Btn } from "../buttons";
import { classHooks } from "@/shared/hooks";
import { IBaseStyles, IFlexStyles, IOtherStyles } from "@/types/Styles";

export type TFormStyleProps = {
  classList?: {
    formClassName?: string;
    headingClassName?: string;
    buttonClassName?: string;
  };
  style?: {
    form?: IBaseStyles & IFlexStyles & IOtherStyles;
    heading?: IBaseStyles & IFlexStyles & IOtherStyles;
    button?: IBaseStyles & IFlexStyles & IOtherStyles;
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
  const classes = classHooks.useFormClasses({ ...props });

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
          flex: "col",
          gap: "lg"
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
