import {
  FormProps,
  HeadingProps,
  InputStyleProps,
  LayoutProps,
  PulseProps,
  WrapperProps
} from "../components";
import { BtnVariants, IStyles, Themes } from "../Styles";
import { style_maps } from "../utils/style-maps";

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
  },

  useDefaultInput: ({ is_error }: { is_error: boolean }) => {
    const defaultFormStyles: InputStyleProps["style"] = {
      wrapper: {
        flex: "col",
        gap: "sm",
        width: "full"
      },
      label: {
        fontSize: is_error ? "lg" : "md"
      },
      inputWrapper: {
        flex: "row",
        width: "full",
        className: "relative"
      },
      input: {
        width: "full",
        className: is_error ? "ring-4 ring-red-400" : ""
      },
      errorIcon: {
        className: "absolute right-3 top-[.375rem] text-red-500 text-xl"
      }
    };

    return defaultFormStyles;
  },

  useDefaultPulseLoader: (props: PulseProps) => {
    const { theme = "light", style } = props;

    function getTheme(theme: PulseProps["theme"]) {
      const themes = {
        light: {
          parentTheme: "bg-slate-100",
          childrenTheme: "bg-slate-300"
        },
        dark: {
          parentTheme: "bg-slate-600",
          childrenTheme: "bg-slate-700"
        }
      };

      return themes[theme!];
    }

    const defaultPulseLoaderStyles: PulseProps["style"] = {
      wrapper: {
        animate: "pulse",
        rounded: "lg",
        width: "md",
        flex: "col",
        gap: "sm",
        padding: "sm",
        className: getTheme(theme).parentTheme,
        ...style?.wrapper
      },
      childrenWrapper: {
        flex: "row",
        gap: "sm"
      },
      children: {
        animate: "pulse",
        padding: "md",
        rounded: "xl",
        className: getTheme(theme).childrenTheme,
        ...style?.children
      }
    };

    return defaultPulseLoaderStyles;
  }
};
