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

type HooksMap = Record<StyleHookKeys, HooksMapValue>;
type HooksMapValue = Record<any, any>;

export const useStyles = <T extends StyleObj | undefined>(props: UseStyles<T>) => {
  const { key, style, options = {} } = props;

  const hooksMap = useMemo(() => {
    return {
      layout: useMemo(() => {
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
            flexSize: "grow",
            ...style?.childrenWrapper
          }
        } satisfies LayoutProps["style"];
      }, [style]),

      wrapper: useMemo(() => {
        return {
          parentWrapper: {
            flex: "row",
            ...style?.prentWrapper
          },
          childrenWrapper: {
            flex: "col",
            gap: "sm",
            width: "full",
            ...style?.childrenWrapper
          }
        } satisfies WrapperProps["style"];
      }, [style]),

      heading: useMemo(() => {
        return {
          parentWrapper: {
            ...style?.parentWrapper
          },
          childrenWrapper: {
            flex: "row",
            gap: "sm",
            ...style?.childrenWrapper
          }
        } satisfies HeadingProps["style"];
      }, [style]),

      text: useMemo(() => {
        return {
          parentWrapper: {
            ...style?.wrapper
          }
        } satisfies TextProps["style"];
      }, [style]),

      form: useMemo(() => {
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
      }, [style]),

      input: useMemo(() => {
        const { input: { is_error } = {} } = options;
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
            className: is_error ? "ring-4 ring-red-400" : "",
            ...style?.input
          },
          errorIcon: {
            className: "absolute right-3 top-[.375rem] text-red-500 text-xl",
            ...style?.errorIcon
          }
        } satisfies InputStyleProps["style"];
      }, [options, style]),

      btn: useMemo(() => {
        const { state, btn } = options;
        const is_disabled = state?.isLoading || state?.isDisabled;
        const variant = btn?.variant || "ghost";

        const baseStyles = useMemo(() => {
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
          } satisfies BtnProps["style"];
        }, []);

        const getDynamicStyles = useCallback((): BtnProps["style"] => {
          const btn_state = is_disabled ? "disabled" : "enabled";

          const border: IStyles["border"] = btn?.variant === "ghost" ? "sm" : "none";
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
        }, [is_disabled, variant]);

        return useMemo(() => {
          return {
            parentWrapper: {
              ...baseStyles.parentWrapper,
              ...style?.parentWrapper
            },
            button: {
              ...baseStyles.button,
              ...getDynamicStyles()?.button,
              ...style?.button
            },
            contentWrapper: {
              ...baseStyles.contentWrapper,
              ...getDynamicStyles()?.contentWrapper,
              ...style?.contentWrapper
            },
            content: {
              ...baseStyles.content,
              ...style?.content
            },
            spinner: {
              ...baseStyles.spinner,
              ...style?.spinner
            }
          };
        }, [variant, style]) satisfies BtnProps["style"];
      }, [options, style]),

      pulse: useMemo(() => {
        const { theme = "dark" } = options;

        const getTheme = useCallback(
          (theme: PulseProps["theme"]) => {
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
          },
          [theme]
        );

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
        }, [style, theme]) satisfies PulseProps["style"];
      }, [options, style]),

      spin: useMemo(() => {
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
      }, [style])
    } satisfies HooksMap;
  }, []);

  return hooksMap[key];
};
