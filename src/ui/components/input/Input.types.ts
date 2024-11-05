import { BaseStyles } from "@/ui/types";
import { FieldValues, UseFormRegister } from "react-hook-form";

type InputType = "text" | "password" | "checkbox" | "textarea";

export type InputProps<T extends FieldValues> = {
  options?: {
    name: keyof T;
    type?: InputType;
    placeholder?: string;
    register?: UseFormRegister<T>;
  };
  style?: BaseStyles;
};
