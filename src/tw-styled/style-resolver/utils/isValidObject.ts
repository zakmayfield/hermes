import { ComponentStyleProp } from "@/tw-styled/types";

export const isValidObject = <T extends ComponentStyleProp>(obj: T, key: string) => {
  return Object.keys(obj[key]).length !== 0;
};
