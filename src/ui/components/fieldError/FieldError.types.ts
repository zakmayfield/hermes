import { BaseStyles } from "@/ui/types";

export type FieldErrorProps = {
  options?: {
    message?: string;
    described_by?: string;
    error_hidden?: boolean;
  };
  style?: BaseStyles;
};
