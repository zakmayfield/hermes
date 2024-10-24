import React from "react";
import { UiClassesProp } from "@/tw-styled/types";
import { FormProps } from "./Form";
import { Button2 } from "../button2/Button";

export const useFormUi = (props: UiClassesProp<FormProps>) => {
  const {
    submitHandler,
    isPending = false,
    titleText,
    children,
    classes,
    buttonProps
  } = props;

  const formStyles = classes.get("formStyles");
  const titleStyles = classes.get("titleStyles");
  const childrenWrapperStyles = classes.get("childrenWrapperStyles");
  const childrenStyles = classes.get("childrenStyles");
  const buttonStyles = classes.get("buttonStyles");

  const Title = titleText && <h3 className={titleStyles}>{titleText}</h3>;

  const Btn = React.useMemo(() => {
    return (
      <Button2
        text={buttonProps?.text}
        options={{
          type: "submit",
          isDisabled: isPending,
          variant: buttonProps?.variant
        }}
        style={{
          button: {
            width: "full",
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
      {Title}

      <div className={childrenWrapperStyles}>{Children}</div>

      {Btn}
    </form>
  );

  return Form;
};
