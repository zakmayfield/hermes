import React, { isValidElement, useMemo } from "react";
import {
  WrapperProps,
  HeadingProps,
  LayoutProps,
  TextProps,
  SpinProps,
  PulseProps,
  FieldErrorProps,
  InputProps,
  FormProps,
  BtnProps,
  FieldError,
  Btn
} from "@/tw-styled/ui";
import { ResolvedClasses } from "@/tw-styled/types";
import { PiSpinnerGap } from "react-icons/pi";
import { merge, useIcons, useStyleResolver } from "@/tw-styled/tools";
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

    // TODO: *** when updating styles via the style prop there is a runtime error stating that either more or fewer hooks were rendered ***

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
    const { message, described_by, is_error_hidden, classes } = props;

    const FieldError = () =>
      useMemo(() => {
        return (
          <p
            aria-describedby={described_by}
            hidden={is_error_hidden}
            className={classes.parentWrapper}
          >
            {message}
          </p>
        );
      }, [message, described_by, is_error_hidden, classes]);

    return { FieldError };
  },

  useInputUi: (props: Props<InputProps<any>>) => {
    const {
      classes,
      register,
      name,
      labelText,
      error,
      type,
      is_label_hidden,
      is_error_hidden,
      is_error_icon_hidden
    } = props;

    const {
      parentWrapperStyles,
      labelStyles,
      inputWrapperStyles,
      inputStyles,
      errorIconStyles
    } = classes;

    const inputName = name as string;

    const icons = useIcons({
      names: ["error"]
    });

    const { Tooltip } = utilityHooks.useTooltip({
      content: error?.message,
      anchorSelect: `#${inputName}_error_icon`,
      place: "top-end",
      variant: "error"
    });

    const InputElement = () =>
      useMemo(() => {
        return (
          <input
            className={inputStyles}
            type={type}
            placeholder={labelText}
            aria-label={inputName}
            aria-invalid={!!error}
            {...register?.(inputName)}
          />
        );
      }, [inputStyles, type, inputName]);

    const ErrorIconElement = () =>
      error && (
        <icons.error
          id={`${inputName}_error_icon`}
          className={errorIconStyles}
        />
      );

    const TooltipElement = () => error && <Tooltip />;

    const InputWrapper = () => (
      <div className={inputWrapperStyles}>
        <InputElement />
        <ErrorIconElement />
        <TooltipElement />
      </div>
    );

    const LabelElement = () =>
      useMemo(() => {
        return (
          <label
            htmlFor={inputName}
            hidden={is_label_hidden}
            className={labelStyles}
          >
            {labelText}
          </label>
        );
      }, [labelText, labelStyles, inputName, is_label_hidden]);

    const ErrorElement = () =>
      useMemo(() => {
        return (
          <FieldError
            message={error?.message}
            described_by={inputName}
            is_error_hidden={is_error_hidden}
          />
        );
      }, [error, inputName, is_error_hidden]);

    const Input = () => (
      <div className={parentWrapperStyles}>
        <LabelElement />
        <InputWrapper />
        <ErrorElement />
      </div>
    );

    return { Input };
  },

  useFormUi: (props: Props<FormProps>) => {
    const {
      titleText,
      children,
      isPending = false,
      onSubmit,
      classes,
      button: {
        buttonText = "Submit",
        buttonVariant = "ghost",
        buttonWidth = "full"
      } = {}
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

    const buttonClasses = useStyleResolver({
      button: {
        buttonVariant,
        buttonWidth,
        padding: "sm",
        paddingX: "md",
        rounded: "md",
        buttonHeight: "sm",
        border: buttonVariant === "ghost" ? "sm" : "none",
        className: buttonStyles
      }
    });
    const Button = () =>
      useMemo(() => {
        return (
          <button
            type="submit"
            disabled={isPending}
            aria-disabled={isPending}
            className={buttonClasses.button}
          >
            {buttonText}
          </button>
        );
      }, [buttonText, buttonStyles, isPending, buttonVariant, buttonClasses]);

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
          onSubmit={onSubmit}
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
  }
};
