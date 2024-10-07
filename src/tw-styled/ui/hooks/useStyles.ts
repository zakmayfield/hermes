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
import { BtnVariants, IButton, PartialStyleProp, Themes } from "@/tw-styled/types";

type UseStyleProps = {
  style?: PartialStyleProp;
  options?: StyleOptions;
};

type StyleOptions = {
  state?: { isDisabled?: boolean };
  theme?: Themes;
  input?: {
    is_error?: boolean;
  };
  btn?: BtnProps["initialButtonProps"];
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
          padding: "lg",
          spaceY: "lg",
          ...style?.parentWrapper
        },
        headingWrapper: {
          spaceY: "sm",
          ...style?.headingWrapper
        },
        heading: {
          ...style?.heading
        },
        headingChildren: {
          ...style?.headingChildren
        },
        childrenWrapper: {
          padding: "md",
          flex: "col",
          gap: "lg",
          ...style?.childrenWrapper
        },
        children: {
          ...style?.children
        }
      } satisfies LayoutProps["style"];
    }, [style]);

    return styles;
  },

  useTextStyles: (props: UseStyleProps) => {
    const { style } = props;

    const styles = useMemo(() => {
      return {
        parentWrapper: {
          ...style?.parentWrapper
        }
      } satisfies TextProps["style"];
    }, [style]);

    return styles;
  },

  useSpinStyles: (props: UseStyleProps) => {
    const { style } = props;

    const styles = useMemo(() => {
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

    return styles;
  },

  usePulseStyles: (props: UseStyleProps) => {
    const { style, options: { theme = "dark" } = {} } = props;

    const styles = useMemo(() => {
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
          className: themes[theme].parentTheme,
          ...style?.parentWrapper
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
          className: themes[theme].childrenTheme,
          ...style?.children
        }
      } satisfies PulseProps["style"];
    }, [style, theme]);

    return styles;
  },

  useFieldErrorStyles: (props: UseStyleProps) => {
    const { style } = props;

    return useMemo(() => {
      return {
        parentWrapper: {
          paddingTop: "sm",
          className: "italic text-red-300",
          ...style?.parentWrapper
        }
      } satisfies FieldErrorProps["style"];
    }, [style]);
  },

  useInputStyles: (props: UseStyleProps) => {
    const { style, options: { input } = {} } = props;

    return useMemo(() => {
      return {
        parentWrapperStyles: {
          flex: "col",
          gap: "sm",
          width: "full",
          ...style?.parentWrapperStyles
        },
        labelStyles: {
          ...style?.labelStyles
        },
        inputWrapperStyles: {
          flex: "row",
          width: "full",
          className: "relative",
          ...style?.inputWrapperStyles
        },
        inputStyles: {
          width: "full",
          className: input?.is_error ? "ring-4 ring-red-400" : "",
          ...style?.inputStyles
        },
        errorIconStyles: {
          className: "absolute right-3 top-[.375rem] text-red-500 text-xl",
          ...style?.errorIconStyles
        }
      } satisfies InputStyleProps["style"];
    }, [style, input]);
  },

  useFormStyles: (props: UseStyleProps) => {
    const { style } = props;

    return useMemo(() => {
      return {
        formStyles: {
          border: "sm",
          rounded: "md",
          width: "md",
          padding: "md",
          spaceY: "lg",
          paddingY: "lg",
          ...style?.formStyles
        },
        titleStyles: {
          ...style?.titleStyles
        },
        childrenWrapperStyles: {
          flex: "col",
          gap: "md",
          ...style?.childrenWrapperStyles
        },
        childrenStyles: {
          ...style?.childrenStyles
        },
        buttonStyles: {
          ...style?.buttonStyles
        }
      } satisfies FormProps["style"];
    }, [style]);
  },

  useBtnStyles: (props: UseStyleProps) => {
    const { style, options: { btn } = {} } = props;

    return useMemo(() => {
      const {
        variant = "ghost",
        width = "none",
        height = "none",
        size = "none"
      } = btn || {};

      return {
        buttonStyles: {
          padding: "sm",
          paddingX: "md",
          rounded: "md",
          buttonWidth: width,
          buttonHeight: height,
          buttonSize: size,
          buttonVariant: variant,
          ...style?.buttonStyles
        },
        contentWrapperStyles: {
          flex: "row",
          flexRowPosition: "center-center",
          ...style?.contentWrapperStyles
        },
        textStyles: {
          ...style?.textStyles
        },
        iconStyles: {
          ...style?.iconStyles
        }
      } satisfies BtnProps["style"];
    }, [style, btn]);
  }
};