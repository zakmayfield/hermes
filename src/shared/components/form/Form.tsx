"use client";

import { FormEvent, useMemo } from "react";
import { merge } from "@/utils/ui";
import { Flex, Heading } from "../containers";
import { Btn } from "../buttons";

type TFormProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  submit(e: FormEvent<HTMLFormElement>): void;

  buttonText?: string;
  padding?: "sm" | "md" | "lg";
  width?: "sm" | "md" | "lg";
};

export const Form = (props: TFormProps) => {
  const {
    children,
    className,
    title,
    submit,
    buttonText = "Submit",
    padding = "lg",
    width = "full"
  } = props;

  const classList = useMemo(() => {
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

    return merge(`
      ${paddingMap[padding]}
      ${widthMap[width]}
      py-12
      ${className}
    `);
  }, [className, padding, width]);

  return (
    <form
      onSubmit={(e) => submit(e)}
      className={classList}
    >
      {title && (
        <Heading
          as="h3"
          content={title}
          className="mb-6"
        />
      )}

      <Flex
        dir="col"
        position="left"
        gap="lg"
      >
        {children}

        <Btn
          text={buttonText}
          width="full"
          type="submit"
        />
      </Flex>
    </form>
  );
};
