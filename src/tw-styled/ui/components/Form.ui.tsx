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
          initialButtonProps={{
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

  const Childs = () =>
    React.useMemo(() => {
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

  const ChildrenWrapper = () => (
    <div className={childrenWrapperStyles}>
      <Childs />
    </div>
  );

  const Form = () => {
    return (
      <form
        onSubmit={submitHandler}
        className={formStyles}
      >
        {titleText && <Title />}
        <ChildrenWrapper />
        <Button />
      </form>
    );
  };

  return { Form };
};
