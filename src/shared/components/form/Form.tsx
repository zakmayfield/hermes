"use client";

import { FC, FormEvent, useMemo } from "react";
import { merge } from "@/utils/ui";
import { Flex, Heading } from "../containers";
import { Btn } from "../buttons";

interface FormProps {
  children?: React.ReactNode;
  title?: string;
  buttonText?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  classList?: {
    formClassName?: string;
    headingClassName?: string;
    buttonClassName?: string;
  };
  style?: {
    padding?: "sm" | "md" | "lg";
    width?: "sm" | "md" | "lg";
  };
}

export const Form: FC<FormProps> = (props) => {
  const { children, title, onSubmit, buttonText = "Submit", style, classList } = props;

  const classes = useMemo(() => {
    const { formClassName, headingClassName, buttonClassName } = classList || {};
    const { padding = "lg", width = "full" } = style || {};

    const paddingMap = {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      none: "p-0"
    };

    const widthMap = {
      sm: "max-w-sm w-full",
      md: "max-w-lg w-full",
      lg: "max-w-2xl w-full",
      full: "w-full"
    };

    return {
      form: merge(`
        ${paddingMap[padding]}
        ${widthMap[width]}
        ${formClassName}
        `),
      heading: merge(`
        mb-6
        ${headingClassName}
        `),
      button: merge(`
        ${buttonClassName}
        `)
    };
  }, [classList]);

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
        dir="col"
        position="left"
        gap="lg"
      >
        {children}

        <Btn
          type="submit"
          text={buttonText}
          classList={{
            buttonClassName: classes.button
          }}
          style={{
            width: "full"
          }}
        />
      </Flex>
    </form>
  );
};
