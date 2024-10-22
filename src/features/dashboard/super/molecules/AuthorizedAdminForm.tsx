"use client";
import React from "react";
import {
  useAddAuthorizedAdmin,
  useAuthorizedAdminsForm
} from "../templates/AuthorizedAdmins.hooks";
import {
  BaseStyles,
  Children,
  FullStyles,
  HeadingElements,
  Styles
} from "@/tw-styled/types";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { FieldValues, UseFormRegister } from "react-hook-form";

type InputType = "text" | "password" | "checkbox" | "textarea";

type InputProps<T extends FieldValues> = {
  options?: {
    name: keyof T;
    type?: InputType;
    placeholder?: string;
    register?: UseFormRegister<T>;
  };
  style?: BaseStyles;
};

const Input: React.FC<InputProps<any>> = (props) => {
  const { options, style } = props;
  const styles = { input: { ...style } };
  const classes = useStyleToClass(styles);

  function handleCreateInput() {
    const { register, ...rest } = options || {};

    function setClassName() {
      return { className: classes.get("input") };
    }

    function setOptions() {
      return {
        ...rest,
        ...register?.(options?.name as string)
      };
    }

    switch (options?.type) {
      default:
        return React.createElement("input", {
          ...setOptions(),
          ...setClassName()
        });
      case "textarea":
        return React.createElement("textarea", {
          ...setOptions(),
          ...setClassName()
        });
    }
  }

  return handleCreateInput();
};

type LabelProps = {
  options?: {
    text: string;
    htmlFor: string;
    visuallyHidden?: boolean;
  };
  style?: BaseStyles;
};

const Label = (props: LabelProps) => {
  const { options, style } = props;
  const styles = { label: { ...style } };
  const classes = useStyleToClass(styles);

  return (
    <label
      htmlFor={options?.htmlFor}
      hidden={options?.visuallyHidden}
      className={classes.get("label")}
    >
      {options?.text}
    </label>
  );
};

type SubmitButtonProps = {
  options?: {
    text?: string;
    variant?: Styles["buttonVariant"];
  };
  style?: BaseStyles;
};

const SubmitButton = (props: SubmitButtonProps) => {
  const { options, style } = props;
  const styles = {
    button: { buttonVariant: options?.variant, ...style } satisfies FullStyles
  };
  const classes = useStyleToClass(styles);

  return (
    <button
      type="submit"
      className={classes.get("button")}
    >
      {options?.text || "Submit"}
    </button>
  );
};

type FormProps = {
  children?: Children;
  submitHandler: (e?: React.BaseSyntheticEvent) => Promise<void>;
  options?: { title?: string; heading?: HeadingElements };
  style?: {
    form?: BaseStyles;
    title?: BaseStyles;
  };
};

const Form = (props: FormProps) => {
  const { children, submitHandler, style, options } = props;
  const styles = { form: { ...style?.form }, title: { ...style?.title } };
  const classes = useStyleToClass(styles);

  return (
    <form
      onSubmit={submitHandler}
      className={classes.get("form")}
    >
      {options?.title &&
        React.createElement(
          options?.heading || "h3",
          {
            className: classes.get("title")
          },
          options.title
        )}

      {children}
    </form>
  );
};

export const AuthorizedAdminForm = () => {
  const { mutate } = useAddAuthorizedAdmin();
  const { methods, submitHandler } = useAuthorizedAdminsForm(mutate);

  return (
    <Form
      submitHandler={submitHandler}
      options={{ title: "Add Authorized Admins", heading: "h3" }}
    >
      <Label options={{ text: "Foobar", htmlFor: "email" }} />
      <Input
        options={{
          type: "text",
          name: "email",
          placeholder: "Email",
          register: methods.register
        }}
      />

      {methods.formState.errors && <span>{methods.formState.errors.email?.message}</span>}

      <SubmitButton
        options={{ variant: "primary" }}
        style={{ padding: "none" }}
      />
    </Form>
  );
};
