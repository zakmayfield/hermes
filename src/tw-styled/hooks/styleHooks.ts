import { useCallback, useMemo } from "react";
import {
  BtnProps,
  FormProps,
  HeadingProps,
  InputStyleProps,
  LayoutProps,
  PulseProps,
  SpinProps,
  TextProps,
  WrapperProps
} from "../components";
import { BtnVariants, IStyles } from "../Styles";

// TODO: TEST memoized parent objects
export const styleHooks = useMemo(() => {
  return {
    useBtnStyles: (props: {
      variant: BtnVariants;
      state: { isLoading: boolean; isDisabled: boolean };
      style: BtnProps["style"];
    }) => {
      const { variant, state, style } = useMemo(() => {
        const { variant, state, style } = props;
        return {
          variant,
          state,
          style
        };
      }, [props]);

      const is_disabled = useMemo(() => state.isDisabled || state.isLoading, [state]);

      const getBaseStyles = useCallback((): BtnProps["style"] => {
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
      }, [style]);

      const getDynamicStyles = useCallback((): BtnProps["style"] => {
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
      }, [is_disabled]);

      return useMemo((): BtnProps["style"] => {
        return {
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
      }, [is_disabled, style]);
    },

    useHeadingStyles: (props: HeadingProps["style"]) => {
      const { style } = useMemo(() => {
        const style = props;
        return {
          style
        };
      }, [props]);

      return useMemo(() => {
        return {
          wrapper: {
            ...style?.wrapper
          },
          childrenWrapper: {
            flex: "row",
            gap: "sm",
            ...style?.childrenWrapper
          }
        } satisfies HeadingProps["style"];
      }, [style]);
    },

    useLayoutStyles: (props: LayoutProps["style"]) => {
      const { style } = useMemo(() => {
        const style = props;
        return {
          style
        };
      }, [props]);

      return useMemo(() => {
        return {
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
        } satisfies LayoutProps["style"];
      }, []);
    },

    useWrapperStyles: (props: WrapperProps["style"]) => {
      const { style } = useMemo(() => {
        const style = props;
        return {
          style
        };
      }, [props]);

      return useMemo(() => {
        return {
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
        } satisfies WrapperProps["style"];
      }, [style]);
    },

    useTextStyles: (props: TextProps["style"]) => {
      const { style } = useMemo(() => {
        const style = props;
        return {
          style
        };
      }, [props]);

      return useMemo(() => {
        return {
          wrapper: {
            ...style?.wrapper
          }
        } satisfies TextProps["style"];
      }, [style]);
    },

    useFormStyles: (props: FormProps["style"]) => {
      const { style } = useMemo(() => {
        const style = props;
        return {
          style
        };
      }, [props]);

      return useMemo(() => {
        return {
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
        } satisfies FormProps["style"];
      }, [style]);
    },

    useInputStyles: (props: { is_error: boolean; style: InputStyleProps["style"] }) => {
      const { is_error, style } = useMemo(() => {
        const { is_error, style } = props;
        return {
          is_error,
          style
        };
      }, [props]);

      return useMemo(() => {
        return {
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
        } satisfies InputStyleProps["style"];
      }, [style, is_error]);
    },

    usePulseStyles: (props: PulseProps) => {
      const { theme, style } = useMemo(() => {
        const { theme = "light", style } = props;

        return {
          theme,
          style
        };
      }, [props]);

      const getTheme = useCallback((theme: PulseProps["theme"]) => {
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
      }, []);

      return useMemo(() => {
        return {
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
            gap: "sm",
            ...style?.childrenWrapper
          },
          children: {
            animate: "pulse",
            padding: "md",
            rounded: "xl",
            className: getTheme(theme).childrenTheme,
            ...style?.children
          }
        } satisfies PulseProps["style"];
      }, [style, theme]);
    },

    useSpinStyles: (props: SpinProps) => {
      const { style } = useMemo(() => {
        const { style } = props;
        return {
          style
        };
      }, [props]);

      return useMemo(() => {
        return {
          wrapper: {
            ...style?.wrapper
          },
          icon: {
            place: "center",
            fontSize: "lg",
            animate: "spin",
            ...style?.icon
          }
        } satisfies SpinProps["style"];
      }, [style]);
    }
  };
}, []);
