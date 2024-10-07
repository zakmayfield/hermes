import React, { isValidElement, useMemo } from "react";
import {
  WrapperProps,
  HeadingProps,
  LayoutProps,
  TextProps,
  SpinProps,
  PulseProps,
  FieldErrorProps,
  FormProps,
  BtnProps,
  FieldError,
  Btn,
  FormFieldProps
} from "@/tw-styled/ui";
import { ResolvedClasses } from "@/tw-styled/types";
import { PiSpinnerGap } from "react-icons/pi";
import { merge, useIcons } from "@/tw-styled/tools";
import { utilityHooks } from "@/shared/hooks";

type Props<T> = { classes: ResolvedClasses } & Omit<T, "style">;

export const uiHooks = {
  useWrapperUi: (props: Props<WrapperProps>) => {
    const { as = "div", children, classes } = props;

    const getChilds = () =>
      useMemo(() => {
        const childs = React.Children.map(children, (child) => {
          if (isValidElement(child)) {
            return React.createElement(
              child.type,
              {
                ...child.props,
                key: child.key,
                className: classes.children
              },
              child.props.children
            );
          } else {
            return <div className={classes.children}>{children}</div>;
          }
        });

        return childs;
      }, [children, classes]);

    const getChildsWrapper = () => (
      <div className={classes.childrenWrapper}>{getChilds()}</div>
    );

    const getWrapper = () =>
      useMemo(() => {
        return React.createElement(
          as,
          { className: classes.parentWrapper },
          getChildsWrapper()
        );
      }, [as, classes]);

    const Wrapper = () => getWrapper();

    return { Wrapper };
  },

  useHeadingUi: (props: Props<HeadingProps>) => {
    const { as = "h1", text = "", children, classes } = props;

    const ChildrenWrapper = useMemo(() => {
      return <div className={classes.childrenWrapper}>{children}</div>;
    }, [children, classes]);

    const HeadingElement = useMemo(() => {
      return React.createElement(as, { className: classes.heading }, text);
    }, [as, text, classes]);

    const Heading = () => (
      <div className={classes.parentWrapper}>
        {HeadingElement}
        {ChildrenWrapper}
      </div>
    );

    return {
      Heading
    };
  },

  useLayoutUi: (props: Props<LayoutProps>) => {
    const { children, classes, headingAs = "h1", title, headingChildren } = props;

    const {
      parentWrapper: parentWrapperClasses,
      headingWrapper: headingWrapperClasses,
      heading: headingClasses,
      headingChildren: headingChildrenClasses,
      childrenWrapper: childrenWrapperClasses,
      children: childrenClasses
    } = classes;

    const getChilds = () =>
      useMemo(() => {
        const childs = React.Children.map(children, (child) => {
          if (isValidElement(child)) {
            return React.createElement(
              child.type,
              { ...child.props, key: child.key, className: childrenClasses },
              child.props.children
            );
          } else {
            return <div className={childrenClasses}>{child}</div>;
          }
        });

        return childs;
      }, [children, childrenClasses]);

    const getChildrenWrapper = () => (
      <div className={childrenWrapperClasses}>{getChilds()}</div>
    );

    const getHeadingChilds = () =>
      useMemo(() => {
        return React.Children.map(headingChildren, (child) => {
          if (isValidElement(child)) {
            return React.createElement(
              child.type,
              { ...child.props, key: child.key, className: headingChildrenClasses },
              child.props.children
            );
          } else {
            return <div className={headingChildrenClasses}>{child}</div>;
          }
        });
      }, [headingChildren, headingChildrenClasses]);

    const getHeadingElement = () =>
      useMemo(() => {
        return React.createElement(headingAs, { className: headingClasses }, title);
      }, [headingAs, title, headingClasses]);

    const getHeadingWrapper = () => (
      <div className={headingWrapperClasses}>
        {getHeadingElement()} {getHeadingChilds()}
      </div>
    );

    const getLayout = () => {
      return (
        <div className={parentWrapperClasses}>
          {getHeadingWrapper()} {getChildrenWrapper()}
        </div>
      );
    };

    const Layout = () => getLayout();
    return { Layout };
  },

  useTextUi: (props: Props<TextProps>) => {
    const { as = "p", children, described_by, is_hidden, classes } = props;

    const Text = () =>
      useMemo(() => {
        return React.createElement(
          as,
          {
            "aria-describedby": described_by,
            hidden: is_hidden,
            className: classes.parentWrapper
          },
          children
        );
      }, [as, children, described_by, is_hidden, classes]);

    return { Text };
  },

  useSpinUi: (props: Props<SpinProps>) => {
    const { classes } = props;

    const icon = <PiSpinnerGap className={classes.icon} />;
    const Spin = () => <div className={classes.parentWrapper}>{icon}</div>;

    return { Spin };
  },

  usePulseUi: (props: Props<PulseProps>) => {
    const { classes, size } = props;

    switch (size) {
      default:
        return () => (
          <div className={classes.parentWrapper}>
            <div className={classes.childrenWrapper}>
              <div className={classes.children} />
              <div className={merge("w-full " + classes.children)} />
            </div>
          </div>
        );
      case "md":
        return () => (
          <div className={classes.parentWrapper}>
            <div className={classes.childrenWrapper}>
              <div className={merge("w-1/3 " + classes.children)} />
              <div className={merge("flex-grow " + classes.children)} />
            </div>

            <div className={classes.childrenWrapper}>
              <div className={merge("flex-grow " + classes.children + " p-10")} />
              <div className={merge("w-1/3 " + classes.children)} />
            </div>
          </div>
        );
      case "lg":
        return () => (
          <div className={classes.parentWrapper}>
            <div className={classes.childrenWrapper}>
              <div className={merge("w-1/3 " + classes.children + " p-6")} />
              <div className={merge("flex-grow " + classes.children + " p-6")} />
            </div>

            <div className={classes.childrenWrapper}>
              <div className={merge("w-2/3 " + classes.children + " p-20")} />

              <div className={"flex-grow " + classes.childrenWrapper + " flex-col"}>
                <div className={merge(classes.children + " p-6")} />
                <div className={merge("flex-grow " + classes.children + " p-6")} />
              </div>
            </div>

            <div className={classes.childrenWrapper}>
              <div className={merge("flex-grow " + classes.children + " p-12")} />
              <div className={merge("flex-grow " + classes.children + " p-12")} />
            </div>
          </div>
        );
    }
  },

  useFieldErrorUi: (props: Props<FieldErrorProps>) => {
    const { errorMessage, described_by, error_hidden, classes } = props;

    const FieldError = () =>
      useMemo(() => {
        return (
          <p
            aria-describedby={described_by}
            hidden={error_hidden}
            className={classes.parentWrapper}
          >
            {errorMessage}
          </p>
        );
      }, [errorMessage, described_by, error_hidden, classes]);

    return { FieldError };
  },

  useFormUi: (props: Props<FormProps>) => {
    const {
      submitHandler,
      isPending = false,
      titleText,
      children,
      classes,
      buttonProps
    } = props;

    const {
      formStyles,
      titleStyles,
      childrenWrapperStyles,
      childrenStyles,
      buttonStyles
    } = classes;

    const Title = () =>
      useMemo(() => {
        return <h3 className={titleStyles}>{titleText}</h3>;
      }, [titleStyles, titleText]);

    const Button = () =>
      useMemo(() => {
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
      useMemo(() => {
        return React.Children.map(children, (child) => {
          if (isValidElement(child)) {
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
  },

  useBtnUi: (props: Props<BtnProps>) => {
    const {
      classes,
      type = "button",
      text = "Submit",
      mouseActions,
      isDisabled = false,
      Icon,
      handleClick
    } = props;

    const { buttonStyles, contentWrapperStyles, textStyles, iconStyles } = classes;

    const IconElement = () =>
      useMemo(() => {
        return Icon && <Icon className={iconStyles} />;
      }, [Icon, iconStyles]);

    const TextElement = () =>
      useMemo(() => {
        return <span className={textStyles}>{text}</span>;
      }, [text, textStyles]);

    const ContentWrapper = () => (
      <div className={contentWrapperStyles}>
        <IconElement />
        <TextElement />
      </div>
    );

    const Button = () =>
      useMemo(() => {
        return (
          <button
            type={type}
            className={buttonStyles}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            onClick={handleClick}
            {...mouseActions}
          >
            <ContentWrapper />
          </button>
        );
      }, [type, isDisabled, buttonStyles, handleClick]);

    const Btn = () => <Button />;

    return { Btn };
  },

  useFormFieldUi: (props: Props<FormFieldProps<any>>) => {
    const {
      classes: {
        parentWrapper,
        label,
        input,
        fieldError,
        labelInputWrapper,
        errorIcon,
        errorInputWrapper
      },
      inputType = "text",
      name,
      labelText,
      errorMessage,
      hiddenElements: { error_hidden, label_hidden, error_icon_hidden } = {},
      register
    } = props;

    const icons = useIcons({
      names: ["error"]
    });

    const { Tooltip } = utilityHooks.useTooltip({
      content: errorMessage,
      anchorSelect: `#${name as string}_error_icon`,
      place: "top-end",
      variant: "error"
    });

    const Label = () => (
      <label
        htmlFor={name as string}
        hidden={label_hidden}
        className={label}
      >
        {labelText}
      </label>
    );

    const Input = () => (
      <input
        {...register?.(name as string)}
        type={inputType}
        placeholder={labelText}
        aria-label={name as string}
        aria-invalid={!!errorMessage}
        className={input}
      />
    );

    const Error = () => (
      <FieldError
        errorMessage={errorMessage}
        described_by={name as string}
        error_hidden={error_hidden}
        style={{ parentWrapper: { className: fieldError } }}
      />
    );

    const ErrorIcon = () =>
      errorMessage && (
        <icons.error
          id={`${name as string}_error_icon`}
          className={errorIcon}
        />
      );

    const FormField = () => (
      <div className={parentWrapper}>
        <div className={labelInputWrapper}>
          <Label />

          <div className={errorInputWrapper}>
            <Input />
            <ErrorIcon />
            <Tooltip />
          </div>
        </div>

        <Error />
      </div>
    );

    return { FormField };
  }
};
