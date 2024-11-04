import { BaseStyles } from "@/tw-styled/types";

export type FieldErrorProps = {
  message?: string;
  described_by?: string;
  error_hidden?: boolean;
  style?: BaseStyles;
};
