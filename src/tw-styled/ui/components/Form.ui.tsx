import React from "react";
import { UiProps } from "@/tw-styled/types";
import { FormProps } from "./Form";
import { Btn } from "./Btn";

export const useFormUi = (props: UiProps<FormProps>) => {
  const {
    submitHandler,
    isPending = false,
    titleText,
    children,
    classes,
    buttonProps
  } = props;

  const { formStyles, titleStyles, childrenWrapperStyles, childrenStyles, buttonStyles } =
    classes;

  const Title = () =>
    React.useMemo(() => {
      return <h3 className={titleStyles}>{titleText}</h3>;
    }, [titleStyles, titleText]);

  const Button = () =>
    React.useMemo(() => {
      const {
        text = "Submit",
        variant = "ghost",
        width = "full",
        height = "none",
        size = "none"
      } = buttonProps || {};

      return (
        <Btn
          type="submit"
          isDisabled={isPending}
          text={text}
          options={{
            variant,
            width,
            height,
            size
          }}
          style={{
            buttonStyles: {
              className: buttonStyles
            }
          }}
        />
      );
    }, [buttonProps, buttonStyles, isPending]);

  const Children = React.useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.createElement(
          child.type,
          { ...child.props, className: childrenStyles },
          child.props.children
        );
      }
    });
  }, [children, childrenStyles]);

  const Form = (
    <form
      onSubmit={submitHandler}
      className={formStyles}
    >
      {titleText && <Title />}

      <div className={childrenWrapperStyles}>{Children}</div>

      <Button />
    </form>
  );

  return Form;
};
