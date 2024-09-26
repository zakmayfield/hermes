import { FormProps, HeadingProps, LayoutProps, WrapperProps } from "../components";
import { BtnVariants, IStyles } from "../Styles";

export const styleHooks = {
  useButtonVariant: (
    variant: BtnVariants,
    buttonState: { isLoading: boolean; isDisabled: boolean }
  ) => {
    const getHoverStyle = (base: string, disabled: string) => {
      return buttonState.isDisabled || buttonState.isLoading ? disabled : base;
    };

    const getTextOpacity = (): IStyles["textOpacity"] => {
      return buttonState.isDisabled || buttonState.isLoading ? "light" : undefined;
    };

    const defaultStyles: IStyles = {
      padding: "sm",
      paddingX: "md",
      rounded: "md",
      buttonHeight: "sm",
      textOpacity: getTextOpacity()
    };

    switch (variant) {
      case "primary":
        const primary_hover = getHoverStyle(
          "bg-green-700 hover:bg-opacity-80",
          "bg-green-700 bg-opacity-50"
        );

        const primary_styles: IStyles = {
          ...defaultStyles,
          className: primary_hover
        };
        return primary_styles;

      case "warning":
        const warning_hover = getHoverStyle(
          "bg-red-700 hover:bg-opacity-80",
          "bg-red-700 bg-opacity-50"
        );
        const warning_styles: IStyles = {
          ...defaultStyles,
          className: warning_hover
        };
        return warning_styles;

      default:
        const ghost_hover = getHoverStyle(
          "hover:bg-white hover:bg-opacity-10",
          "bg-slate-600 bg-opacity-20 border-gray-200 border-opacity-50"
        );

        const ghost_styles: IStyles = {
          ...defaultStyles,
          className: ghost_hover,
          border: "sm"
        };
        return ghost_styles;
    }
  },

  useDefaultHeading: () => {
    const defaultHeadingStyles: HeadingProps["style"] = {
      wrapper: {},
      childrenWrapper: {
        flex: "row",
        gap: "sm"
      }
    };

    return defaultHeadingStyles;
  },

  useDefaultLayout: () => {
    const defaultLayoutStyles: LayoutProps["style"] = {
      wrapper: {
        padding: "lg",
        flex: "col",
        gap: "lg"
      },
      children: {
        flex: "col",
        gap: "md",
        flexWrap: "wrap",
        flexSize: "grow"
      }
    };

    return defaultLayoutStyles;
  },

  useDefaultWrapper: () => {
    const defaultWrapperStyles: WrapperProps["style"] = {
      parentWrapper: {
        flex: "row"
      },
      childrenWrapper: {
        flex: "col",
        gap: "sm",
        width: "full"
      }
    };

    return defaultWrapperStyles;
  },

  useDefaultForm: () => {
    const defaultFormStyles: FormProps["style"] = {
      form: {
        flex: "col",
        gap: "lg",
        width: "md",
        rounded: "lg",
        padding: "lg"
      },
      heading: {
        width: "full"
      },
      button: {
        width: "full"
      },
      contentWrapper: {
        flex: "col",
        gap: "lg"
      }
    };

    return defaultFormStyles;
  }
};
