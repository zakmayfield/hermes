"use client";

import { FC, FormEvent } from "react";
import { Flex, Heading } from "../containers";
import { Btn } from "../buttons";
import { classHooks } from "@/shared/hooks";

export type TFormStyleProps = {
  classList?: {
    formClassName?: string;
    headingClassName?: string;
    buttonClassName?: string;
  };
  style?: {
    padding?: "sm" | "md" | "lg";
    width?: "sm" | "md" | "lg";
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
  const { children, title, onSubmit, buttonText = "Submit", isPending } = props;
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

      <Flex
        style={{
          dir: "col",
          position: "left",
          gap: "lg"
        }}
      >
        {children}

        <Btn
          type="submit"
          text={buttonText}
          classList={{
            buttonClassName: classes.button
          }}
          style={{
            width: "full",
            isDisabled: isPending,
            isLoading: isPending
          }}
        />
      </Flex>
    </form>
  );
};
