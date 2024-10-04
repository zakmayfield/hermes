import { PartialStyleProp } from "@/tw-styled/types";

export const isValidObject = <T extends PartialStyleProp>(obj: T, key: string) => {
  return Object.keys(obj[key]).length !== 0;
};
