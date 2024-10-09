import { PartialStyleProps } from "@/tw-styled/types";

export const isValidObject = <T extends PartialStyleProps>(obj: T, key: string) => {
  return Object.keys(obj[key]).length !== 0;
};
