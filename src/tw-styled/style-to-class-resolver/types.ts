import { Styles } from ".";

export type MultiBucket<Keys extends string> = Partial<
  Record<keyof Styles, Record<Keys, string>>
>;

export type SingleBucket<T extends string, K> = Record<T, K>;

export type Keyof<T extends object> = keyof T;
