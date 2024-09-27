import {
  BtnProps,
  FormProps,
  HeadingProps,
  InputStyleProps,
  LayoutProps,
  PulseProps,
  TextProps,
  WrapperProps
} from "../components";
import { BtnVariants, IStyles } from "../Styles";

export const styleHooks = {
  useDefaultBtn: ({
    variant,
    state,
    style
  }: {
    variant: BtnVariants;
    state: { isLoading: boolean; isDisabled: boolean };
    style: BtnProps["style"];
  }) => {
    const is_disabled = state.isDisabled || state.isLoading;

    const getBaseStyles = (): BtnProps["style"] => {
      return {
        parentWrapper: {},
        button: {
          padding: "sm",
          paddingX: "md",
          rounded: "md",
          buttonHeight: "sm"
        },
        contentWrapper: {
          flex: "row",
          flexPosition: "center-center"
        },
        content: {},
        spinner: {
          className: "animate-spin"
        }
      };
    };

    const getDynamicStyles = (): BtnProps["style"] => {
      const btn_state = is_disabled ? "disabled" : "enabled";

      const border: IStyles["border"] = variant === "ghost" ? "sm" : "none";
      const textOpacity: IStyles["textOpacity"] = is_disabled ? "light" : "none";

      const color_styles = {
        ghost: {
          enabled: "hover:bg-white hover:bg-opacity-10",
          disabled: "bg-slate-600 bg-opacity-20 border-gray-200 border-opacity-50"
        },
        primary: {
          enabled: "bg-green-700 hover:bg-opacity-80",
          disabled: "bg-green-700 bg-opacity-50"
        },
        warning: {
          enabled: "bg-red-700 hover:bg-opacity-80",
          disabled: "bg-red-700 bg-opacity-50"
        }
      };

      return {
        button: {
          border,
          className: color_styles[variant][btn_state]
        },
        contentWrapper: {
          textOpacity
        }
      };
    };

    const styles: BtnProps["style"] = {
      parentWrapper: {
        ...getBaseStyles()?.parentWrapper,
        ...style?.parentWrapper
      },
      button: {
        ...getBaseStyles()?.button,
        ...getDynamicStyles()?.button,
        ...style?.button
      },
      contentWrapper: {
        ...getBaseStyles()?.contentWrapper,
        ...getDynamicStyles()?.contentWrapper,
        ...style?.contentWrapper
      },
      content: {
        ...getBaseStyles()?.content,
        ...style?.content
      },
      spinner: {
        ...getBaseStyles()?.spinner,
        ...style?.spinner
      }
    };

    return { ...styles };
  },

  useDefaultHeading: ({ style }: { style: HeadingProps["style"] }) => {
    const defaultHeadingStyles: HeadingProps["style"] = {
      wrapper: {
        ...style?.wrapper
      },
      childrenWrapper: {
        flex: "row",
        gap: "sm",
        ...style?.childrenWrapper
      }
    };

    return defaultHeadingStyles;
  },

  useDefaultLayout: ({ style }: { style: LayoutProps["style"] }) => {
    const defaultLayoutStyles: LayoutProps["style"] = {
      wrapper: {
        padding: "lg",
        flex: "col",
        gap: "lg",
        ...style?.wrapper
      },
      children: {
        flex: "col",
        gap: "md",
        flexWrap: "wrap",
        flexSize: "grow",
        ...style?.wrapper
      }
    };

    return defaultLayoutStyles;
  },

  useDefaultWrapper: ({ style }: { style: WrapperProps["style"] }) => {
    const defaultWrapperStyles: WrapperProps["style"] = {
      parentWrapper: {
        flex: "row",
        ...style?.parentWrapper
      },
      childrenWrapper: {
        flex: "col",
        gap: "sm",
        width: "full",
        ...style?.childrenWrapper
      }
    };

    return defaultWrapperStyles;
  },

  useDefaultText: ({ style }: { style: TextProps["style"] }) => {
    const defaultTextStyles: TextProps["style"] = {
      wrapper: {
        ...style?.wrapper
      }
    };

    return defaultTextStyles;
  },

  useDefaultForm: ({ style }: { style: FormProps["style"] }) => {
    const defaultFormStyles: FormProps["style"] = {
      form: {
        flex: "col",
        gap: "lg",
        width: "md",
        rounded: "lg",
        padding: "lg",
        ...style?.form
      },
      heading: {
        width: "full",
        ...style?.heading
      },
      button: {
        width: "full",
        ...style?.button
      },
      contentWrapper: {
        flex: "col",
        gap: "lg",
        ...style?.contentWrapper
      }
    };

    return defaultFormStyles;
  },

  useDefaultInput: ({
    is_error,
    style
  }: {
    is_error: boolean;
    style: InputStyleProps["style"];
  }) => {
    const defaultFormStyles: InputStyleProps["style"] = {
      wrapper: {
        flex: "col",
        gap: "sm",
        width: "full",
        ...style?.wrapper
      },
      label: {
        ...style?.label
      },
      inputWrapper: {
        flex: "row",
        width: "full",
        className: "relative",
        ...style?.inputWrapper
      },
      input: {
        width: "full",
        className: is_error ? "ring-4 ring-red-400" : "",
        ...style?.input
      },
      errorIcon: {
        className: "absolute right-3 top-[.375rem] text-red-500 text-xl",
        ...style?.errorIcon
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
