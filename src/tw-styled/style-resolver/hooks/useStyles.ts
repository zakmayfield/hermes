import { useMemo } from "react";
import {
  BtnProps,
  FieldErrorProps,
  FormProps,
  HeadingProps,
  InputStyleProps,
  LayoutProps,
  PulseProps,
  SpinProps,
  TextProps,
  WrapperProps
} from "@/tw-styled/ui";
import { BtnVariants, ComponentStyleProp, StyleProp, Themes } from "@/tw-styled/types";

type StyleHookKeys =
  | "layout"
  | "wrapper"
  | "heading"
  | "text"
  | "form"
  | "input"
  | "fieldError"
  | "btn"
  | "pulse"
  | "spin";

type UseStyles<T> = {
  key: StyleHookKeys;
  style?: T;
  options?: {
    state?: { isLoading: boolean; isDisabled: boolean };
    theme?: Themes;
    input?: {
      is_error?: boolean;
    };
    btn?: {
      variant: BtnVariants;
    };
  };
};

type UseStyleProps = {
  style?: StyleProp;
  options?: StyleOptions;
};

type StyleOptions = {
  state?: { isLoading: boolean; isDisabled: boolean };
  theme?: Themes;
  input?: {
    is_error?: boolean;
  };
  btn?: {
    variant: BtnVariants;
  };
};

export const styleHooks = {
  useWrapperStyles: (props: UseStyleProps) => {
    const { style } = props;

    const styles = useMemo(() => {
      return {
        parentWrapper: {
          ...style?.parentWrapper
        },
        childrenWrapper: {
          flex: "col",
          gap: "sm",
          ...style?.childrenWrapper
        },
        children: {
          ...style?.children
        }
      } satisfies WrapperProps["style"];
    }, [style]);

    return styles;
  },

  useHeadingStyles: (props: UseStyleProps) => {
    const { style } = props;

    const styles = useMemo(() => {
      return {
        parentWrapper: {
          ...style?.parentWrapper
        },
        heading: {
          ...style?.heading
        },
        childrenWrapper: {
          ...style?.childrenWrapper
        }
      } satisfies HeadingProps["style"];
    }, [style]);

    return styles;
  },

  useLayoutStyles: (props: UseStyleProps) => {
    const { style } = props;

    const styles = useMemo(() => {
      return {
        parentWrapper: {
          ...style?.parentWrapper
        },
        headingWrapper: {
          ...style?.headingWrapper
        },
        heading: {
          ...style?.heading
        },
        headingChildren: {
          ...style?.headingChildren
        },
        childrenWrapper: {
          ...style?.childrenWrapper
        },
        children: {
          ...style?.children
        }
      } satisfies LayoutProps["style"];
    }, [style]);

    return styles;
  }
};

export const useStyles = <T extends ComponentStyleProp>(props: UseStyles<T>) => {
  const { key, style, options: { btn, input, state, theme = "dark" } = {} } = props;

  switch (key) {
    case "wrapper":
      return useMemo(() => {
        return {
          parentWrapper: {
            ...style?.parentWrapper
          },
          childrenWrapper: {
            flex: "col",
            gap: "sm",
            ...style?.childrenWrapper
          },
          children: {
            ...style?.children
          }
        } satisfies WrapperProps["style"];
      }, [style]);

    case "layout":
      return useMemo(() => {
        return {
          parentWrapper: {
            padding: "lg",
            flex: "col",
            gap: "lg",
            ...style?.parentWrapper
          },
          childrenWrapper: {
            flex: "col",
            gap: "md",
            flexWrap: "wrap",
            ...style?.childrenWrapper
          },
          children: {
            ...style?.children
          },
          headingWrapper: {
            flex: "col",
            gap: "sm",
            ...style?.headingWrapper
          },
          heading: {
            ...style?.heading
          },
          headingChildren: {
            flex: "row",
            gap: "sm",
            ...style?.headingChildren
          }
        } satisfies LayoutProps["style"];
      }, [style]);

    case "text":
      return useMemo(() => {
        return {
          parentWrapper: {
            ...style?.parentWrapper
          }
        } satisfies TextProps["style"];
      }, [style]);

    case "heading":
      return useMemo(() => {
        return {
          parentWrapper: {
            ...style?.parentWrapper
          },
          heading: {
            ...style?.heading
          },
          childrenWrapper: {
            ...style?.childrenWrapper
          }
        } satisfies HeadingProps["style"];
      }, [style]);

    case "form":
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

    case "input":
      return useMemo(() => {
        return {
          parentWrapper: {
            flex: "col",
            gap: "sm",
            width: "full",
            ...style?.parentWrapper
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
            className: input?.is_error ? "ring-4 ring-red-400" : "",
            ...style?.input
          },
          errorIcon: {
            className: "absolute right-3 top-[.375rem] text-red-500 text-xl",
            ...style?.errorIcon
          }
        } satisfies InputStyleProps["style"];
      }, [style, input]);

    case "fieldError":
      return useMemo(() => {
        return {
          parentWrapper: {
            paddingTop: "sm",
            className: "italic text-red-300",
            ...style?.parentWrapper
          }
        } satisfies FieldErrorProps["style"];
      }, [style, input]);

    case "pulse":
      return useMemo(() => {
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

        return {
          parentWrapper: {
            animate: "pulse",
            rounded: "lg",
            width: "md",
            flex: "col",
            gap: "sm",
            padding: "sm",
            className: themes[theme!].parentTheme,
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
            className: themes[theme!].childrenTheme,
            ...style?.children
          }
        } satisfies PulseProps["style"];
      }, [style, theme]);

    case "spin":
      return useMemo(() => {
        return {
          parentWrapper: {
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

    case "btn":
      return useMemo(() => {
        const is_disabled = state?.isLoading || state?.isDisabled;
        const variant = btn?.variant || "ghost";

        const getDynamicStyles = () => {
          const btn_state = is_disabled ? "disabled" : "enabled";

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
              border: btn?.variant === "ghost" ? "sm" : undefined,
              className: color_styles[variant][btn_state]
            },
            contentWrapper: {
              textColor: is_disabled ? "light" : undefined,
              textOpacity: is_disabled ? "medium" : undefined
            }
          } satisfies BtnProps["style"];
        };

        return {
          parentWrapper: {
            ...style?.parentWrapper
          },
          button: {
            padding: "sm",
            paddingX: "md",
            rounded: "md",
            buttonHeight: "sm",
            ...getDynamicStyles()?.button,
            ...style?.button
          },
          contentWrapper: {
            flex: "row",
            flexRowPosition: "center-center",
            ...getDynamicStyles()?.contentWrapper,
            ...style?.contentWrapper
          },
          content: {
            ...style?.content
          },
          spinner: {
            animate: "spin",
            ...style?.spinner
          }
        } satisfies BtnProps["style"];
      }, [style, state, btn]);
  }
};
