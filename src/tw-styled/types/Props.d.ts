import {
  StyleProps,
  Children,
  HeadingElements,
  TextElements,
  WrapperElements,
  Themes
} from "@/tw-styled/types";
import { FormEvent } from "react";
import { IconType } from "react-icons";

interface BaseComponentProps {
  children?: Children;
  as?: WrapperElements | TextElements | HeadingElements;
}

export type ComponentStyleProp = Record<string, StyleProps>;

export interface WrapperProps extends BaseComponentProps {
  style?: {
    parentWrapper?: StyleProps;
    childrenWrapper?: StyleProps;
  };
}

export interface LayoutProps extends BaseComponentProps {
  title?: string;
  heading?: HeadingElements;
  style?: {
    parentWrapper?: StyleProps;
    heading?: StyleProps;
    childrenWrapper?: StyleProps;
  };
}

export interface TextProps extends BaseComponentProps {
  described_by?: string;
  is_hidden?: boolean;
  style?: {
    parentWrapper?: StyleProps;
  };
}

export interface HeadingProps extends BaseComponentProps {
  style?: {
    parentWrapper?: StyleProps;
    childrenWrapper?: StyleProps;
  };
}

export interface FormProps extends BaseComponentProps {
  title?: string;
  buttonText?: string;
  isPending?: boolean;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  style?: {
    form?: StyleProps;
    heading?: StyleProps;
    contentWrapper?: StyleProps;
    button?: StyleProps;
  };
}

export interface InputProps extends BaseComponentProps {
  // TODO: Extend Input component props and use the generic T to type out the `name` prop
  label?: string;
  error?: FieldError;
  type?: "text" | "password";
  is_label_hidden?: boolean;
  is_error_hidden?: boolean;
  is_error_icon_hidden?: boolean;
  style?: {
    parentWrapper?: StyleProps;
    label?: StyleProps;
    inputWrapper?: StyleProps;
    input?: StyleProps;
    errorIcon?: StyleProps;
  };
}

export interface BtnProps extends BaseComponentProps {
  Icon?: IconType;
  type?: "button" | "reset" | "submit";
  text?: string;
  handleClick?(): void;
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: BtnVariants;
  mouseActions?: {
    onMouseEnter?(): void;
    onMouseLeave?(): void;
  };
  style?: {
    parentWrapper?: StyleProps;
    button?: StyleProps;
    contentWrapper?: StyleProps;
    content?: StyleProps;
    spinner?: StyleProps;
  };
}

export interface PulseProps extends BaseComponentProps {
  theme?: Themes;
  // TODO: update `StyleProps` to accept type values like Sizes then import
  size?: Sizes;
  style?: {
    //  TODO: update styles hook to accept parentWrapper instead of wrapper
    parentWrapper?: StyleProps;
    childrenWrapper?: StyleProps;
    children?: StyleProps;
  };
}

export interface SpinProps extends BaseComponentProps {
  style?: {
    //  TODO: update styles hook to accept parentWrapper instead of wrapper
    parentWrapper?: StyleProps;
    icon?: StyleProps;
  };
}
