import { BaseStyles, HeadingElements } from "@/tw-styled/types";

export type FormProps = {
  children?: React.ReactNode;
  submitHandler: (e?: React.BaseSyntheticEvent) => Promise<void>;
  options?: { title?: string; heading?: HeadingElements };
  style?: {
    form?: BaseStyles;
    title?: BaseStyles;
  };
};
